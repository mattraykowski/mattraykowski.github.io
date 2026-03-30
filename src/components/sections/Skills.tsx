import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="Skills" />
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-accent-purple">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
