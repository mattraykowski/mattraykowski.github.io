export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    company: "Kinetic Data",
    role: "Head of Engineering",
    period: "2022 \u2014 Present",
    description: [
      "Recruit, mentor, and direct 3 engineering teams of 9\u201312 engineers, fostering a culture of ownership, growth, and continuous improvement.",
      "Define the company\u2019s technical vision and multi-year technical roadmap in alignment with business goals.",
      "Spearhead AI initiatives spanning internal developer tooling, workflow automation, and customer-facing platform capabilities.",
      "Lead the technical compliance effort for CMMC, FedRAMP High, and SOC2 certification.",
    ],
    technologies: [
      "AI Strategy",
      "DORA Metrics",
      "SPACE Framework",
      "AWS",
      "Kubernetes",
    ],
  },
  {
    company: "Kinetic Data",
    role: "Product Developer / Engineering Lead",
    period: "2015 \u2014 2022",
    description: [
      "Led a product development team through daily standups, sprint planning, and retrospectives.",
      "Designed and implemented front-end applications using React and Angular; built backend services in Java, Ruby, and Elixir.",
      "Managed CI/CD pipelines, AWS infrastructure, and Kubernetes deployments.",
    ],
    technologies: [
      "React",
      "Angular",
      "Java",
      "Ruby",
      "Elixir",
      "Cassandra",
      "PostgreSQL",
    ],
  },
  {
    company: "Children\u2019s Hospitals and Clinics of Minnesota",
    role: "Corporate Applications Supervisor",
    period: "2006 \u2014 2015",
    description: [
      "Managed a technical team responsible for enterprise corporate systems (PeopleSoft HR/Finance, Kronos, Hyperion).",
      "Designed automation tooling using Chef, Jenkins, and custom scripts.",
      "Developed internal applications using Node.js, Rails, and C#.",
    ],
    technologies: ["Node.js", "Rails", "C#", "Chef", "Jenkins"],
  },
];
