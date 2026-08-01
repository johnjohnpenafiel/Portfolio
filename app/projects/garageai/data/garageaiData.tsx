// ── Types ──────────────────────────────────────────────

export interface StaffMember {
  role: string;
  model: string;
  duty: string;
}

export interface PipelineStep {
  number: string;
  title: string;
  agent: string;
  body: string;
  footnote?: string;
}

export interface CadenceColumn {
  day: string;
  format: string;
  budget: string;
  body: string;
}

export interface SurfaceFigure {
  figure: string;
  caption: string;
  src: string;
  alt: string;
}

export interface QueueRow {
  date: string;
  title: string;
  pov: number;
  format: number;
  grounding: number;
  passed: boolean;
}

export interface LedgerEntry {
  date: string;
  tag?: "INCIDENT" | "MIGRATION";
  title: string;
  body: string;
}

export interface ReceiptLine {
  item: string;
  detail: string;
  amount: string;
}

// ── Hero ───────────────────────────────────────────────

export const heroTitle = "The Garage AI";

export const heroSubtitle =
  "An automated publication covering AI in car dealerships — researched, written, judged, illustrated, and published by a pipeline, three mornings a week. Nothing on it pretends to be handwritten. I built the newsroom; the newsroom does the writing.";

export const heroStats = [
  { value: "229", label: "commits" },
  { value: "243", label: "tests" },
  { value: "5", label: "AI systems" },
  { value: "3", label: "drops / week" },
  { value: "0", label: "human bylines" },
];

export const heroLinks = {
  live: "https://www.thegarageai.com/",
  source: "https://github.com/johnjohnpenafiel/AI-Blog",
};

// ── The Masthead (staff box) ───────────────────────────

export const staffIntro =
  "Every newsroom has a masthead. This one just doesn't have any people on it. Each editorial job is held by a different model, chosen for that job's shape — and each one can fail without taking the paper down with it.";

export const staffBox: StaffMember[] = [
  {
    role: "The Researcher",
    model: "Perplexity Sonar",
    duty: "Runs six intent-tuned news queries per issue, one per dealership department, and returns raw articles with citations.",
  },
  {
    role: "The Curator",
    model: "Claude Haiku 4.5",
    duty: "Reads everything the researcher brings back, throws out press releases and vendor noise, and scores what's left by how much an operator would care.",
  },
  {
    role: "The Writer",
    model: "Claude Sonnet 5",
    duty: "Drafts every dispatch against a strict format spec — title, slug, summary, body, tags, sources — via structured tool-calling. No freeform output.",
  },
  {
    role: "The Editor",
    model: "Claude Haiku 4.5",
    duty: "Judges each draft against its own source excerpts — point of view, format, grounding, scored 0–2 each. The grades are stored on the post, permanently.",
  },
  {
    role: "The Art Director",
    model: "Claude Opus 4.8",
    duty: "Turns each story's tension into a symbolic image brief — rotating metaphor devices, never a literal depiction, never stock photography.",
  },
  {
    role: "The Illustrator",
    model: "Recraft V4.1",
    duty: "Renders the cover from the art director's brief in the publication's orange-forward palette.",
  },
  {
    role: "The Pressman",
    model: "APScheduler",
    duty: "Runs the presses Monday, Thursday, and Friday at 8:00 AM sharp. Doesn't negotiate.",
  },
];

export const staffSignoff =
  "Human staff: one operator, standing off to the side with an accept and a reject button.";

// ── The Pipeline ───────────────────────────────────────

export const pipelineIntro =
  "Every issue is one unattended run through six stages. The design constraint that shaped all of them: no stage is allowed to crash the paper. The classifier fails open, the judge and the illustrator fail soft, and a thin news week gets skipped — never padded.";

