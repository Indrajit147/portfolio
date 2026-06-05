import { BrainCircuit, Code2, Layers3, ScanSearch, Wrench } from "lucide-react";
import type { SkillGroup } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const icons = [Code2, BrainCircuit, ScanSearch, Layers3, Wrench];

export function Skills({ groups }: { groups: SkillGroup[] }) {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border/70 bg-muted/25">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A focused stack for AI experiments, research workflows, and product prototypes."
            description="Skills are grouped so the portfolio can grow cleanly as new projects, papers, and tools are added."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {groups.map((group, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={group.title} delay={index * 0.05} className="card p-5">
                <Icon aria-hidden className="text-primary" size={24} />
                <h3 className="mt-5 text-lg font-bold text-foreground">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="pill">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
