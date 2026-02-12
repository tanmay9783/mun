"use client";

import { FaLinkedin } from "react-icons/fa";

/* =======================
   Types
======================= */

interface TeamMember {
    img: string;
    name: string;
    linkedin: string;
    batch: string;
}

/* =======================
   Data
======================= */

const teamMembers: TeamMember[] = [
    {
        img: "/self1.jpeg",
        name: "Shudha Nidhi Soni",
        linkedin: "https://www.linkedin.com/in/shudha-nidhi-soni-5833142a1/",
        batch: "2023-2027",
    },
    {
        img: "/sk.jpeg",
        name: "Saksham Saxena",
        linkedin: "https://www.linkedin.com/in/sakkshm/",
        batch: "2024-2028",
    },
    {
        img: "/St.jpeg",
        name: "Satyam Singh",
        linkedin: "https://www.linkedin.com/in/satyam-singh-972496204",
        batch: "2024-2028",
    },
    {
        img: "/shivam.jpeg",
        name: "Shivam Pandey",
        linkedin: "https://www.linkedin.com/in/shivam-pandey-8b1186311",
        batch: "2024-2028",
    },
    {
        img: "/placeholder.jpeg", // photo baad me change kar sakte ho
        name: "Nitin",
        linkedin: "#",
        batch: "2024-2028",
    },
     {
        img: "/placeholder.jpeg", // photo baad me change kar sakte ho
        name: "freshman",
        linkedin: "#",
        batch: "2025-2029",
    },
    
];

/* =======================
   Component
======================= */

export default function Team(): React.ReactElement {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-[#f8f8f8] px-8 py-27">
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-[#0d0c2d]">
                Technical Team
            </h1>

            {/* Team Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#C7BEE6]/20 hover:border-[#C7BEE6]/60"
                    >
                        {/* Image */}
                        <div className="relative w-full h-80 overflow-hidden bg-gradient-to-br from-[#C7BEE6]/20 to-[#0d0c2d]/10">
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-[#0d0c2d]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#C7BEE6] hover:text-white transform hover:scale-110 transition-all duration-200"
                                >
                                    <FaLinkedin size={60} />
                                </a>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="p-6 text-center bg-gradient-to-br from-white to-[#f4f5fb]">
                            <h3 className="text-xl font-bold text-[#0d0c2d] mb-2">
                                {member.name}
                            </h3>
                            <p className="text-[#C7BEE6] text-lg font-semibold">
                                [ {member.batch} ]
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
