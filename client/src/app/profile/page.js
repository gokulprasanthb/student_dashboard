"use client";

import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  Folder,
  Clipboard,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function StudentProfile() {
  const [studentData] = useState({
    name: "Raviprasath",
    rollNumber: "7376211ME155",
    email: "ravi@gmail.com",
    phoneNumber: "+91 987 654 3210",
    currentLab: "AI Lab",
    labStatus: "Active",
    labInCharge: "Dr. Samy",
    totalProjects: 5,
    eventsAttended: 3,
    internshipsCompleted: 2,
    conferencesAttended: 1,
  });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-white text-2xl">
          {studentData.name.split(" ")[0][0]}{" "}
          {/* Initials for the profile pic */}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            {studentData.name}
          </h1>
          <p className="text-gray-600">Roll Number: {studentData.rollNumber}</p>
        </div>
      </div>

      {/* Profile Details */}
      <div className="space-y-6">
        <ProfileDetail
          label="Email"
          value={studentData.email}
          icon={<Mail size={20} />}
        />
        <ProfileDetail
          label="Phone Number"
          value={studentData.phoneNumber}
          icon={<Phone size={20} />}
        />
        <ProfileDetail
          label="Current Lab"
          value={studentData.currentLab}
          icon={<Folder size={20} />}
        />
        <ProfileDetail
          label="Lab Status"
          value={studentData.labStatus}
          icon={
            studentData.labStatus === "Active" ? (
              <CheckCircle size={20} className="text-green-500" />
            ) : (
              <XCircle size={20} className="text-red-500" />
            )
          }
        />
        <ProfileDetail
          label="Lab In-Charge"
          value={studentData.labInCharge}
          icon={<Clipboard size={20} />}
        />
        <ProfileDetail
          label="Total Projects"
          value={studentData.totalProjects}
          icon={<Folder size={20} />}
        />
        <ProfileDetail
          label="Events Attended"
          value={studentData.eventsAttended}
          icon={<Clipboard size={20} />}
        />
        <ProfileDetail
          label="Internships Completed"
          value={studentData.internshipsCompleted}
          icon={<Clipboard size={20} />}
        />
        <ProfileDetail
          label="Conferences Attended"
          value={studentData.conferencesAttended}
          icon={<Clipboard size={20} />}
        />
      </div>
    </div>
  );
}

// Reusable Profile Detail Component
function ProfileDetail({ label, value, icon }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-gray-600">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-700">{label}</h3>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
}
