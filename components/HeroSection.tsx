"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";

export default function HeroContent(): React.ReactElement {
    const router = useRouter();

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeIn: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <section className="relative min-h-[100dvh] sm:min-h-screen overflow-hidden">
            {/* Navbar */}
            <Navbar />

            {/* Background Images */}
            <Image
                src="/test.svg"
                alt="Background Pattern"
                fill
                priority
                className="object-cover -z-20"
            />
            <Image
                src="/bg.jpeg"
                alt="Background Overlay"
                fill
                priority
                className="object-cover -z-30"
            />

            {/* Gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d0c2d]/60 via-transparent to-[#0d0c2d]/80 -z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c2d]/30 to-transparent -z-10 pointer-events-none" />

            {/* Hero Content */}
            <div
                className="
                    relative z-10
                    min-h-[100dvh] sm:min-h-screen
                    flex flex-col
                    items-center
                    text-center
                    px-4 sm:px-10
                    pt-24 sm:pt-24 md:pt-28 lg:pt-32
                    text-white
                "
            >
                {/* KIET + Logo side by side */}
                <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-10 sm:mb-[-8px]">
                    
                    {/* Logo - Smaller on mobile */}
                    <div className="relative w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px] flex-shrink-0">
                        <Image
                            src="/log.png"
                            alt="KIET MUN Logo"
                            fill
                            priority
                            className="object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* KIET text - Smaller on mobile */}
                    <motion.span
                        {...({variants: fadeInUp,
                        initial: "hidden",
                        animate: "visible",
                        transition: { duration: 0.6, ease: "easeOut" }} as any)}
                        className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl tracking-[0.25em] sm:tracking-[0.3em] text-[#c7bee6] font-bold uppercase"
                    >
                        KIET
                    </motion.span>
                </div>

                {/* Title + Marquee Group */}
                <div className="flex flex-col items-center gap-1 sm:gap-0">
                    {/* Title Container */}
                    <div className="relative flex flex-row items-center justify-center">
                        {/* Main Title - Better mobile sizing */}
                        <motion.h1
                            {...({variants: fadeInUp,
                            initial: "hidden",
                            animate: "visible",
                            transition: {
                                duration: 0.7,
                                delay: 0.2,
                                ease: "easeOut",
                            }} as any)}
                            className="relative z-10 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight sm:tracking-wide leading-tight text-white drop-shadow-lg"
                        >
                            MODEL UNITED NATIONS 8.0
                        </motion.h1>
                    </div>

                    {/* Marquee Tagline using Framer Motion */}
                    <motion.div
                        {...({variants: fadeIn,
                        initial: "hidden",
                        animate: "visible",
                        transition: { duration: 0.6, delay: 0.4 }} as any)}
                        className="sm:mt-3 w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] overflow-hidden relative"
                    >
                    <motion.div
                        {...({animate: { x: ["-100%", "0%"] },
                        transition: {
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        },
                        className: "flex whitespace-nowrap"} as any)}
                    >
                        <span className="text-xs sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-[#c7bee6]/80 font-medium inline-block px-2">
                            DEBATE . DISCUSSION . DIPLOMACY 
                        </span>
                        <span className="text-xs sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-[#c7bee6]/80 font-medium inline-block px-2">
                            DEBATE . DISCUSSION . DIPLOMACY 
                        </span>
                        <span className="text-xs sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-[#c7bee6]/80 font-medium inline-block px-2">
                            DEBATE . DISCUSSION . DIPLOMACY 
                        </span>
                        <span className="text-xs sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-[#c7bee6]/80 font-medium inline-block px-2">
                            DEBATE . DISCUSSION . DIPLOMACY 
                        </span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Year */}
                <motion.h2
                    {...({variants: fadeInUp,
                    initial: "hidden",
                    animate: "visible",
                    transition: {
                        duration: 0.6,
                        delay: 0.5,
                        ease: "easeOut",
                    }} as any)}
                    className="mt-8 sm:mt-3 md:mt-4 text-4xl sm:text-6xl md:text-5xl lg:text-6xl font-bold text-[#c7bee6] leading-none drop-shadow-md"
                >
                    2026
                </motion.h2>

                {/* Register Button - Mobile Only */}
                <motion.button
                    {...({variants: fadeInUp,
                    initial: "hidden",
                    animate: "visible",
                    transition: {
                        duration: 0.6,
                        delay: 0.7,
                        ease: "easeOut",
                    }} as any)}
                    onClick={() => router.push("/register")}
                    className="mt-11 md:hidden rounded-full bg-white px-8 py-3 text-base font-bold text-[#0d0c2d] hover:bg-[#c7bee6] transition-colors duration-300 shadow-lg z-30"
                >
                    Register
                </motion.button>
            </div>

            {/* Bottom Building Image */}
            <div
                className="
                    absolute bottom-0 left-1/2
                    -translate-x-1/2
                    z-20
                    w-[110%] sm:w-[95%] max-w-[1100px]
                    h-[420px]
                    sm:h-[280px]
                    md:h-[950px]
                    lg:h-[700px]
                    pointer-events-none
                "
            >
                <Image
                    src="/builld.png"
                    alt="KIET Building"
                    fill
                    priority
                    className="object-contain object-bottom scale-[1.25] sm:scale-100 origin-bottom"
                    style={{ filter: 'grayscale(100%) brightness(0.85) contrast(1.1)' }}
                />
            </div>

        </section>
    );
}