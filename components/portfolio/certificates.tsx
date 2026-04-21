"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CERTIFICATES, NVIDIA_LEARNING, LEARNING_BADGES } from "@/lib/data";
import { Award, Calendar, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* ── Certifications ── */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Certifications</h2>
            <p className="text-muted-foreground text-base">Professional credentials from global organizations</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {CERTIFICATES.map((cert, index) => (
              <Dialog key={cert.title}>
                <DialogTrigger asChild>
                  <Card
                    className="group bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer animate-in fade-in slide-in-from-bottom-4"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      border: cert.featured
                        ? "2px solid #EF9F27"
                        : "0.5px solid hsl(var(--border))",
                    }}
                  >
                    {cert.featured && (
                      <div className="text-center py-1 text-xs font-semibold" style={{ background: "#FAEEDA", color: "#854F0B" }}>
                        ★ Top Certification
                      </div>
                    )}
                    <div className="relative h-44 overflow-hidden flex items-center justify-center" style={{ background: cert.featured ? "#f9f9f9" : "var(--color-muted)" }}>
                      {cert.image ? (
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 25vw"
                        />
                      ) : (
                        <Award className="w-14 h-14 text-primary/30" />
                      )}
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 rounded-full p-1.5">
                        <ExternalLink className="w-3.5 h-3.5 text-primary" />
                      </div>
                    </div>
                    <CardHeader className="pb-1 pt-3">
                      <CardTitle className="text-sm leading-snug group-hover:text-primary transition-colors">{cert.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between flex-wrap gap-1">
                        <Badge variant="secondary" className="bg-primary/10 text-primary text-xs font-semibold">{cert.issuer}</Badge>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />{cert.year}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                {cert.image && (
                  <DialogContent className="max-w-3xl p-0 overflow-hidden">
                    <VisuallyHidden><DialogTitle>{cert.title}</DialogTitle></VisuallyHidden>
                    <div className="relative w-full aspect-[4/3]">
                      <Image src={cert.image} alt={cert.title} fill className="object-contain" sizes="80vw" />
                    </div>
                  </DialogContent>
                )}
              </Dialog>
            ))}
          </div>

          {/* ── NVIDIA Learning ── */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">NVIDIA Certificates of Competency</h3>
            <p className="text-muted-foreground text-sm">Completed NVIDIA DLI learning path — Jan 2026</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {NVIDIA_LEARNING.map((cert, index) => (
              <Dialog key={cert.title}>
                <DialogTrigger asChild>
                  <Card
                    className="group bg-card hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer animate-in fade-in"
                    style={{ animationDelay: `${index * 80}ms`, border: "0.5px solid hsl(var(--border))" }}
                  >
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500"
                        sizes="33vw"
                      />
                    </div>
                    <CardContent className="py-3 px-4">
                      <p className="text-xs font-medium text-foreground leading-snug group-hover:text-primary transition-colors">{cert.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-0 overflow-hidden">
                  <VisuallyHidden><DialogTitle>{cert.title}</DialogTitle></VisuallyHidden>
                  <div className="relative w-full aspect-[4/3]">
                    <Image src={cert.image} alt={cert.title} fill className="object-contain" sizes="80vw" />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* ── Continuous Learning ── */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Continuous Learning</h3>
            <p className="text-muted-foreground text-sm">Courses & workshops across various platforms</p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {LEARNING_BADGES.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 rounded-full text-sm border text-foreground/80 hover:text-primary transition-colors cursor-default"
                style={{ background: "var(--color-primary-5, hsl(var(--primary) / 0.05))", borderColor: "hsl(var(--primary) / 0.2)" }}
              >
                {badge}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
