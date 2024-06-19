"use client";
import Basketball from "@jay/components/3D/Basketball";
import { Canvas } from "@react-three/fiber";

export default function LoadingPage() {
    return (
        <Canvas style={{ width: "100vw", height: "100vh" }}>
            <ambientLight intensity={Math.PI / 2} />
            <Basketball />
            <mesh>
                <boxGeometry args={[50, 1, 50]} />
                <meshStandardMaterial color={"orange"} />
            </mesh>
        </Canvas>
    );
}
