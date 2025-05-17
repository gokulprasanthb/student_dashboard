"use client";

import { addStudentToLab } from "@/service";
import { useState } from "react";

export default function RequestLabChange() {
  const availableLabs = [
    { id: 1, name: "AI Lab" },
    { id: 2, name: "Cybersecurity Lab" },
    { id: 3, name: "Blockchain Lab" },
    { id: 4, name: "Data Science Lab" },
    { id: 5, name: "IoT Lab" },
    { id: 6, name: "Networking Lab" },
    { id: 7, name: "Web Development Lab" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollNumber: "",
    selectedLabs: [], // Store selected labs here
  });
  const [submitted, setSubmitted] = useState(false);
  const [requestStatus, setRequestStatus] = useState("Pending");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "selectedLabs") {
      const updatedLabs = [...formData.selectedLabs];
      if (updatedLabs.includes(value)) {
        // Remove lab if already selected
        const index = updatedLabs.indexOf(value);
        updatedLabs.splice(index, 1);
      } else {
        // Add lab if not selected (ensuring no more than 3 labs)
        if (updatedLabs.length < 3) updatedLabs.push(value);
      }
      setFormData({ ...formData, selectedLabs: updatedLabs });
    } else {
      setFormData({ ...formData, [name]: value });
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitResponse = await addStudentToLab({
      student_name: formData.name,
      email: formData.email,
      roll_number: formData.rollNumber,      
      first_lab_name: availableLabs[formData.selectedLabs[0]]?.name,
      second_lab_name: availableLabs[formData.selectedLabs[1]]?.name,
      third_lab_name: availableLabs[formData.selectedLabs[2]]?.name,
    });
    setSubmitted(true);
    setRequestStatus("Pending");

    console.log(formData.selectedLabs, "labs");
  };

  return (
    <div className="max-w-4xl m-auto p-6 bg-indigo-950 shadow-md rounded-md mt-6 flex">
      <div className="w-full pr-6">
        <h1 className="text-2xl font-bold mb-4">Hey, Join a Lab</h1>
        {submitted ? (
          <p className="text-green-600">
            Your request has been submitted, {formData.name}.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
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
              <label className="block text-white">Roll Number:</label>
              <input
                type="rollNumber"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-white">
                Select up to 3 Labs:
              </label>
              <div className="space-y-2 mt-1">
                {availableLabs.map((lab) => (
                  <div key={lab.id}>
                    <input
                      type="checkbox"
                      name="selectedLabs"
                      value={lab.id}
                      onChange={handleChange}
                      checked={formData.selectedLabs.includes(
                        lab.id.toString()
                      )}
                    />
                    <label className="ml-2 text-white">{lab.name}</label>
                  </div>
                ))}
              </div>
              {formData.selectedLabs.length > 3 && (
                <p className="text-red-600 mt-2">
                  You can select up to 3 labs only.
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              disabled={
                formData.selectedLabs.length === 0 ||
                formData.selectedLabs.length > 3
              }
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
