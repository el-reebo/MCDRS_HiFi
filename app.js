import { useState } from "react";
import { Home, MessageSquare, AlertCircle, Settings } from "lucide-react";

export default function App() {
  const [active, setActive] = useState("home");

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center">
      {active === "home" && <Dashboard />}
      {active === "alerts" && <Alerts />}

      <nav className="w-full fixed bottom-0 bg-white shadow flex justify-around py-3">
        <Home
          onClick={() => setActive("home")}
          className={`w-7 h-7 ${active === "home" ? "text-blue-600" : "text-gray-400"}`}
        />
        <MessageSquare
          onClick={() => setActive("messages")}
          className={`w-7 h-7 ${active === "messages" ? "text-blue-600" : "text-gray-400"}`}
        />
        <AlertCircle
          onClick={() => setActive("alerts")}
          className={`w-7 h-7 ${active === "alerts" ? "text-blue-600" : "text-gray-400"}`}
        />
        <Settings
          onClick={() => setActive("settings")}
          className={`w-7 h-7 ${active === "settings" ? "text-blue-600" : "text-gray-400"}`}
        />
      </nav>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="p-4 pb-20 w-full max-w-sm">
      <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
      <div className="w-full h-52 bg-gray-300 rounded-2xl mb-4 overflow-hidden">
        <img
          src="/mnt/data/fc055bf9-6de2-4782-9547-3bcbfeddc4bf.png"
          alt="map"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-blue-700 text-white rounded-xl p-3 mb-4">
        <p className="font-semibold">Task Allocation</p>
        <div className="bg-white text-black rounded-xl p-3 mt-2 flex items-center gap-3">
          <AlertCircle className="text-yellow-500" /> Task assigned
        </div>
      </div>

      <div className="bg-blue-700 text-white rounded-xl p-3">
        <p className="font-semibold">Weather Reports</p>
        <div className="bg-white text-black rounded-xl p-3 mt-2 flex items-center gap-3">
          <AlertCircle className="text-red-500" /> WEATHER WARNING
        </div>
      </div>
    </div>
  );
}

function Alerts() {
  const priorities = [
    { level: "HIGH PRIORITY", color: "text-red-500", count: 2 },
    { level: "MEDIUM PRIORITY", color: "text-yellow-500", count: 2 },
    { level: "LOW PRIORITY", color: "text-green-600", count: 2 }
  ];

  return (
    <div className="p-4 pb-20 w-full max-w-sm">
      <h1 className="text-2xl font-bold mb-3">ALERTS</h1>
      <div className="w-full h-1 bg-gray-300 mb-4"></div>

      <div className="bg-blue-700 p-4 rounded-2xl">
        {priorities.map((p) =>
          [...Array(p.count)].map((_, i) => (
            <div
              key={p.level + i}
              className="bg-white flex items-center gap-3 p-3 rounded-xl mb-3"
            >
              <AlertCircle className={p.color} />
              <p className="text-sm font-semibold">
                {p.level}
                <br /> LOCATION DESCRIPTION
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
