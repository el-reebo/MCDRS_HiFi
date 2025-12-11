//Need to npm install lucide-react
import { Home, MessageSquare, AlertCircle, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Nav_admin({ unreadCount }) {
  const location = useLocation(); //stores current path e.g. /alerts

  return (
    <>
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t-2 border-gray-200 shadow py-3 flex justify-around">
        <Link to="/home-admin">
          <Home
            className={`w-7 h-7 ${
              location.pathname === "/home-admin"
                ? "text-blue-600"
                : "text-gray-400"
            }`}
          />
        </Link>

        <Link to="/messages">
          <MessageSquare
            className={`w-7 h-7 ${
              location.pathname === "/messages"
                ? "text-blue-600"
                : "text-gray-400"
            }`}
          />
          {unreadCount > 0 && (
            <span className="absolute top-2 left-[39%] bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
              {unreadCount}
            </span>
          )}
        </Link>

        <Link to="/alerts">
          <AlertCircle
            className={`w-7 h-7 ${
              location.pathname === "/alerts"
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

export default Nav_admin;
{
  /* // <a href="index.html">
        //   <Home className="w-7 h-7 text-blue-600" />
        // </a>
        // <a href="messages.html">
        //   <MessageSquare className="w-7 h-7 text-gray-400" />
        // </a>
        // <a href="alerts.html">
        //   <AlertCircle className="w-7 h-7 text-gray-400" />
        // </a>
        // <a href="settings.html">
        //   <Settings className="w-7 h-7 text-gray-400" />
        // </a> */
}
