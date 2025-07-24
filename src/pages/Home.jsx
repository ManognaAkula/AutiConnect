import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="section">
      {/* Hero Banner */}
      <section className="text-center mb-12">
        <h1 className="fancy-heading text-4xl md:text-5xl mb-4">
          Welcome to <span className="highlight">AutiConnect</span>
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
          Empowering autistic children through playful learning and supporting parents with care, tips, and telehealth access.
        </p>
        
      </section>

      {/* Featured Sections */}
      <section className="grid md:grid-cols-3 gap-8">
        {/* Activities */}
        <Link to="/activities">
          <div className="card text-center hover:scale-105 transform transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9819/9819916.png" // 🎮 Puzzle/interactive games icon
              alt="Activities"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-indigo-600">Interactive Games</h3>
            <p className="text-gray-600 mt-2">Fun shape, color & number games built just for your child.</p>
          </div>
        </Link>

        {/* Tips */}
        <Link to="/tips">
          <div className="card text-center hover:scale-105 transform transition">
          <img
            src="https://static.vecteezy.com/system/resources/previews/029/694/993/non_2x/happy-family-icon-flat-style-mom-dad-and-child-of-parents-symbol-for-your-web-site-design-logo-app-ui-illustration-design-vector.jpg"
            alt="Parenting Tips"
            className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
         />

            <h3 className="text-xl font-semibold text-indigo-600">Parenting Tips</h3>
            <p className="text-gray-600 mt-2">Strategies to make daily routines easier and joyful.</p>
          </div>
        </Link>

        {/* Telehealth */}
        <Link to="/telehealth">
          <div className="card text-center hover:scale-105 transform transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
              alt="Telehealth"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-indigo-600">Talk to a Therapist</h3>
            <p className="text-gray-600 mt-2">Book appointments and access chat support from professionals.</p>
          </div>
        </Link>
      </section>

      {/* About Autism CTA */}
      <section className="mt-16 text-center">
        <h2 className="fancy-heading mb-4">What is Autism?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Learn about early signs, support options, and how to best help children thrive.
        </p>
        <Link to="/about">
          <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow">
            Learn More
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="mt-12">
        © 2025 AutiConnect · Designed with care 💙
      </footer>
    </main>
  );
};

export default Home;
