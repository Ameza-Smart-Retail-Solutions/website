"use client";

import { type FormEvent, useState } from "react";
import { ChevronDown, CircleHelp, Mail, MessageSquare, UserRound } from "lucide-react";

import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { contactItems } from "@/lib/content";

export default function ContactSection() {
    const CONTACT_ENDPOINT =
        (process.env.NEXT_PUBLIC_CONTACT_ENDPOINT && process.env.NEXT_PUBLIC_CONTACT_ENDPOINT.trim()) || "http://localhost:3000/contact-form";
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        topic: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const isEmailValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isEmailValid(formData.email)) {
            setStatus("error");
            setErrorMessage("Lütfen geçerli bir e-posta adresi girin.");
            return;
        }

        setIsSubmitting(true);
        setStatus("idle");
        setErrorMessage("");

        const composedMessage = formData.topic && formData.message ? `[${formData.topic}] ${formData.message}` : formData.message;

        try {
            const response = await fetch(CONTACT_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.firstName,
                    surname: formData.lastName,
                    email: formData.email,
                    message: composedMessage,
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || `Request failed (${response.status})`);
            }

            setStatus("success");
            setErrorMessage("");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                topic: "",
                message: "",
            });
        } catch (error) {
            console.error("Failed to submit contact form", error);
            setStatus("error");
            setErrorMessage("An error occured");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="bg-white px-4 py-20 sm:px-8 sm:py-[150px] lg:px-12 xl:px-[204px]">
            <MaxWidthWrapper className="flex flex-col items-center gap-16">
                <div className="flex w-full flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-24">
                    <div className="flex w-full max-w-[520px] flex-col gap-10 lg:pt-6">
                        <div className="flex flex-col gap-4 border-b border-[#E6E6E6] pb-9">
                            <h2 className="text-[48px] font-medium leading-[1.18] tracking-[-0.04em] text-[#031F1A]">Let’s Connect</h2>
                            <p className="text-[16px] font-medium leading-[1.54] tracking-[0.01em] text-[#585E5D]">
                                Ready to transform your grocery business? Get in touch today.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            {contactItems.map(({ label, value, icon: Icon }) => (
                                <div key={label} className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-[#C8102E] to-[#A20A23]">
                                        <Icon className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[14px] font-medium leading-[19px] text-[#585E5D]">{label}</span>
                                        <span className="text-[18px] font-semibold leading-[25px] tracking-[-0.02em] text-[#0B2923]">{value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full max-w-[760px] rounded-2xl border border-[#E6E6E6] bg-gradient-to-b from-[#FFFFFF] to-[#F9F8F8] p-8 shadow-[24px_24px_48px_rgba(141,140,140,0.1)]">
                        <div className="flex flex-col gap-6">
                            <h3 className="text-[36px] font-bold leading-[1.24] tracking-[-0.04em] text-[#031F1A]">How can we help you today?</h3>

                            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-5 sm:flex-row">
                                    <label className="flex flex-1 items-center gap-3 rounded-lg border border-[#E6E6E6] bg-white px-5 py-3">
                                        <UserRound className="h-5 w-5 text-[#9A9A9A]" />
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                                            required
                                            className="w-full text-[16px] font-medium text-[#031F1A] placeholder:text-[#9A9A9A] focus:outline-none"
                                        />
                                    </label>
                                    <label className="flex flex-1 items-center gap-3 rounded-lg border border-[#E6E6E6] bg-white px-5 py-3">
                                        <UserRound className="h-5 w-5 text-[#9A9A9A]" />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                                            required
                                            className="w-full text-[16px] font-medium text-[#031F1A] placeholder:text-[#9A9A9A] focus:outline-none"
                                        />
                                    </label>
                                </div>

                                <label className="flex items-center gap-3 rounded-lg border border-[#E6E6E6] bg-white px-5 py-3">
                                    <Mail className="h-5 w-5 text-[#9A9A9A]" />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                                        required
                                        className="w-full text-[16px] font-medium text-[#031F1A] placeholder:text-[#9A9A9A] focus:outline-none"
                                    />
                                </label>

                                <label className="flex items-center gap-3 rounded-lg border border-[#E6E6E6] bg-white px-5 py-3">
                                    <CircleHelp className="h-5 w-5 text-[#9A9A9A]" />
                                    <select
                                        name="topic"
                                        value={formData.topic}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, topic: e.target.value }))}
                                        className="w-full appearance-none text-[16px] font-medium text-[#031F1A] placeholder:text-[#9A9A9A] focus:outline-none"
                                    >
                                        <option value="">How can we help you</option>
                                        <option value="Product demo">Product demo</option>
                                        <option value="Pricing">Pricing</option>
                                        <option value="Partnership">Partnership</option>
                                        <option value="Support">Support</option>
                                    </select>
                                    <ChevronDown className="h-5 w-5 text-[#9A9A9A]" />
                                </label>

                                <label className="flex items-start gap-3 rounded-lg border border-[#E6E6E6] bg-white px-5 py-3">
                                    <MessageSquare className="mt-1 h-5 w-5 text-[#9A9A9A]" />
                                    <textarea
                                        rows={4}
                                        placeholder="Your Message"
                                        name="message"
                                        value={formData.message}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                                        required
                                        className="w-full resize-none text-[16px] font-medium text-[#031F1A] placeholder:text-[#9A9A9A] focus:outline-none"
                                    />
                                </label>

                                <div className="pt-2">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex h-[52px] items-center justify-center rounded-lg bg-gradient-to-b from-[#464646] to-[#031F1A] px-6 text-[16px] font-bold text-white shadow-[0px_2px_4px_rgba(38,35,35,0.25),_inset_0px_1px_3px_rgba(255,255,255,0.18)]"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </Button>
                                    {status === "success" && <p className="pt-3 text-[14px] font-medium text-[#0B2923]">Thanks! We received your message.</p>}
                                    {status === "error" && errorMessage && <p className="pt-3 text-[14px] font-medium text-[#C8102E]">{errorMessage}</p>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}
