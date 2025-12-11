import { useState } from "react";
import {
  Home,
  MessageSquare,
  AlertCircle,
  Settings as SettingsIcon,
  User,
  Lock,
  Accessibility,
  UserCheck,
  MapPin,
  Info,
} from "lucide-react";
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
          <Link
            to="/account"
            className="w-full bg-white rounded-full py-4 px-6 flex items-center gap-4 shadow hover:bg-gray-50 transition text-black"
          >
            <User className="w-6 h-6" />
            <span className="font-semibold text-lg">Account</span>
          </Link>

          {/* Privacy */}
          <Link
            to="/privacy"
            className="w-full bg-white rounded-full py-4 px-6 flex items-center gap-4 shadow hover:bg-gray-50 transition text-black"
          >
            <Lock className="w-6 h-6" />
            <span className="font-semibold text-lg">Privacy</span>
          </Link>

          {/* Accessibility - Link */}
          <Link
            to="/accessibility"
            className="w-full bg-white rounded-full py-4 px-6 flex items-center gap-4 shadow hover:bg-gray-50 transition text-black"
          >
            <Accessibility className="w-6 h-6" />
            <span className="font-semibold text-lg">Accessibility</span>
          </Link>

          {/* Verify Account */}
          <Link
            to="/verified"
            className="w-full bg-white rounded-full py-4 px-6 flex items-center gap-4 shadow hover:bg-gray-50 transition text-black"
          >
            <UserCheck className="w-6 h-6" />
            <span className="font-semibold text-lg">Verify Account</span>
          </Link>
          {/* Location Toggle */}
          <button
            onClick={toggleLocation}
            className={`w-full rounded-full py-4 px-6 flex items-center gap-4 shadow transition ${
              locationEnabled
                ? "bg-green-500 text-white"
                : "bg-white text-black"
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

{/*       
      <nav className="w-full fixed bottom-0 bg-white shadow flex justify-around py-3">
        <Link to="/home-admin">
          <Home className="w-7 h-7 text-gray-400" />
        </Link>

        <Link to="/messages" className="relative">
          <MessageSquare className="w-7 h-7 text-gray-400" />
        </Link>

        <Link to="/alerts">
          <AlertCircle className="w-7 h-7 text-gray-400" />
        </Link>

        <Link to="/settings">
          <SettingsIcon className="w-7 h-7 text-blue-600" />
        </Link>
      </nav> */}
    </div>
  );
}