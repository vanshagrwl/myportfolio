import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{
      background: 'radial-gradient(circle at 20% 20%, rgba(26,115,232,0.08), transparent 40%), radial-gradient(circle at 80% 30%, rgba(234,67,53,0.08), transparent 40%), radial-gradient(circle at 30% 80%, rgba(52,168,83,0.08), transparent 40%), #faf9f7'
    }}>
      <div className="text-center">
        <div className="text-4xl font-extrabold vintage-heading mb-4">
          Loading…
        </div>
        <div className="loading-dots"><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  );
};

export default Preloader;