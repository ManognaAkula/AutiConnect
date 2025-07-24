import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState("");
  const [stars, setStars] = useState(3); // Dummy value for rewards

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user && user.email) {
      setUserEmail(user.email);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">🎓 Welcome to Your Profile</h2>

        <div className="text-center mb-6">
          <p className="text-xl font-medium text-gray-800">Logged in as:</p>
          <p className="text-lg text-blue-500">{userEmail}</p>
        </div>

        <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg mb-6">
          <div>
            <h3 className="text-lg font-semibold text-blue-600">Your Progress</h3>
            <p className="text-gray-600">You've completed 2/5 activities</p>
          </div>
          <div className="text-yellow-400 text-3xl">
            {"⭐".repeat(stars)}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-yellow-200 rounded-xl p-4 shadow-md text-center hover:bg-yellow-300 transition">
            🧩 <p className="mt-2 font-semibold text-gray-800">Shape Puzzle</p>
          </div>
          <div className="bg-green-200 rounded-xl p-4 shadow-md text-center hover:bg-green-300 transition">
            🎨 <p className="mt-2 font-semibold text-gray-800">Color Match</p>
          </div>
          <div className="bg-pink-200 rounded-xl p-4 shadow-md text-center hover:bg-pink-300 transition">
            🔤 <p className="mt-2 font-semibold text-gray-800">Letter Game</p>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 text-sm">
          Tip: Keep playing activities to earn more stars 🌟 and unlock badges!
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
