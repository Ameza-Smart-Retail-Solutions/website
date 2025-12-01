"use client";

import { useState } from "react";
import Image from "next/image";

import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { faqItems } from "@/lib/content";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string>("mission");

  return (
    <section
      id="faq"
      className="bg-gradient-to-b from-[#ffffff] via-[#f6f2ea] to-[#ffffff] px-4 py-24 sm:px-8 sm:py-[160px] lg:px-12 lg:py-[180px]"
    >
      <MaxWidthWrapper className="flex flex-col items-center gap-20">
        <div className="flex max-w-[1320px] flex-col items-center gap-4 text-center">
          <div className="text-[16px] font-bold tracking-[0.08em] text-[#C8102E]">FAQ</div>
          <div className="flex flex-col gap-4">
            <h2 className="text-center text-[48px] font-medium leading-[1.18] tracking-[-0.04em] text-[#031F1A]">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-[520px] text-center text-[16px] leading-[28px] tracking-[0.01em] text-[#414651]">
              <span className="inline-block text-left">
                <span className="inline-block pr-1">Here are some questions our customers are asking,</span>
                <span className="block text-center">answered by our founder.</span>
              </span>
            </p>
          </div>
        </div>

        <div className="flex w-full max-w-[1320px] flex-col items-center gap-10">
          <div className="flex w-full max-w-[960px] flex-col gap-4">
            {faqItems.map((item) => {
              const isOpen = item.id === openId;
              return (
                <button
                  key={item.id}
                  onClick={() => setOpenId(isOpen ? "" : item.id)}
                  className={`w-full rounded-[16px] border border-transparent bg-white text-left shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition duration-200 hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] ${
                    isOpen ? "px-6 py-6" : "px-6 py-5"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <Image
                      src={isOpen ? "/lucide_arrow-down-right.png" : "/lucide_arrow-right.png"}
                      alt="Toggle FAQ"
                      width={28}
                      height={28}
                      className="h-7 w-7 shrink-0"
                    />
                    <div className="flex flex-1 flex-col gap-3">
                      <div className="text-[24px] font-semibold leading-[1.17] tracking-[-0.02em] text-[#031F1A]">
                        {item.question}
                      </div>
                      {isOpen && (
                        <p className="text-[16px] font-medium leading-[1.72] text-[#585E5D]">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
