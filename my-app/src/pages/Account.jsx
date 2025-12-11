import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Account() {
  const [anonMode, setAnonMode] = useState(false);
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-20 relative">

      {/* Back Button */}
      <Link
        to="/settings"
        className="fixed top-5 left-5 z-50 bg-white rounded-full px-4 py-2 shadow flex items-center gap-2 hover:bg-gray-50 transition"
        >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-semibold">Back</span>
        </Link>

      <div className="w-full max-w-md p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">ACCOUNT SETTINGS</h1>

        <div className="bg-gray-300 rounded-3xl p-6 space-y-4">

          {/* Anonymous Mode Toggle */}
          <button
            onClick={() => setAnonMode(!anonMode)}
            className={`w-full rounded-full py-4 px-6 font-semibold text-lg shadow transition ${
              anonMode ? "bg-green-500 text-white" : "bg-white text-black"
            }`}
          >
            Anonymous Mode: {anonMode ? "ON" : "OFF"}
          </button>

          {/* Change Password */}
          <button
            onClick={() => setShowPasswordPopup(true)}
            className="w-full bg-white rounded-full py-4 px-6 font-semibold text-lg shadow hover:bg-gray-50 transition"
          >
            Change Password
          </button>

          {/* Change Email */}
          <button
            onClick={() => setShowEmailPopup(true)}
            className="w-full bg-white rounded-full py-4 px-6 font-semibold text-lg shadow hover:bg-gray-50 transition"
          >
            Change Email
          </button>

          {/* Delete Account */}
          <button
            onClick={() => setShowDeletePopup(true)}
            className="w-full bg-red-500 text-white rounded-full py-4 px-6 font-semibold text-lg shadow hover:bg-red-600 transition"
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* Popup Background */}
      {(showPasswordPopup || showEmailPopup || showDeletePopup) && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

          {/* Password Popup */}
          {showPasswordPopup && (
            <div className="bg-white rounded-xl p-6 w-80 shadow">
              <h2 className="text-xl font-bold mb-4">Enter Password</h2>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border rounded-lg p-2 mb-4"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowPasswordPopup(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowPasswordPopup(false)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Confirm
                </button>
              </div>
            </div>
          )}

          {/* Email Popup */}
          {showEmailPopup && (
            <div className="bg-white rounded-xl p-6 w-80 shadow">
              <h2 className="text-xl font-bold mb-4">Enter Password</h2>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border rounded-lg p-2 mb-4"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowEmailPopup(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowEmailPopup(false)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Confirm
                </button>
              </div>
            </div>
          )}

          {/* Delete Confirmation Popup */}
          {showDeletePopup && (
            <div className="bg-white rounded-xl p-6 w-80 shadow">
              <h2 className="text-xl font-bold mb-4 text-red-500">Are you sure?</h2>
              <p className="mb-4">This action cannot be undone.</p>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowDeletePopup(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowDeletePopup(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
