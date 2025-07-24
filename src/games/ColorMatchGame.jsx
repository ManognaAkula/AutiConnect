import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";

const colors = ["red", "blue", "green", "yellow", "purple"];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const ColorMatchGame = () => {
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleColorClick = (selectedColor) => {
    if (selectedColor === targetColor) {
      const newScore = score + 1;
      setScore(newScore);
      setTargetColor(getRandomColor());
      setFeedback("🎉 Correct!");

      // Fire confetti
      confetti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.6 },
      });

      // Update high score
      if (newScore > highScore) {
        setHighScore(newScore);
      }
    } else {
      setFeedback("❌ Oops! Wrong color.");
      setScore(0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">Color Match Game</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-md">
        <p className="text-lg text-gray-700 mb-4">Tap the color that matches:</p>
        <div
          className="w-24 h-24 mx-auto rounded-full shadow-md border-4 border-gray-300 mb-6"
          style={{ backgroundColor: targetColor }}
        ></div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {colors.map((color) => (
            <button
              key={color}
              className={`rounded-full h-12 w-12 shadow-md border-2 border-white hover:scale-110 transition-transform`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></button>
          ))}
        </div>

        <div className="text-lg font-semibold text-gray-800 mb-2">Score: {score}</div>
        <div className="text-md text-indigo-600">High Score: {highScore}</div>
        <div className="mt-4 text-xl">{feedback}</div>
      </div>
    </div>
  );
};

export default ColorMatchGame;
