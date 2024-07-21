import { FC, HTMLProps } from "react";
import { MotionProps, motion } from "framer-motion";

export type IntroductionProps = HTMLProps<HTMLDivElement> & MotionProps;

const Introduction: FC<IntroductionProps> = (props) => {
    return (
        <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="bg-white gap-4 grid h-[250px] grid-cols-3 rounded-3xl col-span-2 p-8 shadow-md"
            {...props}
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.25, type: "spring" }}
                className="relative"
            >
                <div className="absolute shadow-xl rounded-xl -rotate-12 z-20 bg-white p-4 -left-4 -top-12">
                    <p>Hi, I am JAY!</p>
                    <div className="absolute bg-white w-6 h-6 z-20 rounded-full shadow-xl"></div>
                    <div className="absolute bg-white w-2 h-2 -bottom-4 left-8 shadow-xl z-20 rounded-full"></div>
                </div>
                <motion.img src="/svgs/person.svg" alt="Profile image" className="rounded-full" />
            </motion.div>
            <div className="col-span-2">
                <p className="text-sm">
                    I am a US-based fullstack developer with a passion for creating innovative solutions. When I am not
                    coding, you will find me enjoying basketball, travels, video games, music, and time with my dog.
                </p>
                <p className="text-sm italic font-extralight mt-4">
                    Currently on the lookout for new opportunities—feel free to get in touch!
                </p>
            </div>
        </motion.div>
    );
};

export default Introduction;
