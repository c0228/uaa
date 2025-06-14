import React, { useEffect, useRef, useState } from "react";
import { Card, Button } from "e-ui-react";

const VisualRep = () => {
  const canvasRef = useRef(null);
  const initialData = [
    { value: 4, bgColor: "pink" },
    { value: 2, bgColor: "yellow" },
    { value: 2, bgColor: "#97f097" },
    { value: 8, bgColor: "yellow" },
    { value: 3, bgColor: "orange" }
  ];
  const [active, setActive] = useState();
  const [data, setData] = useState([...initialData]);
  const gap = 10;
  const radius = 25;
  const startX = 50;
  const startY = 150;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

  const countingSort = async (order) => {
    setActive(order);
    const arr = [...initialData];
    let max = Math.max(...arr.map((item) => item.value));
    let min = Math.min(...arr.map((item) => item.value));

    let range = max - min + 1;
    let count = Array(range).fill(0);
    let output = Array(arr.length);

    // Count frequencies
    for (let i = 0; i < arr.length; i++) {
      count[arr[i].value - min]++;
      await sleep(300);
    }

    // Modify count for positions
    if (order === "asc") {
      for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
      }
    } else {
      for (let i = count.length - 2; i >= 0; i--) {
        count[i] += count[i + 1];
      }
    }

    // Build output array
    for (let i = arr.length - 1; i >= 0; i--) {
      let val = arr[i].value;
      let pos = count[val - min] - 1;
      output[pos] = { ...arr[i] };
      count[val - min]--;
      setData([...output.filter(Boolean)]);
      await sleep(500);
    }

    setData(output);
  };

  return (
    <div style={{ marginTop: "15px", marginBottom: "15px" }}>
      <Card padding={15}>
        <div style={{ textAlign: "center" }}>
          <div>
            <h4>
              <b>VISUAL REPRESENTATION (Counting Sort)</b>
            </h4>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <canvas ref={canvasRef} width={400} height={300}></canvas>
          </div>
          <div className="btn-group mt-3" role="group">
            <Button
              type={active === "asc" ? "dark" : "outline-dark"}
              onClick={() => {
                setData([...initialData]);
                countingSort("asc");
              }}
            >
              <b>Ascending Order</b>
            </Button>
            <Button
              type={active === "desc" ? "dark" : "outline-dark"}
              onClick={() => {
                setData([...initialData]);
                countingSort("desc");
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
