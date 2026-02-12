"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
    const eventDate = new Date("2026-04-18T10:00:00").getTime();

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = eventDate - now;

        if (difference < 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="flex flex-col items-center justify-center bg-gradient-to-b from-white via-[#f8f7fc] to-white py-24 px-4"
        >
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: false }}
                className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center mb-14 tracking-tight text-[#0d0c2d]"
            >
                Conference Begins In
            </motion.h2>

            {/* Timer Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: false }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full max-w-[900px] mx-auto"
            >
                {Object.entries(timeLeft).map(([unit, value], index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 + index * 0.15 }}
                        viewport={{ once: false }}
                        whileHover={{ scale: 1.06, y: -8 }}
                        whileTap={{ scale: 0.96 }}
                        className="
              bg-white
              px-6 py-10
              rounded-3xl
              text-center
              w-full
              border
              border-[#c7bee6]/50
              shadow-md
              hover:shadow-xl
              hover:border-[#6f67b8]
              transition-all
              duration-300
            "
                    >
                        <p className="text-5xl md:text-6xl font-extrabold text-[#0d0c2d] tracking-wider">
                            {value}
                        </p>
                        <span className="text-sm sm:text-base uppercase text-[#6f67b8] font-semibold mt-3 block tracking-widest">
                            {unit}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default CountdownTimer;
