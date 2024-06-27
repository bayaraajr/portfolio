import { FC, HTMLProps } from "react";
import { MotionProps, motion } from "framer-motion";

export type ContactGridProps = HTMLProps<HTMLDivElement> & MotionProps;

const ContactGrid: FC<ContactGridProps> = (props) => {
    return (
        <motion.div className="bg-white grid grid-cols-1 gap-2 col-span-2 rounded-3xl p-8 shadow-md" {...props}>
            <p className="text-2xl font-bold">Contact with me.</p>
            <p className="text-sm">
                Please leave a note and enter your e-mail, I will get back to you as soon as possible
            </p>
            <input className="w-full border-b-2 outline-none" placeholder="E-mail" type="email" />
            <textarea className="w-full border-b-2 outline-none" placeholder="Enter your note..." />
        </motion.div>
    );
};

export default ContactGrid;
