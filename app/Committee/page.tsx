"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

/* =======================
   Animation Variants
======================= */

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const zoomIn: Variants = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

/* =======================
   Types
======================= */

type CommitteeAnimation = Variants;

interface CommitteeItem {
    name: string;
    img: string;
    agenda: string;
    animation: CommitteeAnimation;
}

/* =======================
   Data
======================= */

const committees: CommitteeItem[] = [
    {
        name: "UNGA-DISEC",
        img: "/UNGAC.jpg",
        agenda:
            "Weaponization of Peace how Global Powers Exploit Security Terrorism & Arm Control to Sustain Dominance.",
        animation: fadeInLeft,
    },
    {
        name: "UNHRC",
        img: "/UNHRC.jpg",
        agenda:
            "Re-evaluating the global human rights framework amid armed conflicts, digital surveillance, and mass displacement.",
        animation: fadeInRight,
    },
    {
        name: "UNCSW",
        img: "/UNCSW.png",
        agenda:
            "Discussion on Preventing the Violation of Women's Rights in Conflict Regions, with a Special Focus on Post-Conflict Reconstruction.",
        animation: fadeInLeft,
    },
    {
        name: "AIPPM",
        img: "/AIPPM.avif",
        agenda:
            "Discussion on the  Constitutional status of Ladakh with special emphasis on the current events, demands of sixth schedule and statehood.",
        animation: fadeInRight,
    },
];

/* =======================
   Component
======================= */

export default function Committee(): React.ReactElement {
    return (
        <section className="w-full bg-gradient-to-b from-white to-[#f8f8f8] py-30 px-4 sm:px-8 lg:px-16">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-7xl mx-auto flex flex-col items-center"
            >
                {/* Heading */}
                <motion.h1
                    variants={fadeInUp}
                    className="text-4xl md:text-5xl font-extrabold text-[#0d0c2d] mb-16 text-center"
                >
                    Committees
                </motion.h1>

                {/* Committee Cards */}
                <div className="w-full flex flex-col gap-14">
                    {committees.map((committee, index) => (
                        <motion.div
                            key={committee.name}
                            variants={committee.animation}
                            className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row ${
                                index % 2 === 1 ? "md:flex-row-reverse" : ""
                            } items-center gap-10 p-8 md:p-12 border border-[#C7BEE6]/20`}
                        >
                            {/* Logo - Circular */}
                            <motion.div
                                variants={zoomIn}
                                className="w-full md:w-1/4 flex justify-center"
                            >
                                <div className="relative w-64 h-64 rounded-full overflow-hidden ring-4 ring-[#C7BEE6]/30 shadow-xl">
                                    <Image
                                        src={committee.img}
                                        alt={committee.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                variants={fadeInUp}
                                className="w-full md:w-3/4 bg-gradient-to-br from-[#f4f5fb] to-white rounded-2xl p-8 border-2 border-[#C7BEE6]/40 text-center md:text-left shadow-inner"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-[#0d0c2d] mb-6">
                                    {committee.name}
                                </h2>

                                <div className="flex items-start gap-3">
                                    <span className="font-bold text-[#C7BEE6] text-xl flex-shrink-0">
                                        Agenda:
                                    </span>
                                    <p className="text-[#0d0c2d] text-lg leading-relaxed">
                                        {committee.agenda}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}