"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/logo";
import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/content";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full header-surface">
      <MaxWidthWrapper className="relative flex h-[90px] items-center gap-6 px-5 sm:px-10 xl:px-[204px]">
        <div className="flex flex-1 items-center">
          <Logo />
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-12 text-[14px] font-medium tracking-[0.02em] text-primary md:flex">
          {navItems.map(({ label, href }) => (
            <a key={label} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3">
          <Button
            variant="outline"
            size="sm"
            className="h-10 rounded-lg border-primary bg-transparent px-5 font-semibold text-primary"
            asChild
          >
            <a href="https://app.amezasolutions.com" target="_blank" rel="noreferrer">
              Login
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-lg border-primary bg-white/90 text-primary shadow-sm"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="absolute left-5 right-5 top-[88px] z-40 rounded-xl border border-primary/10 bg-white/95 p-4 shadow-lg backdrop-blur md:hidden">
            <nav className="flex flex-col gap-3 text-[15px] font-semibold text-primary">
              {navItems.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-lg px-3 py-2 transition hover:bg-primary/5"
                  onClick={closeMenu}
                >
                  {label}
                </a>
              ))}
              <Button
                variant="outline"
                className="h-11 rounded-lg border-primary bg-transparent px-4 font-semibold text-primary"
                asChild
              >
                <a href="https://app.amezasolutions.com" target="_blank" rel="noreferrer" onClick={closeMenu}>
                  Login
                </a>
              </Button>
            </nav>
          </div>
        )}
      </MaxWidthWrapper>
    </header>
  );
}
