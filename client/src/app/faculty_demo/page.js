"use client";

import { labChangeRequests, labChangerequests, labJoinRequests, requests } from "@/service";
import { useState, useEffect } from "react";

export default function FacultyDemo() {
  const [labChangeDetails, setLabChangeDetails] = useState([]);
  const [labJoinDetails, setLabJoinDetails] = useState([]);

  async function getJoinRequestsData() {
    try {
      const response = await labJoinRequests();
      const data = Array.isArray(response.data) ? response.data : [response.data];
      const formattedData = data.map((item) => ({
        id: item.lab_id,
        name: item.student_name || "",
        email: item.email || "",
        rollNumber: item.roll_number || "",
        labOne: item.first_lab_name || "",
        labTwo: item.second_lab_name || "",
        labThree: item.third_lab_name || "",
      }));
      setLabJoinDetails(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    console.log(labJoinDetails, "join");
    
  }


  async function getChangeRequestsData() {
    try {
      const response = await labChangeRequests();
      const data = Array.isArray(response.data) ? response.data : [response.data];
      const formattedData = data.map((item) => ({
        id: item.request_id,
        name: item.student_name || "",
        email: item.email || "",
        currentLab: item.current_lab_name || "",
        requestedLab: item.requested_lab_name || "",
        reason: item.lab_change_reason || "",
      }));
      setLabChangeDetails(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getChangeRequestsData();
    getJoinRequestsData();
  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Lab Joining Requests</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-100 text-black shadow-md rounded-md">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border">Student Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Roll Number</th>
                <th className="py-2 px-4 border">Lab Choice 1</th>
                <th className="py-2 px-4 border">Lab Choice 2</th>
                <th className="py-2 px-4 border">Lab Choice 3</th>
              </tr>
            </thead>
            <tbody>
              {labJoinDetails.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="py-2 px-4 border">{item.name}</td>
                  <td className="py-2 px-4 border">{item.email}</td>
                  <td className="py-2 px-4 border">{item.rollNumber}</td>
                  <td className="py-2 px-4 border">{item.labOne}</td>
                  <td className="py-2 px-4 border">{item.labTwo}</td>
                  <td className="py-2 px-4 border">{item.labThree}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Lab Change Requests</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-100 text-black shadow-md rounded-md">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border">Student Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Current Lab</th>
                <th className="py-2 px-4 border">Requested Lab</th>
                <th className="py-2 px-4 border">Reason</th>
              </tr>
            </thead>
            <tbody>
              {labChangeDetails.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="py-2 px-4 border">{item.name}</td>
                  <td className="py-2 px-4 border">{item.email}</td>
                  <td className="py-2 px-4 border">{item.currentLab}</td>
                  <td className="py-2 px-4 border">{item.requestedLab}</td>
                  <td className="py-2 px-4 border">{item.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
