// src/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    if (!isChatOpen) {
      setChatOpen(true);
    }
  };

  const closeChat = () => {
    setChatOpen(false);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      const userMessage = { type: 'user', text: inputText };
      const botResponse = { type: 'bot', text: handleBotResponse(inputText) };

      setMessages([...messages, userMessage, botResponse]);

      setInputText('');
    }
  };

  const handleBotResponse = (userInput) => {
    let botResponse = 'I am a simple chatbot. Type "Hello" or ask about JKD IMPEX. type help to know commands';

    if (userInput.toLowerCase().includes('hello')) {
      botResponse = 'Hello! How can I assist you today?';
    } else if (userInput.toLowerCase().includes('about')) {
      botResponse = 'JKD IMPEX specializes in e-commerce shipment of various brands. How can I help you with more information?';
    } else if (userInput.toLowerCase().includes('brands')) {
      botResponse = 'JKD IMPEX works with brands such as Wonderfresh, Bittr, and Victor Pro Battery.';
    } else if (userInput.toLowerCase().includes('amazon')) {
      botResponse = 'Sure! Here is the link to JKD IMPEX Amazon store: https://www.amazon.in/storefront?me=A2OQS6AETKX6XF';
    } else if (userInput.toLowerCase().includes('flipkart')) {
      botResponse = 'You can search som of our brands directly on flipkart.com';
    }else if (userInput.toLowerCase().includes('contact')) {
        botResponse = 'You can mail us at ecom.jkdimpex@gmail.com';
    }  else if (userInput.toLowerCase().includes('help')) {
      botResponse = `Available commands:\n
      1. "Hello" - Greet the chatbot\n
      2. "About" - Learn about JKD IMPEX\n
      3. "Brands" - Explore partnered brands\n
      4. "Amazon" - Get the link to JKD IMPEX Amazon store\n
      5. "Flipkart" - Get the link to JKD IMPEX Flipkart store\n
      6. "Contact" - Get contact information\n
      7. "Help" - Display available commands`;
    }
    return botResponse;
  };

  return (
    <div className={`chatbot-container ${isChatOpen ? 'open' : ''}`} onClick={toggleChat}>
      <div className="chatbot-icon">Chat</div>
      <div className={`chatbot-window ${isChatOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-title">Chatbot</div>
          <div className="close-button" onClick={closeChat}>×</div>
        </div>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
