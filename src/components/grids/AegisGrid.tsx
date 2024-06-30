import { FC, HTMLProps } from "react";
import { MotionProps, motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import StaticBasketball from "../3D/StaticBasketball";
import Aegis from "../3D/Aegis";
import InvokerModel from "../3D/Invoker";
import { OrbitControls } from "@react-three/drei";

export type AegisGridProps = HTMLProps<HTMLDivElement> & MotionProps;

const AegisGrid: FC<AegisGridProps> = (props) => {
    return (
        <motion.div className="bg-white relative h-[250px] rounded-3xl p-4 shadow-md" {...props}>
            {/* <Canvas className="w-full h-full"> */}
            {/* camera={{ position: [5, 10, 15] }} */}
            {/* <ambientLight intensity={Math.PI * 12} /> */}
            {/* <Aegis scale={6} /> */}
            {/* <OrbitControls /> */}
            {/* <InvokerModel scale={1000} position={[0, -10, -10]} /> */}
            {/* </Canvas> */}
        </motion.div>
    );
};

export default AegisGrid;
