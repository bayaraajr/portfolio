import { FC, HTMLProps } from "react";
import { MotionProps, motion } from "framer-motion";

export type CertificationGridProps = HTMLProps<HTMLDivElement> & MotionProps;

const CertificationGrid: FC<CertificationGridProps> = (props) => {
    return (
        <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
            className="bg-white rounded-3xl overflow-hidden p-4 flex items-center justify-center h-[250px] shadow-xl"
            {...props}
        >
            <motion.img
                className="h-full"
                src="/images/associate-developer.webp"
                alt="Associate developer certificate"
            ></motion.img>
        </motion.div>
    );
};

export default CertificationGrid;
