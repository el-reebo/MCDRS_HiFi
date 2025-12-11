import { TriangleAlert, Info } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Notifs() {
  const [notifToggle, setNotifToggle] = useState(false);
  const notifications = [
    {
      id: 1,
      disaster: "Tornado Warning",
      location: "Los Santos",
      distance: "100km",
      time: "13:28",
    },
  ];

  const yesterday_notifs = [
    {
      id: 1,
      disaster: "High Winds",
      location: "Sandy Shores",
      distance: "256km",
      time: "Tuesday 11:15",
    },
  ];

  const prev_notifs = [
    {
      id: 1,
      disaster: "NEW Disaster Relief Shelter Open",
      location: "Los Santos",
      distance: "98km",
      time: "Sunday 13:00",
    },
  ];

  return (
    <div className="pt-[4.7rem] pb-40 px-[1rem] h-screen flex flex-col items-center">
      <h2 className="sticky font-bold text-lg items-center p-2">Today</h2>
      <ul className="w-full max-w-md bg-white rounded-lg shadow-md divide-y divide-gray-200">
        {notifications.map((notif) => (
          <li key={notif.id} className="flex items-center p-4">
            <TriangleAlert className="w-7 h-7 text-red-500 mr-3" />
            <div className="flex-1">
              <p className="font-semibold text-red-500 items-center gap-2 px-2">
                <span>{notif.disaster}</span>
                {/* <Info className="w-4 h-4 text-black" /> */}
              </p>
              <div className="flex items-center justify-center">
                <Info className="w-4 h-4 mr-2" />
                <p className="text-md">Click for Safety Information</p>
              </div>
              <p className="text-sm text-gray-500">
                {notif.location} • {notif.distance} away • {notif.time}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <Link
        to="/home-user"
        state={{ triggerTab: true }}
        className="fixed top-[7.5rem] w-[396px] h-[100px] bg-transparent focus: outline-0 hover: border-transparent"
      ></Link>
      <h2 className="sticky font-bold text-lg items-center p-2">Yesterday</h2>
      <ul className="w-full max-w-md bg-white rounded-lg shadow-md divide-y divide-gray-200">
        {yesterday_notifs.map((notif) => (
          <li key={notif.id} className="flex items-center p-4">
            <TriangleAlert className="w-7 h-7 text-yellow-500 mr-3" />
            <div className="flex-1">
              <p className="font-semibold ">{notif.disaster}</p>
              <p className="text-sm text-gray-500">
                {notif.location} • {notif.distance} away • {notif.time}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <h2 className="sticky font-bold text-lg items-center p-2">Previous</h2>
      <ul className="w-full max-w-md bg-white rounded-lg shadow-md divide-y divide-gray-200">
        {prev_notifs.map((notif) => (
          <li key={notif.id} className="flex items-center p-4">
            <Info className="w-7 h-7 mr-3" />
            <div className="flex-1">
              <p className="font-semibold ">{notif.disaster}</p>
              <p className="text-sm text-gray-500">
                {notif.location} • {notif.distance} away • {notif.time}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifs;
