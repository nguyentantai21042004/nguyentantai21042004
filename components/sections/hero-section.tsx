"use client"

import { ArrowDown, Github, Linkedin, Mail, MapPin, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo, summary } from "@/lib/data"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {personalInfo.available && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for opportunities</span>
              </div>
            )}

            <div className="space-y-2">
              <p className="text-accent text-lg font-medium">Hello, I am</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">
                {personalInfo.name.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-accent">{personalInfo.name.split(" ").slice(-1)}</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-muted-foreground font-medium">{personalInfo.title}</p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              {summary.intro} <span className="text-accent">{summary.highlight1}</span> {summary.middle}{" "}
              <span className="text-accent">{summary.highlight2}</span>
              {summary.outro}
            </p>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} className="text-accent" />
              <span>{personalInfo.location}</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent/50 hover:bg-accent/10 bg-transparent"
                asChild
              >
                <a href={personalInfo.cvPath} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  View CV
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent/30">
                <img
                  src={personalInfo.avatarPath || "/placeholder.svg"}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -top-4 -right-4 px-4 py-2 bg-card border border-border rounded-lg shadow-lg">
                <p className="text-2xl font-bold text-accent">{personalInfo.yearsOfExperience}</p>
                <p className="text-xs text-muted-foreground">Years Exp</p>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-card border border-border rounded-lg shadow-lg">
                <p className="text-2xl font-bold text-accent">{personalInfo.projectsCount}</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-accent" size={24} />
        </div>
      </div>
    </section>
  )
}
