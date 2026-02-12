"use client";

import {
    FaMedal,
    FaTrophy,
    FaAward,
    FaUsers,
    FaSchool,
} from "react-icons/fa";

interface Prize {
    title: string;
    amount: string;
    quote: string;
    icon: React.ReactElement;
}

export default function Prizes(): React.ReactElement {
    const prizeList: Prize[] = [
        {
            title: "Best Delegate",
            amount: "₹10,000",
            quote:
                "Leadership that inspires change and drives meaningful discussions across all committees.",
            icon: <FaTrophy className="text-white text-5xl" />,
        },
        {
            title: "High Commendation",
            amount: "₹5,000",
            quote: "Exceptional contribution.",
            icon: <FaMedal className="text-[#0d0c2d] text-xl" />,
        },
        {
            title: "Special Mention",
            amount: "₹2,000",
            quote: "Impactful presence.",
            icon: <FaAward className="text-[#0d0c2d] text-xl" />,
        },
        {
            title: "Best Delegation",
            amount: "₹2,000",
            quote: "Team excellence.",
            icon: <FaUsers className="text-[#0d0c2d] text-xl" />,
        },
        {
            title: "Best School Delegation",
            amount: "₹2,000",
            quote: "Collective excellence.",
            icon: <FaSchool className="text-[#0d0c2d] text-xl" />,
        },
    ];

    const [grandPrize, ...otherPrizes] = prizeList;

    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Heading – untouched */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#0d0c2d] mb-6">
                        Prize Structure
                    </h1>
                    <div className="mx-auto h-1 w-24 bg-[#C7BEE6] mb-6" />
                    <p className="text-[#0d0c2d]/65 max-w-2xl mx-auto text-lg">
                        Recognising excellence, leadership, and diplomacy through
                        awards that honour exceptional performance.
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Grand Prize */}
                    <div className="lg:col-span-2">
                        <div
                            className="
                                relative
                                h-[420px]
                                rounded-3xl
                                p-10
                                text-white
                                overflow-hidden
                                bg-gradient-to-br
                                from-[#0d0c2d]
                                to-[#062045]
                                shadow-xl
                                flex flex-col
                                justify-between
                                transform-gpu
                                hover:scale-[1.01]
                                transition-all duration-300
                            "
                        >
                            <div>
                                <p className="uppercase tracking-widest text-sm mb-4 text-[#C7BEE6]">
                                    Grand Prize
                                </p>
                                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                                    {grandPrize.title}
                                </h2>
                                <p className="text-4xl font-bold mb-6">
                                    {grandPrize.amount}
                                </p>
                                <p className="max-w-lg text-white/90">
                                    {grandPrize.quote}
                                </p>
                            </div>

                            <div className="absolute bottom-8 right-8 opacity-10">
                                <FaTrophy className="text-[180px]" />
                            </div>
                        </div>
                    </div>

                    {/* 4 Small 3D Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {otherPrizes.map((prize) => (
                            <div
                                key={prize.title}
                                className="
                                    bg-white
                                    border border-[#C7BEE6]/40
                                    rounded-2xl
                                    p-6
                                    h-[170px]
                                    shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                                    transform-gpu
                                    transition-all duration-300
                                    hover:-translate-y-2
                                    hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)]
                                    flex flex-col
                                    justify-between
                                "
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C7BEE6]/25">
                                        {prize.icon}
                                    </div>
                                    <h3 className="font-semibold text-[#0d0c2d] leading-tight">
                                        {prize.title}
                                    </h3>
                                </div>

                                <div>
                                    <p className="text-sm text-[#0d0c2d]/60 mb-2">
                                        {prize.quote}
                                    </p>
                                    <p className="font-bold text-[#062045]">
                                        {prize.amount}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
