import React from "react";

interface Author {
  name: string;
}

type Type = "response" | "message" | "typing";

interface Message {
  id: string;
  from: Author;
  type: Type;
  time: string;
  text?: string;
}

interface MessageList {
  list: Message[];
}

function getMessageClass(type: Type) {
  if (type === "response") return "message-own";
  if (type === "message") return "message-response";
  if (type === "typing") return "message-typing";
}

export function MessageHistory({ list }: MessageList) {
  return (
    <>
      {list.map((message) => (
        <div key={message.id} className={`message-item ${getMessageClass(message.type)}`}>
          <div className="message-header">
            <span className="message-author">{message.from.name}</span>
            <span className="message-time">{message.time}</span>
          </div>
          <div className="message-bubble">
            {message.type === "typing" ? "печатает..." : message.text}
          </div>
        </div>
      ))}
    </>
  )
}