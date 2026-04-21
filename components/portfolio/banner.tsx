"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PERSONAL_INFO, ROTATING_TITLES, ABOUT_TEXT } from "@/lib/data";
import { Sparkles } from "lucide-react";

export function Banner() {
  const [currentTitle, setCurrentTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const fullText = ROTATING_TITLES[titleIndex];
    if (isDeleting) {
      setCurrentTitle(fullText.substring(0, currentTitle.length - 1));
    } else {
      setCurrentTitle(fullText.substring(0, currentTitle.length + 1));
    }
    if (!isDeleting && currentTitle === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentTitle === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
    }
  }, [currentTitle, isDeleting, titleIndex]);

  useEffect(() => {
    const speed = isDeleting ? 50 : 150;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-background via-accent/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Welcome to my Portfolio
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              {"Hi! I'm"} <span className="text-primary">{PERSONAL_INFO.name}</span>
              <br />
              <span className="text-muted-foreground">
                {currentTitle}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {ABOUT_TEXT}
            </p>

            {/* CV Button with shimmer/glow */}
            <a
              href="/Mooj_Ahmed_AI_CV.pdf"
              download
              className="cv-btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold w-fit relative overflow-hidden"
            >
              <span className="shimmer-overlay" />
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
              <span className="relative z-10">Download CV</span>
            </a>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110 animate-pulse-slow" />
              {/* Main circle */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 via-accent to-primary/10 flex items-center justify-center animate-float shadow-2xl">
                <Image src="/header-img.svg" alt="Header Illustration" width={400} height={400} className="w-full h-full" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/30 animate-orbit" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-primary/20 animate-pulse delay-300" />
              <div className="absolute top-1/2 -right-8 w-4 h-4 rounded-full bg-primary/40 animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(1deg); }
          66% { transform: translateY(-8px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1.05); }
          50% { opacity: 0.7; transform: scale(1.12); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(4px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(4px) rotate(-360deg); }
        }
        .animate-orbit {
          animation: orbit 6s linear infinite;
        }

        /* Shimmer on CV button */
        .cv-btn {
          box-shadow: 0 0 15px rgba(var(--primary-rgb, 193, 107, 133), 0.5);
          transition: box-shadow 0.3s ease, transform 0.2s ease;
        }
        .cv-btn:hover {
          box-shadow: 0 0 28px rgba(var(--primary-rgb, 193, 107, 133), 0.8);
          transform: translateY(-2px);
        }
        .shimmer-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255,255,255,0.35) 50%,
            transparent 60%
          );
          background-size: 200% 100%;
          animation: shimmer 2.5s infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
}
