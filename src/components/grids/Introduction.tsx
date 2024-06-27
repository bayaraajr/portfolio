import { FC, HTMLProps } from "react";
import { MotionProps, motion } from "framer-motion";

export type IntroductionProps = HTMLProps<HTMLDivElement> & MotionProps;

const Introduction: FC<IntroductionProps> = (props) => {
    return (
        <motion.div className="bg-white rounded-3xl col-span-2 p-4 shadow-md" {...props}>
            <p>Hi, I am JAY</p>
            <p>
                In the dynamic realm of technology, a full-stack software engineer stands as a digital maestro,
                skillfully bridging the gap between front-end elegance and back-end power.
            </p>
        </motion.div>
    );
};

export default Introduction;
