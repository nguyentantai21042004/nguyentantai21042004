import { Github, FileText, ExternalLink, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { academicRepos, type AcademicRepo } from "@/lib/data"

function RepoCard({ repo }: { repo: AcademicRepo }) {
  return (
    <div className="group p-6 bg-background border border-border rounded-xl hover:border-accent/50 transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
            <BookOpen size={20} className="text-accent" />
          </div>
          <h3 className="text-lg font-bold group-hover:text-accent transition-colors">{repo.title}</h3>
        </div>
        <a
          href={repo.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-accent transition-colors"
        >
          <ExternalLink size={18} />
        </a>
      </div>
      <p className="text-sm text-muted-foreground mb-3">{repo.description}</p>
      {repo.highlight && (
        <p className="text-xs text-accent bg-accent/10 px-3 py-1.5 rounded-md inline-block mb-3">{repo.highlight}</p>
      )}
      <div className="flex flex-wrap gap-2 mb-4">
        {repo.technologies.map((tech) => (
          <span key={tech} className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-md border border-accent/20">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" className="border-accent/50 hover:bg-accent/10 bg-transparent" asChild>
          <a href={repo.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View Repository
          </a>
        </Button>
        {repo.docsUrl && (
          <Button size="sm" variant="ghost" asChild>
            <a href={repo.docsUrl} target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Docs
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

export function RepositoriesSection() {
  return (
    <section id="repositories" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">Open Source</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            Academic & Learning <span className="text-accent">Repositories</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Infrastructure, documentation, and learning projects showcasing my technical exploration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {academicRepos.map((repo, index) => (
            <RepoCard key={index} repo={repo} />
          ))}
        </div>
      </div>
    </section>
  )
}
