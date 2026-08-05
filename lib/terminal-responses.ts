import { portfolio } from "./portfolio";

export type TerminalMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

const stackAnswer = [
  "Primary stack:",
  `• Frontend: ${portfolio.focus.join(", ")}`,
  "• Mobile: Flutter, Riverpod",
  "• Backend/APIs: Firebase, Firestore, Supabase, REST",
  "• Tooling: Git, Vercel, Firebase Hosting, AI-assisted dev",
].join("\n");

const availabilityAnswer = [
  `Status: AVAILABLE — ${portfolio.availability}.`,
  `Location: ${portfolio.locationShort}`,
  `Email: ${portfolio.email}`,
  `Phone: ${portfolio.phone}`,
].join("\n");

const recentProject = portfolio.projects[0];
const projectAnswer = [
  `Recent project: ${recentProject.name} (${recentProject.category})`,
  recentProject.description,
  `Tech: ${recentProject.technologies.join(", ")}`,
].join("\n");

const experienceAnswer = portfolio.experience
  .map((role) => `• ${role.title} @ ${role.company} (${role.location}) — ${role.period}`)
  .join("\n");

const resumeAnswer = [
  "$ cat resume.pdf",
  `File: ${portfolio.resume.downloadName}`,
  `View online → ${portfolio.resume.viewPath}`,
  `Download   → ${portfolio.resume.path}`,
].join("\n");

const helpAnswer = [
  "Available prompts:",
  "• stack / skills / tech",
  "• resume / cv / download resume",
  "• projects / work / built",
  "• experience / jobs / worked",
  "• available / hire / contact",
  "• whoami / about / intro",
  "• help",
].join("\n");

const defaultAnswer = [
  "Try asking about my stack, availability, projects, experience, or resume.",
  "Type `help` to see all prompts.",
  `Or email me at ${portfolio.email}.`,
].join("\n");

function normalize(input: string) {
  return input.trim().toLowerCase();
}

export function getTerminalResponse(input: string): string {
  const query = normalize(input);

  if (!query) return defaultAnswer;

  if (query === "help" || query.includes("commands") || query.includes("prompts")) {
    return helpAnswer;
  }

  if (
    query.includes("resume") ||
    query.includes("curriculum") ||
    /\bcv\b/.test(query)
  ) {
    return resumeAnswer;
  }

  if (query.includes("stack") || query.includes("tech") || query.includes("skills")) {
    return stackAnswer;
  }

  if (query.includes("available") || query.includes("hire") || query.includes("contact")) {
    return availabilityAnswer;
  }

  if (query.includes("project") || query.includes("work") || query.includes("built")) {
    return projectAnswer;
  }

  if (query.includes("experience") || query.includes("worked") || query.includes("job")) {
    return experienceAnswer;
  }

  if (query.includes("who") || query.includes("about") || query.includes("intro")) {
    return `${portfolio.summary}\n\n${portfolio.extendedSummary}`;
  }

  if (query.includes("hello") || query.includes("hi")) {
    return `Hey — I'm ${portfolio.firstName}. Ask me about my stack, projects, resume, or availability.`;
  }

  return defaultAnswer;
}

export const initialTerminalMessages: TerminalMessage[] = [
  {
    role: "system",
    content: `// system connected to ${portfolio.domain} — ask anything.`,
  },
];
