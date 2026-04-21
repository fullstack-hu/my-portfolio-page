import React from "react";
import { motion } from "framer-motion";

function Education() {
  return (
    <section
      id="education"
      className="relative py-20 text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* 🔥 Animated Gradient Layer */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>

      <div className="relative max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Education
        </h2>

        <div className="space-y-6">

          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-semibold">
              Master's in Computer Application
            </h3>
            <p>2025 - Persuing</p>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-semibold">Bachelor in Computer Science</h3>
            <h1>CGPA - 8.22</h1>
            <p>2023 - 2025</p>

          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-semibold">12th Grade</h3>
            <h1>Percentage - 86.50</h1>
            <p>2020 - 2021</p>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-semibold">10th Grade</h3>
            <p>2018-2019</p>
            <h1>Percentage - 88.80</h1>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Education;