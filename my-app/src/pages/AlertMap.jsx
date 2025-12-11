import { Link } from "react-router-dom";
import map from "../assets/images/GTAV-HD-MAP-roadmap-alerts.webp";
import { Clock, X, Minimize2 } from "lucide-react";

function AlertMap() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${map})` }}
      >
        {/* <img src={map} alt="Location of alert" className="" /> */}
        <Link
          to="/alerts"
          className="fixed bg-white top-[6rem] right-5 text-black rounded-full p-2 ring-black"
        >
          <Minimize2 />
        </Link>
        <div className="absolute bottom-[51px] w-full h-[8rem] py-4 pr-6 pl-10 rounded-t-xl bg-white flex flex-col">
          <div className="fixed bg-red-600 left-[1rem] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-2xl font-bold">!</span>
          </div>
          <div className="mx-auto">
            <h2 className="font-bold text-lg">
              Downtown Area, 34 Portola Drive
            </h2>
          </div>
          <div className="mx-auto border-b-2 border-gray-200">
            <p className="text-lg text-gray-500 flex items-center gap-1 pb-2">
              0.8km away • <Clock className="w-4 h-4" /> 14:08
            </p>
          </div>

          <div className="pt-2">
            Major structural damage, 2 casualties reported
          </div>
        </div>
      </div>
    </>
  );
}

export default AlertMap;
