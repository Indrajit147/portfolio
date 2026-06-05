import type { TimelineEntry } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <section id="timeline" className="scroll-mt-20 border-t border-border/70 bg-muted/25">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Timeline"
            title="A concise path from fundamentals to applied AI and research."
          />
        </Reveal>

        <div className="mt-10 grid gap-4">
          {entries.map((entry, index) => (
            <Reveal key={`${entry.date}-${entry.title}`} delay={index * 0.045}>
              <article className="grid gap-4 rounded-lg border border-border bg-card p-5 sm:grid-cols-[9rem_1fr]">
                <time className="text-sm font-black text-primary">{entry.date}</time>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{entry.title}</h3>
                  <p className="mt-2 leading-7 text-muted-foreground">{entry.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
