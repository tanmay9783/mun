"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

interface NavItem {
    name: string;
    path: string;
}

export default function Navbar(): React.ReactElement {
    const router = useRouter();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const navItems: NavItem[] = [
        { name: "Home", path: "/" },
        { name: "Committees", path: "/Committee" },
        { name: "Team", path: "/secretariat" },
        { name: "Prizes", path: "/prize" },
        { name: "Gallery", path: "/gallery" },
        { name: "FAQs", path: "/faqs" },
    ];

    /* Lock background scroll on mobile drawer open */
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            {/* EDGE DRAG OPEN ZONE (RIGHT SIDE, MOBILE ONLY) */}
            <div
                onClick={() => setOpen(true)}
                className="fixed top-0 right-0 h-full w-3 z-40 md:hidden"
            />

            {/* NAVBAR (SOLID ALWAYS, MOBILE SAFE) */}
            <nav
                className="
                    fixed top-0 left-0 w-full z-50
                    flex items-center justify-between
                    px-6 md:px-10 py-5
                    bg-[#0d0c2d]
                    text-white
                    border-b border-white/10
                    md:backdrop-blur
                "
            >
                {/* Logo */}
                <div
                    onClick={() => router.push("/")}
                    className="font-bold tracking-widest cursor-pointer"
                >
                     <Image
    src="/kmunlogo.png"
    alt="KIET Logo"
    width={46}
    height={46}
    className="object-contain"
  />
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-8 text-sm tracking-wide">
                    {navItems.map((item) => (
                        <li
                            key={item.name}
                            onClick={() => router.push(item.path)}
                            className={`cursor-pointer transition ${
                                pathname === item.path
                                    ? "text-[#C7BEE6]"
                                    : "text-white/80 hover:text-white"
                            }`}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <button
                    onClick={() => router.push("/register")}
                    className="hidden md:block rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0d0c2d] hover:bg-[#c7bee6] transition-colors duration-300 shadow-sm"
                >
                    Register
                </button>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setOpen(true)}
                    className="md:hidden text-white"
                    aria-label="Open Menu"
                >
                    <FiMenu size={26} />
                </button>
            </nav>

            {/* BACKDROP */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                />
            )}

            {/* MOBILE DRAWER (RIGHT → LEFT) */}
            <motion.aside
                {...({
                    drag: "x",
                    dragConstraints: { left: 0, right: 0 },
                    dragElastic: 0.15,
                    onDragEnd: (_: any, info: any) => {
                        if (info.offset.x > 80) {
                            setOpen(false);
                        }
                    },
                    initial: { x: "100%" },
                    animate: { x: open ? 0 : "100%" },
                    transition: { type: "tween", duration: 0.3 }
                } as any)}
                className="
                    fixed top-0 right-0
                    h-full w-[280px]
                    bg-white z-50
                    md:hidden
                    flex flex-col
                "
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-end px-6 h-16 border-b border-[#C7BEE6]/40">
                    <button
                        onClick={() => setOpen(false)}
                        className="text-[#0d0c2d]"
                        aria-label="Close Menu"
                    >
                        <FiX size={24} />
                    </button>
                </div>

                {/* Animated Links */}
                <motion.ul
                    {...({
                        initial: "hidden",
                        animate: open ? "visible" : "hidden",
                        variants: {
                            visible: { transition: { staggerChildren: 0.08 } },
                            hidden: {},
                        }
                    } as any)}
                    className="flex flex-col px-6 py-8 gap-6 flex-1"
                >
                    {navItems.map((item) => (
                        <motion.li
                            key={item.name}
                            variants={{
                                hidden: { opacity: 0, x: 20 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            transition={{ duration: 0.3 }}
                            onClick={() => {
                                router.push(item.path);
                                setOpen(false);
                            }}
                            className={`cursor-pointer text-lg font-medium ${
                                pathname === item.path
                                    ? "text-[#0d0c2d]"
                                    : "text-[#0d0c2d]/70"
                            }`}
                        >
                            {item.name}
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Mobile CTA */}
                <div className="px-6 pb-8">
                    <button
                        onClick={() => {
                            router.push("/register");
                            setOpen(false);
                        }}
                        className="w-full rounded-md bg-[#0d0c2d] py-3 text-sm font-semibold text-white"
                    >
                        Register
                    </button>
                </div>
            </motion.aside>
        </>
    );
}
