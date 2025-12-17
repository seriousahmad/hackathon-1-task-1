import React from 'react';
import ChatbotPlugin from '../plugins/ChatbotPlugin';

// Enhanced implementation with accessibility features and chatbot
function Root({children}) {
  React.useEffect(() => {
    // Add keyboard navigation enhancements
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        // Handle escape key if needed
        document.activeElement.blur();
      }
    };

    // Add focus management for accessibility
    const handleFocus = (e) => {
      // Add visual indication of keyboard focus
      if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
        e.target.classList.add('keyboard-focused');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', handleFocus);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', handleFocus);
    };
  }, []);

  return (
    <>
      {children}
      <ChatbotPlugin />
    </>
  );
}

export default Root;