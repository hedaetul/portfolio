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

const defaultAnswer = [
  "Try asking about my stack, availability, projects, or experience.",
  `Or email me at ${portfolio.email}.`,
].join("\n");

function normalize(input: string) {
  return input.trim().toLowerCase();
}

export function getTerminalResponse(input: string): string {
  const query = normalize(input);

  if (!query) return defaultAnswer;

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
    return `Hey — I'm ${portfolio.firstName}. Ask me about my stack, projects, or availability.`;
  }

  return defaultAnswer;
}

export const initialTerminalMessages: TerminalMessage[] = [
  {
    role: "system",
    content: `// system connected to ${portfolio.domain} — ask anything.`,
  },
];
