"use client";

import { requestLabChange } from "@/service";
import { useState } from "react";

export default function RequestLabChange() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      currentLab: "",
      requestedLab: "",
      reason: "",
    });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitResponse = await requestLabChange({
          student_name : formData.name,
          email : formData.email,
          current_lab : formData.currentLab,
          requested_lab : formData.requestedLab,
          reason : formData.reason
    });
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-indigo-950 shadow-md rounded-md mt-6 flex">
      <div className="w-2/3 pr-6">
        <h1 className="text-2xl font-bold mb-4">Request for Lab Change</h1>
        {submitted ? (
          <p className="text-green-600">
            Your request has been submitted, {formData.name}.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-white">
            <div>
              <label className="block text-white">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-white">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-white">Current Lab:</label>
              <input
                type="text"
                name="currentLab"
                value={formData.currentLab}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-white">Requested Lab:</label>
              <input
                type="text"
                name="requestedLab"
                value={formData.requestedLab}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-white">Reason for Change:</label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
      
    </div>
  );
}
