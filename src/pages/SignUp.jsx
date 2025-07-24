import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email || !password || !confirm) {
      return setError("All fields are required.");
    }
    if (password !== confirm) {
      return setError("Passwords do not match.");
    }

    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[email]) {
      return setError("User already exists.");
    }

    users[email] = { password };
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", email);
    navigate("/dashboard");
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">🔐 Sign Up</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="email"
            placeholder="Email ID"
            className="w-full px-4 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full px-4 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Sign Up
          </button>
          <p className="text-sm text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </p>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
