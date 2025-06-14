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

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const mergeSort = async (arr, left, right, order) => {
    if (left >= right) return;
    const mid = Math.floor((left + right) / 2);
    await mergeSort(arr, left, mid, order);
    await mergeSort(arr, mid + 1, right, order);
    await merge(arr, left, mid, right, order);
  };

  const merge = async (arr, left, mid, right, order) => {
    let leftArr = arr.slice(left, mid + 1);
    let rightArr = arr.slice(mid + 1, right + 1);
    let i = 0,
      j = 0,
      k = left;

    while (i < leftArr.length && j < rightArr.length) {
      const condition =
        order === "asc"
          ? leftArr[i].value <= rightArr[j].value
          : leftArr[i].value >= rightArr[j].value;

      if (condition) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }
      k++;
      setData([...arr]);
      await sleep(500);
    }

    while (i < leftArr.length) {
      arr[k] = leftArr[i];
      i++;
      k++;
      setData([...arr]);
      await sleep(500);
    }

    while (j < rightArr.length) {
      arr[k] = rightArr[j];
      j++;
      k++;
      setData([...arr]);
      await sleep(500);
    }
  };

  const startMergeSort = async (order) => {
    setActive(order);
    const arr = [...initialData];
    setData([...arr]);
    await mergeSort(arr, 0, arr.length - 1, order);
    setData([...arr]);
  };

  return (
    <div style={{ marginTop: "15px", marginBottom: "15px" }}>
      <Card padding={15}>
        <div style={{ textAlign: "center" }}>
          <div>
            <h4>
              <b>VISUAL REPRESENTATION (Merge Sort)</b>
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
                startMergeSort("asc");
              }}
            >
              <b>Ascending Order</b>
            </Button>
            <Button
              type={active === "desc" ? "dark" : "outline-dark"}
              onClick={() => {
                setData([...initialData]);
                startMergeSort("desc");
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
