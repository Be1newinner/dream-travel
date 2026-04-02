"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    // basic validation (don’t skip this)
    if (!data.name || !data.email || !data.message) {
      setMessage("All fields are required");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage("Message sent successfully ✅");
        e.target.reset();
      } else {
        setMessage(result.error || "Something went wrong");
      }
    } catch (err) {
      setMessage("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="border rounded-xl px-16 py-12 shadow-sm bg-[#F2F2FF]">
      <h2 className="text-4xl text-center font-bold mb-6">Get In Touch</h2>
      <p className="text-center text-lg font-base text-gray-600 mb-6">We’re excited to hear from you! Whether you have a question about our services, want to discuss a new project.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Your Name" className="border p-3 bg-white rounded-lg w-full" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email Address</label>
            <input name="email" type="email" placeholder="info@example.com" className="border p-3 bg-white rounded-lg w-full" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Phone Number</label>
            <input name="phone" type="tel" placeholder="+1 234 567 890" className="border p-3 bg-white rounded-lg w-full" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="destination">Where are you going?</label>
            <select name="destination" className="border p-3 bg-white rounded-lg w-full">
              <option value="Maldives">Maldives</option>
              <option value="France">France</option>
              <option value="United States">United States</option>
              <option value="Thailand">Thailand</option>
            </select>
          </div>
        </div>

        <label htmlFor="message">Brief/Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          className="border p-3 bg-white rounded-lg w-full"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-6 py-3 rounded-lg w-full"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {message && (
          <p className="text-sm mt-2 text-center text-gray-700">{message}</p>
        )}
      </form>
    </div>
  );
}