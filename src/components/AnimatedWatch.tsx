import React, { useEffect, useState } from 'react';

const AnimatedWatch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Calculate angles for watch hands
  const secondAngle = (seconds * 6) - 90; // 6 degrees per second
  const minuteAngle = (minutes * 6) + (seconds * 0.1) - 90; // 6 degrees per minute + smooth seconds
  const hourAngle = (hours * 30) + (minutes * 0.5) - 90; // 30 degrees per hour + smooth minutes

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Watch face overlay */}
      <div className="relative w-96 h-96 opacity-20">
        <svg
          width="384"
          height="384"
          viewBox="0 0 384 384"
          className="w-full h-full"
        >
          {/* Outer circle */}
          <circle
            cx="192"
            cy="192"
            r="180"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="4"
          />
          
          {/* Inner circle */}
          <circle
            cx="192"
            cy="192"
            r="160"
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="2"
          />

          {/* Hour markers */}
          {[...Array(12)].map((_, i) => {
            const angle = i * 30;
            const isMain = i % 3 === 0;
            const length = isMain ? 25 : 15;
            const width = isMain ? 3 : 1;
            const opacity = isMain ? 0.3 : 0.15;
            
            return (
              <line
                key={i}
                x1="192"
                y1="32"
                x2="192"
                y2={32 + length}
                stroke={`rgba(212, 175, 55, ${opacity})`}
                strokeWidth={width}
                transform={`rotate(${angle} 192 192)`}
              />
            );
          })}

          {/* Minute markers */}
          {[...Array(60)].map((_, i) => {
            if (i % 5 !== 0) { // Skip hour markers
              const angle = i * 6;
              return (
                <line
                  key={i}
                  x1="192"
                  y1="40"
                  x2="192"
                  y2="50"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="0.5"
                  transform={`rotate(${angle} 192 192)`}
                />
              );
            }
            return null;
          })}

          {/* Hour hand */}
          <line
            x1="192"
            y1="192"
            x2="192"
            y2="110"
            stroke="rgba(212, 175, 55, 0.8)"
            strokeWidth="6"
            strokeLinecap="round"
            transform={`rotate(${hourAngle} 192 192)`}
            className="transition-transform duration-1000 ease-in-out"
          />

          {/* Minute hand */}
          <line
            x1="192"
            y1="192"
            x2="192"
            y2="70"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth="4"
            strokeLinecap="round"
            transform={`rotate(${minuteAngle} 192 192)`}
            className="transition-transform duration-1000 ease-in-out"
          />

          {/* Second hand */}
          <line
            x1="192"
            y1="192"
            x2="192"
            y2="60"
            stroke="rgba(212, 175, 55, 0.9)"
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${secondAngle} 192 192)`}
            className="transition-transform duration-75 ease-out"
          />

          {/* Second hand counterweight */}
          <line
            x1="192"
            y1="192"
            x2="192"
            y2="220"
            stroke="rgba(212, 175, 55, 0.9)"
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${secondAngle} 192 192)`}
            className="transition-transform duration-75 ease-out"
          />

          {/* Center dot */}
          <circle
            cx="192"
            cy="192"
            r="8"
            fill="rgba(212, 175, 55, 0.9)"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
          />

          {/* Brand name */}
          <text
            x="192"
            y="130"
            textAnchor="middle"
            fill="rgba(255, 255, 255, 0.4)"
            fontSize="16"
            fontFamily="serif"
            fontWeight="bold"
          >
            CHRONOS
          </text>

          {/* Swiss Made */}
          <text
            x="192"
            y="270"
            textAnchor="middle"
            fill="rgba(255, 255, 255, 0.3)"
            fontSize="12"
            fontFamily="serif"
          >
            SWISS MADE
          </text>
        </svg>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-gold/5 via-transparent to-transparent blur-sm"></div>
      </div>
    </div>
  );
};

export default AnimatedWatch;
