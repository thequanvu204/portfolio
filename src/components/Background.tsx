import { useRef } from "react";
import "../styles/background.css";

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // cụm chấm tĩnh góc trái dưới (giữ nguyên 6px như cũ)
  const staticCols = [10, 9, 6, 4];

  return (
    <>
      <canvas ref={canvasRef} className="background-canvas" />
      <div className="static-dots">
        {staticCols.map((count, i) => (
          <div key={i} className="dot-col">
            {Array.from({ length: count }).map((_, j) => (
              <div
                key={j}
                className="dot"
                style={{ animationDelay: `${(Math.random() * 4).toFixed(2)}s` }}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Background;
