import Image from "next/image";

import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { stats } from "@/lib/content";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white/70 via-[#f2efe9]/60 to-white/70 px-4 py-20 sm:px-8 sm:py-[150px] lg:px-12 xl:px-[204px]"
    >
      <MaxWidthWrapper className="flex flex-col items-center gap-16">
        <div className="flex w-full max-w-[1320px] flex-col gap-12">
          <div className="flex flex-col gap-8 text-primary lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <h2 className="shrink-0 text-[40px] font-medium leading-[1.18] tracking-[-0.04em] sm:text-[48px]">
              About Us
            </h2>
            <div className="flex flex-col gap-6 text-[18px] leading-[1.54] tracking-[0.01em] text-slateText lg:max-w-[960px]">
              <p>
                AMEZA is revolutionizing the retail industry with cutting-edge smart retail solutions. We deliver
                comprehensive systems that seamlessly integrate pricing, inventory, and point-of-sale operations to create
                a unified retail ecosystem that drives efficiency and growth.
              </p>
              <p>
                Our integrated approach goes beyond what traditional solutions, providing retailers with the tools they
                need to thrive in the digital age.
              </p>
            </div>
          </div>

          <div className="w-full rounded-2xl border border-[#E6E6E6] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
            <div className="grid w-full divide-y divide-[#E6E6E6] md:grid-cols-3 md:divide-x md:divide-y-0">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-center gap-4 px-8 py-10 text-primary sm:py-12"
                >
                  <Image src={item.iconSrc} alt={item.label} width={64} height={64} className="h-12 w-12" />
                  <div className="flex flex-col gap-2">
                    <div className="text-[36px] font-semibold leading-[1] tracking-[-0.04em] sm:text-[48px]">
                      {item.value}
                    </div>
                    <div className="text-sm text-[#585E5D]">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
