"use client";

import { FormEvent, useState } from "react";
import { Facebook, Github, GraduationCap, Linkedin, Mail, Network, Send } from "lucide-react";
import type { Profile } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

type SubmitStatus =
  | {
      type: "idle";
      message: "";
    }
  | {
      type: "success" | "error";
      message: string;
    };

const initialState: FormState = {
  name: "",
  email: "",
  message: ""
};

export function Contact({ profile }: { profile: Profile }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: "idle",
    message: ""
  });

  const emailAddress = profile.links.email.replace("mailto:", "");
  const endpoint = `https://formsubmit.co/ajax/${emailAddress}`;

  function validate(values: FormState) {
    const nextErrors: FormErrors = {};

    if (values.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email.";
    }

    if (values.message.trim().length < 20) {
      nextErrors.message = "Please write at least 20 characters.";
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitStatus({ type: "idle", message: "" });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: "idle", message: "" });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _subject: "New portfolio message from Indrajit Gupta website",
          _template: "table"
        })
      });

      const result = (await response.json().catch(() => null)) as {
        success?: string;
        message?: string;
      } | null;

      if (!response.ok || result?.success === "false") {
        throw new Error(result?.message ?? "Message delivery failed.");
      }

      setForm(initialState);
      setSubmitStatus({
        type: "success",
        message:
          "Message sent successfully. If this is the first submission, check your inbox once to activate FormSubmit delivery."
      });
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "Message could not be delivered right now. Please email me directly from the link beside the form."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border/70">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Open to research collaborations, AI projects, and thoughtful engineering conversations."
            description="The form validates client-side for now. Direct links are included for reliable contact."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
          <Reveal className="card p-6">
            <h3 className="text-xl font-bold text-foreground">Direct links</h3>
            <div className="mt-5 grid gap-3">
              <a
                href={profile.links.email}
                className="focus-ring inline-flex items-center gap-3 rounded-md border border-border bg-muted/35 px-4 py-3 text-sm font-bold text-foreground transition hover:border-primary/50"
              >
                <Mail aria-hidden size={18} />
                {emailAddress}
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-3 rounded-md border border-border bg-muted/35 px-4 py-3 text-sm font-bold text-foreground transition hover:border-primary/50"
              >
                <Linkedin aria-hidden size={18} />
                LinkedIn
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-3 rounded-md border border-border bg-muted/35 px-4 py-3 text-sm font-bold text-foreground transition hover:border-primary/50"
              >
                <Github aria-hidden size={18} />
                GitHub
              </a>
              <a
                href={profile.links.facebook}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-3 rounded-md border border-border bg-muted/35 px-4 py-3 text-sm font-bold text-foreground transition hover:border-primary/50"
              >
                <Facebook aria-hidden size={18} />
                Facebook
              </a>
              <a
                href={profile.links.googleScholar}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-3 rounded-md border border-border bg-muted/35 px-4 py-3 text-sm font-bold text-foreground transition hover:border-primary/50"
              >
                <GraduationCap aria-hidden size={18} />
                Google Scholar
              </a>
              <a
                href={profile.links.researchGate}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-3 rounded-md border border-border bg-muted/35 px-4 py-3 text-sm font-bold text-foreground transition hover:border-primary/50"
              >
                <Network aria-hidden size={18} />
                ResearchGate
              </a>
            </div>
          </Reveal>

          <Reveal className="card p-6">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  value={form.name}
                  error={errors.name}
                  onChange={(value) => setForm((current) => ({ ...current, name: value }))}
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  error={errors.email}
                  onChange={(value) => setForm((current) => ({ ...current, email: value }))}
                />
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="text-sm font-bold text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, message: event.target.value }))
                  }
                  rows={6}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="focus-ring mt-2 w-full resize-y rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground"
                  placeholder="Share the collaboration, research idea, or project context."
                />
                {errors.message ? (
                  <p id="message-error" className="mt-2 text-sm font-semibold text-red-600 dark:text-red-400">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-bold text-background transition hover:opacity-90"
              >
                <Send aria-hidden size={18} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus.type !== "idle" ? (
                <p
                  className={
                    submitStatus.type === "success"
                      ? "mt-4 rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary"
                      : "mt-4 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-600 dark:text-red-400"
                  }
                  role="status"
                >
                  {submitStatus.message}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text"
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
}) {
  const id = label.toLowerCase();
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="text-sm font-bold text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="focus-ring mt-2 h-11 w-full rounded-md border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground"
      />
      {error ? (
        <p id={errorId} className="mt-2 text-sm font-semibold text-red-600 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
