import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Code2,
  Download,
  ExternalLink,
  GitBranch,
} from "lucide-react";

type SectionId = "experience" | "education";
type ExperienceId = "olyv" | "cred" | "navi" | "arista" | "acciojob";

type Experience = {
  id: ExperienceId;
  company: string;
  role: string;
  date: string;
  start: Date;
  end: Date | null;
  logo: string;
  iconUrl: string;
  location: string;
  accent: string;
  bullets: ReactNode[];
  details?: ExperienceDetail[];
  metrics: string[];
  tech: string[];
};

type ExperienceDetail = {
  title: string;
  items: ReactNode[];
};

type SkillGroup = {
  title: string;
  skills: string[];
};

const sections: Array<{ id: SectionId; label: string }> = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Language",
    skills: ["Java", "Go", "Kotlin", "Python", "C++", "JavaScript", "Scala"],
  },
  {
    title: "Backend & Front-end",
    skills: ["Spring Boot", "Dropwizard", "Google Guice", "Uber Fx", "Redis", "React", "HTML"],
  },
  {
    title: "Data & Infra",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Elasticsearch",
      "Kafka",
      "MongoDB",
      "AWS",
      "AWS Lambda",
      "AWS SQS",
      "AWS DynamoDB",
      "Airflow",
      "Grafana",
      "Prometheus",
    ],
  },
  {
    title: "Core",
    skills: ["SQL", "Bash", "Jenkins", "DSA", "OOP", "Testing", "Networks"],
  },
  {
    title: "Coursework",
    skills: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Computer Networks"],
  },
];

