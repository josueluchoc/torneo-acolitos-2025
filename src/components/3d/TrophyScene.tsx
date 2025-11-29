import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Stage, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// --- MATERIALES ---

// Oro Metálico Rico y Brillante
const goldMaterial = new THREE.MeshStandardMaterial({
    color: "#FFD700", // Oro puro
    metalness: 1,
    roughness: 0.2, // Muy pulido
    envMapIntensity: 1.5, // Reflejos intensos
});

// Pedestal Negro Brillante
const blackPedestalMaterial = new THREE.MeshStandardMaterial({
    color: "#111111",
    metalness: 0.6,
    roughness: 0.1, // Casi espejo
});

// Base de Madera Roja con Textura
// Nota: Para producción real, usarías texturas de madera reales.
// Aquí simulamos madera roja pulida.
const redWoodMaterial = new THREE.MeshStandardMaterial({
    color: "#8B0000", // Rojo oscuro profundo
    metalness: 0.1,
    roughness: 0.4,
});

// Placa Dorada Grabada
const plateMaterial = new THREE.MeshStandardMaterial({
    color: "#FFC125", // Oro más claro
    metalness: 0.9,
    roughness: 0.3,
});

// --- GEOMETRÍAS COMPLEJAS (Asas Ornamentales) ---
// Creamos una forma personalizada para las asas curvas y ornamentadas
const createOrnateHandleGeometry = () => {
    const shape = new THREE.Shape();
    // Curva exterior elegante
    shape.moveTo(0, 0);
    shape.bezierCurveTo(1.5, 0.5, 1.8, 2.5, 0.5, 3.5);
    // Curva interior para cerrar la forma
    shape.bezierCurveTo(1.2, 2.5, 1.0, 0.8, 0, 0);

    const extrudeSettings = {
        steps: 2,
        depth: 0.2, // Grosor del asa
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 8,
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
};


const TrophyModel = (props: any) => {
    const groupRef = useRef<THREE.Group>(null);
    // Memoizamos la geometría compleja para no recrearla en cada frame
    const handleGeometry = useMemo(() => createOrnateHandleGeometry(), []);

    // Animación de rotación constante
    useFrame((_state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.5; // Velocidad de giro suave
        }
    });

    return (
        <group ref={groupRef} {...props}>
            {/* --- COPA DORADA PRINCIPAL --- */}

            {/* Borde Superior Ornamentado */}
            <mesh position={[0, 3.8, 0]} material={goldMaterial}>
                <torusGeometry args={[1.45, 0.1, 16, 64]} />
            </mesh>

            {/* Cáliz (Cuerpo de la copa) */}
            <mesh position={[0, 2.5, 0]} material={goldMaterial}>
                {/* Cilindro cónico con más segmentos para suavidad */}
                <cylinderGeometry args={[1.4, 0.7, 2.6, 64, 1, true]} />
            </mesh>
            {/* Tapa inferior del cáliz */}
            <mesh position={[0, 1.2, 0]} rotation={[-Math.PI / 2, 0, 0]} material={goldMaterial}>
                <circleGeometry args={[0.7, 64]} />
            </mesh>

            {/* Tallo Decorado */}
            {/* Anillo superior del tallo */}
            <mesh position={[0, 1.1, 0]} material={goldMaterial}>
                <torusGeometry args={[0.4, 0.08, 16, 32]} />
            </mesh>
            {/* Columna central del tallo */}
            <mesh position={[0, 0.7, 0]} material={goldMaterial}>
                <cylinderGeometry args={[0.25, 0.25, 0.8, 32]} />
            </mesh>
            {/* Anillo inferior del tallo */}
            <mesh position={[0, 0.3, 0]} material={goldMaterial}>
                <torusGeometry args={[0.4, 0.08, 16, 32]} />
            </mesh>


            {/* --- ASAS ORNAMENTALES --- */}
            {/* Asa Izquierda */}
            <mesh position={[-1.4, 1.8, 0]} rotation={[0, Math.PI, 0]} material={goldMaterial} geometry={handleGeometry}>
            </mesh>
            {/* Asa Derecha */}
            <mesh position={[1.4, 1.8, 0]} material={goldMaterial} geometry={handleGeometry}>
            </mesh>


            {/* --- BASE DE DOBLE NIVEL --- */}

            {/* Nivel 1: Pedestal Negro Brillante (Conexión copa-base) */}
            <mesh position={[0, -0.1, 0]} material={blackPedestalMaterial}>
                {/* Base cónica invertida */}
                <cylinderGeometry args={[0.6, 1.2, 0.8, 64]} />
            </mesh>

            {/* Nivel 2: Base Cuadrada de Madera Roja */}
            <mesh position={[0, -0.8, 0]} material={redWoodMaterial}>
                {/* Caja biselada para realismo */}
                <boxGeometry args={[2.8, 0.6, 2.8]} />
            </mesh>
            {/* Borde superior de la base de madera */}
            <mesh position={[0, -0.5, 0]} material={redWoodMaterial}>
                <boxGeometry args={[2.4, 0.1, 2.4]} />
            </mesh>


            {/* --- PLACA Y TEXTO GRABADO --- */}

            {/* Placa Dorada Frontal */}
            <mesh position={[0, -0.8, 1.41]} material={plateMaterial}>
                <boxGeometry args={[2.2, 0.45, 0.02]} />
            </mesh>

            {/* Texto: CAMPEÓN */}
            <Text
                position={[0, -0.72, 1.43]} // Ligeramente delante de la placa
                fontSize={0.18}
                color="#1a1a1a" // Texto oscuro grabado
                anchorX="center"
                anchorY="middle"
                fontWeight="bold"
                font="https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"
            >
                CAMPEÓN
            </Text>
            {/* Texto: Detalles del Torneo */}
            <Text
                position={[0, -0.9, 1.43]}
                fontSize={0.08}
                color="#1a1a1a"
                anchorX="center"
                anchorY="middle"
                maxWidth={2.0}
                textAlign="center"
                font="https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"
            >
                TORNEO DE CONFRATERNIDAD{"\n"}ACÓLITOS 2025
            </Text>
        </group>
    );
};

