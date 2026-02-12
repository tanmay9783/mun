"use client";

import { FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer(): React.ReactElement {
    return (
        <footer className="relative bg-[#0d0c2d] text-white pt-12">

            {/* TOP BROCHURE CTA */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="rounded-xl border border-[#C7BEE6]/30 bg-gradient-to-r from-[#0d0c2d] to-[#062045] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-1">
                            Download the <span className="text-[#C7BEE6]">Official Brochure</span>
                        </h3>
                        <p className="text-white/70 text-sm">
                            Committees, schedules & registration details.
                        </p>
                    </div>

                    <a
                        href="/brochure.pdf"
                        className="bg-[#C7BEE6] text-[#0d0c2d] px-8 py-3 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                        Download
                    </a>
                </div>
            </div>

            {/* MAIN FOOTER */}
            <div className="max-w-7xl mx-auto px-6 pt-10 pb-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* BRAND */}
                <div>
                    <h4 className="text-xl font-bold mb-2">KIET MUN</h4>
                    <p className="text-white/70 text-sm">
                        Empowering future global leaders through diplomacy and debate.
                    </p>

                    <div className="flex gap-4 mt-4 text-lg">
                        <FaInstagram className="hover:text-[#C7BEE6] cursor-pointer" />
                        <FaLinkedin className="hover:text-[#C7BEE6] cursor-pointer" />
                    </div>
                </div>

                {/* CONTACT */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-[#C7BEE6]">
                        Contact
                    </h4>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-[#C7BEE6]" />
                            +91 8303220540
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-[#C7BEE6]" />
                            +91 7017712755
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-[#C7BEE6]" />
                            kietmun@kiet.edu
                        </li>
                    </ul>
                </div>

                {/* MAP ONLY */}
                <div className="w-full h-32 rounded-lg overflow-hidden border border-[#C7BEE6]/40">
                    <iframe
                        title="KIET Group of Institutions Location"
                        src="https://www.google.com/maps?q=KIET%20Group%20of%20Institutions%20Ghaziabad&output=embed"
                        className="w-full h-full"
                        loading="lazy"
                    />
                </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-white/10" />

            {/* BOTTOM BAR (SHORT HEIGHT) */}
            <div className="max-w-7xl mx-auto px-6 py-3 text-xs text-white/60 flex flex-col md:flex-row items-center justify-between gap-1">
                <span>© 2026 KIET MUN</span>
                <span>
                    Designed by{" "}
                    <a href="/techteam" className="text-[#C7BEE6] hover:underline">
                        KIET MUN Tech Team
                    </a>
                </span>
            </div>
        </footer>
    );
}
