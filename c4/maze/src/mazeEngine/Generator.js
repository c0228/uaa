import { Maze } from './Maze';
import { DIRECTIONS, DX, DY, OPPOSITE } from './Constants';

/**
 * Difficulty config
 */
const DIFFICULTY_CONFIG = {
  beginner: { rows: 8, cols: 8 },
  medium: { rows: 12, cols: 12 },
  advanced: { rows: 18, cols: 18 },
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function carve(row, col, maze) {
  const cell = maze.getCell(row, col);
  cell.visited = true;

  const dirs = shuffle(Object.values(DIRECTIONS));

  for (const dir of dirs) {
    const nr = row + DX[dir];
    const nc = col + DY[dir];
    const next = maze.getCell(nr, nc);

    if (next && !next.visited) {
      cell.walls[dir] = false;
      next.walls[OPPOSITE[dir]] = false;
      carve(nr, nc, maze);
    }
  }
}

/**
 * Generates maze with:
 * - ENTRY at bottom row
 * - EXIT at top row
 */
export function generateMaze(difficulty = 'beginner') {
  const { rows, cols } = DIFFICULTY_CONFIG[difficulty];

  const maze = new Maze(rows, cols);

  // Start carving from bottom entry
  const entryCol = Math.floor(Math.random() * cols);
  carve(rows - 1, entryCol, maze);

  // ENTRY OPENING (bottom)
  maze.grid[rows - 1][entryCol].walls.bottom = false;

  // EXIT OPENING (top)
  const exitCol = Math.floor(Math.random() * cols);
  maze.grid[0][exitCol].walls.top = false;

  // Save for UI reference
  maze.entry = { row: rows - 1, col: entryCol };
  maze.exit = { row: 0, col: exitCol };

  return maze;
}