export const TrophyScene = () => {
    return (
        // Contenedor responsive: altura fija en móviles, más alto en escritorio
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] cursor-grab active:cursor-grabbing">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 2, 9], fov: 45 }}>
                {/* Iluminación Dramática de Estudio */}
                <ambientLight intensity={0.3} />
                {/* Luz principal cálida desde arriba a la derecha */}
                <spotLight position={[10, 15, 10]} angle={0.3} penumbra={0.5} intensity={1.5} castShadow color="#fff5e6" />
                {/* Luz de recorte fría desde atrás a la izquierda para definir bordes */}
                <spotLight position={[-10, 5, -10]} angle={0.5} penumbra={1} intensity={0.8} color="#e6f0ff" />

                {/* Entorno de estudio para reflejos realistas */}
                <Stage environment="studio" intensity={0.8} shadows={{ opacity: 0.6, blur: 1, type: 'contact' }}>
                    {/* El Trofeo Flotante */}
                    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2} floatingRange={[-0.1, 0.1]}>
                        <TrophyModel scale={1.2} /> {/* Escala aumentada para presencia */}
                    </Float>
                </Stage>

                {/* Fondo estrellado sutil y lejano */}
                <Stars radius={200} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />

                {/* Controles limitados para mejor UX */}
                <OrbitControls
                    autoRotate={false}
                    enableZoom={true}
                    minDistance={5}
                    maxDistance={15}
                    minPolarAngle={Math.PI / 3.5} // Evitar ver muy desde arriba
                    maxPolarAngle={Math.PI / 2.2} // Evitar ver desde abajo de la base
                />
            </Canvas>
        </div>
    );
};