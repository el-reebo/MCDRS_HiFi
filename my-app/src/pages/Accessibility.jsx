import { useState } from "react";
import { ArrowLeft, Eye, Type, Volume2, Circle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Accessibility() {
  const navigate = useNavigate();
  const [colorblindMode, setColorblindMode] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [screenReader, setScreenReader] = useState(false);

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-20 pb-24">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-5 left-5 z-50 bg-white rounded-full px-4 py-2 shadow flex items-center gap-2 hover:bg-gray-50 transition"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-semibold">Back</span>
      </button>

      <h1 className="text-3xl font-bold mb-6 mt-16 text-center">ACCESSIBILITY</h1>

      <div className="w-full max-w-md p-4">

        <div className="bg-gray-300 rounded-3xl p-6 space-y-4">
          
          {/* Colorblind Mode */}
          <button 
            onClick={() => setColorblindMode(!colorblindMode)}
            className={`w-full rounded-full py-4 px-6 flex items-center gap-4 shadow transition ${
              colorblindMode ? "bg-green-500 text-white" : "bg-white text-black"
            }`}
          >
            <Eye className="w-6 h-6" />
            <span className="font-semibold text-lg">Colorblind Mode</span>
          </button>

          {/* Large Text */}
          <button 
            onClick={() => setLargeText(!largeText)}
            className={`w-full rounded-full py-4 px-6 flex items-center gap-4 shadow transition ${
              largeText ? "bg-green-500 text-white" : "bg-white text-black"
            }`}
          >
            <Type className="w-6 h-6" />
            <span className="font-semibold text-lg">Large Text</span>
          </button>

          {/* High Contrast */}
          <button 
            onClick={() => setHighContrast(!highContrast)}
            className={`w-full rounded-full py-4 px-6 flex items-center gap-4 shadow transition ${
              highContrast ? "bg-green-500 text-white" : "bg-white text-black"
            }`}
          >
            <Circle className="w-6 h-6" />
            <span className="font-semibold text-lg">High Contrast</span>
          </button>

          {/* Screen Reader */}
          <button 
            onClick={() => setScreenReader(!screenReader)}
            className={`w-full rounded-full py-4 px-6 flex items-center gap-4 shadow transition ${
              screenReader ? "bg-green-500 text-white" : "bg-white text-black"
            }`}
          >
            <Volume2 className="w-6 h-6" />
            <span className="font-semibold text-lg">Screen Reader Support</span>
          </button>

        </div>
      </div>
    </div>
  );
}
