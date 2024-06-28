import { FC, HTMLProps } from "react";
import { MotionProps, motion } from "framer-motion";

import { BsGithub } from "react-icons/bs";
import { SiInstagram, SiLinkedin, SiSteam } from "react-icons/si";

export type LinksGridProps = HTMLProps<HTMLDivElement> & MotionProps;

const LinksGrid: FC<LinksGridProps> = (props) => {
    return (
        <motion.div className="grid grid-cols-2 rounded-3xl gap-2" {...props}>
            <div className="rounded-3xl w-full h-full flex items-center justify-center bg-black p-4">
                <BsGithub className="text-white text-6xl" />
            </div>
            <div className="rounded-3xl flex w-full h-full items-center justify-center bg-[#0072b1] p-4">
                <SiLinkedin className="text-white text-6xl" />
            </div>
            <div
                className="rounded-3xl flex items-center w-full h-full justify-center p-4"
                style={{
                    background:
                        "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
                }}
            >
                <SiInstagram className="text-white text-6xl" />
            </div>
            <div className="rounded-3xl flex w-full h-full items-center justify-center bg-[#1b2838] p-4">
                <SiSteam className="text-white text-6xl" />
            </div>
        </motion.div>
    );
};

export default LinksGrid;
