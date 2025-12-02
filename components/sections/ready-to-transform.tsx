import Image from "next/image";

import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { ctaBullets } from "@/lib/content";

export default function ReadyToTransform() {
  return (
    <section className="relative isolate flex flex-col gap-16 bg-texture-dark px-4 py-20 text-white sm:px-8 sm:py-[150px] lg:px-12 xl:px-[204px]">
      <div className="pointer-events-none absolute inset-0 texture-overlay" aria-hidden />
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_55%)]" />
      </div>

      <MaxWidthWrapper className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-24">
        <div className="flex max-w-[542px] flex-col gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-[40px] font-medium leading-[1.18] tracking-[-0.04em] sm:text-[48px]">
                Ready to transform
                <br />
                your grocery business?
              </h2>
              <p className="text-[16px] leading-7 tracking-[0.01em] text-[#B4BEBC]">
                We deliver comprehensive systems that seamlessly integrate pricing, inventory, and point-of-sale
                operations to create a unified retail ecosystem that drives efficiency and growth.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {ctaBullets.map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex items-start gap-6">
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gradient-to-b from-[#C8102E] to-[#A20A23] p-4">
                    <Icon className="h-9 w-9 text-white" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[24px] font-semibold leading-[1.24] tracking-[-0.02em] text-white">{title}</h3>
                    <p className="text-[16px] leading-[1.54] text-white/90">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative isolate w-full max-w-[760px]">
          <div className="absolute -left-14 -top-16 h-[640px] w-[760px] rounded-full bg-gradient-to-b from-[#295A51] via-[#438C7F] to-[#2A7265] opacity-60 blur-[120px]" />
          <div className="relative aspect-[760/918] w-full max-w-[760px]">
            <Image
              src="/Group 2.png"
              alt="POS terminal"
              fill
              priority
              className="object-contain drop-shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
