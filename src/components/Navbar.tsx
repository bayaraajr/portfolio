"use client";
import { FC, HTMLProps, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export interface NavbarProps extends HTMLProps<HTMLDivElement> {}

const Navbar: FC<NavbarProps> = (props) => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const tabs = ["About", "Projects", "Media", "Contact"];
    const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
    const getPillPosition = () => {
        if (!tabRefs.current[activeTab]) return { width: 0, left: 0 };
        const { offsetWidth: width, offsetLeft: left } = tabRefs.current[activeTab]!;
        return { width, left };
    };

    return (
        <div className="w-screen grid grid-cols-5 gap-2 p-4" {...props}>
            <div className="col-span-2"></div>
            <div className="col-span-1 relative flex justify-center items-center">
                <div className="bg-gray-100 p-2 w-fit flex justify-center items-center rounded-full relative">
                    {tabs.map((tab: string, index: number) => (
                        <motion.div
                            key={tab}
                            onClick={() => setActiveTab(index)}
                            ref={(el) => (tabRefs.current[index] = el)}
                            className={`z-20 [&:nth-last-child(2)]:mr-0 first:ml-0 mx-4 px-4 py-1 rounded-full cursor-pointer`}
                        >
                            <p className="text-bold">{tab}</p>
                        </motion.div>
                    ))}
                    <motion.div
                        className="absolute bottom-2 left-0 h-[calc(100%_-_16px)] shadow-2xl rounded-full z-0 bg-white"
                        animate={getPillPosition()}
                        transition={{ type: "spring", stiffness: 150, damping: 30 }}
                    />
                </div>
            </div>
            <div className="col-span-2"></div>
        </div>
    );
};

export default Navbar;