export const pipelineSteps: PipelineStep[] = [
  {
    number: "01",
    title: "Research",
    agent: "Perplexity Sonar",
    body: "Six news-intent queries hit Perplexity's search endpoint — one HTTP call per dealership department, so every article's section is known by attribution. A deterministic blocklist drops PR wires and social posts before any model sees them.",
    footnote: "dedup by URL · anti-repetition vs. all prior citations",
  },
  {
    number: "02",
    title: "Curate",
    agent: "Claude Haiku 4.5",
    body: "A classifier separates news from promotion and scores each story's operator-importance from 0 to 2. If the classifier errors, it fails open — a bad filter shouldn't kill an issue.",
    footnote: "fails open",
  },
  {
    number: "03",
    title: "Select",
    agent: "deterministic code",
    body: "Stories cluster by section, and sections compete: high-importance count, summed importance, publisher breadth, cluster size. No section runs twice in a row. If no cluster clears the three-article bar, the issue is skipped entirely.",
    footnote: "thin weeks are skipped, not padded",
  },
  {
    number: "04",
    title: "Write & Judge",
    agent: "Claude Sonnet 5 → Claude Haiku 4.5",
    body: "Sonnet drafts the dispatch against the day's format spec with the operator-first POV baked into the prompt. Then a Haiku judge grades the draft against its own sources — POV, format, grounding — and the scores are persisted on the post and shown in the dashboard.",
    footnote: "eval fails soft · scores stored forever",
  },
  {
    number: "05",
    title: "Illustrate",
    agent: "Claude Opus 4.8 → Recraft V4.1",
    body: "Opus reads the finished piece and writes a symbolic image brief — a rotating metaphor device against a rotating backdrop, never a literal scene. Recraft renders it. If either fails, the post ships with a placeholder instead of dying.",
    footnote: "fails soft → placeholder",
  },
  {
    number: "06",
    title: "Publish",
    agent: "APScheduler",
    body: "In auto mode the finished post goes straight to the live site. In approve-only mode it waits in the review queue for the one human in the building. A one-minute interval job flips scheduled posts live the moment their time passes.",
    footnote: "auto or approve-only · cron owns the calendar",
  },
];

// ── The Cadence ────────────────────────────────────────

export const cadenceIntro =
  "The day of the week decides the format, and the format decides the prompt. Same pipeline, three different shapes of writing.";

export const cadenceColumns: CadenceColumn[] = [
  {
    day: "Monday",
    format: "The Brief",
    budget: "200–400 words",
    body: "A Smart-Brevity memo: what happened, why an operator should care, what to do about it. Built to be read standing up, between customers.",
  },
  {
    day: "Thursday",
    format: "The Deep Dive",
    budget: "600–900 words",
    body: "A multi-source synthesis of the week's most important cluster — the piece that connects vendor claims to what actually changes on the lot.",
  },
  {
    day: "Friday",
    format: "The Roundup",
    budget: "±500 words",
    body: "The only issue that never touches the news wire. It reads the week's own published dispatches back out of the database and writes the recap.",
  },
];

// ── The Two Surfaces ───────────────────────────────────

export const surfacesIntro =
  "The product is two rooms. The Stage is the public paper — print-broadsheet-meets-terminal, one dark theme, no light mode, ever. The Cockpit is the admin dashboard where the operator watches the machine work: pipeline status, the review queue, and every post's judge scores on its record.";

export const stageFigures: SurfaceFigure[] = [
  {
    figure: "fig. 01",
    caption: "The masthead — every issue stamped with volume, number, and the next drop time",
    src: "/images/garageai/site/home-masthead.png",
    alt: "The Garage AI homepage masthead with orange wordmark and editor's note",
  },
  {
    figure: "fig. 02",
    caption: "Featured and latest dispatches, each wearing a cover the art director invented",
    src: "/images/garageai/site/featured.png",
    alt: "Featured post band with symbolic AI-generated cover art",
  },
  {
    figure: "fig. 03",
    caption: "The archive as a filterable ledger — hover floods a row magenta",
    src: "/images/garageai/site/index-rows.png",
    alt: "News index rows with date, title, and filters by format and section",
  },
  {
    figure: "fig. 04",
    caption: "A dispatch page — metadata rail, sources block, symbolic cover",
    src: "/images/garageai/site/post-cover.png",
    alt: "Post page with metadata sidebar and AI-generated cover illustration",
  },
];

