import { FC, HTMLProps } from "react";
import { MotionProps, motion } from "framer-motion";
import { FaSpotify } from "react-icons/fa6";

export type SpotifyPlayerProps = HTMLProps<HTMLDivElement> & MotionProps;

const SpotifyPlayer: FC<SpotifyPlayerProps> = (props) => {
    return (
        <motion.div className="bg-black/90 w-full h-full rounded-3xl col-span-2 p-4 shadow-md" {...props}>
            <FaSpotify className="text-[#1DB954] text-6xl" />
            <p className="text-white">Last played</p>
        </motion.div>
    );
};

export default SpotifyPlayer;
