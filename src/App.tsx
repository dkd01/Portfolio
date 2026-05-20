import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Mail,
  Phone,
  Trophy,
} from "lucide-react";

type SectionId = "experience" | "education" | "achievements" | "links";
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
  metrics: string[];
  tech: string[];
};

type SkillGroup = {
  title: string;
  skills: string[];
};

const sections: Array<{ id: SectionId; label: string }> = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "links", label: "Links" },
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
    subtitle: "B.Tech, Information Technology",
    date: "2019 - 2023",
    details: ["CGPA 8.01", "JEE Mains Rank 5574", "JEE Mains 99.53%"],
  },
  {
    title: "Sardar Patel Public School, Bhopal",
    subtitle: "12th",
    date: "2018 - 2019",
    details: ["Grade 89.8%", "BITSAT 345/450"],
  },
  {
    title: "St. Joseph's Co-Ed School",
    subtitle: "10th",
    date: "2016 - 2017",
    details: ["Grade 10 CGPA"],
  },
];

const achievements = [
  "Sole owner for PPI wallet for 3 straight months.",
  "Solved 1000+ coding questions across LeetCode, InterviewBit, Codeforces, and other platforms.",
  "Mentored 300+ students for 2 years at AccioJob.",
  "JEE Mains rank 5574, 99.53 percentile, and BITSAT 345/450.",
];

const links = [
  { label: "Email", href: "mailto:aryandhakad1@gmail.com", icon: Mail },
  { label: "Phone", href: "tel:+919826098115", icon: Phone },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aryandhakad/", icon: ExternalLink },
  { label: "Resume", href: "/resume/Aryan_Dhakd_Resume_2026_AD1.pdf", icon: Download, download: true },
  { label: "GitHub", href: "https://github.com/aryanDhakad", icon: GitBranch },
  { label: "LeetCode", href: "https://leetcode.com/darkkoder1", icon: Code2 },
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
            {activeSection === "achievements" && <AchievementStage />}
            {activeSection === "links" && <LinksStage />}
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
              setActiveSection={setActiveSection}
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
          <ul>
            {activeExperience.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
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
      <div className="stage-topline">
        <div>
          <span className="eyebrow">Preparation + Education</span>
          <h2>Education Timeline</h2>
        </div>
        <GraduationCap size={32} strokeWidth={1.4} />
      </div>
      <div className="education-list">
        {education.map((item) => (
          <article className="education-row" key={item.title}>
            <div className="school-mark" aria-hidden="true">
              {item.title.includes("Allahabad") ? "IIIT" : item.subtitle}
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <span>{item.date}</span>
              <div className="detail-row">
                {item.details.map((detail) => (
                  <strong key={detail}>{detail}</strong>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function AchievementStage() {
  return (
    <div className="achievement-stage">
      <div className="stage-topline">
        <div>
          <span className="eyebrow">Highlights</span>
          <h2>Achievements</h2>
        </div>
        <Trophy size={32} strokeWidth={1.4} />
      </div>
      <div className="achievement-grid">
        {achievements.map((achievement) => (
          <article className="achievement-card" key={achievement}>
            {achievement}
          </article>
        ))}
      </div>
    </div>
  );
}

function LinksStage() {
  return (
    <div className="links-stage">
      <div className="stage-topline">
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Links</h2>
        </div>
        <BriefcaseBusiness size={32} strokeWidth={1.4} />
      </div>
      <div className="link-grid">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a href={link.href} key={link.label} rel="noreferrer" target={link.href.startsWith("http") ? "_blank" : undefined}>
              <Icon size={18} strokeWidth={1.8} />
              {link.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

function ContextPanel({
  activeExperience,
  activeSection,
  setActiveSection,
}: {
  activeExperience: Experience;
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
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
        <div className="context-head">
          <span className="eyebrow">Education</span>
          <strong>Prep Stats</strong>
        </div>
        <InfoStat value="5574" label="JEE Mains rank" />
        <InfoStat value="8.01" label="IIIT Allahabad CGPA" />
        <InfoStat value="345/450" label="BITSAT" />
      </div>
    );
  }

  if (activeSection === "achievements") {
    return (
      <div className="context-panel">
        <div className="context-head">
          <span className="eyebrow">Highlights</span>
          <strong>Quick Read</strong>
        </div>
        <InfoStat value="1000+" label="coding questions" />
        <InfoStat value="300+" label="students mentored" />
        <InfoStat value="3 months" label="PPI wallet ownership" />
      </div>
    );
  }

  return (
    <div className="context-panel">
      <div className="context-head">
        <span className="eyebrow">Links</span>
        <strong>Primary</strong>
      </div>
      {links.map((link) => (
        <button className="context-link" key={link.label} onClick={() => setActiveSection("links")} type="button">
          {link.label}
        </button>
      ))}
    </div>
  );
}

function InfoStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="info-stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
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

function formatMonthYear(date: Date) {
  const shortYear = String(date.getFullYear()).slice(-2);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  }).replace(",", "") + ` '${shortYear}`;
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
