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

  const heapify = async (arr, n, i, order) => {
    let largestOrSmallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    const compare = (a, b) =>
      order === "asc" ? a > b : a < b;

    if (left < n && compare(arr[left].value, arr[largestOrSmallest].value)) {
      largestOrSmallest = left;
    }

    if (right < n && compare(arr[right].value, arr[largestOrSmallest].value)) {
      largestOrSmallest = right;
    }

    if (largestOrSmallest !== i) {
      [arr[i], arr[largestOrSmallest]] = [arr[largestOrSmallest], arr[i]];
      setData([...arr]);
      await sleep(500);
      await heapify(arr, n, largestOrSmallest, order);
    }
  };

  const heapSort = async (arr, order) => {
    let n = arr.length;

    // Build heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(arr, n, i, order);
    }

    // One by one extract elements
    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      setData([...arr]);
      await sleep(500);
      await heapify(arr, i, 0, order);
    }
  };

  const startHeapSort = async (order) => {
    setActive(order);
    const arr = [...initialData];
    setData([...arr]);
    await heapSort(arr, order);
    setData([...arr]);
  };

  return (
    <div style={{ marginTop: "15px", marginBottom: "15px" }}>
      <Card padding={15}>
        <div style={{ textAlign: "center" }}>
          <div>
            <h4>
              <b>VISUAL REPRESENTATION (Heap Sort)</b>
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
                startHeapSort("asc");
              }}
            >
              <b>Ascending Order</b>
            </Button>
            <Button
              type={active === "desc" ? "dark" : "outline-dark"}
              onClick={() => {
                setData([...initialData]);
                startHeapSort("desc");
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
