import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingParticles({ count = 80 }) {
    const meshRef = useRef();

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 30,
                    (Math.random() - 0.5) * 30,
                    (Math.random() - 0.5) * 20,
                ],
                scale: Math.random() * 0.3 + 0.1,
                speed: Math.random() * 0.3 + 0.1,
                rotSpeed: Math.random() * 0.01 + 0.002,
                offset: Math.random() * Math.PI * 2,
                type: Math.floor(Math.random() * 3),
            });
        }
        return temp;
    }, [count]);

    return (
        <>
            {particles.map((p, i) => (
                <FloatingShape key={i} {...p} />
            ))}
        </>
    );
}

function FloatingShape({ position, scale, speed, rotSpeed, offset, type }) {
    const meshRef = useRef();
    const materialColor = useMemo(() => {
        const colors = ['#00ff88', '#00d4ff', '#a855f7'];
        return colors[type];
    }, [type]);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.position.y = position[1] + Math.sin(t * speed + offset) * 1.5;
            meshRef.current.position.x = position[0] + Math.cos(t * speed * 0.5 + offset) * 0.5;
            meshRef.current.rotation.x += rotSpeed;
            meshRef.current.rotation.z += rotSpeed * 0.5;
        }
    });

    const geometry = useMemo(() => {
        switch (type) {
            case 0:
                return <icosahedronGeometry args={[scale, 0]} />;
            case 1:
                return <octahedronGeometry args={[scale, 0]} />;
            case 2:
                return <tetrahedronGeometry args={[scale, 0]} />;
            default:
                return <icosahedronGeometry args={[scale, 0]} />;
        }
    }, [type, scale]);

    return (
        <mesh ref={meshRef} position={position}>
            {geometry}
            <meshBasicMaterial
                color={materialColor}
                wireframe
                transparent
                opacity={0.25}
            />
        </mesh>
    );
}

function GridFloor() {
    return (
        <gridHelper
            args={[60, 60, '#00ff8830', '#00ff8810']}
            position={[0, -10, 0]}
            rotation={[0, 0, 0]}
        />
    );
}

export default function ParticleBackground() {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 12], fov: 60 }}
                style={{ background: 'transparent' }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.5} />
                <FloatingParticles count={60} />
                <GridFloor />
            </Canvas>
        </div>
    );
}
