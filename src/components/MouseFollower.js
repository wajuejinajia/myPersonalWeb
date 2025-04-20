import React, { useEffect, useState } from 'react';
import styles from './MouseFollower.module.css';

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isVisible]);

  return (
    <>
      <div 
        className={styles.follower} 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0
        }}
      />
      <div 
        className={styles.cursor} 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0
        }}
      />
    </>
  );
}