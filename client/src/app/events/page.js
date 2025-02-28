"use client";

import { useState } from "react";

export default function EventsPage() {
  const [events] = useState([
    { id: 1, name: "AI Workshop", date: "March 10, 2025" },
    { id: 2, name: "Cybersecurity Seminar", date: "April 5, 2025" },
    { id: 3, name: "Blockchain Conference", date: "May 15, 2025" },
  ]);
  const [registeredEvent, setRegisteredEvent] = useState(null);

  const handleRegister = (event) => {
    setRegisteredEvent(event);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      {!registeredEvent ? (
        <div>
          <h2 className="text-lg font-semibold mb-2">Upcoming Events</h2>
          <ul className="space-y-4">
            {events.map((event) => (
              <li
                key={event.id}
                className="p-4 border rounded-md flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold">{event.name}</h3>
                  <p className="text-gray-600">{event.date}</p>
                </div>
                <button
                  onClick={() => handleRegister(event)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Register
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold">Successfully Registered!</h2>
          <p className="text-gray-700">
            You have registered for{" "}
            <span className="font-semibold">{registeredEvent.name}</span> on{" "}
            <span className="font-semibold">{registeredEvent.date}</span>.
          </p>
        </div>
      )}
    </div>
  );
}
