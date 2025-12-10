import { useLocation } from "react-router-dom";
import { CircleUser } from "lucide-react";

function HeaderBar() {
  const location = useLocation();

  const pageTitles = {
    "/": "Dashboard",
    "/home-user": "Dashboard",
    "/home-admin": "Home_admin",
    "/notifs": "Notification",
    "/network": "Manage Network",
    "/settings": "Settings",
  };

  //variable needs to be const as we're running in safe mode
  const title = pageTitles[location.pathname];

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-15 bg-white divide-y divide-gray-200 flex justify-between text-black py-4 px-7">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <CircleUser className="w-10 h-10" />
      </header>
    </>
  );
}

export default HeaderBar;
