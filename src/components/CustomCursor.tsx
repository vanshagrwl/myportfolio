import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let trailId = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Add trail point
      const newTrail = { x: e.clientX, y: e.clientY, id: trailId++ };
      setTrail(prev => [...prev.slice(-8), newTrail]);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 mix-blend-difference">
      {/* Main cursor */}
      <div
        className="absolute w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100"
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      
      {/* Trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
          style={{
            left: point.x,
            top: point.y,
            opacity: (index + 1) / trail.length * 0.6,
            animationDelay: `${index * 50}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;