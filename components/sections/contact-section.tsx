import { Mail, Linkedin, Github, MapPin, Globe, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            {"Let's"} <span className="text-accent">Connect</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {"I'm"} always open to discussing new opportunities, technical challenges, or collaborating on interesting
            projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors group text-center"
          >
            <Mail className="mx-auto mb-3 text-accent" size={28} />
            <p className="font-semibold mb-1">Email</p>
            <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors break-all">
              {personalInfo.email}
            </p>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors group text-center"
          >
            <Linkedin className="mx-auto mb-3 text-accent" size={28} />
            <p className="font-semibold mb-1">LinkedIn</p>
            <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">/in/ngtantai2104</p>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors group text-center"
          >
            <Github className="mx-auto mb-3 text-accent" size={28} />
            <p className="font-semibold mb-1">GitHub</p>
            <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
              @nguyentantai21042004
            </p>
          </a>

          <div className="p-6 bg-card border border-border rounded-xl text-center">
            <MapPin className="mx-auto mb-3 text-accent" size={28} />
            <p className="font-semibold mb-1">Location</p>
            <p className="text-sm text-muted-foreground">{personalInfo.location}</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href={`mailto:${personalInfo.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-accent/50 hover:bg-accent/10 bg-transparent" asChild>
            <a href={personalInfo.cvPath} target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-accent/50 hover:bg-accent/10 bg-transparent" asChild>
            <a href={`https://${personalInfo.portfolio}`} target="_blank" rel="noopener noreferrer">
              <Globe className="mr-2 h-4 w-4" />
              {personalInfo.portfolio}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
