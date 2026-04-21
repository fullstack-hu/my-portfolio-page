import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent (connect EmailJS here)");
  };

  return (
    <section id="contact" className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-800"
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-800"
            onChange={handleChange}
            required
          ></textarea>

          <button className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-600">
            Send Message
          </button>

        </form>

        {/* 🔽 Added Contact Details Below */}
        <div className="mt-10 text-center text-gray-300">
          <p className="text-lg font-semibold">Rajashri Joshi</p>
          <p>📞 +91 9975718755</p>
          <p>📧 joshirajashri20@gmail.com</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;