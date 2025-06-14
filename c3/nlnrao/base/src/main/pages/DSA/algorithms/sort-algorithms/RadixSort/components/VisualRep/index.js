import React, { useEffect, useRef, useState } from "react";
import { Card, Button } from "e-ui-react";

const VisualRep = () => {
  const canvasRef = useRef(null);
  const initialData = [
    { value: 170, bgColor: "pink" },
    { value: 45, bgColor: "yellow" },
    { value: 75, bgColor: "#97f097" },
    { value: 90, bgColor: "yellow" },
    { value: 802, bgColor: "orange" },
    { value: 24, bgColor: "#f0c0f0" },
    { value: 2, bgColor: "#add8e6" },
    { value: 66, bgColor: "#ffa07a" }
  ];
  const [active, setActive] = useState();
  const [data, setData] = useState([...initialData]);
  const gap = 10;
  const radius = 25;
  const startX = 30;
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
      ctx.font = "14px Arial";
      ctx.textAlign = "center";
      ctx.fillText(item.value, x, startY + 5);
    });
  };

  useEffect(() => {
    drawArray(data);
  }, [data]);

  const getMax = (arr) => {
    return Math.max(...arr.map((item) => item.value));
  };

  const getDigit = (num, place) => {
    return Math.floor(num / place) % 10;
  };

  const radixSort = async () => {
    setActive("radix");
    let arr = [...initialData];
    let max = getMax(arr);
    let exp = 1;

    while (Math.floor(max / exp) > 0) {
      let output = new Array(arr.length);
      let count = Array(10).fill(0);

      for (let i = 0; i < arr.length; i++) {
        let digit = getDigit(arr[i].value, exp);
        count[digit]++;
      }

      for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
      }

      for (let i = arr.length - 1; i >= 0; i--) {
        let digit = getDigit(arr[i].value, exp);
        output[count[digit] - 1] = arr[i];
        count[digit]--;
      }

      arr = [...output];
      setData([...arr]);
      await sleep(1000);
      exp *= 10;
    }

    setData([...arr]);
  };

  return (
    <div style={{ marginTop: "15px", marginBottom: "15px" }}>
      <Card padding={15}>
        <div style={{ textAlign: "center" }}>
          <div>
            <h4>
              <b>VISUAL REPRESENTATION (Radix Sort)</b>
            </h4>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <canvas ref={canvasRef} width={600} height={300}></canvas>
          </div>
          <div className="btn-group mt-3" role="group">
            <Button
              type={active === "radix" ? "dark" : "outline-dark"}
              onClick={() => {
                setData([...initialData]);
                radixSort();
              }}
            >
              <b>Radix Sort</b>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VisualRep;
