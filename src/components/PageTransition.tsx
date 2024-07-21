import { FC, HTMLProps } from "react";
import { motion } from "framer-motion";

export interface PageTransitionProps extends HTMLProps<HTMLDivElement> {}

const PageTransition: FC<PageTransitionProps> = ({ children, ...props }) => {
    return (
        <>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 3 }}
                transition={{ duration: 1.5, type: "spring" }}
                exit={{ scale: 0 }}
                className="fixed rounded-full z-[9999] bg-blue-400 h-screen w-screen flex justify-center items-center"
            ></motion.div>
            {children}
        </>
    );
};

export default PageTransition;
