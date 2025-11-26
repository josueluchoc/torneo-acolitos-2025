import React, { useEffect, useState } from 'react';

interface BackgroundProps {
    scrollY: number;
}

export const Background: React.FC<BackgroundProps> = ({ scrollY }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <div className="fixed inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#1e1b4b] to-[#312e81] z-0"></div>
            <div
                className="fixed inset-0 z-0 opacity-60 pointer-events-none"
                style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            >
                <div
                    className="absolute top-0 left-[-20%] w-[800px] h-[800px] bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
                    style={{ transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)` }}
                ></div>
                <div
                    className="absolute top-[20%] right-[-20%] w-[600px] h-[600px] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
                    style={{ transform: `translate(${mousePos.x * -0.03}px, ${mousePos.y * -0.03}px)` }}
                ></div>
                <div
                    className="absolute -bottom-32 left-[20%] w-[600px] h-[600px] bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"
                    style={{ transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)` }}
                ></div>
            </div>
            <div className="fixed inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        </>
    );
};