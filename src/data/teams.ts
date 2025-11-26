//importamos las imagenes de los logos
import logoDesamparados from "../../public/desamparados.png";
import logoFatima from "../../public/fatima.png";
import logoCristoSalvador from "../../public/cristosalvador.png";
import logoTrinidad from "../../public/santisimatrinidad.png";
import logoEspirituSanto from "../../public/espiritusanto.png";
import logoLaEncarnacion from "../../public/laencarnacion.png";
import logoSanPioX from "../../public/sanpiox.png";
import logoSanPabloApostol from "../../public/sanpabloapostol.png";

// Definimos los tipos para tener autocompletado y evitar errores
export type TeamStatus = "Confirmado" | "Por confirmar" | "Locales";

export interface Team {
    id: number;
    name: string;
    shortName?: string; // Nombre corto opcional para móviles
    status: TeamStatus;
    logo?: string; // URL de la imagen o import local
    color: string; // Color de respaldo si no hay logo
}

export interface GroupData {
    A: Team[];
    B: Team[];
}

// --- BASE DE DATOS DE EQUIPOS ---
// NOTA: Para usar tus imágenes locales, tienes dos opciones:
// 1. Poner las imágenes en la carpeta 'public' y usar "/nombre-imagen.png"
// 2. Importarlas arriba: import logoFatima from '../assets/logo_fatima.png'; y usarlas en la variable.

export const GROUPS: GroupData = {
    A: [
        {
            id: 1,
            name: "Acólitos P. Desamparados y San José",
            status: "Confirmado",
            color: "bg-red-500",
            logo: logoDesamparados // <-- AQUÍ PONES LA RUTA DE TU IMAGEN. Ej: "/logos/desamparados.png"
        },
        {
            id: 2,
            name: "Acólitos P. La Encarnación",
            status: "Confirmado",
            color: "bg-orange-500",
            logo: logoLaEncarnacion
        },
        {
            id: 3,
            name: "Acólitos P. San Pío X",
            status: "Confirmado",
            color: "bg-yellow-500",
            logo: logoSanPioX
        },
        {
            id: 4,
            name: "Acólitos P. San Pablo Apóstol",
            status: "Confirmado",
            color: "bg-emerald-500",
            logo: logoSanPabloApostol
        }
    ],
    B: [
        {
            id: 5,
            name: "Acólitos P. Nuestra Señora de Fátima",
            status: "Locales",
            color: "bg-blue-600",
            logo: logoFatima
        },
        {
            id: 6,
            name: "Acólitos P. Cristo Salvador",
            status: "Por confirmar",
            color: "bg-purple-500",
            logo: logoCristoSalvador
        },
        {
            id: 7,
            name: "Acólitos P. Santísima Trinidad",
            status: "Por confirmar",
            color: "bg-pink-500",
            logo: logoTrinidad
        },
        {
            id: 8,
            name: "Acólitos P. Espíritu Santo",
            status: "Por confirmar",
            color: "bg-cyan-500",
            logo: logoEspirituSanto
        }
    ]
};

// Helper para obtener una lista plana de todos los equipos (útil para buscar por ID)
export const getAllTeams = (): Team[] => {
    return [...GROUPS.A, ...GROUPS.B];
};