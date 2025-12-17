import React, { useState } from 'react';
import clsx from 'clsx';
import './ExpandableSection.css';

const ExpandableSection = ({ title, children, defaultOpen = false, className }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={clsx('expandable-section', className)}>
      <button
        className={clsx('section-header', { 'section-open': isOpen })}
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`section-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="section-title">{title}</span>
        <span className={clsx('toggle-icon', { 'rotated': isOpen })}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div
          id={`section-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="section-content"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandableSection;