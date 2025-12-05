import { TriangleAlert } from "lucide-react";

function Notifs() {
  const notifications = [
    {
      id: 1,
      disaster: "Tornado Warning",
      location: "Los Santos",
      distance: "100km",
      time: "13:28",
    },
  ];

  return (
    <div className="pt-20 pb-40  h-screen flex flex-col items-center">
      <ul className="w-full max-w-md bg-white rounded-lg shadow-md divide-y divide-gray-200">
        {notifications.map((notif) => (
          <li key={notif.id} className="flex items-center p-4">
            <TriangleAlert className="w-7 h-7 text-red-500 mr-3" />
            <div className="flex-1">
              <p className="font-semibold text-red-500">{notif.disaster}</p>
              <p className="text-sm text-gray-500">
                {notif.location} • {notif.distance} • {notif.time}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifs;
