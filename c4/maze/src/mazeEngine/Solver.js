// src/maze-engine/solver.js

import { DIRECTIONS, DX, DY } from './Constants';

export function solveMaze(maze, start, end) {
  const stack = [{ ...start, path: [] }];
  const visited = new Set();

  while (stack.length) {
    const { row, col, path } = stack.pop();
    const key = `${row},${col}`;

    if (visited.has(key)) continue;
    visited.add(key);

    if (row === end.row && col === end.col) {
      return [...path, { row, col }];
    }

    const cell = maze.getCell(row, col);
    if (!cell) continue;

    for (const dir of Object.values(DIRECTIONS)) {
      if (!cell.walls[dir]) {
        stack.push({
          row: row + DX[dir],
          col: col + DY[dir],
          path: [...path, { row, col }],
        });
      }
    }
  }

  return [];
}
