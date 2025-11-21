import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

const socket = io.connect("https://chat-app-server-00jj.onrender.com");

function App() {
  const room = "SSG";
  return (
        <Chat socket={socket} username={username} room={room} />
  );
}

export default App;
