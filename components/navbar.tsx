"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "হোম" },
    { href: "/about", label: "সম্পর্কে" },
    { href: "/commitments", label: "অঙ্গীকারসমূহ" },
    { href: "/experience", label: "অভিজ্ঞতা" },
    { href: "/contact", label: "যোগাযোগ" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={scrollToTop}
          >
            <span className="font-serif text-sm font-bold text-primary">
              আহাদ বিন ইসলাম শোয়েব
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-all duration-200"
                onClick={scrollToTop}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <ModeToggle />

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2 py-1 text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
