import { Award, BookOpenCheck, ShieldCheck, Trophy } from "lucide-react";
import type { Achievement } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const icons = [BookOpenCheck, ShieldCheck, Trophy, Award];

export function Achievements({ achievements }: { achievements: Achievement[] }) {
  return (
    <section id="achievements" className="scroll-mt-20 border-t border-border/70">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Achievements"
            title="Signals of momentum across learning, research, and project execution."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={achievement.title} delay={index * 0.05} className="card p-6">
                <Icon aria-hidden className="text-primary" size={24} />
                <h3 className="mt-5 text-xl font-bold text-foreground">{achievement.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{achievement.detail}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