export const cockpitIntro =
  "No screenshots of the Cockpit — it lives behind a login. But the review queue looks like this: every AI draft arrives already graded by the editor, and the operator's whole job is three buttons.";

export const queueRows: QueueRow[] = [
  {
    date: "2026.7.20",
    title: "Cars24's AI Answers the Phone 1 Million Minutes a Month",
    pov: 2,
    format: 2,
    grounding: 2,
    passed: true,
  },
  {
    date: "2026.7.17",
    title: "Prices Are Up, Discounts Are Back, and Everyone's Suddenly an AI Company",
    pov: 2,
    format: 2,
    grounding: 1,
    passed: true,
  },
  {
    date: "2026.7.16",
    title: "Voice AI Is Winning the Dealership AI Race",
    pov: 1,
    format: 2,
    grounding: 1,
    passed: false,
  },
];

// ── The Decision Ledger ────────────────────────────────

export const ledgerIntro =
  "The repository keeps a dated decision log the same way the paper keeps sources. A few entries that shaped the build:";

export const ledgerEntries: LedgerEntry[] = [
  {
    date: "2026.05",
    title: "Taxonomy as validated text, not database enums",
    body: "Sections, formats, and story types are plain columns validated in application code — deliberately not Postgres ENUMs. A new category graduates with a one-line code edit instead of a migration. The schema stays boring; the editorial vocabulary stays free.",
  },
  {
    date: "2026.05",
    title: "Three layers of auth that fail closed",
    body: "Next.js middleware guards the dashboard pages, a per-route proxy verifies the NextAuth session and attaches a shared backend secret, and FastAPI enforces that secret on every route. If the secret is missing, the backend returns 500 — it never quietly becomes an open API.",
  },
  {
    date: "2026.06",
    title: "Measurement is first-class",
    body: "Every post carries its full classification and its judge scores as permanent columns — not logs, record. \"Which kinds of posts hold up?\" is a query, not an archaeology project.",
  },
  {
    date: "2026.06 – 07",
    tag: "INCIDENT",
    title: "The paper silently stopped printing for two weeks",
    body: "Neon's autosuspend killed pooled database connections between runs, and every scheduled issue from June 18 to July 2 died on a stale socket — the cron fired, the run failed, nothing crashed loudly enough to notice. The fix was one line: pool_pre_ping=True, so every connection is tested before it's trusted. The outage and the post-mortem are documented in the repo like any other decision.",
  },
  {
    date: "2026.07",
    tag: "MIGRATION",
    title: "The staff writer got retired mid-season",
    body: "Anthropic retired claude-sonnet-4 and the writer started returning 404s. Because every model sits behind its own service seam, the swap to Sonnet 5 was a config-level change — the newsroom noticed nothing.",
  },
];

// ── Colophon / Receipt ─────────────────────────────────

export const receiptIntro =
  "The entire newsroom — hosting, database, and the whole editorial staff — runs on about nine dollars a month.";

export const receiptLines: ReceiptLine[] = [
  { item: "Vercel", detail: "the Stage, frontend hosting", amount: "$0" },
  { item: "Render", detail: "FastAPI + the cron, always-on", amount: "$7" },
  { item: "Neon", detail: "PostgreSQL, 3 GB", amount: "$0" },
  { item: "Anthropic", detail: "writer · editor · art director", amount: "~$1" },
  { item: "Perplexity + fal.ai", detail: "researcher · illustrator", amount: "~$1" },
];

export const receiptTotal = "≈ $9 / month";

export const techStackLine =
  "Next.js 16 · React 19 · TypeScript · Tailwind v4 · NextAuth · FastAPI · SQLAlchemy · Alembic · PostgreSQL · APScheduler · Anthropic SDK · Perplexity Sonar · fal.ai · Vitest · pytest";

export const footerSignoff =
  "Sirenbase was me building software for a place I worked. The Garage AI is me building a machine that does the work — then standing back and watching it publish. If you want to talk about pipelines, prompts, or papers that write themselves, I'd love to hear from you.";
