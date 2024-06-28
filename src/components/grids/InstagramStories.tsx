import { FC, HTMLProps } from "react";
import Slider from "react-slick";
import { MotionProps, motion } from "framer-motion";
import SlickSlide from "../SlickSlide";

export type InstagramStoriesProps = HTMLProps<HTMLDivElement> & MotionProps;

const InstagramStories: FC<InstagramStoriesProps> = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        duration: 10000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <motion.div className="bg-white relative overflow-hidden row-span-2 rounded-xl shadow-md" {...props}>
            <Slider {...settings} className="h-full w-full">
                <SlickSlide imgSrc="/images/instagram/1.webp" country="my" location="Kuala Lumpur, Malaysia" />
                <SlickSlide imgSrc="/images/instagram/2.webp" country="us" location="Chicago, United States" />
                <SlickSlide imgSrc="/images/instagram/3.webp" country="us" location="Chicago, United States" />
                <SlickSlide imgSrc="/images/instagram/4.webp" country="sg" location="Singapore" />
                <SlickSlide imgSrc="/images/instagram/5.webp" country="sg" location="Singapore" />
                <SlickSlide imgSrc="/images/instagram/6.webp" country="cn" location="Zhang Jia Jie, China" />
                <SlickSlide imgSrc="/images/instagram/7.webp" country="cn" location="Zhang Jia Jie, China" />
                <SlickSlide imgSrc="/images/instagram/8.webp" country="us" location="Seattle, United States" />
                <SlickSlide imgSrc="/images/instagram/9.webp" country="us" location="Seattle, United States" />
            </Slider>
        </motion.div>
    );
};

export default InstagramStories;
