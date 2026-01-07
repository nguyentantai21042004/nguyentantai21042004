import { Building2, Calendar, GraduationCap } from "lucide-react"
import { experiences } from "@/lib/data"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            Education & <span className="text-accent">Experience</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left md:direction-rtl"
                }`}
              >
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full md:-translate-x-1/2 border-4 border-background" />

                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:col-start-2"}`}>
                  <div className="p-6 bg-background border border-border rounded-xl hover:border-accent/50 transition-colors text-left">
                    <div className="flex items-center gap-2 text-accent mb-2">
                      {exp.type === "education" ? <GraduationCap size={18} /> : <Building2 size={18} />}
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                      {exp.type === "education" && (
                        <span className="ml-2 px-2 py-0.5 text-xs bg-accent/10 text-accent rounded-full">
                          Education
                        </span>
                      )}
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-accent shrink-0">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-md border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
