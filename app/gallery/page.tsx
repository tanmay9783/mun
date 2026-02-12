"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ================= TYPES ================= */

interface GalleryImage {
    src: string;
    alt: string;
    /**
     * "portrait" = originally landscape but needs -90° rotation → displayed as portrait
     * "landscape" (default) = normal landscape photo
     */
    orientation?: "portrait" | "landscape";
    /** Optional max-height to crop an image and reduce whitespace */
    maxH?: number;
}

/* ================= DATA =================
 * Images ordered to interleave portrait (tall) and landscape (short)
 * so that the 3-column masonry packs tightly with minimal gaps.
 * Portrait images are ones that were previously rotate: -90.
 */

const images: GalleryImage[] = [
    // --- Row-like batch 1: 2 landscape + 1 portrait ---
    { src: "/IMG_2980.webp", alt: "Gallery image 1" },
    { src: "/DSC01458.webp", alt: "Gallery image 2" },
    { src: "/IMG_3291.webp", alt: "Gallery image 3", orientation: "portrait" },

    // --- Batch 2 ---
    { src: "/DSC01494.webp", alt: "Gallery image 4" },
    { src: "/DSC01539.webp", alt: "Gallery image 5" },
    { src: "/IMG_3467.webp", alt: "Gallery image 6", orientation: "portrait" },

    // --- Batch 3 ---
    { src: "/IMG_3044.webp", alt: "Gallery image 7" },
    { src: "/IMG_3101.webp", alt: "Gallery image 8" },
    { src: "/IMG_3216.webp", alt: "Gallery image 9", orientation: "portrait" },

    // --- Batch 4 ---
    { src: "/IMG_3106.webp", alt: "Gallery image 10" },
    { src: "/IMG_3110.webp", alt: "Gallery image 11" },
    { src: "/IMG_3289.webp", alt: "Gallery image 12", orientation: "portrait" },

    // --- Batch 5 ---
    { src: "/DSC01440.webp", alt: "Gallery image 13" },
    { src: "/DSC01527.webp", alt: "Gallery image 14" },
    { src: "/IMG_3356.webp", alt: "Gallery image 15", orientation: "portrait" },

    // --- Remaining landscapes (balanced across columns) ---
    { src: "/IMG_3243.webp", alt: "Gallery image 16" },
    { src: "/IMG_3308.webp", alt: "Gallery image 17" },
    { src: "/IMG_3363.webp", alt: "Gallery image 18" },

    { src: "/IMG_3449.webp", alt: "Gallery image 19" },
    { src: "/IMG_3477.webp", alt: "Gallery image 20" },
    { src: "/IMG_3676.webp", alt: "Gallery image 21" },

    { src: "/IMG_4030.webp", alt: "Gallery image 22" },
    { src: "/IMG_5001.webp", alt: "Gallery image 23" },
    { src: "/IMG_5010.webp", alt: "Gallery image 24" },

    { src: "/IMG_4005.webp", alt: "Gallery image 25" },
    { src: "/IMG_3998.webp", alt: "Gallery image 26" },
    { src: "/IMG_3040.webp", alt: "Gallery image 27" },

    { src: "/IMG_3529.webp", alt: "Gallery image 28" },
    { src: "/IMG_3500.webp", alt: "Gallery image 29" },
    { src: "/IMG_3306.webp", alt: "Gallery image 30" },

    { src: "/IMG_3055.webp", alt: "Gallery image 31" },
    { src: "/IMG_3072.webp", alt: "Gallery image 32" },
    { src: "/IMG_3111.webp", alt: "Gallery image 33" },

    { src: "/IMG_3114.webp", alt: "Gallery image 34" },
    { src: "/IMG_3346.webp", alt: "Gallery image 35" },
    { src: "/IMG_3350.webp", alt: "Gallery image 36", maxH: 250 },
];

/** Last image – rendered full-width separately */
const lastImage: GalleryImage = {
    src: "/grp photo mun.webp",
    alt: "Group photo MUN",
};

/* ================= COMPONENT ================= */

export default function Gallery(): React.ReactElement {
    return (
        <section className="min-h-screen w-full bg-white px-6 py-28">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-extrabold text-[#0d0c2d] text-center mb-16"
            >
                Photo Gallery
            </motion.h1>

            <div className="w-full max-w-7xl mx-auto">
                {/* ---- Pinterest / Masonry grid via CSS columns ---- */}
                <div className="[column-count:1] sm:[column-count:2] lg:[column-count:3] [column-gap:0.75rem]">
                    {images.map((image, index) => {
                        const isPortrait = image.orientation === "portrait";

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: (index % 6) * 0.08,
                                }}
                                className="mb-3 break-inside-avoid"
                            >
                                {isPortrait ? (
                                    /* Portrait (rotated) images: fixed aspect container */
                                    <div
                                        className="relative overflow-hidden rounded-xl shadow-[0_6px_30px_rgba(13,12,45,0.25)] group"
                                        style={{ aspectRatio: "3 / 4" }}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            quality={75}
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            style={{
                                                transform:
                                                    "rotate(-90deg) scale(1.45)",
                                            }}
                                        />
                                    </div>
                                ) : (
                                    /* Landscape images: natural height for tight packing */
                                    <div
                                        className="relative overflow-hidden rounded-xl shadow-[0_6px_30px_rgba(13,12,45,0.25)] group"
                                        style={image.maxH ? { maxHeight: image.maxH, overflow: 'hidden' } : undefined}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={800}
                                            height={600}
                                            quality={75}
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* ---- Full-width group photo ---- */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-4 overflow-hidden rounded-xl shadow-[0_6px_30px_rgba(13,12,45,0.25)]"
                >
                    <Image
                        src={lastImage.src}
                        alt={lastImage.alt}
                        width={1920}
                        height={1080}
                        quality={90}
                        sizes="100vw"
                        className="w-full h-auto object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
