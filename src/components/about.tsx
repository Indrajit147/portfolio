import { BrainCircuit, GraduationCap, MapPin, RadioTower } from "lucide-react";
import type { EducationEntry, Profile } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const focusAreas = [
  {
    title: "Academic base",
    detail: "Electronics & Communication Engineering at KUET with a signal, systems, and computation foundation.",
    icon: GraduationCap
  },
  {
    title: "AI direction",
    detail: "Machine learning, deep learning, NLP, and computer vision with a practical builder mindset.",
    icon: BrainCircuit
  },
  {
    title: "Research profile",
    detail: "Bangla NLP, privacy-preserving text generation, and EEG-related research interests.",
    icon: RadioTower
  }
];

export function About({
  profile,
  education
}: {
  profile: Profile;
  education: EducationEntry[];
}) {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border/70">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A portfolio built around research depth and working prototypes."
            description={profile.summary}
          />
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="card p-6">
            <div className="flex items-start gap-3">
              <MapPin aria-hidden className="mt-1 text-primary" size={22} />
              <div>
                <h3 className="text-xl font-bold text-foreground">Current base</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {profile.institution}. Building a profile that is useful for recruiters,
                  professors, and collaborators looking for applied AI work with research
                  seriousness.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.title} delay={index * 0.06} className="card p-6">
                  <Icon aria-hidden className="text-primary" size={24} />
                  <h3 className="mt-5 text-lg font-bold text-foreground">{area.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{area.detail}</p>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="card mt-4 p-6">
          <div className="flex items-start gap-3">
            <GraduationCap aria-hidden className="mt-1 text-primary" size={22} />
            <div className="w-full">
              <h3 className="text-xl font-bold text-foreground">Education</h3>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {education.map((entry) => (
                  <article
                    key={`${entry.level}-${entry.institution}`}
                    className="rounded-md border border-border bg-muted/35 p-4"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                      {entry.level}
                    </p>
                    <h4 className="mt-3 text-base font-bold leading-6 text-foreground">
                      {entry.institution}
                    </h4>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">
                      {entry.period}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
