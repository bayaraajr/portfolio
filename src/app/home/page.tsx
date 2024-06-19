"use client";
import Aegis from "@jay/components/3D/Aegis";
import Basketball from "@jay/components/3D/Basketball";
import ContactGround from "@jay/components/3D/ContactGround";
import Court from "@jay/components/3D/Court";
import InvokerKid from "@jay/components/3D/Invoker";
import WorkDesk from "@jay/components/3D/Workdesk";
import { Physics, usePlane } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
export default function Home() {
    return (
        <Canvas camera={{ fov: 50, position: [0, 5, 15] }} shadows style={{ width: "100vw", height: "100vh" }}>
            <ambientLight intensity={Math.PI} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            {/* <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
            <InvokerKid scale={10} />
            {/* <Aegis /> */}
            <OrbitControls />
        </Canvas>
    );
}
