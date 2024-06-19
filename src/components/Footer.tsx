import { FC, HTMLProps } from "react";

export interface FooterProps extends HTMLProps<HTMLDivElement> {}

const Footer: FC<FooterProps> = (props) => {
    return (
        <div className="fixed w-screen p-4" {...props}>
            <div>Footer</div>
        </div>
    );
};

export default Footer;
