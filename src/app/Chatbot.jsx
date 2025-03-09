"use client";

import { useState } from "react";
import { Pencil, Send, X } from "lucide-react";

export default function Chatbot() {
  const initialTasks = [
    {
      seqNo: 1,
      taskname: "Setup Project",
      status: "In Progress",
      totalTime: "2h",
      tokenUsed: 20,
      description: "Initializing repository and installing dependencies.",
    },
    {
      seqNo: 2,
      taskname: "Design UI",
      status: "Completed",
      totalTime: "4h",
      tokenUsed: 35,
      description: "Creating wireframes and component designs.",
    },
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    const matchedTask = tasks.find(
      (task) => task.taskname.toLowerCase() === input.toLowerCase()
    );
    if (matchedTask) {
      setMessages((prev) => [...prev, matchedTask]);
      setShowContext(false);
    }
    setInput("");
  };

  const handleEdit = (task) => {
    setEditTask({ ...task });
  };

  const handleSaveChanges = () => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.seqNo === editTask.seqNo ? editTask : t))
    );
    setShowModal(false);
    setEditTask(null);
  };

  const statusColors = {
    completed: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    "in progress": "bg-blue-100 text-blue-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <div className="min-h-screen max-w-max flex justify-center items-center">
      <div className=" rounded p-5 ml-[35rem]">
        <div className="w-full max-w-7xl flex gap-6">
          {/* Chatbot Section */}
          <div className="w-full bg-white shadow-lg rounded-xl p-6 flex flex-col h-[90vh]">
            {showContext && (
             <div className="text-center text-wrap text-gray-700 text-lg mb-6">
             Hi! Ready to check on a task? Just type its name, and I'll pull up the details.
         </div>
            )}

            <div className="flex flex-col space-y-4 flex-grow overflow-y-auto">
             
            </div>

            {/* Input Box */}
            
          </div>

          {/* Edit Section */}
          
        </div>

        {/* Confirmation Modal */}
        
      </div>
    </div>
  );
}
