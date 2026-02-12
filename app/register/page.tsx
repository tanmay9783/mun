"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";

/* ================= SUPABASE ================= */

const supabase = createClient(
    "https://gzesnriebmpgnwvzrvyd.supabase.co",
    "YOUR_PUBLIC_ANON_KEY"
);

/* ================= TYPES ================= */

interface RegisterFormValues {
    name: string;
    year?: string;
    phone: string;
    institute: string;
    email: string;
    branch?: string;

    committee1: string;
    portfolio1_1: string;
    portfolio1_2: string;
    portfolio1_3: string;

    committee2: string;
    portfolio2_1: string;
    portfolio2_2: string;
    portfolio2_3: string;

    experience: string;
    referral?: string;
    transaction: string;
    paymentScreenshot: FileList;
}

type Status =
    | { type: "success"; message: string }
    | { type: "error"; message: string }
    | null;

/* ================= COMPONENT ================= */

export default function Register(): React.ReactElement {
    const [status, setStatus] = useState<Status>(null);
    const [loading, setLoading] = useState(false);
    const [fileName, setFileName] = useState<string>("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterFormValues>();

    /* ================= SUBMIT ================= */

    const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
        // Check if all required fields are filled
        if (
            !data.name ||
            !data.phone ||
            !data.institute ||
            !data.email ||
            !data.committee1 ||
            !data.portfolio1_1 ||
            !data.portfolio1_2 ||
            !data.portfolio1_3 ||
            !data.committee2 ||
            !data.portfolio2_1 ||
            !data.portfolio2_2 ||
            !data.portfolio2_3 ||
            !data.experience ||
            !data.transaction ||
            !data.paymentScreenshot?.[0]
        ) {
            setStatus({
                type: "error",
                message: "All fields are required",
            });
            return;
        }

        setLoading(true);
        setStatus(null);

        try {
            const file = data.paymentScreenshot?.[0];
            if (!file) {
                setStatus({
                    type: "error",
                    message: "Payment screenshot is required.",
                });
                setLoading(false);
                return;
            }

            const filePath = `screenshots/${Date.now()}_${data.phone}`;

            const { error: uploadError } = await supabase.storage
                .from("screenshots")
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: urlData } = supabase.storage
                .from("screenshots")
                .getPublicUrl(filePath);

            const { error } = await supabase.from("registrations").insert([
                {
                    ...data,
                    paymentScreenshot: urlData.publicUrl,
                },
            ]);

            if (error) throw error;

            setStatus({
                type: "success",
                message: "Registration successful. We will contact you shortly.",
            });

            reset();
            setFileName("");
        } catch {
            setStatus({
                type: "error",
                message: "Registration failed. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    /* ================= FILE HANDLER ================= */

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
        }
    };

    /* ================= STYLES ================= */

    const label = "block mb-2 font-medium text-[#0d0c2d]";

    const input = (err?: boolean) =>
        `w-full px-4 py-4 rounded-md border 
         text-[#0d0c2d]
         placeholder:text-[#0d0c2d]/70
         bg-white
         focus:outline-none focus:ring-2 ${
            err
                ? "border-red-500 focus:ring-red-500"
                : "border-[#0d0c2d]/30 focus:ring-[#C7BEE6]"
        }`;

    /* ================= UI ================= */

    return (
        <section className="bg-white py-28 px-6 flex justify-center">
            <div className="max-w-5xl w-full bg-white border border-[#C7BEE6]/40 rounded-xl p-10 shadow-md">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#0d0c2d] text-center mb-4">
                    Delegate Registration
                </h1>

                <p className="text-center text-[#0d0c2d]/70 mb-10">
                    Delegate Fee: ₹1600
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {/* BASIC INFO */}
                    <div>
                        <label className={label}>
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            placeholder="Enter your full name"
                            {...register("name", { required: true })}
                            className={input(!!errors.name)}
                        />
                    </div>

                    <div>
                        <label className={label}>Year (Optional)</label>
                        <select {...register("year")} className={input()}>
                            <option value="">Select Year</option>
                            <option>1st</option>
                            <option>2nd</option>
                            <option>3rd</option>
                            <option>4th</option>
                        </select>
                    </div>

                    <div>
                        <label className={label}>
                            Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                            placeholder="Enter phone number"
                            {...register("phone", { required: true })}
                            className={input(!!errors.phone)}
                        />
                    </div>

                    <div>
                        <label className={label}>
                            Institute <span className="text-red-500">*</span>
                        </label>
                        <input
                            placeholder="Institute name"
                            {...register("institute", { required: true })}
                            className={input(!!errors.institute)}
                        />
                    </div>

                    <div>
                        <label className={label}>
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Email address"
                            {...register("email", { required: true })}
                            className={input(!!errors.email)}
                        />
                    </div>

                    <div>
                        <label className={label}>
                            Branch <span className="text-red-500">*</span>
                        </label>
                        <select
                            {...register("branch", { required: true })}
                            className={input(!!errors.branch)}
                        >
                            <option value="">Select Branch</option>
                            <option>CSE</option>
                            <option>CS</option>
                            <option>CS IT</option>
                            <option>CSE AI</option>
                            <option>AIML</option>
                            <option>IT</option>
                            <option>ECE</option>
                            <option>ME</option>
                        </select>
                    </div>

                    {/* COMMITTEE 1 */}
                    <div className="md:col-span-2">
                        <label className={label}>
                            1st Committee Preference{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <select
                            {...register("committee1", { required: true })}
                            className={input(!!errors.committee1)}
                        >
                            <option value="">Select Committee</option>
                            <option>UNGA</option>
                            <option>UNHRC</option>
                            <option>UNEP</option>
                            <option>AIPPM</option>
                        </select>
                    </div>

                    {["portfolio1_1", "portfolio1_2", "portfolio1_3"].map(
                        (f) => (
                            <div key={f}>
                                <label className={label}>
                                    Portfolio Preference{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    placeholder="Portfolio choice"
                                    {...register(
                                        f as keyof RegisterFormValues,
                                        { required: true }
                                    )}
                                    className={input(
                                        !!errors[f as keyof RegisterFormValues]
                                    )}
                                />
                            </div>
                        )
                    )}

                    {/* COMMITTEE 2 */}
                    <div className="md:col-span-2">
                        <label className={label}>
                            2nd Committee Preference{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <select
                            {...register("committee2", { required: true })}
                            className={input(!!errors.committee2)}
                        >
                            <option value="">Select Committee</option>
                            <option>UNGA</option>
                            <option>UNHRC</option>
                            <option>UNEP</option>
                            <option>AIPPM</option>
                        </select>
                    </div>

                    {["portfolio2_1", "portfolio2_2", "portfolio2_3"].map(
                        (f) => (
                            <div key={f}>
                                <label className={label}>
                                    Portfolio Preference{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    placeholder="Portfolio choice"
                                    {...register(
                                        f as keyof RegisterFormValues,
                                        { required: true }
                                    )}
                                    className={input(
                                        !!errors[f as keyof RegisterFormValues]
                                    )}
                                />
                            </div>
                        )
                    )}

                    {/* EXPERIENCE */}
                    <div>
                        <label className={label}>
                            Prior MUN Experience{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            placeholder="Briefly mention your experience"
                            {...register("experience", { required: true })}
                            className={input(!!errors.experience)}
                        />
                    </div>

                    <div>
                        <label className={label}>Referral ID (Optional)</label>
                        <input
                            placeholder="Optional"
                            {...register("referral")}
                            className={input()}
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className={label}>
                            Transaction Number{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            placeholder="Transaction reference"
                            {...register("transaction", { required: true })}
                            className={input(!!errors.transaction)}
                        />
                    </div>

                    {/* QR SECTION - Image Style */}
                    <div className="md:col-span-2 flex flex-col items-center justify-center border-2 border-dashed border-[#C7BEE6] rounded-2xl p-8 bg-gradient-to-br from-[#C7BEE6]/5 to-white">
                        <div className="mb-4">
                            <p className="text-lg font-semibold text-[#0d0c2d] text-center mb-2">
                                Scan to Pay Delegate Fee
                            </p>
                            <p className="text-sm text-[#0d0c2d]/60 text-center">
                                UPI Payment - ₹1600
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-lg border border-[#C7BEE6]/30">
                            <Image
                                src="/QR.jpeg"
                                alt="Payment QR Code"
                                width={200}
                                height={200}
                                quality={100}
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    {/* FILE UPLOAD - Custom Style */}
                    <div className="md:col-span-2">
                        <label className={label}>
                            Payment Screenshot{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type="file"
                                accept="image/png,image/jpeg,image/jpg"
                                {...register("paymentScreenshot", {
                                    required: true,
                                })}
                                onChange={handleFileChange}
                                className="hidden"
                                id="file-upload"
                            />
                            <label
                                htmlFor="file-upload"
                                className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer transition-all ${
                                    errors.paymentScreenshot
                                        ? "border-red-500 bg-red-50"
                                        : "border-[#C7BEE6] bg-[#C7BEE6]/5 hover:bg-[#C7BEE6]/10"
                                }`}
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg
                                        className="w-12 h-12 mb-3 text-[#C7BEE6]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                        />
                                    </svg>
                                    <p className="mb-2 text-sm text-[#0d0c2d] font-medium">
                                        <span className="font-semibold text-[#C7BEE6]">
                                            Click to upload
                                        </span>{" "}
                                        or drag and drop
                                    </p>
                                    <p className="text-xs text-[#0d0c2d]/60">
                                        PNG, JPG or JPEG (MAX. 10MB)
                                    </p>
                                    {fileName && (
                                        <p className="mt-2 text-sm text-[#0d0c2d] font-medium">
                                            Selected: {fileName}
                                        </p>
                                    )}
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* STATUS */}
                    {status && (
                        <div
                            className={`md:col-span-2 text-center font-semibold text-lg p-4 rounded-lg ${
                                status.type === "success"
                                    ? "bg-green-50 text-green-700 border border-green-200"
                                    : "bg-red-50 text-red-700 border border-red-200"
                            }`}
                        >
                            {status.message}
                        </div>
                    )}

                    {/* SUBMIT */}
                    <div className="md:col-span-2 flex justify-center mt-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#0d0c2d] text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-[#0d0c2d]/90 transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? "Submitting..." : "Submit "}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}