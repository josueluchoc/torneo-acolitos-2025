import { CheckCircle, Shield } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export const Details = () => {
    return (
        <section id="details" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <GlassCard className="p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">
                            Detalles del Evento
                        </span>
                    </h2>

                    <div className="space-y-6 text-lg text-blue-100">
                        <div className="flex items-start gap-4">
                            <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                            <p>El torneo se realizará en la <strong className="text-white">Losa Deportiva UV3</strong>. Un espacio amplio ideal para disfrutar del deporte.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                            <p>Está organizado por el grupo de acólitos de la parroquia <strong className="text-white">Nuestra Señora de Fátima</strong> (Cercado de Lima).</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                            <p>El lema <em className="text-yellow-300">"Peregrinantes in Spem"</em> nos invita a vivir la confraternidad como peregrinos de esperanza.</p>
                        </div>

                        <div className="mt-8 p-6 bg-blue-900/30 rounded-xl border border-blue-500/30">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                <Shield className="w-4 h-4 text-blue-400" /> Importante
                            </h4>
                            <p className="text-sm">Se recomienda llegar 15 minutos antes (9:15 AM) para el calentamiento y sorteo de partidos. Traer ropa deportiva cómoda y tomatodos con agua.</p>
                        </div>
                    </div>

                </GlassCard>
            </div>
        </section>
    );
};
