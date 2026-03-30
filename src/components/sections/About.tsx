import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="About" />
        <div className="space-y-4 leading-relaxed text-text-muted">
          <p>
            I&apos;m an engineering leader with over 20 years of experience
            spanning hands-on development, infrastructure, and organizational
            leadership. I currently lead three engineering teams as Head of
            Engineering at Kinetic Data, where I define technical strategy, drive
            AI adoption, and guide the company through FedRAMP High, CMMC, and
            SOC2 compliance initiatives.
          </p>
          <p>
            Throughout my career, I&apos;ve built and scaled teams, established
            engineering metrics programs using SPACE and DORA frameworks, and
            worked to bridge the gap between product vision and technical
            execution. I&apos;m passionate about growing engineers through
            mentorship and creating the processes that let teams deliver
            predictably.
          </p>
          <p>
            Outside of work, I&apos;m an active open-source contributor and have
            served as a Google Summer of Code mentor for four years across Java,
            C++, JavaScript, and Android projects.
          </p>
        </div>
      </div>
    </section>
  );
}
