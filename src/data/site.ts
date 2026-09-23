// All site content lives here. Edit this file to update the page;
// components only handle layout.

export const profile = {
  name: "Iris Jing Peng",
  role: "Software Engineer",
  // TODO: tune the headline to the roles you're targeting
  tagline: "Backend · ML Infrastructure · DevOps",
  summary:
    "I build the systems that make research and products run: training infrastructure, data pipelines, and reproducible environments. M.S. in Computer Science from UC Santa Barbara.",
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

export type Experience = {
  title: string;
  org: string;
  href?: string;
  period: string;
  points: string[];
  stack?: string[];
};

export const experience: Experience[] = [
  {
    title: "Graduate Research Assistant",
    org: "Bionic Vision Lab, UC Santa Barbara",
    href: "https://bionicvisionlab.org/",
    period: "2022 – 2025",
    points: [
      "Built the core training infrastructure for the Mouse vs AI: Robust Visual Foraging Competition @ NeurIPS 2025.",
      "Integrated Unity ML-Agents with custom environments to create embodied reinforcement learning tasks.",
      "Packaged environments into standalone, cross-platform executables so participants could train and evaluate agents under reproducible conditions.",
    ],
    stack: ["Python", "C#", "Unity", "ML-Agents", "Docker"],
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: "Mouse vs AI: Robust Visual Foraging",
    description:
      "NeurIPS 2025 benchmark competition bridging biological and artificial vision. I built the Unity + ML-Agents training environments and the pipeline participants used to train and submit agents.",
    stack: ["Unity", "ML-Agents", "Python", "C#"],
    links: [{ label: "Website", href: "https://robustforaging.github.io/" }],
  },
  // TODO: add 2–5 more projects (name, one-line impact, stack, repo/demo links)
];

// TODO: placeholder list — keep only what you would be comfortable being interviewed on
export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "C#", "TypeScript", "SQL"] },
  { group: "Backend & Infra", items: ["Docker", "CI/CD", "Linux", "REST APIs"] },
  { group: "ML", items: ["PyTorch", "Reinforcement Learning", "Unity ML-Agents"] },
];

export const education = [
  {
    degree: "M.S. in Computer Science",
    school: "University of California, Santa Barbara",
    period: "2022 – 2025",
  },
  {
    degree: "B.Eng. in Software Engineering",
    school: "Northeastern University, China",
    period: "2018 – 2022",
  },
];
