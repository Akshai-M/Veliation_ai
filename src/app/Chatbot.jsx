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
          {editTask && (
            <div className="w-1/2 bg-white shadow-lg rounded-xl p-6 h-[90vh]">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Modify Task
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Sequence Number
                  </label>
                  <input
                    type="number"
                    className="w-full mt-1 p-2 border border-gray-400 text-gray-800 rounded-lg "
                    value={editTask.seqNo}
                    onChange={(e) =>
                      setEditTask({ ...editTask, seqNo: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Task Description
                  </label>
                  <textarea
                    className="w-full mt-1 p-2 border border-gray-400 text-gray-800 rounded-lg overflow-hidden"
                    value={editTask.description}
                    onChange={(e) =>
                      setEditTask({ ...editTask, description: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Status
                  </label>
                  <select
                    className="w-full mt-1 p-2 border border-gray-400 text-gray-800 rounded-lg "
                    value={editTask.status}
                    onChange={(e) =>
                      setEditTask({ ...editTask, status: e.target.value })
                    }
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>Error</option>
                  </select>
                </div>
                <button
                  className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  onClick={() => setShowModal(true)}
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Confirmation Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-96">
              <h3 className="text-lg font-semibold mb-4">Confirm Changes</h3>
              <p className="text-sm text-gray-700">
                Are you sure you want to modify this task?
              </p>
              <div className="flex justify-end mt-4 gap-2">
                <button
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={handleSaveChanges}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
