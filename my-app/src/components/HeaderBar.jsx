import { Link, useLocation } from "react-router-dom";
import { CircleUser } from "lucide-react";

function HeaderBar({ isLoggedIn }) {
  const location = useLocation();

  const pageTitles = {
    "/": "Dashboard",
    "/home-user": "Dashboard",
    "/notifs": "Notification",
    "/network": "Manage Network",
    "/settings": "Settings",
  };

  //variable needs to be const as we're running in safe mode
  const title = pageTitles[location.pathname];

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-15 bg-white flex justify-between text-black py-4 px-7">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <Link to="/login">
          {isLoggedIn ? (
            <CircleUser className="w-10 h-10 text-blue-600" />
          ) : (
            <div className="flex">
              <span className="my-auto mr-2 text-black">Log In</span>
              <CircleUser className="w-10 h-10 text-black" />
            </div>
          )}
        </Link>
      </header>
    </>
  );
}

export default HeaderBar;
