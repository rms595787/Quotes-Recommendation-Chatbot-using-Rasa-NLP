import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import "./styles.css";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const [chats, setChats] = useState([
    { id: 1, title: "Chat 1", messages: [] }
  ]);

  const [currentChatId, setCurrentChatId] = useState(1);

  const currentChat = chats.find(c => c.id === currentChatId);

  const updateMessages = (messages) => {

    setChats(prev =>
      prev.map(chat => {

        if (chat.id === currentChatId) {

          let title = chat.title;

          if (chat.messages.length === 0 && messages.length > 0) {
            title = messages[0].text.slice(0, 20);
          }

          return { ...chat, messages, title };
        }

        return chat;

      })
    );

  };

  const createNewChat = () => {

    const newChat = {
      id: Date.now(),
      title: `Chat ${chats.length + 1}`,
      messages: []
    };

    setChats([...chats, newChat]);
    setCurrentChatId(newChat.id);
  };

  const deleteChat = (id) => {

    const updatedChats = chats.filter(chat => chat.id !== id);

    setChats(updatedChats);

    if (updatedChats.length > 0) {
      setCurrentChatId(updatedChats[0].id);
    }

  };

  return (

  <div className={darkMode ? "app dark" : "app"}>

    <Sidebar
      chats={chats}
      currentChatId={currentChatId}
      setCurrentChatId={setCurrentChatId}
      createNewChat={createNewChat}
      deleteChat={deleteChat}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />

    <div className="main-area">

      <div className="header">
        <h1 className="project-title">
          Quotes Recommendation Chatbot
        </h1>
      </div>

      <ChatWindow
        messages={currentChat ? currentChat.messages : []}
        setMessages={updateMessages}
      />

    </div>

  </div>

);
}

export default App;