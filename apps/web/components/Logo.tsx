import React from 'react';
import { Gem } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 120 }) => {
  return (
    <div 
      className={`logo-container ${className} flex items-center justify-center text-primary`}
      style={{ 
        width: size, 
        height: size,
      }}
    >
      <Gem 
        size={size * 0.8}
        className="logo-image"
        strokeWidth={1.5}
      />
    </div>
  );
};
