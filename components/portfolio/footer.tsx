"use client";

"use client";

import Link from "next/link";
import { PERSONAL_INFO, NAV_LINKS, FOOTER_BG } from "@/lib/data";
import { Linkedin, Mail, MessageCircle, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="py-12 relative"
      style={{
        backgroundImage: `url(${FOOTER_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#c9a8ad]/30 backdrop-blur-[1px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <Link href="#home" className="text-2xl font-bold text-[#3a2a2c]">
                MA
              </Link>
              <p className="text-[#5a4a4c] text-sm leading-relaxed">
                AI Engineer passionate about building intelligent solutions that make a difference.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-[#3a2a2c]">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.slice(0, 4).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[#5a4a4c] hover:text-[#3a2a2c] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h4 className="font-semibold text-[#3a2a2c]">Connect</h4>
              <div className="flex gap-3">
                <SocialLink
                  href={PERSONAL_INFO.linkedin}
                  icon={<Linkedin className="w-4 h-4" />}
                  label="LinkedIn"
                />
                <SocialLink
                  href={`mailto:${PERSONAL_INFO.email}`}
                  icon={<Mail className="w-4 h-4" />}
                  label="Email"
                />
                <SocialLink
                  href={PERSONAL_INFO.whatsapp}
                  icon={<MessageCircle className="w-4 h-4" />}
                  label="WhatsApp"
                />
              </div>
              <p className="text-sm text-[#5a4a4c]">
                {PERSONAL_INFO.email}
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#8a6a6e]/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#4a3a3c] flex items-center gap-1">
              Designed with <Heart className="w-4 h-4 text-[#7a5a5e] fill-[#7a5a5e]" /> by {PERSONAL_INFO.name}
            </p>
            <p className="text-sm text-[#4a3a3c]">
              {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-[#b8989c]/50 flex items-center justify-center text-[#4a3a3c] hover:bg-[#8a6a6e] hover:text-white transition-all duration-200"
    >
      {icon}
    </a>
  );
}
