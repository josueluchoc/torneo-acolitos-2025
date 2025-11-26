import React from 'react';

interface GlassButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    primary?: boolean;
}

export const GlassButton: React.FC<GlassButtonProps> = ({ children, onClick, href, primary = false }) => {
    const baseClasses = `
    px-8 py-3 rounded-full font-bold text-lg transition-all duration-300
    flex items-center justify-center gap-2
    shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
    hover:-translate-y-1 active:scale-95
    cursor-pointer
`;

    const variantClasses = primary
        ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white border border-white/30 hover:shadow-[0_0_20px_rgba(255,165,0,0.5)]"
        : "bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20";

    if (href) {
        return (
            <a href={href} target={href.startsWith('#') ? '_self' : '_blank'} rel="noopener noreferrer" className={`${baseClasses} ${variantClasses}`}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
            {children}
        </button>
    );
};