const experiences: Experience[] = [
  {
    id: "olyv",
    company: "Olyv (SmartCoin)",
    role: "Software Engineer",
    date: "May 2026 - Present",
    start: new Date(2026, 4, 1),
    end: null,
    logo: "O",
    iconUrl: "https://www.google.com/s2/favicons?domain=olyv.co.in&sz=64",
    location: "Bangalore, Karnataka",
    accent: "#526d87",
    tech: ["Java", "Spring Boot", "PostgreSQL", "MySQL", "Kafka", "AWS", "AWS SQS", "Redis", "SQL"],
    metrics: ["Collections", "May 2026"],
    bullets: [
      <>Started in the Collections team, continuing backend product engineering work.</>,
      <>Focus area: collections systems, service reliability, and data-backed workflows.</>,
    ],
  },
  {
    id: "cred",
    company: "CRED",
    role: "Software Engineer",
    date: "Jan 2025 - Apr 2026",
    start: new Date(2025, 0, 1),
    end: new Date(2026, 3, 30),
    logo: "C",
    iconUrl: "https://www.google.com/s2/favicons?domain=cred.club&sz=64",
    location: "Bangalore, Karnataka",
    accent: "#657a61",
    tech: [
      "Java",
      "Go",
      "Kotlin",
      "Spring Boot",
      "Dropwizard",
      "Google Guice",
      "PostgreSQL",
      "Kafka",
      "AWS",
      "AWS Lambda",
      "AWS SQS",
      "AWS DynamoDB",
      "Grafana",
      "Prometheus",
      "Redis",
      "Bash",
    ],
    metrics: ["10-20K onboardings/day", "PPI ownership", "Compliance"],
    details: [
      {
        title: "wallet_core",
        items: [
          <>Refactored wallet microservices with Java/Go best practices, design patterns, and TDD.</>,
          <>Closed tech debt and optimizations to improve code quality and service reliability.</>,
          <>Default on-call for wallet services; unblocked Ops/Growth and drove releases with ownership.</>,
        ],
      },
      {
        title: "big_rocks",
        items: [
          <>Led Digilocker KYC journey revamp.</>,
          <>Designed Wallet Streaks for retention and wallet usage incentives.</>,
          <>Integrated UPI on PPI, maintenance mode, and PPI Voice Bot support APIs.</>,
        ],
      },
      {
        title: "automation_ops",
        items: [
          <>Built PAC letter delivery automation with Delhivery APIs for <strong>10-20K daily onboardings</strong>.</>,
          <>Developed Slack QA bots, Wallet Utils Portal, and Maker-Checker config workflows.</>,
          <>Built/maintained PPI MCP server, enhanced PPI Agent, and authored runbooks.</>,
        ],
      },
      {
        title: "compliance_support",
        items: [
          <>Built transaction controls, transaction history access, and account validation flows.</>,
          <>Added experiment mode for controlled feature rollout.</>,
          <>Passed AML/FRM data downstream for wallet fraud checks.</>,
          <>Sole owner for PPI wallet support portal and 360-degree execution for <strong>3 months</strong>.</>,
        ],
      },
    ],
    bullets: [
      <>Refactored wallet microservices across Java and Go with TDD and service reliability improvements.</>,
      <>Led Digilocker KYC revamp, Wallet Streaks, UPI on PPI, maintenance mode, and PPI voice-bot APIs.</>,
      <>
        Engineered PAC letter automation via Delhivery APIs for{" "}
        <strong>10-20K daily user onboardings</strong>.
      </>,
      <>Built wallet ops tooling, Slack automations, maker-checker flows, observability, MCP server, and runbooks.</>,
      <>Delivered transaction controls, transaction history, account validation, AML/FRM, and experiment-mode rollouts.</>,
    ],
  },
  {
    id: "navi",
    company: "Navi",
    role: "SDE-1",
    date: "Jul 2023 - Jan 2025",
    start: new Date(2023, 6, 1),
    end: new Date(2025, 0, 31),
    logo: "N",
    iconUrl: "https://www.google.com/s2/favicons?domain=navi.com&sz=64",
    location: "Bangalore, Karnataka",
    accent: "#946252",
    tech: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "MySQL",
      "Elasticsearch",
      "Kafka",
      "Airflow",
      "Scala",
      "SQL",
      "AWS",
      "Airflow",
      "Prometheus",
    ],
    metrics: ["20% EMI recovery", "22% pipeline impact", "96% latency cut"],
    details: [
      {
        title: "collections",
        items: [
          <>Maintained and optimized Tele-Communication Portal for agent communication and loan-data sync.</>,
          <>Improved EMI recovery efficiency by <strong>20%</strong>.</>,
          <>Built WhatsApp Portal for customer media and text communication through in-house tooling.</>,
        ],
      },
      {
        title: "data_pipeline",
        items: [
          <>Owned CIBIL credit data ingestion pipeline end to end.</>,
          <>Used Airflow, Scala, SQL, and Kafka for credit scores, overdue amounts, and phone-number aggregates.</>,
          <>Improved model data availability and operational efficiency by <strong>22%</strong>.</>,
        ],
      },
      {
        title: "reliability",
        items: [
          <>Designed Error Handling and Analysis Framework for real-time error visibility.</>,
          <>Improved issue resolution by <strong>31%</strong>.</>,
        ],
      },
      {
        title: "performance",
        items: [
          <>Refactored home-page code and Elasticsearch aggregations for high-volume datasets.</>,
          <>Reduced latency by <strong>96%</strong>.</>,
        ],
      },
    ],
    bullets: [
      <>Optimized Tele-Communication Portal and EMI recovery workflows by <strong>20%</strong>.</>,
      <>Built WhatsApp Portal for customer media and text communication.</>,
      <>Owned CIBIL ingestion with Airflow, Scala, SQL, and Kafka, improving operational efficiency by <strong>22%</strong>.</>,
      <>Built error analysis framework improving issue resolution by <strong>31%</strong>.</>,
      <>Refactored Elasticsearch aggregations to reduce latency by <strong>96%</strong>.</>,
    ],
  },
  {
    id: "arista",
    company: "Arista Networks",
    role: "Intern",
    date: "Jan 2023 - Jun 2023",
    start: new Date(2023, 0, 1),
    end: new Date(2023, 5, 30),
    logo: "A",
    iconUrl: "https://www.google.com/s2/favicons?domain=arista.com&sz=64",
    location: "Bangalore, Karnataka",
    accent: "#6f617a",
    tech: ["Python", "C++", "Bash", "Networks", "Computer Networks", "OOP", "Testing"],
    metrics: ["EOS trunk", "CLI design", "Production tests"],
    details: [
      {
        title: "eos_feature",
        items: [
          <>Delivered Named BitsMap feature on EOS-trunk end to end.</>,
          <>Worked across CLI command design, functional design, implementation, and validation.</>,
        ],
      },
      {
        title: "quality",
        items: [
          <>Wrote unit tests and production tests for switch behavior.</>,
          <>Built understanding of network systems, QoS flows, and release-grade testing.</>,
        ],
      },
    ],
    bullets: [
      <>Delivered Named BitsMap feature on EOS-trunk end to end.</>,
      <>Designed CLI commands, functional designs, unit tests, and production tests.</>,
    ],
  },
  {
    id: "acciojob",
    company: "AccioJob",
    role: "Mentor",
    date: "Oct 2021 - May 2023",
    start: new Date(2021, 9, 1),
    end: new Date(2023, 4, 31),
    logo: "AJ",
    iconUrl: "https://www.google.com/s2/favicons?domain=acciojob.com&sz=64",
    location: "Remote",
    accent: "#a0783e",
    tech: [
      "Java",
      "JavaScript",
      "React",
      "HTML",
      "DSA",
      "Data Structures",
      "Algorithms",
      "OOP",
      "System Design",
      "Spring Boot",
      "DBMS",
      "Operating Systems",
    ],
    metrics: ["300+ students", "DSA curriculum", "WebDev curriculum"],
    bullets: [
      <>Mentored <strong>300+ students</strong> across DSA and development fundamentals.</>,
      <>Helped set up DSA and Web Development curriculum for initial batches.</>,
    ],
  },
];

