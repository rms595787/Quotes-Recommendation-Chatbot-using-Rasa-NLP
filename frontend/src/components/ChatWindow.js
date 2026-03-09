import React, { useState, useRef, useEffect } from "react";
import Message from "./Message";

function ChatWindow({ messages, setMessages }) {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);

    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch(
        "https://quotes-recommendation-chatbot-using-rasa-nlp-production.up.railway.app/webhooks/rest/webhook",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sender: "user",
            message: userMessage.text,
          }),
        },
      );

      const data = await response.json();

      if (data.length > 0) {
        const botMessage = {
          sender: "bot",
          text: data[0].text,
        };

        setMessages([...updatedMessages, botMessage]);
      }
    } catch {
      const errorMessage = {
        sender: "bot",
        text: "Something went wrong.",
      };

      setMessages([...updatedMessages, errorMessage]);
    }

    setIsTyping(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} text={msg.text} />
        ))}

        {isTyping && (
          <div className="typing-indicator">🤖 Bot is typing...</div>
        )}

        <div ref={bottomRef}></div>
      </div>

      <div className="input-box">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Ask for a quote..."
        />

        <button onClick={sendMessage} disabled={isTyping}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
