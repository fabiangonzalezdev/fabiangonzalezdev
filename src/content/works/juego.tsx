import React, { useEffect, useRef } from "react";

const Juego: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let x = 50;
    let y = 50;
    let dx = 2;
    let dy = 2;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fillStyle = "#ffcc00";
      ctx.fill();
      ctx.closePath();

      if (x + dx > canvas.width - 20 || x + dx < 20) dx = -dx;
      if (y + dy > canvas.height - 20 || y + dy < 20) dy = -dy;

      x += dx;
      y += dy;
    };

    const interval = setInterval(draw, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Juego simple en Canvas</h1>
      <canvas ref={canvasRef} width={400} height={300} style={{ border: "2px solid #fff" }}></canvas>
    </div>
  );
};

export default Juego;