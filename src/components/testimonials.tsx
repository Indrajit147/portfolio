import { Quote } from "lucide-react";
import type { Endorsement } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Testimonials({ endorsements }: { endorsements: Endorsement[] }) {
  return (
    <section className="border-t border-border/70">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Endorsements"
            title="A reserved space for recommendations and collaborator notes."
            description="This section is ready for professor, collaborator, reviewer, or mentor quotes as the profile grows."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {endorsements.map((endorsement, index) => (
            <Reveal key={endorsement.name} delay={index * 0.05} className="card p-6">
              <Quote aria-hidden className="text-primary" size={24} />
              <blockquote className="mt-5 leading-7 text-muted-foreground">
                {endorsement.quote}
              </blockquote>
              <p className="mt-5 font-bold text-foreground">{endorsement.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{endorsement.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
