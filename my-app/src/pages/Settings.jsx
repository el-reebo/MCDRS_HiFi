import { useState } from "react";
import { Home, MessageSquare, AlertCircle, Settings as SettingsIcon, User, Lock, Accessibility, UserCheck, MapPin, Info } from "lucide-react";
import { Link } from "react-router-dom";

export default function Settings() {
  const [locationEnabled, setLocationEnabled] = useState(false);

  const toggleLocation = () => {
    setLocationEnabled(!locationEnabled);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-20 pb-24">
      <div className="w-full max-w-md p-4">
        <h1 className="text-3xl font-bold mb-6">SETTINGS</h1>

        {/* Settings Container */}
        <div className="bg-gray-300 rounded-3xl p-6 space-y-4">
          
          {/* Account */}
          <button className="w-full bg-white rounded-full py-4 px-6 flex items-center gap-4 shadow hover:bg-gray-50 transition">
            <User className="w-6 h-6" />
            <span className="font-semibold text-lg">Account</span>
          </button>

          {/* Privacy */}
          <button className="w-full bg-white rounded-full py-4 px-6 flex items-center gap-4 shadow hover:bg-gray-50 transition">
            <Lock className="w-6 h-6" />
            <span className="font-semibold text-lg">Privacy</span>
          </button>

          {/* Accessibility */}
          <button className="w-full bg-white rounded-full py-4 px-6 flex items-center gap-4 shadow hover:bg-gray-50 transition">
            <Accessibility className="w-6 h-6" />
            <span className="font-semibold text-lg">Accessibility</span>
          </button>

          {/* Verify Account */}
          <button className="w-full bg-white rounded-full py-4 px-6 flex items-center gap-4 shadow hover:bg-gray-50 transition">
            <UserCheck className="w-6 h-6" />
            <span className="font-semibold text-lg">Verify Account</span>
          </button>

          {/* Location Toggle */}
          <button 
            onClick={toggleLocation}
            className={`w-full rounded-full py-4 px-6 flex items-center gap-4 shadow transition ${
              locationEnabled ? "bg-green-500 text-white" : "bg-white text-black"
            }`}
          >
            <MapPin className="w-6 h-6" />
            <span className="font-semibold text-lg">
              Location: {locationEnabled ? "ON" : "OFF"}
            </span>
          </button>

          {/* Information */}
          <button className="w-full bg-white rounded-full py-4 px-6 flex items-center gap-4 shadow hover:bg-gray-50 transition">
            <Info className="w-6 h-6" />
            <span className="font-semibold text-lg">Information</span>
          </button>

        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="w-full fixed bottom-0 bg-white shadow flex justify-around py-3">
        <Link to="/home-admin">
          <Home className="w-7 h-7 text-gray-400" />
        </Link>

        <Link to="/messages" className="relative">
          <MessageSquare className="w-7 h-7 text-gray-400" />
          <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
            4
          </span>
        </Link>

        <Link to="/alerts">
          <AlertCircle className="w-7 h-7 text-gray-400" />
        </Link>

        <Link to="/settings">
          <SettingsIcon className="w-7 h-7 text-blue-600" />
        </Link>
      </nav>
    </div>
  );
}