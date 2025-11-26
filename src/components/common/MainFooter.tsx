
export const MainFooter = () => {
    return (
        <footer className="py-12 bg-black/40 backdrop-blur-lg text-center border-t border-white/10 relative z-10">
            <div className="max-w-4xl mx-auto px-4">
                <img src="https://i.postimg.cc/DwRnJhqK/fatima.png" alt="Logo Acolitos Fátima" className="h-12 w-12 sm:h-16 sm:w-16 object-contain mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Parroquia Nuestra Señora del Rosario de Fátima</h3>
                <p className="text-blue-200 mb-6">Grupo de Acólitos "Nuestra Señora de Fátima"</p>
                <div className="text-sm text-gray-500">
                    © 2025 Torneo de Confraternidad. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};