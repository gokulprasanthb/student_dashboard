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
    <div>
      <h3>Faculty Request Details</h3>
      <p>Name: {requestDetails.name}</p>
      <p>Email: {requestDetails.email}</p>
      <p>Current Lab: {requestDetails.currentLab}</p>
      <p>Requested Lab: {requestDetails.requestedLab}</p>
      <p>Reason: {requestDetails.reason}</p>
    </div>
  );
}
