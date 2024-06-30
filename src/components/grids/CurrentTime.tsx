import { FC, HTMLProps, useEffect, useState } from "react";
import { MotionProps, motion } from "framer-motion";
import { Map } from "mapkit-react";

export type CurrentTimeProps = HTMLProps<HTMLDivElement> & MotionProps;

const CurrentTime: FC<CurrentTimeProps> = (props) => {
    const [hours, setHours] = useState<string>("00");
    const [minutes, setMinutes] = useState<string>("00");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();

            setHours(hours < 10 ? `0${hours}` : hours.toString());
            setMinutes(minutes < 10 ? `0${minutes}` : minutes.toString());
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white overflow-hidden relative h-[250px] rounded-3xl shadow-md"
            {...props}
        >
            <div className="absolute text-white z-20 top-8 left-4">
                <p className="text-6xl">
                    {hours}:{minutes}
                </p>
                <p>Fairfield IA, US</p>
                <p className="text-xs">GMT -7</p>
            </div>
            <div className="absolute top-0 z-10 left-0 bg-black/80 w-full h-full"></div>
            <motion.img className="w-full" src="/images/fairfield.webp" alt="Fairfield" />
            <div></div>
        </motion.div>
    );
};

export default CurrentTime;