const chronologicalExperiences = [...experiences].sort(
  (a, b) => a.start.getTime() - b.start.getTime(),
);

const education = [
  {
    title: "Indian Institute of Information Technology Allahabad",
    subtitle: "B.Tech | Information Technology",
    location: "Allahabad, U.P.",
    date: "2019 - 2023",
    start: "2019",
    end: "2023",
    iconUrl: "https://www.google.com/s2/favicons?domain=iiita.ac.in&sz=64",
    mark: "IIIT",
    details: ["8.01 CGPA"],
  },
  {
    title: "FIITJEE",
    subtitle: "Drop year | JEE + BITSAT prep",
    location: "Bhopal, M.P.",
    date: "2019",
    start: "2019",
    end: "2019",
    iconUrl: "https://www.google.com/s2/favicons?domain=fiitjee.com&sz=64",
    mark: "F",
    details: ["JEE Rank 5574", "BITSAT 345/420"],
  },
  {
    title: "Sardar Patel Public School, Bhopal",
    subtitle: "12th | PCM",
    location: "Bhopal, M.P.",
    date: "2017 - 2018",
    start: "2017",
    end: "2018",
    iconUrl: "https://www.google.com/s2/favicons?domain=sardarpatel.edu.in&sz=64",
    mark: "12th",
    details: ["89.8%"],
  },
  {
    title: "St. Joseph's Co-Ed School",
    subtitle: "10th | All subjects",
    location: "Bhopal, M.P.",
    date: "2016",
    start: "2016",
    end: "2016",
    iconUrl: "https://www.sjcsbhopal.com/images/logo-header.png",
    mark: "10th",
    details: ["10 CGPA", "NTSE scholar"],
  },
];

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>("experience");
  const [activeJob, setActiveJob] = useState<ExperienceId>("olyv");
  const [displayMonths, setDisplayMonths] = useState(0);

  const totalMonths = useMemo(() => monthsSince(new Date(2023, 6, 1), new Date()), []);
  const activeExperience = experiences.find((item) => item.id === activeJob) ?? experiences[0];

  useEffect(() => {
    let frame = 0;
    const totalFrames = 52;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayMonths(Math.round(totalMonths * eased));

      if (progress === 1) {
        window.clearInterval(timer);
      }
    }, 22);

    return () => window.clearInterval(timer);
  }, [totalMonths]);

  return (
    <div className="site-shell">
      <FlowLines />
      <main className="page-grid">
        <article className="content-pane" aria-label="Portfolio content">
          <Hero totalExperience={formatMonths(displayMonths)} />
          {activeSection === "experience" ? (
            <CompanyBreadcrumb activeJob={activeJob} setActiveJob={setActiveJob} />
          ) : null}

          <section className="stage corner-frame" aria-live="polite">
            {activeSection === "experience" && (
              <ExperienceStage activeExperience={activeExperience} />
            )}
            {activeSection === "education" && <EducationStage />}
          </section>
        </article>

        <aside className="index-pane" aria-label="Page index and context panel">
          <div className="side-stack">
            <nav className="index-card" aria-label="Portfolio index">
              {sections.map((section) => (
                <button
                  className={section.id === activeSection ? "index-link active" : "index-link"}
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  type="button"
                >
                  {section.label}
                </button>
              ))}
            </nav>
            <ContextPanel
              activeExperience={activeExperience}
              activeSection={activeSection}
            />
          </div>
        </aside>
      </main>
    </div>
  );
}

