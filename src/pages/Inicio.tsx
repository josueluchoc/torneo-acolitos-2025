import { useState, useEffect } from 'react';
import { MainHeader } from '../components/common/MainHeader';
import { MainFooter } from '../components/common/MainFooter';
import { Hero } from '../components/home/Hero';
import { Info } from '../components/home/Info';
import { Details } from '../components/home/Details';
import { Location } from '../components/home/Location';
import { Background } from '../components/Background';
import { WhatsAppButton } from '../components/ui/WhatsAppButton'; // <--- Importamos
import { Analytics } from '@vercel/analytics/react';
import { AppDownloadCard } from '../components/ui/AppDownloadCard';

export const Inicio = () => {
    const [scrollY, setScrollY] = useState(0);

    // Manejo del Scroll para Parallax Vertical
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen font-sans text-white overflow-x-hidden bg-[#0f172a]">
            {/* Background Component */}
            <Background scrollY={scrollY} />

            {/* Content wrapper z-index 10 para estar sobre el fondo */}
            <div className="relative z-10">
                <MainHeader />

                <main>
                    <Hero scrollY={scrollY} />
                    <Info />
                    <Details />
                    <Location />
                </main>

                <MainFooter />

                {/* Botón flotante de WhatsApp */}
                <WhatsAppButton />
                <AppDownloadCard />
            </div>
            <Analytics />
        </div>
    );
};