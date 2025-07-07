import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, .interactive');
      setIsHovering(!!isInteractive);
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
    <>
      {/* Main cursor - blinking star */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: position.x - 12,
          top: position.y - 12,
          transition: 'transform 0.1s ease-out',
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
        }}
      >
        <div className="relative">
          {/* Star shape */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="animate-pulse"
            style={{ animationDuration: '1.5s' }}
          >
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill="#3b82f6"
              className="drop-shadow-lg"
            />
          </svg>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-blue-400 rounded-full blur-md opacity-30 animate-ping" />
        </div>
      </div>

      {/* Trailing particles */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: position.x - 2,
          top: position.y - 2,
          transition: 'all 0.3s ease-out',
        }}
      >
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: Math.cos((i * Math.PI) / 3) * 20,
              top: Math.sin((i * Math.PI) / 3) * 20,
              animationDelay: `${i * 0.2}s`,
              opacity: 0.6 - i * 0.2,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default CustomCursor;