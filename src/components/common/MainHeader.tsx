import { useState } from 'react';
import { ExternalLink, Menu, X, Home, FileText, Calendar } from 'lucide-react';
import { GlassButton } from '../ui/GlassButton';
import { Link, useLocation } from 'react-router-dom';

export const MainHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Función para cerrar menú al navegar
    const handleNav = () => setIsMenuOpen(false);

    const navLinks = [
        { name: 'Inicio', path: '/', icon: <Home size={18} /> },
        { name: 'Fixture & Grupos', path: '/fixture', icon: <Calendar size={18} /> },
        { name: 'Bases del Torneo', path: '/bases', icon: <FileText size={18} /> },
    ];

    const isActive = (path: string) => location.pathname === path
        ? "text-yellow-400 font-bold bg-white/10"
        : "text-blue-100 hover:text-yellow-400";

    return (
        <>
            <nav className="fixed w-full z-50 px-6 py-4 transition-all duration-300 bg-black/20 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 z-50 relative" onClick={handleNav}>
                        <img src="https://i.postimg.cc/DwRnJhqK/fatima.png" alt="Logo Acolitos Fátima" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
                        <div className="text-left leading-tight">
                            <h1 className="font-bold text-sm sm:text-lg tracking-wider text-white">ACÓLITOS NSF</h1>
                            <p className="text-xs text-blue-200">Peregrinantes in Spem</p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex gap-2 bg-black/20 p-1 rounded-full border border-white/5 backdrop-blur-sm">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 text-sm ${isActive(link.path)}`}
                                >
                                    {link.icon} {link.name}
                                </Link>
                            ))}
                        </div>
                        <GlassButton href="https://maps.app.goo.gl/Yqwjmo9EcLsH3Hxy8">
                            Mapa <ExternalLink size={16} />
                        </GlassButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden z-50 text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`
        fixed inset-0 z-40 bg-[#0f172a]/95 backdrop-blur-xl transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center gap-8
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
    `}>
                {navLinks.map((link, idx) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        onClick={handleNav}
                        className="text-2xl font-bold text-white flex items-center gap-4 hover:text-yellow-400 transition-colors"
                        style={{ animationDelay: `${idx * 100}ms` }}
                    >
                        {link.icon} {link.name}
                    </Link>
                ))}

                <div className="mt-8">
                    <GlassButton href="https://maps.app.goo.gl/Yqwjmo9EcLsH3Hxy8">
                        Ver Mapa UV3
                    </GlassButton>
                </div>
            </div>
        </>
    );
};