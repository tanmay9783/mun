"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";

import HeroContent from "@/components/HeroSection";
import CountdownTimer from "@/components/CountDownTimer";
import LetterFromSecretariat from "@/components/LetterToSecretarait";
import CommitteesPage from "@/components/CommitteePage";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import GuestSpeakers from "@/components/Speakers";

const sectionVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1], // ✅ type-safe easing
        },
    },
};

export default function Home(): React.ReactElement {
    const [showTimer, setShowTimer] = useState(false);

    useEffect(() => {
        setShowTimer(true);
    }, []);

    return (
        <>
            {/* HERO SECTION */}
            <motion.div {...({initial: "hidden", whileInView: "visible", viewport: { once: true }, variants: sectionVariants} as any)}>
                <HeroContent />
            </motion.div>

            {/* COUNTDOWN */}
            {showTimer && (
                <motion.div
                    {...({
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: { once: true },
                        variants: sectionVariants
                    } as any)}
                >
                    <CountdownTimer />
                </motion.div>
            )}

            {/* LETTER FROM SECRETARIAT */}
            <motion.div
                {...({
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: true },
                    variants: sectionVariants
                } as any)}
            >
                <LetterFromSecretariat />
            </motion.div>

            {/* COMMITTEES */}
            <motion.div
                {...({
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: true },
                    variants: sectionVariants
                } as any)}
            >
                <CommitteesPage />
            </motion.div>
<GuestSpeakers />



            {/* STATS - BY THE NUMBERS */}
            <motion.div {...({initial: "hidden", whileInView: "visible", viewport: { once: true }, variants: sectionVariants} as any)}>
                <StatsSection />
            </motion.div>
        </>
    );
}
