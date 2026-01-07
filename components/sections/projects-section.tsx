"use client"

import { Github, Globe, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { deployedProjects, type DeployedProject } from "@/lib/data"

function ProjectCard({ project }: { project: DeployedProject }) {
  return (
    <div className="group bg-background border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg?height=200&width=400&query=project"}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        {project.featured && (
          <span className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
            Featured
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-md border border-accent/20">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.liveUrl && (
            <Button size="sm" variant="outline" className="border-accent/50 hover:bg-accent/10 bg-transparent" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button size="sm" variant="ghost" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Repo
              </a>
            </Button>
          )}
          {project.docsUrl && (
            <Button size="sm" variant="ghost" asChild>
              <a href={project.docsUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Docs
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            Deployed <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Production applications running on my self-managed homelab infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {deployedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
