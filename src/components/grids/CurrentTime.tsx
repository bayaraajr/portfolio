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
        <motion.div className="bg-white relative rounded-3xl p-4 shadow-md" {...props}>
            <div className="absolute bottom-4 left-4">
                <p className="text-6xl">
                    {hours}:{minutes}
                </p>
                <p>Fairfield IA, US</p>
                <p className="text-xs">GMT -7</p>
            </div>
            <div>
                <Map token="asd"></Map>
            </div>
        </motion.div>
    );
};

export default CurrentTime;
