import { useState, useEffect } from 'react';
import { Background } from '../components/Background';
import { MainHeader } from '../components/common/MainHeader';
import { MainFooter } from '../components/common/MainFooter';
import { GlassCard } from '../components/ui/GlassCard';
import { Trophy, MapPin, Clock } from 'lucide-react';
import { GROUPS, getAllTeams } from '../data/teams';
import type { Team } from '../data/teams';
import { TeamStatusBadge } from '../components/ui/TeamStatusBadge';

// --- DATA MATCHES (Esto se queda aquí o podría ir a otro archivo 'matches.ts') ---
const matchesData = [
    { id: 1, time: "10:00", t1: 1, t2: 2, group: "A", phase: "Fecha 1" },
    { id: 2, time: "10:10", t1: 3, t2: 4, group: "A", phase: "Fecha 1" },
    { id: 3, time: "10:20", t1: 5, t2: 6, group: "B", phase: "Fecha 1" },
    { id: 4, time: "10:30", t1: 7, t2: 8, group: "B", phase: "Fecha 1" },

    { id: 5, time: "10:45", t1: 1, t2: 3, group: "A", phase: "Fecha 2" },
    { id: 6, time: "10:55", t1: 2, t2: 4, group: "A", phase: "Fecha 2" },
    { id: 7, time: "11:05", t1: 5, t2: 7, group: "B", phase: "Fecha 2" },
    { id: 8, time: "11:15", t1: 6, t2: 8, group: "B", phase: "Fecha 2" },

    { id: 9, time: "11:25", t1: 1, t2: 4, group: "A", phase: "Fecha 3" },
    { id: 10, time: "11:35", t1: 2, t2: 3, group: "A", phase: "Fecha 3" },
    { id: 11, time: "11:45", t1: 5, t2: 8, group: "B", phase: "Fecha 3" },
    { id: 12, time: "11:55", t1: 6, t2: 7, group: "B", phase: "Fecha 3" },
];

const finalsData = [
    { title: "Semifinal 1", time: "12:10", match: "1ro Gr. A vs 2do Gr. B" },
    { title: "Semifinal 2", time: "12:20", match: "1ro Gr. B vs 2do Gr. A" },
    { title: "GRAN FINAL", time: "12:45", match: "Ganador Semi 1 vs Ganador Semi 2", isFinal: true },
];

// --- COMPONENTS ---

// Ahora recibe el objeto Team completo para decidir si mostrar logo o iniciales
const TeamAvatar = ({ team, size = "md" }: { team: Team, size?: "sm" | "md" | "lg" }) => {
    const sizeClasses = size === "sm" ? "w-8 h-8 text-xs" : size === "md" ? "w-12 h-12 text-sm" : "w-16 h-16 text-xl";

    // Si hay logo, mostramos la imagen
    if (team.logo) {
        return (
            <img
                src={team.logo}
                alt={team.name}
                className={`${sizeClasses} rounded-full object-cover bg-white/10 shadow-lg border-2 border-white/20 shrink-0`}
            />
        );
    }

    // Fallback: Iniciales
    const initials = team.name.replace("Acólitos P. ", "").split(" ").map(n => n[0]).join("").substring(0, 2);

    return (
        <div className={`${sizeClasses} rounded-full ${team.color || 'bg-gray-500'} flex items-center justify-center font-bold text-white shadow-lg border-2 border-white/20 shrink-0`}>
            {initials}
        </div>
    );
};

const MatchCard = ({ match, allTeams }: { match: any, allTeams: Team[] }) => {
    const team1 = allTeams.find((t) => t.id === match.t1);
    const team2 = allTeams.find((t) => t.id === match.t2);

    if (!team1 || !team2) return null;

    return (
        <div className="flex items-center justify-between bg-white/5 p-2 md:p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
            {/* Team 1 */}
            <div className="flex flex-col items-center justify-center gap-1 md:gap-2 w-1/3 text-center">
                <TeamAvatar team={team1} size="sm" />
                <span className="text-[10px] sm:text-xs md:text-sm text-blue-100 leading-tight w-full">
                    {team1.name.replace("Acólitos P. ", "")}
                </span>
            </div>

            {/* Time & VS */}
            <div className="flex flex-col items-center justify-center w-1/3 shrink-0">
                <span className="text-[10px] md:text-xs text-yellow-500 font-mono mb-1">{match.time} AM</span>
                <div className="bg-black/30 px-2 md:px-3 py-1 rounded text-[10px] md:text-xs text-gray-400">VS</div>
            </div>

            {/* Team 2 */}
            <div className="flex flex-col-reverse items-center justify-center gap-1 md:gap-2 w-1/3 text-center">
                <span className="text-[10px] sm:text-xs md:text-sm text-blue-100 leading-tight w-full">
                    {team2.name.replace("Acólitos P. ", "")}
                </span>
                <TeamAvatar team={team2} size="sm" />
            </div>
        </div>
    );
};

