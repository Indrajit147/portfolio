"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Facebook,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Microscope,
  Network,
  Sparkles
} from "lucide-react";
import type { Profile, Stat } from "@/content/portfolio";
import { AnimatedCounter } from "@/components/animated-counter";

export function Hero({ profile, stats }: { profile: Profile; stats: Stat[] }) {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div className="section-shell grid min-h-[calc(100vh-6rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            <Sparkles aria-hidden size={16} />
            Developer-researcher portfolio
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-3xl text-xl font-semibold leading-8 text-foreground/88 sm:text-2xl">
            {profile.role}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-bold text-background transition hover:opacity-90"
            >
              View Projects
              <ArrowRight aria-hidden size={18} />
            </a>
            <a
              href="#research"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-bold text-foreground transition hover:border-primary/50"
            >
              <Microscope aria-hidden size={18} />
              View Research
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-bold text-foreground transition hover:border-primary/50"
            >
              <Mail aria-hidden size={18} />
              Contact
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card text-foreground transition hover:border-primary/50"
              aria-label="Open GitHub profile"
            >
              <Github aria-hidden size={19} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card text-foreground transition hover:border-primary/50"
              aria-label="Open LinkedIn profile"
            >
              <Linkedin aria-hidden size={19} />
            </a>
            <a
              href={profile.links.facebook}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card text-foreground transition hover:border-primary/50"
              aria-label="Open Facebook profile"
            >
              <Facebook aria-hidden size={19} />
            </a>
            <a
              href={profile.links.googleScholar}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card text-foreground transition hover:border-primary/50"
              aria-label="Open Google Scholar profile"
            >
              <GraduationCap aria-hidden size={19} />
            </a>
            <a
              href={profile.links.researchGate}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card text-foreground transition hover:border-primary/50"
              aria-label="Open ResearchGate profile"
            >
              <Network aria-hidden size={19} />
            </a>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-3 text-sm font-bold text-foreground transition hover:border-primary/50"
            >
              <Download aria-hidden size={18} />
              CV / Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] border border-primary/20 bg-primary/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-glow">
              <Image
                src={profile.portrait}
                alt="Formal portrait of Indrajit Gupta"
                width={720}
                height={840}
                priority
                className="aspect-[6/7] w-full object-cover"
              />
              <div className="border-t border-border bg-card/92 p-5 backdrop-blur">
                <p className="text-sm font-bold text-foreground">{profile.institution}</p>
                <p className="mt-1 text-sm text-muted-foreground">{profile.location}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="card p-5">
              <p className="text-3xl font-black text-foreground">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
