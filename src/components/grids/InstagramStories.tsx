import { FC, HTMLProps } from "react";
import Slider from "react-slick";
import { MotionProps, motion } from "framer-motion";
import Image from "next/image";

export type InstagramStoriesProps = HTMLProps<HTMLDivElement> & MotionProps;

const InstagramStories: FC<InstagramStoriesProps> = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <motion.div className="bg-white relative overflow-hidden row-span-2 rounded-xl p-4 shadow-md" {...props}>
            <Slider {...settings} className="h-full w-full">
                <div className="relative w-full h-full">
                    <Image width={200} height={400} src="/story-placeholder.jpg" alt="image" />
                </div>
                <div className="relative w-full h-full">
                    <Image fill src="/story-placeholder.jpg" alt="image" />
                </div>
            </Slider>
        </motion.div>
    );
};

export default InstagramStories;
