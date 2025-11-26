import { useState, useEffect } from 'react';
import { Background } from '../components/Background';
import { MainHeader } from '../components/common/MainHeader';
import { MainFooter } from '../components/common/MainFooter';
import { GlassCard } from '../components/ui/GlassCard';
import { Shield, AlertTriangle, Clock, CheckCircle, Gavel, Users } from 'lucide-react';

const RuleSection = ({ title, icon: Icon, children, delay }: any) => (
    <GlassCard className="p-6 md:p-8" delay={delay}>
        <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3 border-b border-white/10 pb-2">
            <Icon className="w-6 h-6 md:w-8 md:h-8" />
            {title}
        </h3>
        <div className="space-y-3 text-blue-100 leading-relaxed">
            {children}
        </div>
    </GlassCard>
);

export const Bases = () => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen font-sans text-white overflow-x-hidden bg-[#0f172a]">
            <Background scrollY={scrollY} />
            <div className="relative z-10">
                <MainHeader />

                <main className="pt-32 pb-20 px-4 md:px-6 max-w-5xl mx-auto space-y-12">

                    <div className="text-center space-y-4 animate-fade-in-down">
                        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">
                            BASES DEL TORNEO
                        </h1>
                        <p className="text-xl text-blue-200">Reglamento Oficial - Edición 2025</p>
                    </div>

                    <div className="grid gap-8">
                        {/* Información General */}
                        <RuleSection title="1. Información General" icon={Shield} delay={100}>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> <strong>Fecha:</strong> Martes 9 de Diciembre</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> <strong>Citación:</strong> 9:30 AM</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> <strong>Inicio:</strong> 10:00 AM (Hora exacta)</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> <strong>Tipo:</strong> Fútbol 6</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> <strong>Equipos:</strong> 8 Equipos en total</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> <strong>Formato:</strong> Grupos + Semis + Final</li>
                            </ul>
                        </RuleSection>

                        {/* Formato */}
                        <RuleSection title="2. Formato de Juego" icon={Users} delay={200}>
                            <p>
                                El torneo contará con <strong>2 grupos de 4 equipos</strong> cada uno.
                                Clasifican los dos primeros de cada grupo a semifinales.
                            </p>
                            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30 mt-2">
                                <p>⏱ <strong>Duración:</strong> Dos tiempos de 5 minutos (Total 10 min).</p>
                                <p>⚽ <strong>Garantía:</strong> Todos los equipos jugarán mínimo 3 partidos.</p>
                            </div>
                        </RuleSection>

                        {/* Reglamento General */}
                        <RuleSection title="3. Reglamento de Conducta" icon={Gavel} delay={300}>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-bold text-white mb-1">Puntualidad (W.O.)</h4>
                                    <p className="text-sm">Si un equipo no se presenta a la hora de su partido, se declarará NP y se otorgará victoria de 3–0 al rival.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Juego Limpio</h4>
                                    <p className="text-sm">Cambios libres. Máximo recomendado 10 jugadores. Está prohibido insultar o agredir.</p>
                                </div>
                                <div className="bg-red-500/20 p-4 rounded-lg border border-red-500/50 flex gap-3 items-start">
                                    <AlertTriangle className="text-red-400 shrink-0 mt-1" />
                                    <p className="text-sm text-red-100">
                                        <strong>Expulsión Directa:</strong> Cualquier agresión física o insultos fuertes conllevarán tarjeta roja y expulsión inmediata del torneo. Si un equipo protesta agresivamente en grupo, será descalificado.
                                    </p>
                                </div>
                            </div>
                        </RuleSection>

                        {/* Premiación */}
                        <RuleSection title="Cierre y Premiación" icon={Clock} delay={400}>
                            <p>La final se jugará a las <strong>12:45 PM</strong> (20 minutos de duración).</p>
                            <p>La premiación general, reconocimientos y fotos oficiales serán a la <strong>1:15 PM</strong>.</p>
                        </RuleSection>

                    </div>
                </main>

                <MainFooter />
            </div>
        </div>
    );
};