import React, { useState, useEffect } from "react";

const Puzzle = () => {
  const [highlightedIndexes, setHighlightedIndexes] = useState([]);

  const data = [
    ["K", "V", "N", "Z", "I", "X", "M", "E", "X"],
    ["T", "A", "X", "L", "4", "0", "4", "Y", "A"],
    ["Y", "W", "V", "B", "O", "Q", "D", "Y", "C"],
    ["P", "A", "P", "A", "G", "E", "V", "T", "R"],
    ["Y", "D", "Q", "O", "B", "V", "W", "A", "M"],
    ["A", "N", "O", "T", "S", "C", "E", "W", "P"],
    ["V", "X", "E", "P", "C", "F", "H", "Q", "L"],
    ["E", "S", "W", "F", "O", "U", "N", "D", "Q"],
    ["Q", "V", "O", "S", "M", "V", "F", "U", "S"],
  ];

  const highlightSequence = [
    [1, 4], // '4'
    [1, 5], // '0'
    [1, 6], // '4'
    [3, 2], // 'P'
    [3, 3], // 'A'
    [3, 4], // 'G'
    [3, 5], // 'E'
    [5, 1], // 'N'
    [5, 2], // 'O'
    [5, 3], // 'T'
    [7, 3], // 'F'
    [7, 4], // 'O'
    [7, 5], // 'U'
    [7, 6], // 'N'
    [7, 7], // 'D'
  ];
  
  const lopper = () =>{
    highlightSequence.forEach((pos, index) => {
        setTimeout(() => {
          setHighlightedIndexes((prev) => [...prev, pos.join(",")]);
          if (index === highlightSequence.length - 1) {
            setTimeout(() => { 
                setHighlightedIndexes([]);
                setTimeout(() => { lopper(); }, 1000);
            }, 1000);
          }
        }, index * 300); // Highlight one by one every second
    });
  };

  useEffect(() => {
    lopper();
  }, []);

  const Box = ({ label, rowIndex, colIndex }) => {
    const isHighlighted = highlightedIndexes.includes(`${rowIndex},${colIndex}`);
    return (
      <div
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: isHighlighted ? "#009d8a" : "#0f3645",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #085564",
          color: isHighlighted ? "#fff" : "#aaa",
          fontWeight: isHighlighted ? "bold" : "normal",
          transition: "background-color 0.5s",
        }}
      >
        {label}
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {data.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex", flexDirection: "row" }}>
          {row.map((col, colIndex) => (
            <Box key={colIndex} label={col} rowIndex={rowIndex} colIndex={colIndex} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Puzzle;
