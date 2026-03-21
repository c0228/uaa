import React, { useEffect, useRef, useState } from 'react';
import carrotImg from '../../assets/carrot.png';
import { generateMaze } from '../../mazeEngine';
import './index.css';

export default function MazeBoard() {
  const levelData = {
    "beginner": 30,
    "medium": 45,
    "advanced": 60
  };
  const levels = Object.keys(levelData);
  const [difficulty, setDifficulty] = useState(levels[0]);
  const [maze, setMaze] = useState(() => generateMaze(levels[0]));
  const [player, setPlayer] = useState(maze.entry);
  const [path, setPath] = useState([maze.entry]);
  const [gameOver, setGameOver] = useState(false);
  const [time, setTime] = useState(levelData[levels[0]]);
  const timerRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [moving, setMoving] = useState(false);
  const [direction, setDirection] = useState('right');

  const isPointerDown = useRef(false);
  const lastCellRef = useRef(null);

  // Restart maze when difficulty changes
 useEffect(() => {
  const m = generateMaze(difficulty);
  setMaze(m);
  setPlayer(m.entry);
  setPath([m.entry]);
  setTime(levelData[difficulty]);
  setGameOver(false);
  setStarted(false);
  clearInterval(timerRef.current);
}, [difficulty]);
  // Timer
  useEffect(() => {
  if (!started || gameOver) return;

  timerRef.current = setInterval(() => {
    setTime((t) => {
      if (t <= 1) {
        clearInterval(timerRef.current);
        setGameOver(true);
        alert("⏰ Time Up! Try Again.");
        return 0;
      }
      return t - 1;
    });
  }, 1000);

  return () => clearInterval(timerRef.current);
}, [started, gameOver]);

  const canMove = (from, to) => {
    const dr = to.row - from.row;
    const dc = to.col - from.col;

    if (Math.abs(dr) + Math.abs(dc) !== 1) return false;

    if (dr === -1) return !maze.getCell(from.row, from.col).walls.top;
    if (dr === 1) return !maze.getCell(from.row, from.col).walls.bottom;
    if (dc === -1) return !maze.getCell(from.row, from.col).walls.left;
    if (dc === 1) return !maze.getCell(from.row, from.col).walls.right;
  };

  const getCellFromPoint = (x, y) => {
  const el = document.elementFromPoint(x, y);
  if (!el) return null;

  const cellEl = el.closest('.cell');
  if (!cellEl) return null;

  const r = cellEl.dataset.row;
  const c = cellEl.dataset.col;

  if (r == null || c == null) return null;

  return { row: +r, col: +c };
};

const handlePointerDown = (e) => {
  isPointerDown.current = true;

  // 🔥 capture pointer so movement continues
  e.currentTarget.setPointerCapture(e.pointerId);

  const cell = getCellFromPoint(e.clientX, e.clientY);
  if (cell) {
    lastCellRef.current = cell;
    handleMove(cell.row, cell.col);
  }
};

const handlePointerMove = (e) => {
  if (!isPointerDown.current) return;

  const cell = getCellFromPoint(e.clientX, e.clientY);

  if (
    cell &&
    (!lastCellRef.current ||
      cell.row !== lastCellRef.current.row ||
      cell.col !== lastCellRef.current.col)
  ) {
    lastCellRef.current = cell;
    handleMove(cell.row, cell.col);
  }
};

const handlePointerUp = (e) => {
  isPointerDown.current = false;
  lastCellRef.current = null;

  try {
    e.currentTarget.releasePointerCapture(e.pointerId);
  } catch {}
};

  const isInPath = (r, c) => path.some((p) => p.row === r && p.col === c);

  return (
    <div>
      <h3 style={{ color: time <= 10 ? "red" : "black" }}>
        Time Left: {time}s
      </h3>

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}>
          {levels?.map((l)=>{
            return (<option value={l}>{l}</option>);
          })}
      </select>
      <div style={{ marginTop:'15px' }}>
          <div
        className="maze"
        style={{
          gridTemplateColumns: `repeat(${maze.cols}, 32px)`,
        }}
      >
        {maze.grid.map((row, r) =>
          row.map((cell, c) => (
            <div
  key={`${r}-${c}`}
  className={`cell
    ${isInPath(r, c) ? 'path' : ''}
    ${maze.entry.row === r && maze.entry.col === c ? 'start' : ''}
    ${maze.exit.row === r && maze.exit.col === c ? 'end' : ''}
  `}
  style={{
    borderTop: cell.walls.top ? '3px solid black' : 'none',
    borderRight: cell.walls.right ? '3px solid black' : 'none',
    borderBottom: cell.walls.bottom ? '3px solid black' : 'none',
    borderLeft: cell.walls.left ? '3px solid black' : 'none',
  }}
  onPointerDown={handlePointerDown}
  onPointerMove={handlePointerMove}
  onPointerUp={handlePointerUp}
  onPointerCancel={handlePointerUp}
>

  {/* 🐰 RABBIT (PLAYER) */}
  {player.row === r && player.col === c && (
    <div  className={`rabbit-sprite
      ${moving ? 'walking' : ''}
      ${direction === 'left' ? 'flipped' : ''}
    `} />
  )}

  {/* 🥕 CARROT (EXIT POINT) */}
  {maze.exit.row === r && maze.exit.col === c && (
    <img
      src={carrotImg}
      alt="carrot"
      className="carrot"
    />
  )}

</div>
          ))
        )}
      </div>
      </div>
    </div>
  );
}
