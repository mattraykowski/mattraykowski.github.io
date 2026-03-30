import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceItem from "@/components/ui/ExperienceItem";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="Experience" />
        <div>
          {experiences.map((exp) => (
            <ExperienceItem key={`${exp.company}-${exp.role}`} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
