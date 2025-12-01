import { ArrowUpRight } from "lucide-react";

import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="hero-paper flex min-h-screen flex-col">
      <div className="flex flex-1 items-center justify-center px-4 sm:px-8 lg:px-12">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 pb-24 pt-24">
          <div className="flex max-w-[822px] flex-col items-center gap-6 text-center">
            <h1 className="text-balance text-[40px] font-normal leading-[1.18] tracking-[-0.04em] text-primary sm:text-[52px] lg:text-[64px]">
              Empowering Small Businesses for the <span className="font-semibold text-accent">Future</span>
            </h1>

            <p className="max-w-[647px] text-balance text-base leading-[1.54] tracking-[0.01em] text-slateText sm:text-lg">
              Transforming independent retailers with seamless technology that simplifies operations, maximizes profits,
              and delights customers.
            </p>
          </div>

          <div className="flex flex-wrap items-start justify-center gap-5">
            <Button
              className="primary-cta gap-2 h-12 min-w-[164px] rounded-lg px-6 text-base font-semibold shadow-button"
              asChild
            >
              <a href="#contact">
                Get Started
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="glassy-outline h-12 min-w-[134px] rounded-lg bg-white/80 px-6 text-base font-semibold"
              asChild
            >
              <a href="#faq">Learn More</a>
            </Button>
          </div>

          <div className="hero-gallery grid w-full max-w-[1300px] grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/market1.jpg", alt: "Market owners smiling in their shop" },
              { src: "/market2.png", alt: "Customer paying at a market checkout" },
              { src: "/market3.jpg", alt: "Worker scanning inventory with a tablet" },
            ].map((image, index) => (
              <div
                key={image.src}
                className="hero-gallery-card overflow-hidden rounded-2xl"
                style={{ animationDelay: `${index * 0.35 + 0.35}s` }}
              >
                <div className="hero-gallery-frame">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
