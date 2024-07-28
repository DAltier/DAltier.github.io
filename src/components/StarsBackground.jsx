'use client';
import React, { useEffect, useState } from 'react';

const createStar = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

const StarsBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const addStarPeriodically = () => {
      const newStar = createStar();
      // keep 10 to 14 stars on the screen at any time
      setStars((currentStars) => [...currentStars.slice(-14), newStar]);
    };

    const interval = setInterval(addStarPeriodically, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {stars.map((star) => {
        return (
          <div
            key={star.id}
            className="absolute rounded-full w-[10px] h-[10px] bg-star-radial"
            style={{
              top: star.top,
              left: star.left,
              animation: `move ${star.animationDuration} infinite alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default StarsBackground;
