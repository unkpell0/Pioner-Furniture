
import React from 'react';

const BaseLeaf: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M50 0 C20 20, 20 80, 50 100 C80 80, 80 20, 50 0 Z" fill="currentColor" />
      <path d="M50 0 C60 30, 60 70, 50 100" stroke="rgba(0,0,0,0.1)" strokeWidth="2" fill="none" />
      <path d="M50 15 C40 35, 40 65, 50 85" stroke="rgba(0,0,0,0.05)" strokeWidth="1.5" fill="none" />
    </svg>
  );

export const LeafDecorationTopLeft: React.FC<{ className?: string }> = ({ className }) => {
    return (
      <div className={`absolute top-0 left-0 text-green-200 ${className}`}>
        <BaseLeaf className="w-full h-full transform -rotate-45" />
      </div>
    );
  };
  
export const LeafDecorationBottomRight: React.FC<{ className?: string }> = ({ className }) => {
    return (
      <div className={`absolute bottom-0 right-0 text-green-200 ${className}`}>
        <BaseLeaf className="w-full h-full transform rotate-[135deg]" />
      </div>
    );
};
