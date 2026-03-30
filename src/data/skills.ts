export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Leadership",
    skills: [
      "Engineering Team Building",
      "Technical Strategy",
      "Performance Management",
      "Agile/Scrum",
      "Stakeholder Management",
      "OKRs",
    ],
  },
  {
    name: "Languages & Frameworks",
    skills: [
      "Java",
      "Ruby/Rails",
      "Elixir/Phoenix",
      "JavaScript/TypeScript",
      "React",
      "C#",
      "Python",
    ],
  },
  {
    name: "AI & Innovation",
    skills: [
      "AI Strategy",
      "Developer Tooling",
      "Platform AI Features",
      "Proof-of-Concept Development",
    ],
  },
  {
    name: "Compliance & Security",
    skills: ["FedRAMP High", "CMMC", "SOC2", "SOX"],
  },
  {
    name: "Engineering Practices",
    skills: [
      "CI/CD",
      "DORA Metrics",
      "SPACE Framework",
      "DevOps",
      "Cloud Architecture",
    ],
  },
  {
    name: "Data & Infrastructure",
    skills: [
      "PostgreSQL",
      "Cassandra",
      "MongoDB",
      "AWS",
      "Kubernetes",
      "Docker",
      "Monitoring & Observability",
    ],
  },
];
