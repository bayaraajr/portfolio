import { FC, HTMLProps } from "react";
import { GiMongolia } from "react-icons/gi";
import { PiCodeSimpleDuotone, PiHeartDuotone } from "react-icons/pi";

export interface FooterProps extends HTMLProps<HTMLDivElement> {}

const Footer: FC<FooterProps> = (props) => {
    return (
        <div className="w-screen p-4" {...props}>
            <div className="flex justify-center items-center w-full">
                <p className="px-2">From</p>
                <GiMongolia className="text-2xl" style={{ transform: "scale(-1, -1)" }} />
            </div>
            <div className="flex justify-center items-center w-full">
                <PiCodeSimpleDuotone className="text-blue-400" />
                <p className="px-2">with</p>
                <PiHeartDuotone className="text-red-400" />
            </div>
        </div>
    );
};

export default Footer;
