import { BrainCircuit, CalendarDays, GraduationCap, MapPin, RadioTower } from "lucide-react";
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

const logoColors = [
  "border-emerald-300/70 bg-emerald-400/15 text-emerald-100",
  "border-sky-300/70 bg-sky-400/15 text-sky-100",
  "border-amber-300/70 bg-amber-400/15 text-amber-100"
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

        <Reveal className="mt-12 overflow-hidden rounded-lg border border-slate-800 bg-slate-950 px-5 py-12 text-white shadow-glow sm:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.5em] text-primary">
              Education
            </p>
            <h3 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
              My Educational Institutions
            </h3>
          </div>

          <div className="relative mx-auto mt-12 max-w-4xl">
            <div
              aria-hidden
              className="absolute bottom-8 left-8 top-8 w-px bg-gradient-to-b from-primary/70 via-slate-700 to-primary/20"
            />

            <div className="grid gap-5">
              {education.map((entry, index) => (
                <article
                  key={`${entry.level}-${entry.institution}`}
                  className="relative grid gap-4 rounded-lg border border-slate-800 bg-slate-900/75 p-5 pl-24 shadow-xl shadow-black/20 transition hover:border-primary/50 hover:bg-slate-900 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:items-center sm:pl-5"
                >
                  <div className="absolute left-0 top-5 flex w-16 justify-center sm:static sm:w-auto">
                    <div
                      className={`z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 text-sm font-black shadow-xl ${logoColors[index % logoColors.length]}`}
                    >
                      {entry.logo}
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-primary">
                        {entry.level}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-sm font-bold text-slate-300">
                        <CalendarDays aria-hidden size={15} />
                        {entry.period}
                      </span>
                    </div>
                    <h4 className="mt-4 text-xl font-black leading-snug text-white sm:text-2xl">
                      {entry.institution}
                    </h4>
                    <p className="mt-3 text-base font-bold leading-7 text-slate-200">
                      {entry.credential}
                    </p>
                    <p className="mt-1 text-base leading-7 text-slate-400">{entry.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
