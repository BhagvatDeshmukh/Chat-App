import "./App.css";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import Chat from "./Chat";

const socket = io.connect("https://chat-app-server-00jj.onrender.com");

function App() {
  const room = "SSG";
  const [messageHistory, setMessageHistory] = useState([]);

  const joinRoom = () => {
      socket.emit("join_room", room);
      setShowChat(true);
  };

    useEffect(() => {

    socket.on("msg_history", (history) => {
      setMessageHistory((list) => [...list, history]);
    });

  }, [socket]);
  
  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <button onClick={joinRoom}>Join Chat</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} msgHistory={MessageHistory}/>
      )}
    </div>
  );
}

export default App;
