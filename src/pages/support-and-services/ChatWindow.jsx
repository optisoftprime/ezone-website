import React, { useState } from "react";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "agent",
      text: "Hey! How can I help you",
      time: "Today, 12:04 PM",
    },
    {
      id: 2,
      sender: "agent",
      text: "Lorem ipsum dolor sit amet consectetur. Jeulis suscipit lectus adipiscing erat vitae enim. Adipiscing vitae cursus turpis dui suspendisse ultricies donec. Ullamcorper venenatis in massa.",
      time: "Today, 12:04 PM",
    },
    {
      id: 3,
      sender: "user",
      text: "I have little difficulty in accessing the ezone LMS application, can you help?",
      time: "Today, 12:04 PM",
    },
    {
      id: 4,
      sender: "user",
      text: "Lorem ipsum dolor sit amet consectetur. Jeulis",
      time: "Today, 12:04 PM",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "user",
          text: input,
          time: "Today, 12:05 PM",
        },
      ]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col max-w-3xl h-screen mx-auto rounded-lg overflow-hidden bg-white">
      {/* Date Separator */}
      <div className="text-center text-sm text-gray-500 py-3 border-b">
        Thursday 13/08/2025
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100">
        {messages.map((msg, idx) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "agent" ? "items-start" : "items-end justify-end"
            }`}
          >
            {msg.sender === "agent" && (
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="avatar"
                className="w-10 h-10 rounded-full mr-3"
              />
            )}

            <div className="max-w-[350px] space-y-1">
              {msg.sender === "agent" && idx === 0 && (
                <div className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-tl-xl rounded-tr-xl rounded-br-xl">
                  {msg.text}
                </div>
              )}

              {!(msg.sender === "agent" && idx === 0) && (
                <div
                  className={`px-4 py-2 text-sm rounded-xl ${
                    msg.sender === "agent"
                      ? "bg-blue-600 text-white rounded-tl-none"
                      : "bg-gray-200 text-gray-900 rounded-tr-none"
                  }`}
                >
                  {msg.text}
                </div>
              )}

              <div className="text-xs text-gray-500">{msg.time}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="flex items-center p-4 border-t bg-white">
        <input
          type="text"
          placeholder="Write your message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
