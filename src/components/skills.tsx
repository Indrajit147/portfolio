import {
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers3,
  ScanSearch,
  Sparkles,
  Wrench
} from "lucide-react";
import type { SkillGroup } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const icons = [Code2, BrainCircuit, ScanSearch, Layers3, Wrench];

const featuredSkills = [
  { label: "Python", logo: "Py", tone: "bg-blue-500/15 text-blue-700 dark:text-blue-200" },
  { label: "TensorFlow", logo: "TF", tone: "bg-orange-500/15 text-orange-700 dark:text-orange-200" },
  { label: "OpenCV", logo: "CV", tone: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-200" },
  { label: "Streamlit", logo: "St", tone: "bg-rose-500/15 text-rose-700 dark:text-rose-200" },
  { label: "OpenAI", logo: "AI", tone: "bg-teal-500/15 text-teal-700 dark:text-teal-200" },
  { label: "GitHub", logo: "GH", tone: "bg-slate-500/15 text-slate-700 dark:text-slate-200" }
];

const itemLogos: Record<string, string> = {
  Python: "Py",
  C: "C",
  TypeScript: "TS",
  JavaScript: "JS",
  "Data Structures": "DS",
  "CLI tools": "CLI",
  "Supervised Learning": "SL",
  "Deep Learning": "DL",
  TensorFlow: "TF",
  "Model Evaluation": "ME",
  "Feature Engineering": "FE",
  OpenCV: "CV",
  YOLO: "YOLO",
  MediaPipe: "MP",
  "Face Recognition": "FR",
  "Real-Time Video Pipelines": "RT",
  "Bangla NLP": "BN",
  "Privacy Rewriting": "PR",
  Summarization: "SUM",
  Prompting: "PT",
  "LLM Evaluation": "LLM",
  Streamlit: "ST",
  LangChain: "LC",
  "OpenAI API": "AI",
  Pydantic: "PYD",
  GitHub: "GH",
  Pandas: "PD"
};

const capabilityIcons = [Sparkles, Cpu, Database, GitBranch];

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

        <Reveal className="mt-10 grid gap-3 rounded-lg border border-border bg-card/75 p-4 shadow-soft backdrop-blur sm:grid-cols-2 lg:grid-cols-6">
          {featuredSkills.map((skill) => (
            <div
              key={skill.label}
              className="flex items-center gap-3 rounded-md border border-border bg-muted/35 p-3"
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-sm font-black ${skill.tone}`}
              >
                {skill.logo}
              </span>
              <span className="text-sm font-black text-foreground">{skill.label}</span>
            </div>
          ))}
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {groups.map((group, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal
                key={group.title}
                delay={index * 0.05}
                className="card group relative overflow-hidden p-5 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-primary/70" />
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/12 text-primary">
                    <Icon aria-hidden size={24} />
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-black text-muted-foreground">
                    {group.items.length} tools
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-black text-foreground">{group.title}</h3>
                <div className="mt-5 grid gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-2 rounded-md border border-border bg-muted/35 px-3 py-2 text-sm font-semibold text-muted-foreground"
                    >
                      <span className="flex h-7 min-w-7 items-center justify-center rounded bg-card px-1.5 text-[0.65rem] font-black text-primary">
                        {itemLogos[item] ?? item.slice(0, 2).toUpperCase()}
                      </span>
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-6 grid gap-3 md:grid-cols-4">
          {[
            "Research-ready ML workflows",
            "Agentic AI prototypes",
            "Computer vision pipelines",
            "Bangla NLP experimentation"
          ].map((capability, index) => {
            const Icon = capabilityIcons[index % capabilityIcons.length];
            return (
              <div key={capability} className="card flex items-center gap-3 p-4">
                <Icon aria-hidden className="text-primary" size={20} />
                <p className="text-sm font-bold text-foreground">{capability}</p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
