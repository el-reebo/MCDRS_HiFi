import { Home, MessageSquare, AlertCircle, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home_admin() {
  // Same messages state as in Messages.jsx to get unread count
  const initialMessages = [
    { id: 1, unread: true },
    { id: 2, unread: true },
    { id: 3, unread: true },
    { id: 4, unread: true },
    { id: 5, unread: true },
  ];

  const [messages] = useState(initialMessages);
  const unreadCount = messages.filter((m) => m.unread).length;

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-20 pb-24">
      <div className="w-full max-w-md p-4">
        {/* Map with Alert Overlay */}
        <div className="relative mb-4">
          <img
            src={"../assets/images/GTAV-HD-MAP-roadmap.jpg"}
            alt="City Map"
            className="w-full rounded-2xl"
          />
          {/* Heat map overlay effect */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-red-500 opacity-60 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-500 opacity-70 rounded-full blur-2xl"></div>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-yellow-400 opacity-80 rounded-full blur-xl"></div>
          
          {/* Alert Icon */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold">
            !
          </div>
        </div>

        {/* Task Allocation Card */}
        <div className="bg-blue-600 rounded-2xl p-4 mb-4">
          <h2 className="text-white font-bold text-lg mb-3">Task Allocation</h2>
          <div className="bg-white rounded-xl p-4 flex items-center gap-3">
            <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">⚠</span>
            </div>
            <p className="font-semibold text-gray-800">Task assigned</p>
          </div>
        </div>

        {/* Weather Reports Card */}
        <div className="bg-blue-600 rounded-2xl p-4">
          <h2 className="text-white font-bold text-lg mb-3">Weather Reports</h2>
          <div className="bg-white rounded-xl p-4 flex items-center gap-3">
            <div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">▲</span>
            </div>
            <div className="flex-1">
              <p className="font-bold text-gray-800">WEATHER WARNING</p>
            </div>
            <div className="text-4xl text-gray-400">🌪️</div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="w-full fixed bottom-0 bg-white shadow flex justify-around py-3">
        <Link to="/home-admin">
          <Home className="w-8 h-8 text-blue-600" />
        </Link>

        <Link to="/messages" className="relative">
          <MessageSquare className="w-8 h-8 text-gray-400" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
              {unreadCount}
            </span>
          )}
        </Link>

        <Link to="/alerts">
          <AlertCircle className="w-8 h-8 text-gray-400" />
        </Link>

        <Link to="/settings">
          <Settings className="w-8 h-8 text-gray-400" />
        </Link>
      </nav>
    </div>
  );
}