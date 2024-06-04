"use client";
import Basketball from "@jay/components/Basketball";
import ContactGround from "@jay/components/ContactGround";
import Court from "@jay/components/Court";
import WorkDesk from "@jay/components/Workdesk";
import { Physics, usePlane } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
export default function Home() {
    return (
        <Canvas camera={{ fov: 50, position: [0, 5, 15] }} shadows style={{ width: "100vw", height: "100vh" }}>
            <ambientLight intensity={Math.PI * 5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            {/* <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
            <Physics
                broadphase="SAP"
                defaultContactMaterial={{ contactEquationRelaxation: 4, friction: 1e-3 }}
                allowSleep
            >
                <Basketball />
                {/* <Court /> */}
                <WorkDesk />
                <OrbitControls />
                <ContactGround rotation={[-Math.PI / 2, 0, 0]} userData={{ id: "floor" }} />
            </Physics>
        </Canvas>
    );
}
