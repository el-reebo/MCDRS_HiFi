//Need to npm install lucide-react
import { Home, Settings, Bell, UsersRound } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Nav_user() {
  const location = useLocation(); //stores current path e.g. /alerts

  return (
    <>
      <nav className="fixed bottom-0 left-0 w-full bg-white shadow border-t-2 border-gray-200 py-3 flex justify-around">
        <Link to="/home-user">
          <Home
            className={`w-7 h-7 ${
              location.pathname === "/home-user"
                ? "text-blue-600"
                : "text-gray-400"
            }`}
          />
        </Link>
        {/* Need to add red notification ping */}
        <Link to="/notifs">
          <Bell
            className={`w-7 h-7 ${
              location.pathname === "/notifs"
                ? "text-blue-600"
                : "text-gray-400"
            }`}
          />
        </Link>
        <Link to="/network">
          <UsersRound
            className={`w-7 h-7 ${
              location.pathname === "/network"
                ? "text-blue-600"
                : "text-gray-400"
            }`}
          />
        </Link>
        <Link to="/settings">
          <Settings
            className={`w-7 h-7 ${
              location.pathname === "/settings"
                ? "text-blue-600"
                : "text-gray-400"
            }`}
          />
        </Link>
      </nav>
    </>
  );
}

export default Nav_user;
