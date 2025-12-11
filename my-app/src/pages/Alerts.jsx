import { Home, MessageSquare, AlertCircle, Settings } from "lucide-react";
import { Link } from "react-router-dom";

function Alerts() {
  const alerts = [
    {
      id: 1,
      priority: "HIGH",
      location: "Downtown Area",
      description: "Severe weather warning in effect",
      color: "red",
    },
    {
      id: 2,
      priority: "HIGH",
      location: "North District",
      description: "Emergency evacuation notice",
      color: "red",
    },
    {
      id: 3,
      priority: "MEDIUM",
      location: "City Center",
      description: "Road closure due to maintenance",
      color: "yellow",
    },
    {
      id: 4,
      priority: "MEDIUM",
      location: "East Side",
      description: "Power outage expected tonight",
      color: "yellow",
    },
    {
      id: 5,
      priority: "LOW",
      location: "West Park",
      description: "Community event this weekend",
      color: "green",
    },
    {
      id: 6,
      priority: "LOW",
      location: "South Beach",
      description: "Scheduled maintenance tomorrow",
      color: "green",
    },
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case "red":
        return "bg-red-600";
      case "yellow":
        return "bg-yellow-400";
      case "green":
        return "bg-green-500";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-20 pb-24">
      <div className="w-full max-w-md p-4">
        <h1 className="text-3xl font-bold mb-6">ALERTS</h1>

        {/* Alerts Container */}
        <div className="bg-gray-300 rounded-3xl p-6 space-y-4">
          <Link
            to="/alert-map"
            className="fixed top-[12rem] left-10 w-[348px] h-[100px] bg-transparent focus: outline-0 hover: border-transparent"
          />
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="bg-white rounded-full py-4 px-6 flex items-center gap-4 shadow"
            >
              {/* Alert Icon */}
              <div
                className={`${getColorClasses(
                  alert.color
                )} rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0`}
              >
                <span className="text-white text-2xl font-bold">!</span>
              </div>

              {/* Alert Text */}
              <div className="flex-1">
                <p className="font-bold text-sm uppercase">
                  {alert.priority} PRIORITY
                </p>
                <p className="font-semibold text-sm">{alert.location}</p>
                <p className="text-xs text-gray-600">{alert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      {/* <nav className="w-full fixed bottom-0 bg-white shadow flex justify-around py-3">
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
          <AlertCircle className="w-7 h-7 text-blue-600" />
        </Link>

        <Link to="/settings">
          <Settings className="w-7 h-7 text-gray-400" />
        </Link>
      </nav> */}
    </div>
  );
}

export default Alerts;
