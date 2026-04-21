import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* 🔹 Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="Images/Profile.png"
            alt="profile"
            className="w-80 h-80 object-cover rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          />
        </motion.div>

        {/* 🔹 Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About Me
          </h2>

          <p className="text-gray-600 leading-8 mb-6">
            {/* ✏️ EDIT THIS TEXT */}
            I am a Full Stack Developer with strong skills in building modern,
            responsive, and scalable web applications. I specialize in frontend
            development using React.js and backend development using Java and
            Spring Boot.
          </p>

          <p className="text-gray-600 leading-8 mb-6">
            I have hands-on experience with RESTful APIs, API testing using
            Postman, and working with databases like MySQL and MongoDB. I focus
            on writing clean, efficient code and delivering smooth user
            experiences.
          </p>

          {/* 🔹 Skills Section */}
          <div className="flex flex-wrap gap-3 mt-4">

            <span className="px-4 py-2 bg-gray-200 rounded-full text-sm">
              React.js
            </span>

            <span className="px-4 py-2 bg-gray-200 rounded-full text-sm">
              Java
            </span>

            <span className="px-4 py-2 bg-gray-200 rounded-full text-sm">
              Spring Boot
            </span>

            <span className="px-4 py-2 bg-gray-200 rounded-full text-sm">
              JavaScript
            </span>

            <span className="px-4 py-2 bg-gray-200 rounded-full text-sm">
              REST APIs
            </span>

            <span className="px-4 py-2 bg-gray-200 rounded-full text-sm">
              Postman
            </span>

          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default About;