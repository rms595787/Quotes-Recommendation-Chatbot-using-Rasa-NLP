import React from "react";

function Sidebar({
  chats,
  currentChatId,
  setCurrentChatId,
  createNewChat,
  deleteChat,
  darkMode,
  setDarkMode
}) {

  return (
    <div className="sidebar">

      <button className="new-chat" onClick={createNewChat}>
        + New Chat
      </button>

      <button
        className="dark-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      {chats.map(chat => (

        <div
          key={chat.id}
          className={
            chat.id === currentChatId
              ? "chat-item active"
              : "chat-item"
          }
        >

          <span
            className="chat-title"
            onClick={() => setCurrentChatId(chat.id)}
          >
            {chat.title}
          </span>

          <span
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              deleteChat(chat.id);
            }}
          >
            🗑
          </span>

        </div>

      ))}

    </div>
  );
}

export default Sidebar;