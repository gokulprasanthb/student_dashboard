"use client";

import { requests } from "@/service";
import { useState, useEffect } from "react";

export default function FacultyDemo() {
  const [requestDetails, setRequestDetails] = useState({
    name: "",
    email: "",
    currentLab: "",
    requestedLab: "",
    reason: "",
  });

  async function getRequestData() {
    try {
      const response = await requests();  
      
      setRequestDetails({
        name: response.data.student_name || "", 
        email: response.data.email || "",
        currentLab: response.data.current_lab_name || "",
        requestedLab: response.data.requested_lab_name || "",
        reason: response.data.lab_change_reason || ""
      });

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await getRequestData();
    };
    fetchData();
  }, []);
  
  return (
<div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Lab Change Requests</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Student Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Current Lab</th>
              <th className="py-2 px-4 border">Requested Lab</th>
              <th className="py-2 px-4 border">Reason</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
           
              <tr className="border-t">
                <td className="py-2 px-4 border">{requestDetails.name}</td>
                <td className="py-2 px-4 border">{requestDetails.email}</td>
                <td className="py-2 px-4 border">{requestDetails.currentLab}</td>
                <td className="py-2 px-4 border">{requestDetails.requestedLab}</td>
                <td className="py-2 px-4 border">{requestDetails.reason}</td>
                <td className="py-2 px-4 border flex space-x-2">
                  <button
                    className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                    onClick={() => handleApprove(request.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                    onClick={() => handleReject(request.id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div> 
  );
}
