import { useState } from "react";
import { ArrowLeft, Shield, EyeOff, WifiOff, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Privacy() {
  const [tracking, setTracking] = useState(false);
  const [adPersonalization, setAdPersonalization] = useState(false);
  const [dataSharing, setDataSharing] = useState(false);

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-20">

      {/* Back Button */}
      <Link
        to="/settings"
        className="fixed top-5 left-5 z-50 bg-white rounded-full px-4 py-2 shadow flex items-center gap-2 hover:bg-gray-50 transition"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-semibold">Back</span>
      </Link>

      <h1 className="text-3xl font-bold mb-6 mt-16 text-center">PRIVACY</h1>

      <div className="w-full max-w-md p-4">
        <div className="bg-gray-300 rounded-3xl p-6 space-y-4">

          {/* Tracking Protection */}
          <button
            onClick={() => setTracking(!tracking)}
            className={`w-full rounded-full py-4 px-6 flex items-center gap-4 shadow transition ${
              tracking ? "bg-green-500 text-white" : "bg-white text-black"
            }`}
          >
            <Shield className="w-6 h-6" />
            <span className="font-semibold text-lg">Tracking Protection</span>
          </button>

          {/* Ad Personalization */}
          <button
            onClick={() => setAdPersonalization(!adPersonalization)}
            className={`w-full rounded-full py-4 px-6 flex items-center gap-4 shadow transition ${
              adPersonalization ? "bg-green-500 text-white" : "bg-white text-black"
            }`}
          >
            <EyeOff className="w-6 h-6" />
            <span className="font-semibold text-lg">Ad Personalization</span>
          </button>

          {/* Data Sharing */}
          <button
            onClick={() => setDataSharing(!dataSharing)}
            className={`w-full rounded-full py-4 px-6 flex items-center gap-4 shadow transition ${
              dataSharing ? "bg-green-500 text-white" : "bg-white text-black"
            }`}
          >
            <Globe className="w-6 h-6" />
            <span className="font-semibold text-lg">Data Sharing</span>
          </button>

        </div>
      </div>
    </div>
  );
}
