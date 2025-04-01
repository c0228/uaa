import React, { useState, useEffect } from "react";
import PuzzleData from './../../data.js';

const Puzzle = () => {
  const [highlightedIndexes, setHighlightedIndexes] = useState([]);
  const [picker, setPicker] = useState(0);
  const [data, setData] = useState();
  const lopper = () =>{
    const highlightSequence = PuzzleData[picker].highlight;
    highlightSequence.forEach((pos, index) => {
        setTimeout(() => {
          setHighlightedIndexes((prev) => [...prev, pos.join(",")]);
          if (index === highlightSequence.length - 1) {
            setTimeout(() => { 
                setHighlightedIndexes([]);
                setPicker((picker<PuzzleData.length-1)?(picker+1):0);
            }, 1000);
          }
        }, index * 300); // Highlight one by one every second
    });
  };

  useEffect(() => {
    lopper();
  }, [data]);

  useEffect(() => {
    setData(PuzzleData[picker].data);
  }, [picker]);

  const Box = ({ label, rowIndex, colIndex }) => {
    const isHighlighted = highlightedIndexes.includes(`${rowIndex},${colIndex}`);
    return (
      <div
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: isHighlighted ? "#3a3e40" : "#979797",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #ccc",
          color: isHighlighted ? "#fff" : "#000",
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
      {data?.map((row, rowIndex) => (
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
