// All site content lives here. Edit this file to update the page;
// components only handle layout.

export const profile = {
  name: "Jing Peng",
  role: "Software Engineer",
  tagline: "Backend · Distributed Systems · DevOps",
  summary:
    "I build backend services and the tooling around them: APIs, event-driven systems, and CI/CD pipelines. M.S. in Computer Science from UC Santa Barbara.",
  location: "Santa Barbara, CA",
  photo: "/img/Jing_Peng.jpg",
  // TODO: drop a PDF into public/ and set e.g. "/resume.pdf"
  resume: "",
};

export const links = [
  { label: "GitHub", href: "https://github.com/jingpeng7527" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jingpeng7527" },
  { label: "Email", href: "mailto:jingpeng7527@gmail.com" },
];

export type Link = { label: string; href: string };

export type Experience = {
  title: string;
  org: string;
  href?: string;
  period: string;
  // the project / course this role centered on
  focus?: string;
  links?: Link[];
  // TODO: bullet points intentionally left empty for now
  points?: string[];
  stack?: string[];
};

export const experience: Experience[] = [
  {
    title: "Research Software Developer",
    org: "Bionic Vision Lab, UC Santa Barbara",
    href: "https://bionicvisionlab.org/research/mouse-visual-navigation/",
    period: "Jul 2024 – Dec 2025",
    focus: "Robust Visual Foraging Challenge @ NeurIPS 2025",
    links: [
      { label: "Website", href: "https://robustforaging.github.io/" },
      { label: "Code", href: "https://github.com/jingpeng7527/mouse-vs-ai-foraging-unity" },
      { label: "Paper", href: "https://arxiv.org/abs/2509.14446" },
    ],
    stack: ["C#", "Unity", "ML-Agents", "Python", "PyTorch", "ONNX"],
  },
  {
    title: "Teaching Assistant",
    org: "UC Santa Barbara",
    period: "Apr 2023 – Sep 2024",
    focus: "CS 156: Advanced Applications Programming",
    links: [
      { label: "Course", href: "https://ucsb-cs156.github.io/m23/syllabus" },
      { label: "GitHub", href: "https://github.com/ucsb-cs156-f23" },
    ],
    stack: ["Spring Boot", "React", "PostgreSQL", "GitHub Actions", "JaCoCo"],
  },
  {
    title: "Software Development Engineer Intern",
    org: "Neusoft",
    period: "May 2021 – Aug 2021",
    focus: "Neusoft Profit Management System",
    stack: ["Java", "Spring Boot", "Spring Cloud Gateway", "Kafka", "Redis", "MySQL"],
  },
];

export type Project = {
  name: string;
  period?: string;
  context?: string;
  // TODO: descriptions intentionally left empty for now
  description?: string;
  stack: string[];
  links: Link[];
};

export const projects: Project[] = [
  {
    name: "Governed Computer-Use Automation",
    period: "Sep 2026 – Present",
    stack: ["Python", "Playwright", "Pydantic", "FastAPI", "SQLite"],
    links: [{ label: "GitHub", href: "https://github.com/jingpeng7527/computer_use_automation" }],
  },
  {
    name: "Tab Agent",
    period: "Mar 2026 – Present",
    stack: ["JavaScript", "Chrome Extension (MV3)", "Groq LLM API"],
    links: [{ label: "GitHub", href: "https://github.com/jingpeng7527/chrome_manager" }],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Java", "Python", "SQL (PostgreSQL / MySQL)", "TypeScript / JavaScript", "C / C++"] },
  {
    group: "Backend & Web",
    items: ["Spring Boot / Cloud", "Hibernate / JPA", "FastAPI", "React", "Node.js", "Vue.js", "Android (Kotlin)", "JUnit", "JaCoCo", "Pytest"],
  },
  {
    group: "Infra & Observability",
    items: ["AWS", "Docker", "Redis", "Kafka", "RabbitMQ", "Nacos", "Prometheus", "Grafana", "Datadog", "Splunk"],
  },
  {
    group: "Automation & Tools",
    items: ["Playwright", "Pydantic", "PyTorch", "Unity ML-Agents", "NumPy", "Git", "Maven", "Postman"],
  },
];

export const education = [
  {
    degree: "M.S. in Computer Science",
    school: "University of California, Santa Barbara",
    period: "Sep 2022 – Sep 2025",
  },
  {
    degree: "B.E. in Software Engineering",
    school: "Northeastern University, Shenyang, China",
    period: "Sep 2018 – Jun 2022",
  },
];
