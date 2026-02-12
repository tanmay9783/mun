"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

interface Committee {
    name: string;
    image: string;
    position: string;
    description: string;
    link: string;
}

const committees: Committee[] = [
    {
        name: "AIPPM",
        image: "/committees/aippm.png",
        position: "top-0 left-10",
        description: "All India Political Parties Meet - Discussing national political agendas and policies",
        link: "",
    },
    {
        name: "UNCSW",
        image: "/committees/uncsw.png",
        position: "top-0 right-10",
        description: "United Nations Commission on the Status of Women - Promoting gender equality worldwide",
        link: "/committees/uncsw",
    },
    {
        name: "UNHRC",
        image: "/committees/unhrc.png",
        position: "bottom-5 left-10",
        description: "United Nations Human Rights Council - Protecting and promoting human rights globally",
        link: "/committees/unhrc",
    },
    {
        name: "UNGA-DISEC",
        image: "/committees/unga.png",
        position: "bottom-5 right-10",
        description: "UN General Assembly Disarmament & International Security - Addressing global security challenges",
        link: "/committees/unga-disec",
    },
];

export default function CommitteesPage(): React.ReactElement {
    const [flipped, setFlipped] = useState<string | null>(null);

    return (
        <section className="w-full bg-transparent px-4 py-24 overflow-x-hidden">
            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0d0c2d] mb-2 text-center">
                Committees
            </h2>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-[#535270] mb-14 text-center tracking-wide">
                DEBATE. DIPLOMACY. DEVELOPMENT.
            </p>

            {/* ================= MOBILE & TABLET (LIST VIEW, NO LOGO, NO ANIMATION) ================= */}
            <div className="lg:hidden max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
                {committees.map((committee) => (
                    <Link
                        key={committee.name}
                        href={committee.link}
                        className="
                            flex flex-col items-center
                            rounded-2xl
                            p-8
                            bg-transparent
                            hover:opacity-80
                            transition-opacity
                        "
                    >
                        <div className="relative w-36 h-36 rounded-full overflow-hidden mb-4 bg-transparent">
                            <Image
                                src={committee.image}
                                alt={committee.name}
                                fill
                                className="object-cover"
                                sizes="144px"
                                quality={70}
                            />
                        </div>

                        <span className="text-lg font-semibold text-[#0d0c2d] text-center mb-2">
                            {committee.name}
                        </span>
                        <p className="text-sm text-[#535270] text-center">
                            {committee.description}
                        </p>
                    </Link>
                ))}
            </div>

            {/* ================= DESKTOP (FREE LAYOUT + CENTER LOGO) ================= */}
            <div className="hidden lg:block relative w-full max-w-5xl mx-auto h-[560px]">
                {/* Center KIET Logo – DESKTOP ONLY */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="
                        absolute
                        top-1/2 left-1/2
                        -translate-x-1/2 -translate-y-1/2
                        w-64 h-64
                        rounded-full
                        overflow-hidden
                        bg-no-repeat bg-center bg-cover
                        z-[5]
                        pointer-events-none
                    "
                    style={{ backgroundImage: "url('/clogo.png')" }}
                />

                {/* Committee Items with Flip Effect */}
                {committees.map((committee, index) => (
                    <motion.div
                        key={committee.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: index * 0.15,
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className={`
                            absolute ${committee.position}
                            flex flex-col items-center
                        `}
                        onMouseEnter={() => setFlipped(committee.name)}
                        onMouseLeave={() => setFlipped(null)}
                    >
                        <div
                            className="relative w-56 h-56 rounded-full"
                            style={{ perspective: "1000px" }}
                        >
                            <motion.div
                                {...({className: "relative w-full h-full bg-transparent",
                                animate: {
                                    rotateY: flipped === committee.name ? 180 : 0,
                                },
                                transition: { duration: 0.6 },
                                style: { transformStyle: "preserve-3d" }} as any)}
                            >
                                {/* Front Side - Image */}
                                <div
                                    className="absolute inset-0 w-full h-full rounded-full overflow-hidden bg-transparent"
                                    style={{
                                        backfaceVisibility: "hidden",
                                    }}
                                >
                                    <Image
                                        src={committee.image}
                                        alt={committee.name}
                                        fill
                                        className="object-cover bg-transparent"
                                        sizes="224px"
                                        quality={70}
                                    />
                                </div>

                                {/* Back Side - Content */}
                                <div
                                    className="
                                        absolute inset-0
                                        w-full h-full
                                        rounded-full
                                       bg-[#0d0c2d]

                                        flex flex-col items-center justify-center
                                        p-6
                                        text-center
                                    "
                                    style={{
                                        backfaceVisibility: "hidden",
                                        transform: "rotateY(180deg)",
                                    }}
                                >
                                    <h3 className="text-[#c7bee6] text-xl font-bold mb-3">
                                        {committee.name}
                                    </h3>
                                    <p className="text-[#ffffff]/90 text-sm leading-relaxed">
                                        {committee.description}
                                    </p>
                                    {/* <Link 
                                        href={committee.link}
                                        className="mt-4 px-4 py-2 bg-[#6e72b2] text-[#ffffff] rounded-full text-sm font-semibold hover:bg-[#c7bee6] hover:text-[#0d0c2d] transition-colors"
                                    >
                                        View Details
                                    </Link> */}
                                </div>
                            </motion.div>
                        </div>

                        <motion.span
                            {...({className: "mt-4 text-xl font-semibold text-[#0d0c2d]",
                            animate: {
                                opacity: flipped === committee.name ? 0 : 1,
                            },
                            transition: { duration: 0.3 }} as any)}
                        >
                            {committee.name}
                        </motion.span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}