export const Fixture = () => {
    const [scrollY, setScrollY] = useState(0);
    const [activeTab, setActiveTab] = useState<'groups' | 'schedule'>('groups');

    // Obtenemos todos los equipos desde el archivo de data
    const allTeams = getAllTeams();

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

                <main className="pt-32 pb-20 px-4 md:px-8 max-w-[98%] mx-auto space-y-8">

                    <div className="text-center animate-fade-in-down">
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-2">FIXTURE OFICIAL</h1>
                        <p className="text-blue-200 flex items-center justify-center gap-2">
                            <MapPin size={16} /> Losa Deportiva UV3
                        </p>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="flex justify-center gap-4 mb-8">
                        <button
                            onClick={() => setActiveTab('groups')}
                            className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'groups' ? 'bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)]' : 'bg-white/10 hover:bg-white/20'}`}
                        >
                            Fase de Grupos
                        </button>
                        <button
                            onClick={() => setActiveTab('schedule')}
                            className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'schedule' ? 'bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)]' : 'bg-white/10 hover:bg-white/20'}`}
                        >
                            Cronograma
                        </button>
                    </div>

                    {/* GROUPS VIEW */}
                    {activeTab === 'groups' && (
                        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
                            {/* Group A */}
                            <GlassCard className="p-6">
                                <h3 className="text-2xl font-bold text-center mb-6 text-yellow-400 border-b border-white/10 pb-4">GRUPO A</h3>
                                <div className="space-y-4">
                                    {GROUPS.A.map((team) => (
                                        <div key={team.id} className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors">
                                            <TeamAvatar team={team} />
                                            <div>
                                                <p className="font-bold text-lg">{team.name}</p>
                                                <TeamStatusBadge status={team.status} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>

                            {/* Group B */}
                            <GlassCard className="p-6" delay={100}>
                                <h3 className="text-2xl font-bold text-center mb-6 text-blue-400 border-b border-white/10 pb-4">GRUPO B</h3>
                                <div className="space-y-4">
                                    {GROUPS.B.map((team) => (
                                        <div key={team.id} className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors">
                                            <TeamAvatar team={team} />
                                            <div>
                                                <p className="font-bold text-lg">{team.name}</p>
                                                <TeamStatusBadge status={team.status} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        </div>
                    )}

                    {/* SCHEDULE VIEW */}
                    {activeTab === 'schedule' && (
                        <div className="space-y-8 animate-fade-in-up">

                            {/* Phase Matches Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                {['Fecha 1', 'Fecha 2', 'Fecha 3'].map((phase, idx) => (
                                    <GlassCard key={phase} className="p-4 md:p-6 h-full" delay={idx * 100}>
                                        <div className="flex items-center gap-2 mb-4">
                                            <Clock className="text-yellow-400 shrink-0" size={20} />
                                            <h3 className="text-lg md:text-xl font-bold truncate">{phase}</h3>
                                        </div>
                                        <div className="space-y-3">
                                            {matchesData.filter(m => m.phase === phase).map(match => (
                                                <MatchCard key={match.id} match={match} allTeams={allTeams} />
                                            ))}
                                        </div>
                                    </GlassCard>
                                ))}
                            </div>

                            {/* Finals */}
                            <GlassCard className="p-6 bg-gradient-to-br from-yellow-900/40 to-black/40 border-yellow-500/30" delay={400}>
                                <div className="flex items-center gap-2 mb-6">
                                    <Trophy className="text-yellow-400" />
                                    <h3 className="text-xl font-bold text-yellow-100">Fase Final</h3>
                                </div>
                                <div className="space-y-4">
                                    {finalsData.map((match, idx) => (
                                        <div key={idx} className={`p-4 rounded-xl border ${match.isFinal ? 'bg-yellow-500/20 border-yellow-400/50' : 'bg-white/5 border-white/10'}`}>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className={`font-bold ${match.isFinal ? 'text-yellow-400 uppercase tracking-widest' : 'text-blue-200'}`}>{match.title}</span>
                                                <span className="text-sm font-mono text-white bg-black/40 px-2 py-1 rounded">{match.time} PM</span>
                                            </div>
                                            <p className="text-center text-lg md:text-xl font-medium">{match.match}</p>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>

                        </div>
                    )}

                </main>
                <MainFooter />
            </div>
        </div>
    );
};