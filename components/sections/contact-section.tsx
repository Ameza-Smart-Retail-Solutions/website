"use client";

import { ChevronDown, CircleHelp, Mail, MessageSquare, UserRound } from "lucide-react";

import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { contactItems } from "@/lib/content";

export default function ContactSection() {
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
                    <span className="text-[18px] font-semibold leading-[25px] tracking-[-0.02em] text-[#0B2923]">
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-[760px] rounded-2xl border border-[#E6E6E6] bg-gradient-to-b from-[#FFFFFF] to-[#F9F8F8] p-8 shadow-[24px_24px_48px_rgba(141,140,140,0.1)]">
            <div className="flex flex-col gap-6">
              <h3 className="text-[36px] font-bold leading-[1.24] tracking-[-0.04em] text-[#031F1A]">
                How can we help you today?
              </h3>

              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-5 sm:flex-row">
                  <label className="flex flex-1 items-center gap-3 rounded-lg border border-[#E6E6E6] bg-white px-5 py-3">
                    <UserRound className="h-5 w-5 text-[#9A9A9A]" />
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full text-[16px] font-medium text-[#031F1A] placeholder:text-[#9A9A9A] focus:outline-none"
                    />
                  </label>
                  <label className="flex flex-1 items-center gap-3 rounded-lg border border-[#E6E6E6] bg-white px-5 py-3">
                    <UserRound className="h-5 w-5 text-[#9A9A9A]" />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full text-[16px] font-medium text-[#031F1A] placeholder:text-[#9A9A9A] focus:outline-none"
                    />
                  </label>
                </div>

                <label className="flex items-center gap-3 rounded-lg border border-[#E6E6E6] bg-white px-5 py-3">
                  <Mail className="h-5 w-5 text-[#9A9A9A]" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full text-[16px] font-medium text-[#031F1A] placeholder:text-[#9A9A9A] focus:outline-none"
                  />
                </label>

                <label className="flex items-center gap-3 rounded-lg border border-[#E6E6E6] bg-white px-5 py-3">
                  <CircleHelp className="h-5 w-5 text-[#9A9A9A]" />
                  <select className="w-full appearance-none text-[16px] font-medium text-[#031F1A] placeholder:text-[#9A9A9A] focus:outline-none">
                    <option>How can we help you</option>
                  </select>
                  <ChevronDown className="h-5 w-5 text-[#9A9A9A]" />
                </label>

                <label className="flex items-start gap-3 rounded-lg border border-[#E6E6E6] bg-white px-5 py-3">
                  <MessageSquare className="mt-1 h-5 w-5 text-[#9A9A9A]" />
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full resize-none text-[16px] font-medium text-[#031F1A] placeholder:text-[#9A9A9A] focus:outline-none"
                  />
                </label>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="inline-flex h-[52px] items-center justify-center rounded-lg bg-gradient-to-b from-[#464646] to-[#031F1A] px-6 text-[16px] font-bold text-white shadow-[0px_2px_4px_rgba(38,35,35,0.25),_inset_0px_1px_3px_rgba(255,255,255,0.18)]"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
