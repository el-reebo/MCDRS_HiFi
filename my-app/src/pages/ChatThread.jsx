import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Send } from "lucide-react";

export default function ChatThread() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [messages, setMessages] = useState(state?.thread || []);
  const [newMessage, setNewMessage] = useState("");

  if (!state) return <p className="p-4 mt-20">No message thread found.</p>;

  const handleSend = () => {
    if (newMessage.trim() === "") return;

    setMessages([...messages, { sender: "me", text: newMessage }]);
    setNewMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 pt-20">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 pb-24">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg w-fit max-w-[80%] ${
              msg.sender === "me"
                ? "ml-auto bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 w-full bg-white border-t p-4">
        <div className="flex gap-2 max-w-2xl mx-auto">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}