import { FC, HTMLProps } from "react";
import { MotionProps, motion } from "framer-motion";

export type IntroductionProps = HTMLProps<HTMLDivElement> & MotionProps;

const Introduction: FC<IntroductionProps> = (props) => {
    return (
        <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white gap-4 grid h-[250px] grid-cols-3 rounded-3xl col-span-2 p-8 shadow-md"
            {...props}
        >
            <div className="relative">
                <div className="absolute shadow-xl rounded-xl -rotate-12 z-20 bg-white p-4 -left-4 -top-12">
                    <p>Hi, I am JAY!</p>
                    <div className="absolute bg-white w-6 h-6 z-20 rounded-full shadow-xl"></div>
                    <div className="absolute bg-white w-2 h-2 -bottom-4 left-8 shadow-xl z-20 rounded-full"></div>
                </div>
                <motion.img
                    initial={{ scale: 0, rotate: 360 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4, type: "spring" }}
                    src="/profile.jpg"
                    alt="Profile image"
                    className="rounded-full"
                />
            </div>
            <div className="col-span-2">
                <p>
                    In the dynamic realm of technology, a full-stack software engineer stands as a digital maestro,
                    skillfully bridging the gap between front-end elegance and back-end power.
                </p>
            </div>
        </motion.div>
    );
};

export default Introduction;
