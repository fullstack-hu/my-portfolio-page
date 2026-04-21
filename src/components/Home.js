import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-white relative"
      style={{
        backgroundImage:
          "url('https://miro.medium.com/v2/resize:fit:1400/1*GNFNf_V7rj_C2YUCeZNzsw.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        className="relative text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Rajashri 👋
        </h1>

        {/* Moving Text */}
        <TypeAnimation
          sequence={[
            "Frontend Developer 💻",
            1500,
            "Backend Developer ⚙️",
            1500,
            "Full Stack Developer 🚀",
            1500,
            "React | Spring Boot | Java",
            1500,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-xl text-blue-300"
        />

        {/* Resume Button */}
        <div className="mt-6">
          <a
            href="https://drive.google.com/uc?export=download&id=1jDPIsFp836dh43JlzkNJBTMWxFmpQKM_"
            download
            className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;