"use client";

import { useState } from "react";
import {
  Home,
  FileText,
  Users,
  Settings,
  Menu,
  X,
  BarChart2,
} from "lucide-react";
import Link from "next/link";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const studentDashboardData = {
    studentProgress: 80, // Student progress as a percentage
    numberOfProjects: 5,
    numberOfEventsAttended: 12,
    numberOfInternships: 2,
    numberOfConferencesAttended: 3,
  };

  const chartData = {
    labels: ["Projects", "Events Attended", "Internships", "Conferences"],
    datasets: [
      {
        label: "Student Activity Breakdown",
        data: [
          studentDashboardData.numberOfProjects,
          studentDashboardData.numberOfEventsAttended,
          studentDashboardData.numberOfInternships,
          studentDashboardData.numberOfConferencesAttended,
        ],
        backgroundColor: "#4C9AFF", // Blue color for bars
        borderColor: "#2D7FFF", // Darker blue border color
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </header>

        {/* Dashboard Cards */}
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Student Progress"
            value={`${studentDashboardData.studentProgress}%`}
            progress={studentDashboardData.studentProgress}
          />
          <DashboardCard
            title="Projects Completed"
            value={studentDashboardData.numberOfProjects}
            icon={<FileText size={40} />}
          />
          <DashboardCard
            title="Events Attended"
            value={studentDashboardData.numberOfEventsAttended}
            icon={<Users size={40} />}
          />
          <DashboardCard
            title="Internships Completed"
            value={studentDashboardData.numberOfInternships}
            icon={<Users size={40} />}
          />
          <DashboardCard
            title="Conferences Attended"
            value={studentDashboardData.numberOfConferencesAttended}
            icon={<BarChart2 size={40} />}
          />
          <div className="col-span-2 bg-white p-4 rounded-lg shadow-md text-center">
            <h2 className="text-gray-600 text-sm">Activity Breakdown</h2>
            <div className="mt-4">
              <Bar data={chartData} options={{ responsive: true }} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function DashboardCard({ title, value, progress, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          {progress ? (
            <div className="mt-4">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div className="text-sm font-medium text-teal-600">
                    Progress
                  </div>
                  <div className="text-sm font-semibold text-teal-600">
                    {progress}%
                  </div>
                </div>
                <div className="w-full h-2 bg-teal-200 rounded-full">
                  <div
                    className="h-2 bg-teal-500 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-3xl font-bold text-gray-800">{value}</div>
          )}
        </div>
        {icon && <div className="text-teal-600 text-4xl">{icon}</div>}
      </div>
    </div>
  );
}
