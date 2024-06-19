"use client";

import Aegis from "@jay/components/3D/Aegis";
import { OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import InvokerKid from "@jay/components/3D/Invoker";

const ThreeDText = () => {
    return (
        <>
            <Text
                scale={[2, 2, 2]}
                fontWeight="bold"
                position={[0, 10, 0]}
                color="black" // default
                anchorX="center" // default
                anchorY="middle" // default
            >
                Oops! this page is
            </Text>
            <Text
                scale={[2, 2, 2]}
                fontWeight="bold"
                position={[0, 8, 0]}
                color="red" // default
                anchorX="center" // default
                anchorY="middle" // default
            >
                under construction.
            </Text>
        </>
    );
};
export default function Home() {
    return (
        <>
            <Canvas camera={{ fov: 50, position: [0, 5, 15] }} shadows style={{ width: "100vw", height: "100vh" }}>
                <ambientLight intensity={Math.PI * 10} />
                {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI * 2} /> */}
                {/* <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
                {/* <StaticBasketball scale={4} /> */}
                {/* <Aegis scale={5} /> */}
                <InvokerKid scale={500} />
                <ThreeDText />
                <OrbitControls />
                {/* <Computer/> */}
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
