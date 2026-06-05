import type { NavigationItem, Profile } from "@/content/portfolio";

export function Footer({
  profile,
  navigation
}: {
  profile: Profile;
  navigation: NavigationItem[];
}) {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <p>
          Copyright {new Date().getFullYear()} {profile.name}. Built for research, projects,
          and collaboration.
        </p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-3">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="focus-ring rounded-md px-2 py-1 font-semibold transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
