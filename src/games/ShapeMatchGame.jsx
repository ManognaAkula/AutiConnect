import { useState } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React from "react";
import "./../index.css";



const shapes = [
  { id: 1, type: "circle", color: "bg-red-400" },
  { id: 2, type: "square", color: "bg-blue-400" },
  { id: 3, type: "triangle", color: "bg-green-400" },
];



// 🎲 Draggable Shape
const Shape = ({ shape }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "shape",
    item: shape,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`w-24 h-24 m-2 text-white flex items-center justify-center shadow-lg rounded-lg font-bold uppercase ${
        shape.type === "triangle" ? "clip-triangle" : ""
      } ${shape.color} ${isDragging ? "opacity-30" : "opacity-100"}`}
    >
      {shape.type !== "triangle" && shape.type}
    </div>
  );
};

// 🎯 Drop Zone
const DropZone = ({ expectedType, onDropSuccess, disabled }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "shape",
    drop: (item) => {
      const correct = item.type === expectedType;
      correct ? onDropSuccess(item.id, true) : onDropSuccess(item.id, false);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`w-24 h-24 m-2 rounded-lg border-4 border-dashed flex items-center justify-center text-gray-500 text-sm ${
        disabled ? "bg-green-100 border-green-500" : isOver && canDrop ? "bg-yellow-100" : "bg-white"
      }`}
      aria-disabled={disabled}
    >
      {expectedType}
    </div>
  );
};

// 🧩 Main Game
export default function ShapeMatchGame() {
  const [matched, setMatched] = useState([]);
  const [score, setScore] = useState(0);

  const handleDrop = (id, correct) => {
    if (correct) {
      
      setMatched((prev) => [...prev, id]);
      setScore((prev) => prev + 10);
    } else {
      
      setScore((prev) => Math.max(prev - 5, 0));
    }
  };

  const resetGame = () => {
    setMatched([]);
    setScore(0);
  };

  // Reward Stars
  const stars = Math.min(Math.floor(score / 30), 3);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">🔷 Shape Match Game</h2>

        <div className="mb-4 text-lg">Score: <span className="font-semibold">{score}</span></div>

        <div className="flex justify-center flex-wrap">
          {shapes.map((shape) =>
            !matched.includes(shape.id) ? (
              <Shape key={shape.id} shape={shape} />
            ) : (
              <div className="w-24 h-24 m-2 bg-green-300 flex items-center justify-center rounded-lg text-white">
                ✔
              </div>
            )
          )}
        </div>

        <div className="flex justify-center flex-wrap mt-6">
          {shapes.map((shape) => (
            <DropZone
              key={shape.id}
              expectedType={shape.type}
              onDropSuccess={handleDrop}
              disabled={matched.includes(shape.id)}
            />
          ))}
        </div>

        {matched.length === shapes.length && (
          <div className="mt-6 text-green-600 font-bold">
            🎉 All matched! Stars Earned:
            <div className="flex justify-center mt-2">
              {[...Array(stars)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl mx-1">⭐</span>
              ))}
            </div>
            <button
              onClick={resetGame}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </DndProvider>
  );
}

