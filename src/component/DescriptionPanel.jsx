import React, { useState } from "react";
import "./descriptionpanel_style.scss";

export function DescriptionPanel({ title, content, children }) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  const contentClass = `description__content ${
    isContentVisible ? "visible" : "hidden"
  }`;
  const chevronClass = `fas ${
    isContentVisible ? "fa-chevron-up" : "fa-chevron-down"
  }`;

  return (
    <div className="description__panel">
      <p
        className="description__header"
        onClick={toggleContentVisibility}
        role="button"
        aria-expanded={isContentVisible}
      >
        <span>{title}</span>
        <i className={chevronClass}></i>
      </p>
      <div className={contentClass}>{children || content}</div>
    </div>
  );
}

