import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, Activities, Tips, About, Telehealth } from "./pages";
import ColorMatchGame from './games/ColorMatchGame';
import ShapeMatchGame from "./games/ShapeMatchGame";
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
    const [isDyslexic, setIsDyslexic] = useState(false);
  
    return (
      <Router>
        <div className={isDyslexic ? "dyslexic-mode min-h-screen bg-gray-50" : "min-h-screen bg-gray-50"}>
          {/* Navbar */}
          <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
              {/* Logo + Brand */}
              <div className="flex items-center space-x-3">
                <img
                  src="https://img.freepik.com/premium-vector/autism-early-signs-autism-syndrome-children-vector-emblem-children-autism-spectrum-disorder-asd-icon-signs-symptoms-autism-child_538191-929.jpg"
                  alt="AutiConnect Logo"
                  className="w-10 h-10 rounded-full"
                />
                <h1 className="text-xl font-bold">AutiConnect</h1>
              </div>
  
              {/* Navigation Links */}
              <div className="flex items-center space-x-4">
                <ul className="flex space-x-4">
                  <li><Link to="/" className="hover:underline">Home</Link></li>
                  <li><Link to="/activities" className="hover:underline">Activities</Link></li>
                  <li><Link to="/tips" className="hover:underline">Tips for Parents</Link></li>
                  <li><Link to="/about" className="hover:underline">About Autism</Link></li>
                  <li><Link to="/telehealth" className="hover:underline">Telehealth</Link></li>
                </ul>
  
                {/* Dyslexia Toggle */}
                <button
                  onClick={() => setIsDyslexic(!isDyslexic)}
                  className="ml-6 bg-white text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-gray-100 transition"
                >
                  {isDyslexic ? "Default Font" : "Dyslexia Font"}
                </button>
              </div>
            </div>
          </nav>
  
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/about" element={<About />} />
            <Route path="/telehealth" element={<Telehealth />} />
            <Route path="/game/color-match" element={<ColorMatchGame />} />
            <Route path="/game/shape-match" element={<ShapeMatchGame />} />
          </Routes>
        </div>
      </Router>
    );
  }  

export default App;
