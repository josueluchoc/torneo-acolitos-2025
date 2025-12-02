import type { TeamStatus } from "../../data/teams";
import { Check, Home } from "lucide-react";

interface TeamStatusBadgeProps {
    status: TeamStatus;
}

export const TeamStatusBadge = ({ status }: TeamStatusBadgeProps) => {
    if (status === "Confirmado") {
        return (
            <span className="text-xs px-2 py-0.5 rounded bg-green-500/20 text-green-300 border border-green-500/30 font-medium flex items-center gap-1 w-fit">
                Confirmado <Check size={12} />
            </span>
        );
    }

    if (status === "Por confirmar") {
        return (
            <span className="text-xs px-2 py-0.5 rounded bg-gray-500/20 text-gray-300 border border-gray-500/30 font-medium flex items-center gap-1 w-fit">
                Por confirmar
                <span className="flex gap-0.5 mt-1">
                    <span className="w-1 h-1 bg-gray-300 rounded-full animate-bounce-custom" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full animate-bounce-custom" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full animate-bounce-custom" style={{ animationDelay: '300ms' }}></span>
                </span>
            </span>
        );
    }

    if (status === "Locales") {
        return (
            <span className="text-xs px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 font-medium flex items-center gap-1 w-fit">
                Locales <Home size={12} />
            </span>
        );
    }

    // Default for others
    return (
        <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-blue-200">
            {status}
        </span>
    );
};
