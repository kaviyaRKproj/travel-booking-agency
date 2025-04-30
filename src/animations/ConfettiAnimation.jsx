// src/animations/ConfettiAnimation.jsx
import { useEffect, useState } from 'react';

const ConfettiAnimation = ({ duration = 5000 }) => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return showConfetti ? (
    <div className="confetti-overlay">
      {[...Array(50)].map((_, i) => (
        <div 
          key={i}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`
          }}
        />
      ))}
    </div>
  ) : null;
};

export default ConfettiAnimation;