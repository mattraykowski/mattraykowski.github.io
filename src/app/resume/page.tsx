import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Resume — ${SITE.name}`,
  description: `Professional resume for ${SITE.name}, ${SITE.title}`,
};

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16 first:mt-0">
      <SectionHeading title={title} />
      {children}
    </section>
  );
}

function Job({
  role,
  company,
  location,
  period,
  bullets,
}: {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div className="relative border-l-2 border-border pb-10 pl-8 last:pb-0">
      <div className="absolute -left-[9px] top-0 size-4 rounded-full border-2 border-highlight bg-surface" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold">{role}</h3>
          <p className="text-text-muted">
            {company} | {location}
          </p>
        </div>
        <span className="font-mono text-sm text-text-muted">{period}</span>
      </div>
      <ul className="mt-3 space-y-2">
        {bullets.map((item, i) => (
          <li key={i} className="text-text-muted">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EarlyCareerJob({
  role,
  company,
  location,
  description,
}: {
  role: string;
  company: string;
  location: string;
  description: string;
}) {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="text-lg font-semibold">{role}</h3>
      <p className="text-text-muted">
        {company} | {location}
      </p>
      <p className="mt-2 text-text-muted">{description}</p>
    </div>
  );
}

function SkillGroup({
  label,
  skills,
}: {
  label: string;
  skills: string;
}) {
  return (
    <div className="mb-4 last:mb-0">
      <span className="font-mono font-semibold text-accent-purple">{label}:</span>{" "}
      <span className="text-text-muted">{skills}</span>
    </div>
  );
}

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Matt Raykowski
        </h1>
        <p className="mt-2 text-text-muted">
          Shafer, MN | matt.raykowski@gmail.com
        </p>
      </div>

      {/* Professional Summary */}
      <ResumeSection title="Professional Summary">
        <p className="leading-relaxed text-text-muted">
          Engineering leader with 20+ years of experience spanning hands-on
          development, infrastructure, and organizational leadership. Currently
          leading three engineering teams (10+ engineers) as Head of Engineering
          at Kinetic Data, defining technical strategy, driving AI adoption, and
          leading the company through FedRAMP High, CMMC, and SOC2 compliance
          initiatives. Proven track record of building and scaling teams,
          establishing engineering metrics programs using SPACE and DORA
          frameworks, and bridging the gap between product vision and technical
          execution. Known for growing engineers through mentorship and creating
          the processes that let teams deliver predictably.
        </p>
      </ResumeSection>

      {/* Key Achievements */}
      <ResumeSection title="Key Achievements">
        <ul className="space-y-3 text-text-muted">
          <li>
            Scaled and led 3 engineering teams totaling 10+ engineers across
            platform, product, and infrastructure disciplines.
          </li>
          <li>
            Spearheaded AI initiatives from internal developer tooling to
            customer-facing platform features, accelerating product innovation.
          </li>
          <li>
            Ensured the delivery of 8 releases for on-premise customers per year
            in coordination with client services for rapid adoption of new
            features and critical fixes.
          </li>
          <li>
            Led a project to plan, gather requirements, and scaffold a
            zero-to-one next generation BPM platform product.
          </li>
          <li>
            Implemented formal stakeholder intake process and project management
            program, reducing scope creep and improving on-time delivery.
          </li>
        </ul>
      </ResumeSection>

      {/* Experience */}
      <ResumeSection title="Experience">
        <Job
          role="Head of Engineering"
          company="Kinetic Data"
          location="Minneapolis, MN"
          period="2022 — Present"
          bullets={[
            "Recruit, mentor, and direct 3 engineering teams of 9\u201312 engineers, fostering a culture of ownership, growth, and continuous improvement.",
            "Define the company\u2019s technical vision in alignment with business goals; collaborate with executive leadership and stakeholders to create and maintain a multi-year technical roadmap.",
            "Oversee planning, execution, and delivery of all engineering projects, consistently delivering releases on time and within scope.",
            "Conduct performance evaluations, deliver constructive feedback, and implement individualized development plans to support career growth.",
            "Define and track KPIs to measure engineering effectiveness, leveraging SPACE and DORA frameworks to drive data-informed decisions.",
            "Spearhead AI initiatives spanning internal developer tooling, workflow automation, and customer-facing platform capabilities.",
            "Lead the technical compliance effort for CMMC, FedRAMP High, and SOC2 certification, coordinating across engineering, security, and operations.",
            "Implement a formal process for stakeholder and Product Management intake, improving transparency and prioritization.",
          ]}
        />
        <Job
          role="Product Developer / Engineering Lead"
          company="Kinetic Data"
          location="St. Paul, MN"
          period="2015 — 2022"
          bullets={[
            "Led a product development team through daily standups, sprint planning, and retrospectives; served as ScrumMaster and removed blockers to maintain velocity.",
            "Partnered with Product Management to identify initiatives, author technical proposals, and plan work breakdowns for quarterly roadmaps.",
            "Designed and implemented front-end applications using React and Angular; built backend services in Java, Ruby, and Elixir with Cassandra and PostgreSQL.",
            "Created proof-of-concept prototypes to evaluate emerging technologies, producing detailed retrospectives with recommendations for the leadership team.",
            "Managed CI/CD pipelines, AWS infrastructure, and Kubernetes deployments; established monitoring and alerting for production systems.",
            "Mentored junior and mid-level developers; delivered internal training sessions on new frameworks and architectural patterns.",
          ]}
        />
        <Job
          role="Corporate Applications Supervisor"
          company="Children\u2019s Hospitals and Clinics of Minnesota"
          location="Roseville, MN"
          period="2006 — 2015"
          bullets={[
            "Managed a technical team responsible for enterprise corporate systems (PeopleSoft HR/Finance, Kronos, Hyperion); conducted performance evaluations and career planning.",
            "Led technical project management and served as ScrumMaster; performed impact and risk assessments for system changes.",
            "Designed automation tooling using Chef, Jenkins, and custom scripts, reducing manual administration effort significantly.",
            "Developed internal applications using Node.js, Rails, and C#; championed adoption of modern frameworks within the IT organization.",
          ]}
        />
      </ResumeSection>

      {/* Freelance */}
      <ResumeSection title="Freelance">
        <Job
          role="React Native Developer"
          company="Overland Bound"
          location="Remote"
          period="2019 — 2020"
          bullets={[
            "Developing the forum and passive conversation areas of the mobile app.",
            "Reviewed entire code base for code quality, refactor major portions based upon overall quality.",
            "Implement a comprehensive test suite for regression testing.",
          ]}
        />
        <Job
          role="Elixir Developer"
          company="RemoteHamRadio"
          location="Remote"
          period="2016 — 2018"
          bullets={[
            "Develop a greenfield frontend environment in React for logging of complex radio contact and contesting data.",
            "Updating and modernizing older React code which acts as a frontend to remote radio equipment.",
            "Backend server development in Elixir/Phoenix.",
            "Create REST APIs for front-end consumption and integration with the legacy system and its daemons.",
            "Create GenServers to pull and aggregate a variety of third party data sources.",
          ]}
        />
      </ResumeSection>

      {/* Earlier Career */}
      <ResumeSection title="Earlier Career">
        <EarlyCareerJob
          role="Systems Administrator"
          company="PLATO Learning"
          location="Bloomington, MN"
          description="Managed wide-area network infrastructure, EMC SAN storage, and enterprise systems. Led IT SOX compliance. Built custom monitoring tools in Java."
        />
        <EarlyCareerJob
          role="Systems Administrator"
          company="Equus Computer Systems"
          location="Minneapolis, MN"
          description="Planned and built a national datacenter and 15-state network infrastructure. Developed CRM/billing systems. Managed vendor relationships and enterprise monitoring."
        />
      </ResumeSection>

      {/* Skills & Expertise */}
      <ResumeSection title="Skills & Expertise">
        <div>
          <SkillGroup
            label="Leadership"
            skills="Engineering Team Building, Technical Strategy & Roadmapping, Performance Management, Agile/Scrum, Stakeholder Management, Vendor Relations, OKRs"
          />
          <SkillGroup
            label="Compliance & Security"
            skills="FedRAMP High, CMMC, SOC2, SOX"
          />
          <SkillGroup
            label="Engineering Practices"
            skills="CI/CD, DORA Metrics, SPACE Framework, DevOps, Cloud Architecture (AWS, Kubernetes)"
          />
          <SkillGroup
            label="AI & Innovation"
            skills="AI Strategy, Developer Tooling, Platform AI Features, Proof-of-Concept Development"
          />
          <SkillGroup
            label="Languages & Frameworks"
            skills="Java, Ruby/Rails, Elixir/Phoenix, JavaScript/TypeScript, React, C#, Python"
          />
          <SkillGroup
            label="Data & Infrastructure"
            skills="PostgreSQL, Cassandra, MongoDB, AWS, Kubernetes, Docker, Monitoring & Observability"
          />
        </div>
      </ResumeSection>

      {/* Certifications & Community */}
      <ResumeSection title="Certifications & Community">
        <ul className="space-y-3 text-text-muted">
          <li>Certified ScrumMaster (CSM)</li>
          <li>Dell/EMC Certified SAN Storage Administrator</li>
          <li>
            Google Summer of Code Mentor (4 years) — Mentoring in Java, C++,
            JavaScript, and Android
          </li>
          <li>
            Open Source Contributor: OpenNMS, Ryzom Core, OneBody, FoundryVTT
            Community Modules
          </li>
        </ul>
      </ResumeSection>
    </div>
  );
}
