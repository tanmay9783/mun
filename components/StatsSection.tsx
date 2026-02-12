"use client";

import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatItem {
    value: number;
    suffix: string;
    label: string;
}

const stats: StatItem[] = [
    { value: 4000, suffix: "+", label: "Delegates" },
    { value: 15, suffix: "+", label: "Committees" },
    { value: 7, suffix: "", label: "Years of Excellence" },
];

const springConfig = { damping: 30, stiffness: 100, mass: 2 };

function useCountUp(target: number, duration: number, trigger: boolean): number {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return;
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [target, duration, trigger]);

    return count;
}

function StatCard({ item, index }: { item: StatItem; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    const count = useCountUp(item.value, 2000, inView);

    const rotateX = useSpring(useMotionValue(0), springConfig);
    const rotateY = useSpring(useMotionValue(0), springConfig);
    const scale = useSpring(1, springConfig);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;
        rotateX.set((offsetY / (rect.height / 2)) * -12);
        rotateY.set((offsetX / (rect.width / 2)) * 12);
    }

    function handleMouseEnter() {
        scale.set(1.05);
    }

    function handleMouseLeave() {
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
    }

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: index * 0.15, ease: "easeOut" },
        },
    };

    return (
        <motion.div
            ref={ref}
            {...({ variants: cardVariants, initial: "hidden", whileInView: "visible", viewport: { once: true } } as any)}
            className="group relative flex flex-col items-center justify-center rounded-2xl p-[1px] [perspective:800px]"
            style={{ background: "linear-gradient(145deg, rgba(199,190,230,0.3), rgba(199,190,230,0.05))" }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="flex flex-col items-center justify-center w-full h-full rounded-2xl bg-[#0d0c2d]/90 backdrop-blur-sm px-6 py-10 sm:px-10 sm:py-12 transition-colors duration-300 group-hover:bg-[#0d0c2d]/80 [transform-style:preserve-3d]"
                style={{ rotateX, rotateY, scale }}
            >
                {/* Number */}
                <span
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(180deg, #ffffff 0%, #c7bee6 100%)" }}
                >
                    {count.toLocaleString()}
                    {item.suffix}
                </span>

                {/* Decorative line */}
                <div
                    className="mt-4 mb-4 h-[2px] w-10 rounded-full group-hover:w-16 transition-all duration-500"
                    style={{ background: "linear-gradient(90deg, transparent, #c7bee6, transparent)" }}
                />

                {/* Label */}
                <span className="text-sm sm:text-base md:text-lg font-medium tracking-wider text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {item.label}
                </span>
            </motion.div>
        </motion.div>
    );
}

export default function StatsSection(): React.ReactElement {
    const headingVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden">

            <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8">
                {/* Heading */}
                <motion.div
                    {...({ variants: headingVariants, initial: "hidden", whileInView: "visible", viewport: { once: true } } as any)}
                    className="mb-12 sm:mb-16 text-center"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
                        <span className="text-[#0d0c2d]">KIET MUN By The Number</span>
                        
                    </h2>
                    <div className="mx-auto mt-4 h-[2px] w-16 rounded-full bg-[#0d0c2d]/20" />
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                    {stats.map((item, i) => (
                        <StatCard key={item.label} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
