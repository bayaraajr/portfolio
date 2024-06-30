import { FC, HTMLProps } from "react";
import { MotionProps, motion } from "framer-motion";
import Image from "next/image";

export type EGolomtProps = HTMLProps<HTMLDivElement> & MotionProps;

const EGolomt: FC<EGolomtProps> = (props) => {
    return (
        <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-white rounded-3xl h-[500px] row-span-2 relative p-4 shadow-md"
            {...props}
        >
            <motion.img alt="EGolomt" src="/egolomt.png" className="w-full" />
            <p>egolomt.mn</p>
            <p className="text-justify">One of the biggest enterprise React.js web-apps in Mongolia.</p>

            <div></div>
        </motion.div>
    );
};

export default EGolomt;
