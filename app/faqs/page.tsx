"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= TYPES ================= */

interface FAQItem {
  question: string;
  answer: string;
}

/* ================= DATA ================= */

const faqData: FAQItem[] = [
  {
    question: "What is Model United Nations?",
    answer:
      "Model United Nations (MUN) is a simulation where students act as UN delegates, debating global issues and developing diplomatic and leadership skills.",
  },
  {
    question: "I am a first-time MUN participant. What should I expect?",
    answer:
      "Expect an intellectually stimulating experience. You will research your country’s stance, participate in formal debate, and collaborate with other delegates to draft resolutions.",
  },
  {
    question: "Is attendance taken in committee sessions?",
    answer:
      "Yes, attendance is mandatory for all committee sessions, and appropriate action may be taken in case of unexplained absence.",
  },
  {
    question:
      "The agenda of my committee isn’t relevant to my assigned nation. Can I still participate?",
    answer:
      "Absolutely. All delegates are encouraged to participate by integrating their country’s broader foreign policy and principles into the discussion.",
  },
  {
    question: "Do I get a participation certificate for attending KIET MUN?",
    answer:
      "Yes, every registered participant who attends the conference will receive a certificate of participation.",
  },
  {
    question: "What committees are being simulated at KIET MUN?",
    answer:
      "UNGA-DISEC, UNHRC, UNEP, AIPPM, and the International Press.",
  },
  {
    question: "Do I need prior MUN experience to participate?",
    answer:
      "No prior experience is required. KIET MUN welcomes both beginners and experienced delegates.",
  },
  {
    question: "What will be the dress code for the event?",
    answer:
      "Both formal western and traditional attire are permitted. Additional guidelines will be shared by the organizing team.",
  },
  {
    question: "What is a position paper?",
    answer:
      "A position paper is a document outlining your country’s stance on the agenda and proposed solutions. It is required for each committee topic.",
  },
  {
    question: "What is caucusing?",
    answer:
      "Caucusing refers to informal debate sessions—moderated or unmoderated—where delegates collaborate to negotiate and build consensus.",
  },
];

/* ================= COMPONENT ================= */

export default function FAQPage(): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen w-full bg-white px-4 py-24 flex justify-center">
      <div className="w-full max-w-4xl">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0d0c2d]">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-[#0d0c2d]/70 max-w-xl mx-auto">
            Everything you need to know before participating in KIET Model United Nations
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="
                  border-2 border-[#6f67b8]/30
                  rounded-2xl
                  bg-white
                  shadow-sm
                  hover:shadow-md
                  transition-shadow
                "
              >
                {/* Question */}
                <button
                  className={`
                    w-full flex justify-between items-center
                    px-6 py-5 text-left
                    transition-colors
                    ${isOpen ? "bg-[#6f67b8]/10" : "hover:bg-[#6f67b8]/5"}
                  `}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <h2 className="text-base md:text-lg font-semibold text-[#0d0c2d]">
                    {item.question}
                  </h2>

                  {/* Plus / Minus */}
                  <span className="ml-4 text-2xl font-medium text-[#6f67b8]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      {...({initial: { height: 0, opacity: 0 },
                      animate: { height: "auto", opacity: 1 },
                      exit: { height: 0, opacity: 0 },
                      transition: { duration: 0.3, ease: "easeOut" },
                      className: "overflow-hidden"} as any)}
                    >
                      <div className="px-6 pb-6 text-[#0d0c2d]/80 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have a question */}
        <div className="mt-24 text-center">
          <div
            className="
              inline-block
              px-8 py-7
              rounded-2xl
              border-2 border-[#6f67b8]/30
              bg-[#6f67b8]/5
            "
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#0d0c2d]">
              Still have a question?
            </h3>

            <p className="mt-3 text-[#0d0c2d]/80 max-w-md mx-auto">
              Reach out to us at{" "}
              <a
                href="mailto:kietmun@kiet.edu"
                className="font-semibold text-[#6f67b8] hover:underline"
              >
                kietmun@kiet.edu
              </a>{" "}
              and our team will be happy to assist you.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
