import { useState, useEffect, useRef } from "react";
import { Home, MessageSquare, AlertCircle, Settings, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Messages({ setMsgDot }) {
  const location = useLocation();

  const [messages, setMessages] = useState([
    {
      id: 1,
      title: "First System Message",
      text: "Hello! This is your first system message.",
      unread: true,
      thread: [
        { sender: "them", text: "Hello! This is your first system message." },
      ],
    },
    {
      id: 2,
      title: "Shift Reminder",
      text: "Reminder: Your next shift starts tomorrow.",
      unread: true,
      thread: [
        {
          sender: "them",
          text: "Reminder: Your next shift starts tomorrow at 9AM.",
        },
      ],
    },
    {
      id: 3,
      title: "Weather Alert",
      text: "Weather alert: Conditions may change suddenly.",
      unread: true,
      thread: [
        {
          sender: "them",
          text: "Weather alert: Conditions may change suddenly. Please be prepared.",
        },
      ],
    },
    {
      id: 4,
      title: "Schedule Update",
      text: "Your supervisor updated your schedule.",
      unread: true,
      thread: [
        {
          sender: "them",
          text: "Your supervisor updated your schedule. Check the app for details.",
        },
      ],
    },
    {
      id: 5,
      title: "Profile Update",
      text: "System Notice: Your profile has been updated.",
      unread: true,
      thread: [
        {
          sender: "them",
          text: "System Notice: Your profile has been updated successfully.",
        },
      ],
    },
  ]);
  // Update unread badge when messages change
  useEffect(() => {
    const unreadCount = messages.filter((m) => m.unread).length;
    setMsgDot(unreadCount);
  }, [messages, setMsgDot]);

  // When returning from chat, mark the message as read
  useEffect(() => {
    if (location.state?.markAsRead) {
      const messageId = location.state.markAsRead;

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId ? { ...msg, unread: false } : msg
        )
      );
    }
  }, [location.state?.markAsRead]);

  // const unreadCount = messages.filter((m) => m.unread).length;

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen pb-20">
      <div className="w-full max-w-sm p-4 pb-24">
        <h1 className="text-2xl font-bold mb-4">MESSAGES</h1>

        <div className="bg-gray-200 p-4 rounded-2xl flex flex-col gap-3">
          {messages.map((msg) => (
            <Link
              key={msg.id}
              to={`/chat/${msg.id}`}
              state={{
                thread: msg.thread,
                title: msg.title,
                messageId: msg.id,
              }}
              className="flex items-center gap-3 bg-white p-3 rounded-lg hover:bg-gray-50 transition"
            >
              {msg.unread && (
                <div className="w-1.5 bg-blue-600 rounded-full h-12"></div>
              )}
              <User className="w-6 h-6 flex-shrink-0" />
              <p
                className={`text-sm flex-1 ${
                  msg.unread ? "font-bold text-blue-600" : "text-gray-700"
                }`}
              >
                {msg.text.slice(0, 40)}...
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* <nav className="w-full fixed bottom-0 bg-white shadow flex justify-around py-3">
        <Link to="/home-admin">
          <Home className="w-7 h-7 text-gray-400" />
        </Link>

        <Link to="/messages" className="relative">
          <MessageSquare className="w-7 h-7 text-blue-600" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
              {unreadCount}
            </span>
          )}
        </Link>

        <Link to="/alerts">
          <AlertCircle className="w-7 h-7 text-gray-400" />
        </Link>

        <Link to="/settings">
          <Settings className="w-7 h-7 text-gray-400" />
        </Link>
      </nav> */}
    </div>
  );
}
