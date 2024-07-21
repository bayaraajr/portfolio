"use client";
import { FC, HTMLProps, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { PiCloudMoonDuotone, PiCloudSunDuotone } from "react-icons/pi";

export interface NavbarProps extends HTMLProps<HTMLDivElement> {}

const Navbar: FC<NavbarProps> = (props) => {
    const router = useRouter();

    const [activeTab, setActiveTab] = useState<number>(0);
    const tabs = ["About", "Experience", "Contact"];
    const tabRefs = useRef<any[]>([]);
    const getPillPosition = () => {
        if (!tabRefs.current[activeTab]) return { width: 0, left: 0 };
        const { offsetWidth: width, offsetLeft: left } = tabRefs.current[activeTab]!;
        return { width, left };
    };

    const handleNavigation = (tab: string, index: number) => {
        setActiveTab(index);
        router.push(`/${tab.toLowerCase()}`);
    };

    return (
        <div className="w-screen grid grid-cols-5 gap-2 p-4" {...props}>
            <div className="col-span-2"></div>
            <div className="col-span-1 relative flex justify-center items-center">
                <div className="bg-gray-100 p-2 w-fit flex justify-center items-center rounded-full relative">
                    {tabs.map((tab: string, index: number) => (
                        <motion.div
                            key={tab}
                            onClick={() => handleNavigation(tab, index)}
                            ref={(el) => (tabRefs.current[index] = el as any)}
                            className={`z-20 [&:nth-last-child(2)]:mr-0 first:ml-0 mx-4 px-4 py-1 rounded-full cursor-pointer`}
                        >
                            <p className="text-bold">{tab}</p>
                        </motion.div>
                    ))}
                    <motion.div className={`z-20 mr-4 first:ml-0 mx-4 px-4 py-1 rounded-full cursor-pointer`}>
                        {/* <PiCloudMoonDuotone className="text-cyan-800 text-2xl" /> */}
                        <PiCloudSunDuotone className="text-orange-500 text-2xl" />
                    </motion.div>
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
