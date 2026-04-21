"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SKILLS_DATA } from "@/lib/data";
import { Brain, Code, BarChart3, Users } from "lucide-react";

const ICONS: Record<string, React.ReactNode> = {
  "AI & ML": <Brain className="w-5 h-5" />,
  "Programming & Tools": <Code className="w-5 h-5" />,
  "Data & Visualization": <BarChart3 className="w-5 h-5" />,
  "Soft Skills": <Users className="w-5 h-5" />,
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Skills
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {"Here's a concise overview of my technical and soft skills, grouped for clarity."}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(SKILLS_DATA).map(([category, skills], index) => (
              <Card
                key={category}
                className="bg-card hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      {ICONS[category]}
                    </span>
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary/5 text-foreground border border-primary/10 hover:bg-primary/10 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
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
