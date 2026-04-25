"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/data";
import { ArrowUpRight, PlayCircle } from "lucide-react";
export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of my recent AI/ML projects showcasing practical applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <Card
                key={project.title}
                className="group bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/20">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 rounded-full p-1.5">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs bg-primary/5 border-primary/20 text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                     {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                        <ArrowUpRight className="w-4 h-4" />
                         Live Demo
                         </a>
                        )}
                        {project.video && (
                          <a  href={project.video} target="_blank" rel="noopener noreferrer"
                           className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                             <PlayCircle className="w-4 h-4" />
                              Watch Demo
                               </a>
                              )}
                              </div>


                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
