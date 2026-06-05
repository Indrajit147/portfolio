"use client";

import { useEffect, useMemo, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import type { NavigationItem } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function Navbar({ items }: { items: NavigationItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const ids = useMemo(() => items.map((item) => item.id), [items]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-32% 0px -58% 0px",
        threshold: [0, 0.2, 0.6, 1]
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids]);

  const navLinks = (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-1">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          aria-current={activeId === item.id ? "page" : undefined}
          onClick={() => setIsOpen(false)}
          className={cn(
            "focus-ring rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground",
            activeId === item.id && "bg-muted text-foreground"
          )}
        >
          {item.label}
        </a>
      ))}
    </div>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/86 backdrop-blur-xl">
      <a
        href="#main-content"
        className="focus-ring sr-only rounded-md bg-background px-4 py-2 text-sm font-semibold focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
      >
        Skip to content
      </a>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#main-content" className="focus-ring rounded-md text-sm font-black text-foreground">
          <span className="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background">
            IG
          </span>
          Indrajit Gupta
        </a>

        <div className="hidden items-center gap-3 md:flex">
          {navLinks}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card"
          >
            {isOpen ? <X aria-hidden size={18} /> : <Menu aria-hidden size={18} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-border bg-background px-5 py-4 shadow-soft md:hidden">
          {navLinks}
        </div>
      ) : null}
    </header>
  );
}

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground shadow-sm transition hover:border-primary/50"
    >
      {mounted && isDark ? <Sun aria-hidden size={18} /> : <Moon aria-hidden size={18} />}
    </button>
  );
}
