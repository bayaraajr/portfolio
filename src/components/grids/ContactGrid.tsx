import { FC, HTMLProps } from "react";
import { MotionProps, motion } from "framer-motion";
import { AiFillThunderbolt, AiTwotoneThunderbolt } from "react-icons/ai";

export type ContactGridProps = HTMLProps<HTMLDivElement> & MotionProps;

const ContactGrid: FC<ContactGridProps> = (props) => {
    return (
        <motion.div
            className="bg-white grid grid-cols-2 relative h-[250px] gap-2 col-span-2 rounded-3xl p-8 shadow-md"
            {...props}
        >
            <div>
                <p className="text-2xl font-bold">Leave a note.</p>
                <p className="text-sm">
                    <span>I will get back to you ASAP!</span>
                    <span>
                        <AiFillThunderbolt className="text-yellow-400" />
                    </span>
                </p>
                <input className="w-full border-b-2 outline-none" placeholder="E-mail" type="email" />
                <textarea className="w-full border-b-2 outline-none" placeholder="Enter your note..." />
            </div>
            <motion.img
                src="/svgs/contact.svg"
                alt="Contact illustration"
                className="absolute top-2 right-2 w-48 h-48"
            />
        </motion.div>
    );
};

export default ContactGrid;
