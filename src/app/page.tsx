import { About } from "@/components/about";
import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Research } from "@/components/research";
import { Skills } from "@/components/skills";
import { Testimonials } from "@/components/testimonials";
import { Timeline } from "@/components/timeline";
import { portfolio } from "@/content/portfolio";

export default function Home() {
  return (
    <>
      <Navbar items={portfolio.navigation} />
      <main id="main-content">
        <Hero profile={portfolio.profile} stats={portfolio.stats} />
        <About profile={portfolio.profile} />
        <Skills groups={portfolio.skills} />
        <Research research={portfolio.research} />
        <Projects projects={portfolio.projects} />
        <Achievements achievements={portfolio.achievements} />
        <Timeline entries={portfolio.timeline} />
        <Testimonials endorsements={portfolio.endorsements} />
        <Contact profile={portfolio.profile} />
      </main>
      <Footer profile={portfolio.profile} navigation={portfolio.navigation} />
    </>
  );
}
