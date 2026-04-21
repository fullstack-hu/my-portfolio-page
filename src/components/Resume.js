import React from "react";

function Resume() {
  return (
    <section id="resume" className="p-16 text-center bg-gray-200 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>

      <a
        href="/resume.pdf"
        download
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;