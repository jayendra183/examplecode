import React, { useState } from 'react';

const CircleJabButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`circle-jab-button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="jab-text">Jab</span>
    </div>
  );
};

export default CircleJabButton;
