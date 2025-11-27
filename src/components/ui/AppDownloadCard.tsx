import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';

export const AppDownloadCard = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [animate, setAnimate] = useState(false);

    // Efecto para activar la animación de "shake" cada cierto tiempo
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 1000); // Quitar clase después de 1s
        }, 5000); // Repetir cada 5 segundos

        return () => clearInterval(interval);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`
        fixed bottom-4 left-4 z-40 
        max-w-[90vw] w-80
        transition-all duration-500 transform
        ${animate ? 'animate-shake-periodic' : ''}
      `}
        >
            <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20 shadow-2xl p-4">

                {/* Botón Cerrar */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-2 right-2 text-white/50 hover:text-white transition-colors"
                >
                    <X size={18} />
                </button>

                <div className="flex items-center gap-4">
                    {/* Icono App */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg hover-shake">
                        <img src="../../public/app-icon.png" alt="App Mockup" className="w-8 h-8" />
                    </div>

                    {/* Texto */}
                    <div className="flex-1">
                        <h4 className="text-white font-bold text-sm leading-tight">
                            ¡Descarga nuestra App!
                        </h4>
                        <p className="text-blue-200 text-xs mt-1 leading-tight">
                            Mira la app del torneo desde tu Android.
                        </p>
                    </div>
                </div>

                {/* Botón Descarga */}
                <a
                    href="/TorneoAcolitos2025.apk"
                    download="TorneoAcolitos2025.apk"
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-white text-indigo-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition-colors text-sm"
                >
                    <Download size={16} />
                    Descargar APK
                </a>

                {/* Brillo decorativo */}
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
            </div>
        </div>
    );
};