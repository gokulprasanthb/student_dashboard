"use client";

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
  const [requestStatus, setRequestStatus] = useState("Pending");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    if (requestStatus === "Pending") setRequestStatus("Notified Faculties");
    else if (requestStatus === "Notified Faculties")
      setRequestStatus("Scheduled Interview");
    else if (requestStatus === "Scheduled Interview")
      setRequestStatus("Interview Conducted");
    else if (requestStatus === "Interview Conducted")
      setRequestStatus(Math.random() > 0.5 ? "Approved" : "Rejected");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setRequestStatus("Pending");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-6 flex">
      <div className="w-2/3 pr-6">
        <h1 className="text-2xl font-bold mb-4">Request for Lab Change</h1>
        {submitted ? (
          <p className="text-green-600">
            Your request has been submitted, {formData.name}.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name:</label>
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
              <label className="block text-gray-700">Email:</label>
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
              <label className="block text-gray-700">Current Lab:</label>
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
              <label className="block text-gray-700">Requested Lab:</label>
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
              <label className="block text-gray-700">Reason for Change:</label>
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
      <div className="w-1/3 p-4 bg-gray-100 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Request Status</h2>
        <p className="text-gray-700">
          Current Status: <span className="font-bold">{requestStatus}</span>
        </p>
        {requestStatus !== "Approved" &&
          requestStatus !== "Rejected" &&
          submitted && (
            <button
              onClick={handleNextStep}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            >
              Move to Next Step
            </button>
          )}
      </div>
    </div>
  );
}
