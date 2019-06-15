import React, { useState } from "react";

export default function ExpandableContainer({ headerContent, bodyContent }) {
  const [isSelected, setSelected] = useState(false);

  const toggleSelect = () => {
    setSelected(!isSelected);
  };

  return (
    <div className="expandable-container">
      <div
        onClick={toggleSelect}
        className={`expandable-header ${isSelected ? "expanded" : "shrunk"}`}
      >
        {headerContent}
      </div>
      <div className={`expandable-body ${isSelected ? "expanded" : "shrunk"}`}>
        {bodyContent}
      </div>
    </div>
  );
}
