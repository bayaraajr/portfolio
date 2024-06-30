import { FC, HTMLProps } from "react";
import { MotionProps, motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Hexagon from "../3D/Hexagon";

export type CertificationGridProps = HTMLProps<HTMLDivElement> & MotionProps;

const CertificationGrid: FC<CertificationGridProps> = (props) => {
    return (
        <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-white rounded-3xl h-[250px] shadow-md"
            {...props}
        >
            <Canvas style={{ height: "100%" }}>
                <ambientLight intensity={Math.PI * 4} />
                <Hexagon />
            </Canvas>
        </motion.div>
    );
};

export default CertificationGrid;
