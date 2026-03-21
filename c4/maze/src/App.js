import React from 'react';
import MazeBoard from './components/MazeBoard/index.js';
import './style.css';

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>🧩 Dynamic Maze Puzzle</h2>
      <MazeBoard />
    </div>
  );
}