function Hero({
  totalExperience,
}: {
  totalExperience: string;
}) {
  return (
    <header className="hero corner-frame" id="top">
      <div className="hero-main">
        <div className="hero-identity">
          <h1>Aryan Dhakad</h1>
          <div className="yoe-block" aria-label={`Years of experience ${totalExperience}`}>
            <span>YOE :</span>
            <strong>{totalExperience}</strong>
          </div>
        </div>
        <HeaderLinks />
      </div>
    </header>
  );
}

function HeaderLinks() {
  return (
    <div className="hero-link-points" aria-label="Primary links">
      <div className="hero-link-line">
        <span className="link-dot" aria-hidden="true" />
        <div className="link-row-content">
          <a href="mailto:aryandhakad1@gmail.com">aryandhakad1@gmail.com</a>
          <span aria-hidden="true">|</span>
          <a href="tel:+919826098115">+91 9826098115</a>
        </div>
      </div>
      <div className="hero-link-line">
        <span className="link-dot" aria-hidden="true" />
        <div className="link-row-content">
          <a href="https://www.linkedin.com/in/aryandhakad/" rel="noreferrer" target="_blank">
            <ExternalLink size={15} strokeWidth={1.8} />
            LinkedIn
          </a>
          <span aria-hidden="true">|</span>
          <a href="https://github.com/aryanDhakad" rel="noreferrer" target="_blank">
            <GitBranch size={15} strokeWidth={1.8} />
            GitHub
          </a>
          <span aria-hidden="true">|</span>
          <a href="https://leetcode.com/darkkoder1" rel="noreferrer" target="_blank">
            <Code2 size={15} strokeWidth={1.8} />
            LeetCode
          </a>
        </div>
      </div>
      <div className="hero-link-line">
        <span className="link-dot" aria-hidden="true" />
        <div className="link-row-content">
          <a href="/resume/Aryan_Dhakd_Resume_2026_AD1.pdf" download>
            <Download size={15} strokeWidth={1.8} />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

function ExperienceStage({
  activeExperience,
}: {
  activeExperience: Experience;
}) {
  return (
    <div className="experience-stage">
      <div className="stage-topline">
        <div>
          <h2>{activeExperience.company} | {activeExperience.role}</h2>
        </div>
        <span className="body-company-logo" aria-hidden="true">
          <img
            alt=""
            src={activeExperience.iconUrl}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <span>{activeExperience.logo}</span>
        </span>
      </div>

      <div className="job-pane" key={activeExperience.id}>
        <div className="job-copy">
          <div className="job-meta">
            <span>{activeExperience.date}</span>
            <span>{activeExperience.location}</span>
          </div>
          {activeExperience.details ? (
            <div className="job-tree-grid">
              {activeExperience.details.map((group) => (
                <section className="job-tree-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          ) : (
            <ul>
              {activeExperience.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function CompanyBreadcrumb({
  activeJob,
  setActiveJob,
}: {
  activeJob: ExperienceId;
  setActiveJob: (id: ExperienceId) => void;
}) {
  return (
    <div className="company-breadcrumb" aria-label="Company journey">
      {chronologicalExperiences.map((experience, index) => (
        <div className="crumb-wrap" key={experience.id}>
          <button
            className={experience.id === activeJob ? "company-crumb active" : "company-crumb"}
            onClick={() => setActiveJob(experience.id)}
            style={{ "--accent": experience.accent } as React.CSSProperties}
            type="button"
          >
            <span className="company-logo" aria-hidden="true">
              <img
                alt=""
                src={experience.iconUrl}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <span>{experience.logo}</span>
            </span>
            <span className="crumb-label">
              <span>{experience.company}</span>
            </span>
          </button>
          {index < chronologicalExperiences.length - 1 ? (
            <span className="crumb-arrow" aria-hidden="true">
              ---&gt;
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function EducationStage() {
  return (
    <div className="education-stage">
      <div className="education-list">
        {education.map((item) => (
          <article className="education-row" key={item.title}>
            <div className="school-mark" aria-hidden="true">
              <img
                alt=""
                src={item.iconUrl}
                onError={(event) => {
                  event.currentTarget.remove();
                }}
              />
              <span>{item.mark}</span>
            </div>
            <div className="education-copy">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <div className="detail-row education-achievements">
                {item.details.map((detail) => (
                  <strong key={detail}>{detail}</strong>
                ))}
              </div>
            </div>
            <div
              className={item.start === item.end ? "education-date-rail single" : "education-date-rail"}
              aria-label={item.start === item.end ? item.start : `${item.start} to ${item.end}`}
            >
              <span>{item.start}</span>
              {item.start !== item.end ? (
                <>
                  <i aria-hidden="true" />
                  <span>{item.end}</span>
                </>
              ) : null}
              <small>{item.location}</small>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ContextPanel({
  activeExperience,
  activeSection,
}: {
  activeExperience: Experience;
  activeSection: SectionId;
}) {
  if (activeSection === "experience") {
    return (
      <div className="context-panel">
        <div className="context-head">
          <span className="eyebrow">Skills</span>
        </div>
        {skillGroups.map((group) => (
          <div className="side-skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="side-skill-list">
              {group.skills.map((skill) => (
                <span
                  className={activeExperience.tech.includes(skill) ? "skill-chip active" : "skill-chip"}
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (activeSection === "education") {
    return (
      <div className="context-panel">
      </div>
    );
  }
}

function monthsSince(start: Date, end: Date) {
  const months = (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();
  return Math.max(0, months);
}

function formatMonths(months: number) {
  const years = Math.floor(months / 12);
  const remaining = months % 12;
  return `${years}Y ${remaining}M`;
}

function FlowLines() {
  return (
    <svg className="flow-lines" viewBox="0 0 1440 1200" preserveAspectRatio="none" aria-hidden="true">
      <path d="M-90 206C155 64 278 359 518 211C763 60 868 131 1067 211C1259 288 1378 145 1520 78" />
      <path d="M-67 478C163 335 319 573 536 434C754 294 890 364 1088 453C1283 540 1377 430 1518 368" />
      <path d="M-107 843C91 682 314 798 510 716C702 636 885 696 1057 787C1256 893 1357 779 1530 699" />
      <path d="M130 1185C277 980 431 1088 606 993C799 888 943 974 1108 1055C1265 1131 1387 1059 1498 984" />
    </svg>
  );
}

export default App;
