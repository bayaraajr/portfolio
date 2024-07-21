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
            transition={{ duration: 0.4, type: "spring" }}
            className="bg-white overflow-hidden relative h-[250px] rounded-3xl shadow-md"
            {...props}
        >
            <div className="absolute bg-gray-400/40 p-2 rounded-xl text-gray-800 z-20 top-4 right-4">
                <p className="text-lg text-right font-bold">
                    {hours}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, type: "spring", repeat: Infinity, repeatDelay: 1 }}
                    >
                        :
                    </motion.span>
                    {minutes}
                </p>
                <p className="text-xs text-right">Fairfield IA, US</p>
            </div>
            {/* <div className="absolute top-0 z-10 left-0 bg-black/80 w-full h-full"></div> */}
            <motion.img className="w-full" src="/svgs/dog.svg" alt="Fairfield" />
            <div></div>
        </motion.div>
    );
};

export default CurrentTime;
