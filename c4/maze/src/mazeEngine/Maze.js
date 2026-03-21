// src/maze-engine/Maze.js

import { DIRECTIONS } from './Constants';

export class Maze {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.grid = this.createGrid();
  }

  createGrid() {
    return Array.from({ length: this.rows }, () =>
      Array.from({ length: this.cols }, () => ({
        visited: false,
        walls: {
          [DIRECTIONS.TOP]: true,
          [DIRECTIONS.RIGHT]: true,
          [DIRECTIONS.BOTTOM]: true,
          [DIRECTIONS.LEFT]: true,
        },
      }))
    );
  }

  getCell(row, col) {
    if (row < 0 || col < 0 || row >= this.rows || col >= this.cols) {
      return null;
    }
    return this.grid[row][col];
  }
}
