import { Fragment } from "react";
import Image from "next/image";

import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { whyAmezaItems } from "@/lib/content";

export default function WhyAmezaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-texture-dark px-4 py-20 text-white sm:px-8 sm:py-[140px] lg:px-12">
      <div className="absolute inset-0 texture-overlay" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-[#031F1A]/92 via-[#031F1A]/94 to-[#031F1A]/96" />
      <div className="absolute left-1/2 top-[-60px] h-[612px] w-[728px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(41,90,81,0.16),rgba(67,140,127,0.16),rgba(42,114,101,0.16))] blur-[120px]" />

      <MaxWidthWrapper className="relative flex w-full flex-col items-center gap-14 max-w-[1320px]">
        <h2 className="text-center text-[40px] font-medium leading-[1.18] tracking-[-0.04em] sm:text-[48px]">
          Why Ameza
        </h2>

        <div className="flex w-full flex-col items-center gap-12 md:flex-row md:items-start md:justify-between md:gap-0">
          {whyAmezaItems.map((item, index) => (
            <Fragment key={item.title}>
              <div className="flex w-full max-w-[320px] flex-col items-center gap-5 text-center md:w-[280px] md:max-w-none md:items-start md:text-left">
                <Image src={item.icon} alt={item.title} width={48} height={48} className="h-12 w-12" />
                <div className="flex flex-col gap-3">
                  <h3 className="text-[24px] font-semibold leading-[1.24] tracking-[-0.02em]">{item.title}</h3>
                  <p className="text-[16px] leading-[1.54] text-[#E6E6E6]">{item.description}</p>
                </div>
              </div>

              {index < whyAmezaItems.length - 1 && (
                <div className="hidden h-[140px] w-px bg-white/15 md:block" aria-hidden />
              )}
            </Fragment>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
