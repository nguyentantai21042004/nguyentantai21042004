"use client"

import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { skills, skillCategories, type Skill } from "@/lib/data"
import { cn } from "@/lib/utils"

function getProficiencyColor(proficiency: Skill["proficiency"]) {
  switch (proficiency) {
    case "Expert":
      return "bg-green-500/20 text-green-400 border-green-500/30"
    case "Proficient":
      return "bg-accent/20 text-accent border-accent/30"
    case "Comfortable":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    case "Learning":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    default:
      return "bg-muted text-muted-foreground border-border"
  }
}

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-accent hover:text-accent transition-all cursor-default group">
          {skill.name}
        </button>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="max-w-xs bg-card border border-accent/30 text-foreground p-4 shadow-xl"
        sideOffset={8}
      >
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">{skill.category}</p>
            <span className={cn("px-2 py-0.5 text-xs rounded-full border", getProficiencyColor(skill.proficiency))}>
              {skill.proficiency}
            </span>
          </div>
          <p className="text-sm leading-relaxed">{skill.description}</p>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredSkills = activeCategory === "All" ? skills : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Hover over any skill to see my experience level and details</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-background border border-border text-muted-foreground hover:border-accent/50",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <TooltipProvider delayDuration={100}>
          <div className="flex flex-wrap justify-center gap-3">
            {filteredSkills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </TooltipProvider>

        {/* Proficiency Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-500/40" />
            <span>Learning</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500/40" />
            <span>Comfortable</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accent/40" />
            <span>Proficient</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500/40" />
            <span>Expert</span>
          </div>
        </div>
      </div>
    </section>
  )
}
