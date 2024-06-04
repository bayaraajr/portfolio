import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DeskTop from "./DeskTop";
import DeskLeg from "./DeskLeg";
import Monitor from "./Monitor";
import { usePlane } from "@react-three/cannon";
import { useRef } from "react";
import { Mesh } from "three";

const WorkDesk = () => {
    const [meshRef] = usePlane(
        () => ({
            onCollide: (e) => {
                // const ping = new Audio("/bounce.wav");
                // ping.currentTime = 0;
                // ping.play();
            },
            args: [0.5],
            mass: 100,
        }),
        useRef<Mesh>(null),
    );
    return (
        <mesh ref={meshRef}>
            {/* <ambientLight intensity={0.5} /> */}
            {/* <pointLight position={[10, 10, 10]} /> */}

            {/* Desk Top */}
            <DeskTop position={[0, 1, 0]} />

            {/* Desk Legs */}
            <DeskLeg position={[-0.95, 0.5, -0.45]} />
            <DeskLeg position={[0.95, 0.5, -0.45]} />
            <DeskLeg position={[-0.95, 0.5, 0.45]} />
            <DeskLeg position={[0.95, 0.5, 0.45]} />

            {/* Monitor */}
            <Monitor position={[0, 1.3, 0.3]} />
        </mesh>
    );
};

export default WorkDesk;
