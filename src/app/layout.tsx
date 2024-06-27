import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Footer from "@jay/components/Footer";
import Navbar from "@jay/components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Hey I'm Jay!",
    description: "Welcome to my portfolio.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en dark">
            <head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
                />
            </head>
            {/* <NextTopLoader /> */}
            <body className={`${montserrat.className} bg-gray-50`}>
                <Navbar />
                <div className="flex justify-center items-start w-full">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
