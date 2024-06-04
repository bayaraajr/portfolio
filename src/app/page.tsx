"use client";
import Basketball from "@jay/components/Basketball";
import ContactGround from "@jay/components/ContactGround";
import Court from "@jay/components/Court";
import StaticBasketball from "@jay/components/StaticBasketball";
import WorkDesk from "@jay/components/Workdesk";
import { Physics, usePlane } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
export default function Home() {
    return (
        <>
            <Canvas camera={{ fov: 50, position: [0, 5, 15] }} shadows style={{ width: "100vw", height: "100vh" }}>
                <ambientLight intensity={Math.PI * 5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                {/* <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
                <StaticBasketball scale={4} />
            </Canvas>
            <p className="text-4xl absolute bottom-20 text-center z-20 w-full m-0 p-0">
                Oops, this page is under construction.
            </p>
            <p className="text-lg absolute bottom-10 text-center z-20 w-full m-0 p-0">
                Please visit again in sometime, or email me{" "}
                <a className="text-orange-500 bg-gray-800 px-2 py-1 rounded-xl" href="mailto:bayarjargal.jr@gmail.com">
                    bayarjargal.jr@gmail.com
                </a>
            </p>
        </>
    );
}
