import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import projects from "./ProjectData";

function Projects() {
  const items = projects.map((p, i) => (
    <div key={i} className="p-6">
      <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">

        <img
          src={p.image}
          alt={p.title}
          className="h-52 w-full object-cover"
        />

        <div className="p-5">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p className="text-gray-600 mt-2">{p.desc}</p>

          <div className="flex gap-3 mt-4">
            <a href={p.github} target="_blank" rel="noreferrer"
              className="px-4 py-1 bg-black text-white rounded hover:bg-gray-800">
              GitHub
            </a>

            <a href={p.live} target="_blank" rel="noreferrer"
              className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section
      id="projects"
      className="p-16 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="bg-black/70 p-10 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-10">
          My Projects
        </h2>

        <AliceCarousel
          mouseTracking
          items={items}
          infinite
          autoPlay
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
          }}
        />
      </div>
    </section>
  );
}

export default Projects;