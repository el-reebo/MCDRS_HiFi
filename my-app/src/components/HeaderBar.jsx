import { useLocation, useNavigate } from "react-router-dom";
import { CircleUser, ArrowLeft } from "lucide-react";

function HeaderBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const pageTitles = {
    "/": "Dashboard",
    "/home-user": "Dashboard",
    "/home-admin": "Home_admin",
    "/notifs": "Notification",
    "/network": "Manage Network",
    "/settings": "Settings",
    "/messages": "Messages",
    "/alerts": "Alerts",
  };

  // Check if we're on a chat thread page
  const isChatThread = location.pathname.startsWith("/chat/");
  
  // Get the title from location state if it's a chat thread, otherwise use pageTitles
  const title = isChatThread 
    ? (location.state?.title || "Chat") 
    : pageTitles[location.pathname];

  const handleBackClick = () => {
    // Navigate back to messages with state to mark message as read
    if (isChatThread && location.state?.messageId) {
      navigate("/messages", { 
        state: { markAsRead: location.state.messageId },
        replace: false 
      });
    } else {
      navigate(-1);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-15 bg-white divide-y divide-gray-200 flex justify-between items-center text-black py-4 px-7 z-50">
        <div className="flex items-center gap-3">
          {isChatThread && (
            <button 
              onClick={handleBackClick} 
              className="text-blue-500 hover:text-blue-700 transition"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <CircleUser className="w-10 h-10" />
      </header>
    </>
  );
}

export default HeaderBar;