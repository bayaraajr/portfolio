import { FC, HTMLProps, memo } from "react";
import { MotionProps, motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import SkillsSphere from "../3D/SkillsSphere";

export type SkillsGridProps = HTMLProps<HTMLDivElement> & MotionProps;

const SkillsGrid: FC<SkillsGridProps> = (props) => {
    return (
        <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="h-[524px] bg-gray-800 col-span-2 row-span-2 rounded-3xl relative overflow-hidden shadow-md"
            {...props}
        >
            <SkillsSphere />
        </motion.div>
    );
};

export default memo(SkillsGrid);
