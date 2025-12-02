import { ArrowUpRight, CircleCheckBig } from "lucide-react";
import Image from "next/image";

import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { features } from "@/lib/content";

export default function FeaturesSection() {
  return (
    <section id="services" className="bg-white px-4 py-20 sm:px-8 sm:py-[150px] lg:px-12 xl:px-[204px]">
      <MaxWidthWrapper className="flex flex-col items-center gap-16">
        <div className="flex max-w-[1320px] flex-col items-center gap-4 text-center">
          <div className="text-[16px] font-bold tracking-[0.08em] text-accent">SERVICES</div>
          <div className="flex flex-col gap-4">
            <h2 className="text-[40px] font-medium leading-[1.18] tracking-[-0.04em] text-primary sm:text-[48px]">
              Features You Can Count On
            </h2>
            <p className="mx-auto max-w-[650px] text-[16px] leading-7 tracking-[0.01em] text-slateText">
              Comprehensive retail solutions that integrate seamlessly to transform your business operations
            </p>
          </div>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-2">
          {features.map((feature) => {
            return (
              <article
                key={feature.title}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#F0F0F0] bg-white shadow-[0px_2px_4px_rgba(188,192,200,0.16)]"
              >
                <div className="flex items-center justify-center bg-gradient-to-b from-[#F3F3F3] to-white p-9">
                  <div className="relative h-[300px] w-full max-w-[540px]">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain drop-shadow-[0_24px_48px_rgba(175,183,182,0.16)]"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-6 px-12 pb-12 pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF4F2]">
                        <Image src={feature.icon} alt={feature.title} width={32} height={32} className="h-8 w-8" />
                      </div>
                      <h3 className="text-[24px] font-semibold leading-[1.28] tracking-[-0.02em] text-[#0B2539]">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="max-w-[516px] text-[16px] leading-[1.54] tracking-[0.01em] text-slateText">
                      {feature.description}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-3 text-primary">
                    {feature.bullets.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[16px] font-medium leading-[1.64]">
                        <CircleCheckBig className="h-6 w-6 flex-shrink-0 text-accent" aria-hidden />
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <Button asChild className="dark-gradient h-12 rounded-lg px-6 text-base font-semibold text-white shadow-button">
          <a href="#contact">
            Request a Demo
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </MaxWidthWrapper>
    </section>
  );
}
