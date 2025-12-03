//importamos las imagenes de los logos
import logoDesamparados from "../../public/desamparados.png";
import logoFatima from "../../public/fatima.png";
//import logoCristoSalvador from "../../public/cristosalvador.png";
//import logoTrinidad from "../../public/santisimatrinidad.png";
import logoEspirituSanto from "../../public/espiritusanto.png";
import logoLaEncarnacion from "../../public/laencarnacion.png";
import logoSanPioX from "../../public/sanpiox.png";
//import logoSanPabloApostol from "../../public/sanpabloapostol.png";
import logoLaMerced from "../../public/lamerced.png";
import logoNuestraSeñoraDeLaAlegria from "../../public/nuestraseñoradelaalegria.png";
//import logoDivinaMisericordia from "../../public/divinamisericordia.png";
import logoSanPabloApostolBreña from "../../public/sanpabloapostolbreña.png";

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
            name: "Acólitos P. Nuestra Señora de Fátima",
            status: "Locales",
            color: "bg-blue-600",
            logo: logoFatima // <-- AQUÍ PONES LA RUTA DE TU IMAGEN. Ej: "/logos/desamparados.png"
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
            name: "Acólitos P. Desamparados y San José",
            status: "Confirmado",
            color: "bg-red-500",
            logo: logoDesamparados
        }
    ],
    B: [
        {
            id: 5,
            name: "Acólitos P. San Pablo Apostol",
            status: "Por confirmar",
            color: "bg-purple-500",
            logo: logoSanPabloApostolBreña
        },
        {
            id: 6,
            name: "Acólitos P. La Merced",
            status: "Confirmado",
            color: "bg-purple-500",
            logo: logoLaMerced
        },
        {
            id: 7,
            name: "Acólitos P. Nuestra Señora de la Alegría",
            status: "Confirmado",
            color: "bg-pink-500",
            logo: logoNuestraSeñoraDeLaAlegria
        },
        {
            id: 8,
            name: "Acólitos P. Espíritu Santo",
            status: "Confirmado",
            color: "bg-cyan-500",
            logo: logoEspirituSanto
        }
    ]
};

// Helper para obtener una lista plana de todos los equipos (útil para buscar por ID)
export const getAllTeams = (): Team[] => {
    return [...GROUPS.A, ...GROUPS.B];
};
