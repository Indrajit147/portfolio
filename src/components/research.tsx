"use client";

import { useState } from "react";
import { ExternalLink, FileText, Microscope } from "lucide-react";
import type { ResearchItem } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

export function Research({ research }: { research: ResearchItem[] }) {
  const [selectedTitle, setSelectedTitle] = useState(research[0]?.title ?? "");
  const selected = research.find((item) => item.title === selectedTitle) ?? research[0];

  return (
    <section id="research" className="scroll-mt-20 border-t border-border/70">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Research"
            title="Research highlights in Bangla NLP, privacy, and signal-centered AI."
            description="The research section is data-driven and ready to expand into publications, collaborators, preprints, and project pages."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.36fr_0.64fr]">
          <Reveal className="space-y-3">
            {research.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setSelectedTitle(item.title)}
                className={cn(
                  "focus-ring flex w-full items-start gap-3 rounded-lg border border-border bg-card p-4 text-left transition hover:border-primary/50",
                  selected?.title === item.title && "border-primary/70 shadow-glow"
                )}
              >
                <Microscope aria-hidden className="mt-1 shrink-0 text-primary" size={20} />
                <span>
                  <span className="block text-sm font-bold text-foreground">{item.title}</span>
                  <span className="mt-2 block text-xs font-semibold text-muted-foreground">
                    {item.venue}
                  </span>
                </span>
              </button>
            ))}
          </Reveal>

          {selected ? (
            <Reveal className="card p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/12 text-primary sm:flex">
                  <FileText aria-hidden size={24} />
                </div>
                <div>
                  <p className="eyebrow">Publication highlight</p>
                  <h3 className="mt-3 text-2xl font-black leading-tight text-foreground">
                    {selected.title}
                  </h3>
                  {selected.status ? (
                    <p className="mt-3 text-sm font-semibold text-primary">
                      {selected.status}
                    </p>
                  ) : null}
                  <p className="mt-5 leading-7 text-muted-foreground">{selected.summary}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {selected.keywords.map((keyword) => (
                  <span key={keyword} className="pill">
                    {keyword}
                  </span>
                ))}
              </div>

              <ul className="mt-6 grid gap-3">
                {selected.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-md border border-border bg-muted/35 p-4 text-sm leading-6 text-muted-foreground">
                    {highlight}
                  </li>
                ))}
              </ul>

              {selected.collaborators ? (
                <p className="mt-5 text-sm text-muted-foreground">{selected.collaborators}</p>
              ) : null}

              {selected.link ? (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-3 text-sm font-bold text-background transition hover:opacity-90"
                >
                  View research reference
                  <ExternalLink aria-hidden size={17} />
                </a>
              ) : null}
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
