import React from 'react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", delay = 0 }) => (
    <div
        className={`
      relative overflow-hidden
      bg-white/10 
      backdrop-blur-md 
      border border-white/20 
      shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
      rounded-2xl 
      transition-all duration-500 ease-out transform hover:scale-[1.02] hover:bg-white/15
      ${className}
    `}
        style={{ animationDelay: `${delay}ms` }}
    >
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl pointer-events-none"></div>
        {children}
    </div>
);