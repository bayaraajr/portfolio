import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Footer from "@jay/components/Footer";

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
            {/* <NextTopLoader /> */}
            <body className={montserrat.className}>
                {children}
                <Footer />
            </body>
        </html>
    );
}
