import { useState, useCallback } from 'react';
import { generateMaze, DIRECTIONS } from '../mazeEngine';

export function useMaze(rows = 10, cols = 10) {
  const [maze, setMaze] = useState(() => generateMaze(rows, cols));
  const [player, setPlayer] = useState({ row: 0, col: 0 });
  const [path, setPath] = useState([{ row: 0, col: 0 }]);

  const end = { row: rows - 1, col: cols - 1 };

  const moveToCell = useCallback(
    (nextRow, nextCol) => {
      const dr = nextRow - player.row;
      const dc = nextCol - player.col;

      let dir = null;
      if (dr === -1 && dc === 0) dir = DIRECTIONS.TOP;
      if (dr === 1 && dc === 0) dir = DIRECTIONS.BOTTOM;
      if (dr === 0 && dc === -1) dir = DIRECTIONS.LEFT;
      if (dr === 0 && dc === 1) dir = DIRECTIONS.RIGHT;

      if (!dir) return;

      const cell = maze.getCell(player.row, player.col);
      if (cell.walls[dir]) return;

      setPlayer({ row: nextRow, col: nextCol });
      setPath((p) => [...p, { row: nextRow, col: nextCol }]);
    },
    [maze, player]
  );

  const resetMaze = () => {
    setMaze(generateMaze(rows, cols));
    setPlayer({ row: 0, col: 0 });
    setPath([{ row: 0, col: 0 }]);
  };

  return {
    maze,
    player,
    path,
    end,
    moveToCell,
    resetMaze,
  };
}
