import { FC, HTMLProps } from "react";
import { MotionProps, motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import StaticBasketball from "../3D/StaticBasketball";

export type BasketballGridProps = HTMLProps<HTMLDivElement> & MotionProps;

const BasketballGrid: FC<BasketballGridProps> = (props) => {
    return (
        <motion.div className="bg-white relative rounded-3xl p-4 shadow-md" {...props}>
            <Canvas className="w-full h-full">
                <StaticBasketball scale={6} />
                <ambientLight intensity={Math.PI * 6} />
            </Canvas>
        </motion.div>
    );
};

export default BasketballGrid;
