import { FC, HTMLProps } from "react";
import { MotionProps, motion } from "framer-motion";

export type SlickSlideProps = HTMLProps<HTMLDivElement> &
    MotionProps & { imgSrc: string; location: string; country: string };

const SlickSlide: FC<SlickSlideProps> = ({ imgSrc, location, country, ...props }) => {
    return (
        <div className="relative h-full">
            <motion.img className="h-full min-h-[300px]" src={imgSrc} alt="Slide image" />
            <div className="absolute flex w-full justify-center items-center bottom-4">
                <div className="flex items-center text-center bg-black/20 text-white px-2 py-1 rounded-xl">
                    <p>{location}</p>
                    <motion.img src={`/images/flags/${country}.png`} alt={country} className="w-6 ml-2" />
                </div>
            </div>
        </div>
    );
};

export default SlickSlide;
