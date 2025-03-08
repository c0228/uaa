import React, { useEffect, useRef, useState } from "react";
import { Card, Button } from "e-ui-react";

const VisualRep = () => {
  const canvasRef = useRef(null);
  const initialData = [
    { value: 64, bgColor: "pink" },
    { value: 25, bgColor: "yellow" },
    { value: 12, bgColor: "#97f097" },
    { value: 22, bgColor: "yellow" },
    { value: 11, bgColor: "orange" },
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

  const selectionSort = async (order) => {
    setActive(order);
    let arr = [...data];
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (
          (order === "asc" && arr[j].value < arr[minIndex].value) ||
          (order === "desc" && arr[j].value > arr[minIndex].value)
        ) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        setData([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }
  };

  return (
    <div style={{ marginTop: "15px", marginBottom: "15px" }}>
      <Card padding={15}>
        <div style={{ textAlign: "center" }}>
          <div>
            <h4>
              <b>VISUAL REPRESENTATION - SELECTION SORT</b>
            </h4>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <canvas
            ref={canvasRef}
            width={350}
            height={300}
          ></canvas>
          </div>
          <div className="btn-group mt-3" role="group">
            <Button
              type={active === "asc" ? "dark" : "outline-dark"}
              onClick={() => {
                setData([...initialData]);
                selectionSort("asc");
              }}
            >
              <b>Ascending Order</b>
            </Button>
            <Button
              type={active === "desc" ? "dark" : "outline-dark"}
              onClick={() => {
                setData([...initialData]);
                selectionSort("desc");
              }}
            >
              <b>Descending Order</b>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VisualRep;
