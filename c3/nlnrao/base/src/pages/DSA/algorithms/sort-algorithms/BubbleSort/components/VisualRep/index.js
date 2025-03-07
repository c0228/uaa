import React, { useEffect, useRef, useState } from "react";
import { Card, Button } from "e-ui-react";

const VisualRep = () => {
  const canvasRef = useRef(null);
  const initialData = [
    { value: 45, bgColor: "pink" },
    { value: 14, bgColor: "yellow" },
    { value: 10, bgColor: "#97f097" },
    { value: 32, bgColor: "yellow" },
    { value: 20, bgColor: "orange" },
    { value: 18, bgColor: "#b5b5ff" },
    { value: 24, bgColor: "#f3b5fe" },
    { value: 16, bgColor: "#97f097" },
  ];
  const [active, setActive] = useState();
  const [data, setData] = useState([...initialData]);
  const gap = 10;
  const radius = 25;
  const startX = 50;
  const startY = 150;

  const drawArray = (arr) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    arr.forEach((item, index) => {
      ctx.beginPath();
      ctx.fillStyle = item.bgColor;
      const x = startX + index * (radius * 2 + gap);
      ctx.arc(x, startY, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "black";
      ctx.stroke();
      ctx.fillStyle = "black";
      ctx.font = "16px Arial";
      ctx.textAlign = "center";
      ctx.fillText(item.value, x, startY + 5);
    });
    
  };

  useEffect(() => {
    drawArray(data);
  }, [data]);

  const bubbleSort = async (order) => {
    setActive(order);
    let arr = [...data];
    let swapped;
    for (let i = 0; i < arr.length - 1; i++) {
      swapped = false;
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (
          (order === "asc" && arr[j].value > arr[j + 1].value) ||
          (order === "desc" && arr[j].value < arr[j + 1].value)
        ) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
          setData([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }
      if (!swapped) break;
    }
  };

  return (<div style={{ marginTop:'15px', marginBottom:'15px' }}><Card padding={15}>
    <div style={{ textAlign: "center" }}>
      <div><h4><b>VISUAL REPRESENTATION</b></h4></div>
      <canvas ref={canvasRef} width={500} height={300} style={{ display: "block", margin: "auto" }}></canvas>
      <div className="btn-group mt-3" role="group">
        <Button type={active==='asc'?"primary":"outline-primary"} onClick={() => { setData([...initialData]); bubbleSort("asc"); }}><b>Ascending Order</b></Button>
        <Button type={active==='desc'?"primary":"outline-primary"} onClick={() => { setData([...initialData]); bubbleSort("desc"); }}><b>Descending Order</b></Button>
      </div>
    </div>
    </Card>
    </div>);
};

export default VisualRep;
