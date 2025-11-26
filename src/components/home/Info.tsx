import { Calendar, Clock, Users, Trophy } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export const Info = () => {
    return (
        <section id="info" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <GlassCard className="p-8 flex flex-col items-center text-center group hover:bg-blue-900/30">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Calendar className="w-8 h-8 text-blue-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">¿Cuándo?</h3>
                    <p className="text-blue-100">Martes 09 de Diciembre</p>
                    <span className="text-xs text-blue-300 mt-2">Feriado Nacional</span>
                </GlassCard>

                <GlassCard className="p-8 flex flex-col items-center text-center group hover:bg-yellow-900/30" delay={100}>
                    <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Clock className="w-8 h-8 text-yellow-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Horario</h3>
                    <p className="text-blue-100">9:30 AM - 2:00 PM</p>
                    <span className="text-xs text-blue-300 mt-2">Puntualidad requerida</span>
                </GlassCard>

                <GlassCard className="p-8 flex flex-col items-center text-center group hover:bg-green-900/30" delay={200}>
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Users className="w-8 h-8 text-green-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Modalidad</h3>
                    <p className="text-blue-100">Fútbol-6</p>
                    <span className="text-xs text-blue-300 mt-2">Máximo 8 jugadores por equipo</span>
                </GlassCard>

                <GlassCard className="p-8 flex flex-col items-center text-center group hover:bg-red-900/30" delay={300}>
                    <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Trophy className="w-8 h-8 text-red-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Inscripción</h3>
                    <p className="text-3xl font-bold text-yellow-400 my-1">S/. 8</p>
                    <span className="text-xs text-blue-300">Por equipo yape o efectivo.</span>
                </GlassCard>

            </div>
        </section>
    );
};