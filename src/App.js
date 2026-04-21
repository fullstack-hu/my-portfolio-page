import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-black text-white" : "bg-white text-black"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <About />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;