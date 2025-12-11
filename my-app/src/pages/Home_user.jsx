import HeaderBar from "../components/HeaderBar";
import map from "../assets/images/GTAV-HD-MAP-roadmap.jpg";
import Map from "../components/Map";
import Dashboard_warning from "../components/Dashboard_warning";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Home_user() {
  const [scale, setScale] = useState(1);
  const location = useLocation();

  return (
    <>
      <div className="w-screen h-[calc(100vh-4.7rem-54px) overflow-hidden">
        {/* triggerTab - utilised by Notif page to automatically toggle warning tab */}
        <Map triggerTab={location.state?.triggerTab} className="z-0" />
      </div>
    </>
  );
}

export default Home_user;
