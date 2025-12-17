import React, { useState } from 'react';
import clsx from 'clsx';
import './CollapsibleTOC.css';

const CollapsibleTOC = ({ items, className }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const renderItems = (items, level = 0) => {
    if (!items || !items.length) return null;

    return (
      <ul className={clsx('collapsible-toc-list', `level-${level}`)}>
        {items.map((item, index) => {
          const itemId = `${level}-${index}`;
          const hasChildren = item.children && item.children.length > 0;
          const isSectionOpen = openSections[itemId];

          return (
            <li key={itemId} className="collapsible-toc-item">
              {hasChildren ? (
                <div className="collapsible-section">
                  <button
                    className="section-toggle"
                    onClick={() => toggleSection(itemId)}
                    aria-expanded={isSectionOpen}
                    aria-controls={`section-${itemId}`}
                  >
                    <span className="section-title">{item.title}</span>
                    <span className={clsx('toggle-icon', { 'rotated': isSectionOpen })}>
                      ▼
                    </span>
                  </button>
                  {isSectionOpen && (
                    <div id={`section-${itemId}`} className="section-content">
                      {renderItems(item.children, level + 1)}
                    </div>
                  )}
                </div>
              ) : (
                <a href={item.href || '#'} className="toc-link">
                  {item.title}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav className={clsx('collapsible-toc', className)}>
      <div className="toc-header">
        <h3 className="toc-title">Table of Contents</h3>
      </div>
      {renderItems(items)}
    </nav>
  );
};

export default CollapsibleTOC;