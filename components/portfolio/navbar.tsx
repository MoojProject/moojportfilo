"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, PERSONAL_INFO, FOOTER_BG } from "@/lib/data";
import { cn } from "@/lib/utils";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      setActiveLink(hash);
    };
    
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 shadow-lg"
          : "py-5"
      )}
      style={{
        backgroundImage: `url(${FOOTER_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          aria-label="Go to home"
        >
          MA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href.replace("#", ""))}
              className={cn(
                "text-base font-semibold transition-all duration-200 hover:text-primary",
                activeLink === link.href.replace("#", "")
                  ? "text-primary"
                  : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Icons & CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2">
            <SocialIcon href={PERSONAL_INFO.linkedin} icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
            <SocialIcon href={`mailto:${PERSONAL_INFO.email}`} icon={<Mail className="w-4 h-4" />} label="Email" />
            <SocialIcon href={PERSONAL_INFO.whatsapp} icon={<MessageCircle className="w-4 h-4" />} label="WhatsApp" />
          </div>
          <Button asChild size="sm" className="ml-2">
            <Link href="#contact">{"Let's Connect"}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href.replace("#", ""));
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "text-base font-medium py-2 transition-colors",
                  activeLink === link.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-border">
              <SocialIcon href={PERSONAL_INFO.linkedin} icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
              <SocialIcon href={`mailto:${PERSONAL_INFO.email}`} icon={<Mail className="w-4 h-4" />} label="Email" />
              <SocialIcon href={PERSONAL_INFO.whatsapp} icon={<MessageCircle className="w-4 h-4" />} label="WhatsApp" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-foreground transition-all duration-200"
    >
      {icon}
    </a>
  );
}
