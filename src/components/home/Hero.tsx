import React, { useState, useEffect } from 'react';
import { MapPin, Trophy, ChevronDown } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';

const HERO_IMAGES = [
    "https://i.postimg.cc/XqKtJS4Q/carrusel1.jpg",
    "https://i.postimg.cc/gjy1JFmt/carrusel2.jpg"
];

interface HeroProps {
    scrollY: number;
}

export const Hero: React.FC<HeroProps> = ({ scrollY }) => {
    const [currentImage, setCurrentImage] = useState(0);

    // Lógica del Carrusel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000); // Cambia cada 5 segundos
        return () => clearInterval(interval);
    }, []);

    // Lógica del Temporizador
    const calculateTimeLeft = () => {
        const difference = +new Date("2025-12-09T09:30:00") - +new Date();
        let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <header className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-12 overflow-hidden">

            {/* --- BACKGROUND CAROUSEL --- */}
            <div className="absolute inset-0 z-0">
                {HERO_IMAGES.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        {/* Imagen con efecto scale suave */}
                        <img
                            src={img}
                            alt={`Torneo anterior ${index + 1}`}
                            className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${index === currentImage ? 'scale-110' : 'scale-100'
                                }`}
                        />
                        {/* Gradiente oscuro para mejorar legibilidad del texto */}
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-black/60 to-blue-900/90 mix-blend-multiply"></div>
                        {/* Capa extra para uniformizar el tinte azulado del sitio */}
                        <div className="absolute inset-0 bg-blue-900/40"></div>
                    </div>
                ))}
            </div>

            {/* --- CONTENIDO PRINCIPAL --- */}
            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8" style={{ transform: `translateY(${scrollY * -0.3}px)` }}>

                <div className="inline-block animate-fade-in-down">
                    <span className="px-4 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-400/50 text-yellow-300 text-sm font-bold tracking-widest uppercase mb-4 inline-block backdrop-blur-sm">
                        Peregrinantes in Spem
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-2xl tracking-tight leading-none animate-fade-in-up">
                    TORNEO DE<br />
                    <span className="text-yellow-400">CONFRATERNIDAD</span>
                </h1>

                <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-100">
                    Grupo de Acólitos Nuestra Señora de Fátima
                </p>

                {/* Temporizador */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-8 animate-fade-in-up delay-200">
                    {[
                        { label: 'Días', value: timeLeft.days },
                        { label: 'Horas', value: timeLeft.hours },
                        { label: 'Min', value: timeLeft.minutes },
                        { label: 'Seg', value: timeLeft.seconds }
                    ].map((item, idx) => (
                        <GlassCard key={idx} className="flex flex-col items-center justify-center w-20 h-24 md:w-28 md:h-32 !rounded-xl !bg-black/30 !border-white/20 backdrop-blur-md">
                            <span className="text-3xl md:text-5xl font-bold font-mono text-yellow-400">{item.value}</span>
                            <span className="text-xs md:text-sm text-blue-200 uppercase tracking-widest mt-1">{item.label}</span>
                        </GlassCard>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                    <GlassButton primary href="#location">
                        <MapPin size={20} /> Ver Ubicación
                    </GlassButton>
                    <GlassButton href="#details">
                        <Trophy size={20} /> Detalles del Torneo
                    </GlassButton>
                </div>
            </div>

            {/* Flecha Scroll */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-80 z-10 text-white">
                <ChevronDown size={32} />
            </div>
        </header>
    );
};