import { Link } from "react-router-dom";

export default function Chat() {
  const messages = [
    {
      id: 1,
      title: "Shift Reminder",
      preview: "Your shift starts tomorrow at 9AM.",
      time: "2:30 PM",
      icon: "🕒",
      thread: [
        { sender: "them", text: "Reminder: Your shift starts tomorrow at 9AM." }
      ]
    },
    {
      id: 2,
      title: "Weather Alert",
      preview: "Heavy rain expected this week.",
      time: "1:15 PM",
      icon: "🌧️",
      thread: [
        { sender: "them", text: "Weather alert: heavy rain expected." }
      ]
    }
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Messages</h1>

      <div className="space-y-4">
        {messages.map((msg) => (
          <Link
            key={msg.id}
            to={`/chat/${msg.id}`}
            state={{ thread: msg.thread, title: msg.title }}
            className="block"
          >
            <div className="flex items-center p-3 bg-white rounded-lg shadow hover:bg-gray-100">
              <div className="text-3xl mr-4">{msg.icon}</div>

              <div className="flex-1">
                <h2 className="font-semibold">{msg.title}</h2>
                <p className="text-gray-600 text-sm">{msg.preview}</p>
              </div>

              <div className="text-gray-500 text-xs">{msg.time}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
