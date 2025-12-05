import HeaderBar from "../components/HeaderBar";
import map from "../assets/images/GTAV-HD-MAP-roadmap.jpg";
import Map from "../components/Map";
import { useState } from "react";

function Home_user() {
  const [scale, setScale] = useState(1);

  return (
    <>
      <div className="relative w-full z-0">
        {/* <h1 className="text-2xl font-bold mb-2">Dashboard</h1> */}
        {/* Map container */}
        {/* <Map /> */}

        {/* Zoom controls */}
        {/* <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => setScale(scale + 2)}
            className="bg-white px-2 py-1 rounded shadow"
          >
            +
          </button>
          <button
            onClick={() => setScale(Math.max(1, scale - 2))}
            className="bg-white px-2 py-1 rounded shadow"
          >
            -
          </button>
        </div> */}
      </div>
    </>
  );
}

export default Home_user;
