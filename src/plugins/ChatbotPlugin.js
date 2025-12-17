import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ChatbotPlaceholder from '../components/ChatbotPlaceholder/ChatbotPlaceholder';

const ChatbotPlugin = () => {
  return (
    <BrowserOnly>
      {() => <ChatbotPlaceholder />}
    </BrowserOnly>
  );
};

export default ChatbotPlugin;