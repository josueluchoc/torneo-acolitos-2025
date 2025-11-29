import { useState, useEffect } from 'react';
import { MainHeader } from '../components/common/MainHeader';
import { MainFooter } from '../components/common/MainFooter';
import { Background } from '../components/Background';
import { TrophyScene } from '../components/3d/TrophyScene';
import { GlassCard } from '../components/ui/GlassCard';
import { Trophy, Star, Crown, Volleyball } from 'lucide-react';

// --- COMPONENTE DEL TELÓN ROJO ---
const RedCurtain = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Aumentamos un poco el tiempo para asegurar que la transición termine
    const timer = setTimeout(() => setIsVisible(false), 3500); 
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex animate-curtain-container-fade">
      {/* Telón Izquierdo */}
      <div className="w-1/2 h-full bg-gradient-to-r from-red-900 via-red-700 to-red-800 shadow-[10px_0_20px_rgba(0,0,0,0.5)] animate-curtain-left relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/30 to-transparent"></div>
      </div>
      
      {/* Telón Derecho */}
      <div className="w-1/2 h-full bg-gradient-to-l from-red-900 via-red-700 to-red-800 shadow-[-10px_0_20px_rgba(0,0,0,0.5)] animate-curtain-right relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/30 to-transparent"></div>
      </div>
    </div>
  );
};

export const HallOfFame = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen font-sans text-white overflow-x-hidden bg-[#0f172a]">
      <Background scrollY={scrollY} />
      
      <RedCurtain />
      
      <div className="relative z-10">
        <MainHeader />

        <main className="pt-24 md:pt-32 pb-16 px-4 md:px-6 max-w-6xl mx-auto relative">
          
          {/* Título y Decoración */}
          <div 
            className="text-center mb-8 md:mb-12 animate-fade-in-down opacity-0 relative z-20"
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }} // <--- CORRECCIÓN AQUÍ
          >
            <div className="inline-block relative">
               <Crown size={40} className="absolute -top-6 -left-6 text-yellow-400 rotate-[-15deg] hidden md:block" />
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-700 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] leading-tight">
                SALÓN DE LA FAMA
                </h1>
               <Crown size={40} className="absolute -bottom-4 -right-4 text-yellow-400 rotate-[15deg] hidden md:block" />
            </div>

            <p className="text-lg md:text-xl text-yellow-100 mt-4 flex items-center justify-center gap-2 font-medium">
              <Star className="text-yellow-400 fill-yellow-400 w-5 h-5 md:w-6 md:h-6 animate-pulse" />
              Gloria Eterna al Campeón 2025
              <Star className="text-yellow-400 fill-yellow-400 w-5 h-5 md:w-6 md:h-6 animate-pulse" />
            </p>
          </div>

          {/* Grid Principal */}
          <div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 animate-fade-in-up opacity-0"
            style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }} // <--- CORRECCIÓN AQUÍ
          >
            
            {/* COLUMNA 1: TROFEO 3D */}
            <div className="relative w-full order-1 lg:order-none">
              <div className="absolute inset-0 bg-gradient-radial from-yellow-500/40 via-yellow-500/10 to-transparent blur-[80px] rounded-full pointer-events-none transform scale-110"></div>
              
              <GlassCard className="h-auto !bg-black/30 !border-yellow-500/40 overflow-hidden relative shadow-[0_0_50px_rgba(234,179,8,0.2)]">
                <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10 bg-yellow-500/30 backdrop-blur-md px-3 py-1 rounded-full border border-yellow-500/50 flex items-center gap-2 shadow-lg">
                  <Trophy size={14} className="text-yellow-300" />
                  <span className="text-[10px] md:text-xs font-bold text-yellow-300 uppercase tracking-widest">Trofeo Oficial 3D</span>
                </div>
                
                <div className="relative z-0 my-4 md:my-0">
                   <TrophyScene />
                </div>
                
                <div className="absolute bottom-3 w-full text-center pointer-events-none">
                  <p className="text-yellow-200/70 text-xs md:text-sm font-medium bg-black/20 inline-block px-4 py-1 rounded-full backdrop-blur-sm">
                     👆 Gira y haz zoom para ver los detalles
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* COLUMNA 2: INFORMACIÓN */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-none relative">
              <GlassCard className="p-6 md:p-8 text-center border-t-4 border-t-yellow-400 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] relative overflow-visible">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-yellow-400 to-yellow-600 p-3 rounded-full shadow-lg border-2 border-yellow-300">
                    <Crown className="w-8 h-8 text-white fill-white" />
                </div>
                
                <div className="mt-6">
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-3 leading-tight">¿QUIÉN HARÁ HISTORIA?</h2>
                    <p className="text-blue-100 text-base md:text-lg leading-relaxed px-2 md:px-8">
                      Este trofeo único de 40cm, con base de madera roja y detalles en oro, espera a su dueño legítimo.
                      <br className="hidden md:block"/>
                      <span className="font-bold text-yellow-400 block mt-2">Martes 9 de Diciembre | Gran Final</span>
                    </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-700/20 rounded-xl p-4 border border-yellow-500/30 shadow-inner flex flex-col items-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Trophy className="w-8 h-8 text-yellow-400 mb-2" />
                    <span className="block text-xl md:text-2xl font-black text-yellow-400">1er</span>
                    <span className="text-xs md:text-sm text-yellow-200 uppercase font-bold tracking-wider">Campeón</span>
                    <p className="text-white font-medium mt-2 text-sm md:text-base">Trofeo</p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-xl p-4 border border-gray-400/30 shadow-inner flex flex-col items-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gray-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     <Volleyball className="w-8 h-8 text-gray-300 mb-2" />
                    <span className="block text-xl md:text-2xl font-black text-gray-300">Máximo</span>
                    <span className="text-xs md:text-sm text-gray-300 uppercase font-bold tracking-wider">Goleador</span>
                    <p className="text-white font-medium mt-2 text-sm md:text-base">Reconocimiento</p>
                  </div>
                </div>
              </GlassCard>

              <div className="text-center mt-8">
                <p className="text-blue-200/80 text-sm mb-4 font-medium">Sigue el camino hacia la gloria</p>
                <a href="/fixture" className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-black py-3 md:py-4 px-8 md:px-10 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(234,179,8,0.4)] hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] hover:scale-105 active:scale-95 overflow-hidden">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
                  <Trophy size={20} className="group-hover:rotate-12 transition-transform" />
                  <span className="tracking-wide text-base md:text-lg relative z-10">VER TABLA DE POSICIONES</span>
                </a>
              </div>
            </div>

          </div>
        </main>

        <MainFooter />
      </div>
    </div>
  );
};