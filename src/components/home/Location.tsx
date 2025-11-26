import React from 'react';
import { MapPin } from 'lucide-react';
import { GlassButton } from '../ui/GlassButton';
import { GlassCard } from '../ui/GlassCard';

export const Location = () => {
    return (
        <section id="location" className="py-20 px-4 relative">
            <div className="absolute inset-0 bg-blue-900/20 skew-y-3 transform origin-bottom-right -z-10"></div>

            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-center">

                <div className="flex-1 space-y-6 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Ubicación</h2>
                    <p className="text-xl text-blue-200">
                        Losa Deportiva UV3 <br />
                        <span className="text-sm opacity-70">Cercado de Lima</span>
                    </p>
                    <p className="text-gray-300">
                        Fácil acceso. Encuéntranos cerca a la unidad vecinal.
                    </p>
                    <div className="pt-4 flex justify-center lg:justify-start">
                        <GlassButton primary href="https://maps.app.goo.gl/Yqwjmo9EcLsH3Hxy8">
                            Abrir en Google Maps
                        </GlassButton>
                    </div>
                </div>

                <div className="flex-1 w-full h-[400px] relative">
                    <GlassCard className="w-full h-full p-2 !rounded-3xl">
                        <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-800 group cursor-pointer">
                            <img
                                src="https://i.postimg.cc/BZFDXZDY/ubicacion.png"
                                alt="Mapa UV3"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-red-500 p-3 rounded-full shadow-lg animate-bounce">
                                    <MapPin className="text-white w-8 h-8" />
                                </div>
                            </div>
                            <a
                                href="https://maps.app.goo.gl/Yqwjmo9EcLsH3Hxy8"
                                target="_blank"
                                rel="noreferrer"
                                className="absolute inset-0 z-10"
                                aria-label="Abrir mapa"
                            ></a>
                        </div>
                    </GlassCard>
                </div>

            </div>
        </section>
    );
};