import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function AccountVerified() {
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

      <div className="flex flex-col items-center mt-20">
        <CheckCircle className="w-24 h-24 text-green-500 mb-4" />
        <h1 className="text-3xl font-bold">Your account is verified</h1>
      </div>

    </div>
  );
}
