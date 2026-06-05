"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import type { Project } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn, formatList } from "@/lib/utils";

export function Projects({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const values = new Set<string>(["All"]);
    projects.forEach((project) => project.categories.forEach((item) => values.add(item)));
    return [...values];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = category === "All" || project.categories.includes(category);
      const searchable = [
        project.title,
        project.summary,
        project.status,
        project.impact,
        ...project.techStack,
        ...project.categories
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [category, projects, query]);

  return (
    <section id="projects" className="scroll-mt-20 border-t border-border/70 bg-muted/25">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Applied AI, computer vision, NLP, and agentic systems."
            description="Search by topic or filter by category to scan the software side of the portfolio quickly."
          />
        </Reveal>

        <Reveal className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block w-full lg:max-w-sm">
            <span className="sr-only">Search projects</span>
            <Search
              aria-hidden
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects, tools, topics"
              className="focus-ring h-11 w-full rounded-md border border-border bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground"
            />
          </label>

          <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Project categories">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={category === item}
                onClick={() => setCategory(item)}
                className={cn(
                  "focus-ring shrink-0 rounded-md border border-border px-4 py-2 text-sm font-bold transition",
                  category === item
                    ? "bg-foreground text-background"
                    : "bg-card text-muted-foreground hover:text-foreground"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.035} className="card flex h-full flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-black leading-tight text-foreground">{project.title}</h3>
                <span className="shrink-0 rounded-md bg-primary/10 px-2 py-1 text-xs font-bold text-primary">
                  {project.status}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.summary}</p>
              <p className="mt-5 text-sm font-semibold text-foreground">Impact</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.impact}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="pill">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {formatList(project.categories)}
              </p>

              <div className="mt-auto pt-6">
                {project.links?.length ? (
                  project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-bold text-foreground transition hover:border-primary/50"
                    >
                      {link.label}
                      <ExternalLink aria-hidden size={15} />
                    </a>
                  ))
                ) : (
                  <span className="text-sm font-semibold text-muted-foreground">Project link pending</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="mt-8 rounded-lg border border-dashed border-border p-8 text-center text-sm font-semibold text-muted-foreground">
            No projects matched the current filters.
          </div>
        ) : null}
      </div>
    </section>
  );
}
