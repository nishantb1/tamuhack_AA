import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello! How can I help you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = async (newMessages = []) => {
    setMessages(GiftedChat.append(messages, newMessages));

    const message = newMessages[0].text;
    try {
      const response = await fetch('http://localhost:3000/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      const replyMessage = {
        _id: messages.length + 1,
        text: data.reply,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      };

      setMessages(GiftedChat.append(messages, [replyMessage]));
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default Chatbot;