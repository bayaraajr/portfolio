import { FC, HTMLProps } from "react";
import { MotionProps, motion } from "framer-motion";
import Image from "next/image";

export type EGolomtProps = HTMLProps<HTMLDivElement> & MotionProps;

const EGolomt: FC<EGolomtProps> = (props) => {
    return (
        <motion.div className="bg-white rounded-3xl relative p-4 shadow-md" {...props}>
            <Image alt="EGolomt" fill src="/egolomt.png" />
        </motion.div>
    );
};

export default EGolomt;
