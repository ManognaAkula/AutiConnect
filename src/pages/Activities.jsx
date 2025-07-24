import React from "react";
import { Link } from "react-router-dom";

const Activities = () => {
  const games = [
    {
      title: "🎨 Color Match",
      description: "Match colors to their correct shapes and objects.",
      path: "/game/color-match",
      icon: "https://cdn-icons-png.flaticon.com/512/189/189001.png",
      color: "from-pink-300 to-pink-200"
    },
    {
      title: "🔷 Shape Puzzle",
      description: "Drag and drop to match shapes correctly.",
      path: "/game/shape-match",
      icon: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png",
      color: "from-blue-300 to-blue-200"
    },
    

  ];

  return (
    <main className="section">
      <h1 className="fancy-heading text-4xl mb-8 text-center">🧩 Fun Learning Activities</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Explore interactive games designed to engage autistic learners in a fun and sensory-friendly way.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game, index) => (
          <Link to={game.path} key={index}>
            <div className={`card bg-gradient-to-br ${game.color} hover:scale-105 transform transition`}>
              <img src={game.icon} alt={game.title} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-indigo-800">{game.title}</h3>
              <p className="text-gray-700 text-sm mt-2">{game.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-400">
        📚 New games will be added – Stay Tuned!
        Happy Learing!!
      </footer>
    </main>
  );
};

export default Activities;
