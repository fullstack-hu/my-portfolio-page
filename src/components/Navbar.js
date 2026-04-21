import React from "react";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed w-full bg-black/70 backdrop-blur-md text-white p-4 flex justify-between z-50">
      <h1 className="text-xl font-bold">Portfolio</h1>

      <ul className="flex gap-6 items-center">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>

        {/* Dark Mode Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-700 px-3 py-1 rounded"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;