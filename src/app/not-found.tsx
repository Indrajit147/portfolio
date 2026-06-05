import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 text-foreground">
      <section className="max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-black">Page not found</h1>
        <p className="mt-4 leading-7 text-muted-foreground">
          This portfolio page is not available yet. Return home to explore the
          research, projects, and contact sections.
        </p>
        <Link
          href="/"
          className="focus-ring mt-6 inline-flex rounded-md bg-foreground px-5 py-3 text-sm font-bold text-background"
        >
          Back to portfolio
        </Link>
      </section>
    </main>
  );
}
