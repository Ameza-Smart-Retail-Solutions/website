import Image from "next/image";

import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { contactItems, companyLinks, resourceLinks, socialLinks } from "@/lib/content";

export default function FooterSection() {
  return (
    <footer className="bg-[#031F1A] px-4 pb-12 pt-12 text-white sm:px-12 lg:px-16 xl:px-[128px]">
      <MaxWidthWrapper className="flex flex-col gap-14">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex w-full max-w-[372px] flex-col gap-6">
            <div className="flex flex-col gap-6">
              <div className="h-8 w-[156px]">
                <Image src="/Introduction.png" alt="Ameza" width={156} height={32} className="h-8 w-auto" />
              </div>
              <p className="capitalize text-[14px] leading-[1.64] tracking-[0.02em] text-[#F2EFEA] ;">
                AMEZA Delivers Smart Retail Solutions That Unify Pricing, inventory, and point-of-sale systems—helping retailers streamline operations and drive growth.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => {
                  const href = link.href ?? "#";
                  return (
                    <a
                      key={link.name}
                      href={href}
                      aria-label={link.name}
                      className="inline-flex"
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <Image src={link.src} alt={link.name} width={32} height={32} className="h-8 w-8" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-12 md:flex-row md:justify-center md:gap-16 lg:gap-20">
            <div className="flex flex-col gap-6">
              <h4 className="text-[16px] font-bold leading-[22px] text-[#9A9A9A]">Company</h4>
              <div className="flex flex-col gap-5 text-[14px] font-medium leading-[19px] tracking-[0.03em] text-white">
                {companyLinks.map(({ label, href }) => (
                  <a key={label} href={href} className="hover:text-[#C1C8C7]">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-[16px] font-bold leading-[22px] text-[#9A9A9A]">Resources</h4>
              <div className="flex flex-col gap-5 text-[14px] font-medium leading-[19px] tracking-[0.03em] text-white">
                {resourceLinks.map(({ label, href }) => (
                  <a key={label} href={href} className="hover:text-[#C1C8C7]">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex w-full max-w-[432px] flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h4 className="text-[24px] font-medium leading-[1.18] tracking-[-0.04em] text-white">Let’s Connect</h4>
              </div>

              <div className="flex flex-col gap-6">
                {contactItems.map(({ label, value, icon: Icon }) => {
                  const href =
                    label === "Email"
                      ? "mailto:myildiz@amezasolutions.com?subject=New%20Customer&body=Hello%20can%20i%20get%20information%3F"
                      : label === "Phone Number"
                        ? "tel:+16179061307"
                        : "https://maps.app.goo.gl/qVq1ftAssK4b9ZQj7";
                  const isExternal = label === "Address";

                  return (
                    <a
                      key={label}
                      href={href}
                      className="group flex items-start gap-3 rounded-lg p-1 transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      aria-label={
                        label === "Email" ? "Email us" : label === "Phone Number" ? "Call us" : "Open address in maps"
                      }
                    >
                      <div className="mt-[2px] flex h-11 w-11 items-center justify-center rounded-full bg-[#0F766E]">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[14px] font-medium leading-[19px] text-[#E6E6E6]">{label}</span>
                        <span className="text-[16px] font-semibold leading-[22px] tracking-[-0.03em] text-white group-hover:underline">
                          {value}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full border-t border-[#253937]" />

        <div className="flex w-full flex-col items-center justify-center gap-2 text-[14px] leading-[19px] text-[#A4AEAD]">
          <div className="text-center">© 2025 AMEZA Smart Retail Solutions. All rights reserved.</div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
