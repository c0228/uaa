import React, { useEffect, useRef, useState } from "react";
import { Card, Button } from "e-ui-react";

const VisualRep = () => {
  const canvasRef = useRef(null);
  const initialData = [
    { value: 64, bgColor: "pink" },
    { value: 25, bgColor: "yellow" },
    { value: 12, bgColor: "#97f097" },
    { value: 22, bgColor: "yellow" },
    { value: 11, bgColor: "orange" }
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

  const quickSort = async (arr, low, high, order) => {
    if (low < high) {
      const pivotIndex = await partition(arr, low, high, order);
      await quickSort(arr, low, pivotIndex - 1, order);
      await quickSort(arr, pivotIndex + 1, high, order);
    }
  };

  const partition = async (arr, low, high, order) => {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      const condition =
        order === "asc"
          ? arr[j].value < pivot.value
          : arr[j].value > pivot.value;

      if (condition) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setData([...arr]);
        await sleep(500);
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setData([...arr]);
    await sleep(500);
    return i + 1;
  };

  const startQuickSort = async (order) => {
    setActive(order);
    const arr = [...initialData];
    setData([...arr]);
    await quickSort(arr, 0, arr.length - 1, order);
    setData([...arr]);
  };

  return (
    <div style={{ marginTop: "15px", marginBottom: "15px" }}>
      <Card padding={15}>
        <div style={{ textAlign: "center" }}>
          <div>
            <h4>
              <b>VISUAL REPRESENTATION (Quick Sort)</b>
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
                startQuickSort("asc");
              }}
            >
              <b>Ascending Order</b>
            </Button>
            <Button
              type={active === "desc" ? "dark" : "outline-dark"}
              onClick={() => {
                setData([...initialData]);
                startQuickSort("desc");
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
