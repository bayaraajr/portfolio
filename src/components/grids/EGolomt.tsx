import { FC, HTMLProps } from "react";
import { MotionProps, motion } from "framer-motion";
import Image from "next/image";
import { VscLinkExternal } from "react-icons/vsc";

export type EGolomtProps = HTMLProps<HTMLDivElement> & MotionProps;

const EGolomt: FC<EGolomtProps> = (props) => {
    return (
        <motion.div
            style={{ background: "linear-gradient(130deg, rgb(255, 0, 183) 0%, rgb(30, 0, 255) 100%)" }}
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-3xl max-h-[500px] row-span-2 col-span-2 shadow-md overflow-hidden flex justify-center items-center"
            {...props}
        >
            <div className="bg-white relative w-full h-full rounded-3xl">
                <motion.img
                    alt="EGolomt"
                    src="/images/egolomt/1.webp"
                    className="max-w-96  rounded-3xl mt-4 shadow-md absolute z-10 top-4 left-4"
                />
                <motion.img
                    alt="EGolomt"
                    src="/images/egolomt/2.webp"
                    className="max-w-96 rounded-3xl mt-4 shadow-md absolute top-24 left-24 z-20"
                />

                <button
                    className={`text-xs z-[2000] bg-transparent  flex justify-start items-center border-2 rounded-full px-4 py-2 hover:border-4 transition-all origin-center text-gray-400 border-gray-200 bottom-10 left-10  absolute`}
                >
                    <VscLinkExternal />
                    <span className="ml-2">Visit</span>
                </button>
            </div>
        </motion.div>
    );
};

export default EGolomt;
