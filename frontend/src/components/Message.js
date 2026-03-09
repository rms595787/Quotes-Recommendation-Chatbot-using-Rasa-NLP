import React from "react";

function Message({ sender, text }) {

  return (
    <div className={`message-row ${sender}`}>

      {sender === "bot" && (
        <div className="avatar bot-avatar">🤖</div>
      )}

      <div className={`message-bubble ${sender}`}>
        {text}
      </div>

      {sender === "user" && (
        <div className="avatar user-avatar">🧑</div>
      )}

    </div>
  );
}

export default Message;