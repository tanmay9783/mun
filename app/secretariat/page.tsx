"use client";

import Image from "next/image";

interface Member {
    name: string;
    role: string;
    image: string;
}

export default function Secretariat(): React.ReactElement {
    const coreTeam: Member[] = [
        { name: "Abhishek Sharma", role: "Chief Advisor", image: "/images/abhishek.jpeg" },
        { name: "Sumit Verma", role: "Treasurer", image: "/images/sumit.jpeg" },
        { name: "Ashutosh", role: "Secretary General", image: "/images/ashutosh.jpeg" },
        { name: "Tashi Verma", role: "Deputy Secretary General", image: "/images/tashi.jpeg" },
        { name: "Aadish Pathak", role: "Director General", image: "/images/adish.jpeg" },
        { name: "Pravira Shukla", role: "Senior Convenor", image: "/images/pravira.jpeg" },
        { name: "Sourav Prasad", role: "Convenor", image: "/images/sourav.jpeg" },
        { name: "Janhwee Pandey", role: "Head of Secretariat", image: "/images/jahnwee.jpeg" },
        { name: "Mitansh Gupta", role: "Director of Management", image: "/images/mitansh.jpeg" },
        { name: "Vartika Agrawal", role: "Head of Graphics", image: "/images/vartika.jpeg" },
        { name: "Shudha Nidhi Soni", role: "Head of Digital Affairs", image: "/images/shudhanidhi.jpeg" },
        { name: "Sakshi Agrawal", role: "Head of Public Relations", image: "/images/sakshi.jpeg" },
    ];

    const Card = ({ name, role, image }: Member): React.ReactElement => (
        <div
            className="
                relative
                bg-white
                rounded-xl
                overflow-hidden
                transition-all duration-300
                hover:shadow-[0_20px_50px_rgba(13,12,45,0.3)]
                hover:-translate-y-2
                shadow-[0_10px_30px_rgba(13,12,45,0.15)]
            "
            style={{
                transform: 'perspective(1000px) rotateX(2deg)',
                transformStyle: 'preserve-3d',
            }}
        >
            {/* 3D Border Effect */}
            <div className="absolute inset-0 border-2 border-[#0d0c2d]/10 rounded-xl pointer-events-none" />
            
            {/* Image Container */}
            <div className="relative w-full h-96 overflow-hidden bg-gray-100">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    quality={85}
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Content Container with 3D Effect */}
            <div 
                className="relative bg-white p-6 border-t-4 border-[#0d0c2d]"
                style={{
                    transform: 'translateZ(20px)',
                }}
            >
                {/* Name */}
                <h3 className="text-2xl font-bold text-[#0d0c2d] mb-2 tracking-tight">
                    {name}
                </h3>
                
                {/* Role */}
                <p className="text-base font-medium text-[#0d0c2d]/70 uppercase tracking-wider">
                    {role}
                </p>

                {/* Bottom Shadow Line for Depth */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0d0c2d]/10 to-transparent" />
            </div>

            {/* 3D Shadow Layer */}
            <div className="absolute -bottom-2 left-2 right-2 h-2 bg-[#0d0c2d]/5 blur-sm rounded-b-xl -z-10" />
        </div>
    );

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Header Section */}
            <section className="pt-32 pb-12 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 
                        className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-[#0d0c2d] inline-block"
                    >
                        CORE TEAM
                    </h1>
                    {/* Full width underline under the text */}
                    <div className="w-full max-w-md mx-auto h-1 bg-[#0d0c2d] mt-6" />
                </div>
            </section>

            {/* Team Grid - 3 Cards Per Row with Increased Row Spacing */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {coreTeam.map((member) => (
                        <Card key={member.name} {...member} />
                    ))}
                </div>
            </section>

            {/* Bottom Spacer */}
            <div className="h-20" />
        </main>
    );
}