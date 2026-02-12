"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Speaker {
    name: string;
    title: string;
    description: string;
    image: string;
}

const speakers: Speaker[] = [
    {
        name: "Major General Yashpal Singh Mor",
        title: "Major General",
        description: "(Retd.) was awarded the Sena Medal and Chief of Army Staff Commendation for his bravery in counter-terrorism and counter-insurgency operations in Jammu and Kashmir.",
        image: "/yashmorsrr.jpg",
    },
    {
        name: "Major Lovendra Chaudhary",
        title: "Retired Indian Army officer",
        description: " Specialized in high-altitude warfare and counter-terrorism, led expeditions above 5000m, and holds degrees from JNU, HNB Garhwal University, and MIT.",
        image: "/lovendrasr.jpeg",
    },
];

export default function GuestSpeakers(): React.ReactElement {
    return (
        <section className="w-full bg-white px-4 py-24 overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#c7bee6] rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6e72b2] rounded-full blur-3xl" />
            </div>

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative text-3xl sm:text-5xl font-extrabold text-[#0d0c2d] mb-4 text-center"
            >
              Our Past  Guest Speakers
            </motion.h2>

            {/* Subheading */}
            <motion.p
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative text-sm sm:text-base text-[#535270] mb-16 text-center tracking-wide"
            >
                Learn from the best minds in diplomacy and global affairs
            </motion.p>

            {/* Speaker Cards Container */}
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {speakers.map((speaker, index) => (
                    <motion.div
                        key={speaker.name}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: index * 0.2,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                            y: -15,
                            scale: 1.02,
                        }}
                        className="
                            relative
                            group
                            bg-white
                            rounded-3xl
                            overflow-hidden
                            shadow-[0px_10px_40px_rgba(13,12,45,0.08)]
                            hover:shadow-[0px_25px_60px_rgba(110,114,178,0.25)]
                            transition-all duration-500
                            border border-[#c7bee6]/20
                            hover:border-[#6e72b2]/40
                        "
                        style={{
                            perspective: "1000px",
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {/* Colored Top Bar */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6e72b2] via-[#4a4f9c] to-[#535270] group-hover:h-2 transition-all duration-300" />

                        {/* Speaker Image Container */}
                        <div className="relative w-full h-72 overflow-hidden bg-gradient-to-br from-[#c7bee6]/10 to-[#6e72b2]/10">
                            <Image
                                src={speaker.image}
                                alt={speaker.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            
                            {/* Gradient Overlay on Image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c2d]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Corner Accent */}
                            <div className="absolute top-4 right-4 w-12 h-12 bg-[#c7bee6]/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                                <svg className="w-6 h-6 text-[#0d0c2d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="relative p-6 bg-white">
                            {/* Name */}
                            <h3 className="text-2xl font-bold text-[#0d0c2d] mb-2 group-hover:text-[#4a4f9c] transition-colors duration-300">
                                {speaker.name}
                            </h3>

                            {/* Title with Icon */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6e72b2] to-[#4a4f9c] flex items-center justify-center flex-shrink-0">
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                </div>
                                <p className="text-sm font-semibold text-[#6e72b2] uppercase tracking-wide">
                                    {speaker.title}
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-[1px] bg-gradient-to-r from-[#c7bee6]/50 via-[#6e72b2]/30 to-transparent mb-4" />

                            {/* Description */}
                            <p className="text-sm text-[#535270] leading-relaxed">
                                {speaker.description}
                            </p>

                            {/* Bottom Accent Bar */}
                            <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-r from-[#6e72b2] via-[#c7bee6] to-[#4a4f9c] group-hover:h-1 transition-all duration-300" />
                        </div>

                        {/* 3D Depth Effect - Corner Shadow */}
                        <div className="absolute -bottom-2 -right-2 w-full h-full bg-gradient-to-br from-transparent to-[#6e72b2]/10 rounded-3xl -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-500" />
                    </motion.div>
                ))}
            </div>

            {/* Bottom Decorative Line */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative mt-20 max-w-md mx-auto h-1 bg-gradient-to-r from-transparent via-[#6e72b2] to-transparent rounded-full"
            />
        </section>
    );
}