import React from "react";
import { Package, ShoppingBasket, Milk } from "lucide-react";

// ── Types ──────────────────────────────────────────────

export interface HeroStat {
  value: string;
  label: string;
}

export interface ProblemCard {
  icon: React.ReactNode;
  title: string;
  body: string;
}

export interface ToolCard {
  number: string;
  title: string;
  body: string;
}

export interface VideoDemoCard {
  id: string;
  eyebrow: string;
  title: string;
  posterImage: string;
  videoSrc?: string;
  vertical?: boolean;
}

export interface ImpactStat {
  before: string;
  after: string;
  label: string;
}

export interface ImpactTool {
  title: string;
  improvement: string;
  stats: ImpactStat[];
}

export interface TechDecision {
  title: string;
  body: React.ReactNode;
}

export interface RoadmapItem {
  title: string;
  body: string;
}

// ── Hero ───────────────────────────────────────────────

export const heroContent = {
  label: "Full-Stack Platform",
  title: "Sirenbase",
  subtitle:
    "Built for a working coffeehouse, this modular platform replaces fragmented daily workflows with fast, accountable digital operations.",
};

export const heroStats: HeroStat[] = [
  { value: "4.5", label: "months" },
  { value: "281", label: "commits" },
  { value: "226", label: "tests" },
  { value: "3", label: "tools" },
];

export const heroTechStack =
  "Next.js · React · TypeScript · Tailwind CSS · ShadCN/Radix · Flask · SQLAlchemy · PostgreSQL · JWT · Vercel + Render + Neon";

// ── The Problem ────────────────────────────────────────

export const problemIntro =
  "Working in a coffeehouse exposes daily processes that silently drain time and energy. Ordering, counting, and restocking rely on outdated, repetitive workflows — tasks that feel simple but stack up into constant friction.";

export const problemCards: ProblemCard[] = [
  {
    icon: <Package size={28} strokeWidth={1.5} className="text-stone-400" />,
    title: "Inventory Ordering",
    body: "Daily ordering lacks a reliable source of truth. Inventory changes throughout the day without shared visibility, forcing partners to compensate with time, repetition, and caution. What should be a straightforward decision becomes a recurring liability.",
  },
  {
    icon: <Milk size={28} strokeWidth={1.5} className="text-sky-400" />,
    title: "Milk Counting",
    body: "Daily milk counts rely on slow, manual processes that pile up frustration and errors. Partners track totals, carry numbers forward, and calculate orders by hand every day, turning a routine task into repetitive friction.",
  },
  {
    icon: <ShoppingBasket size={28} strokeWidth={1.5} className="text-emerald-400" />,
    title: "Display Restocking",
    body: "Daily restocking depends on repeated checks and back-and-forth trips, as missing items are easy to overlook. Partners spend time verifying what\u2019s needed instead of acting, turning a routine task into a slow, frustrating cycle.",
  },
];

// ── The Solution ───────────────────────────────────────

export const solutionArchitecture =
  "A Next.js frontend backed by a Flask REST API and PostgreSQL database. Partners log in once and access all three tools from a central dashboard. The dashboard doubles as an operational overview \u2014 surfacing milk count progress and time since the last restock so partners know what\u2019s done and what\u2019s overdue without opening each tool.";

export const toolCards: ToolCard[] = [
  {
    number: "01",
    title: "Inventory Tracking",
    body: "A shared, real-time inventory system that gives every partner immediate visibility into current stock. Items are identified by unique 4-digit codes written directly on them for fast physical lookup. A single search field queries across names, codes, and categories. Every add and remove is logged with ownership and timestamp, creating a persistent audit trail.",
  },
  {
    number: "02",
    title: "Milk Count",
    body: "A structured daily workflow that walks partners through each counting phase in sequence \u2014 no steps can be skipped, no math is done by hand. The system collects stock levels from multiple locations, handles all calculations automatically, and logs every completed session. Par levels are admin-configurable.",
  },
  {
    number: "03",
    title: "RTD&E Counting",
    body: "A guided restocking workflow that presents items one at a time, compares counts against par levels, and generates a pull list with exact quantities. Partners count what\u2019s on the display \u2014 the app tells them what to pull. Sessions expire after 30 minutes to prevent stale data from carrying over.",
  },
];

export const videoDemoCards: VideoDemoCard[] = [
  {
    id: "inventory",
    eyebrow: "Tool 01",
    title: "Inventory Tracking",
    posterImage: "/images/sirenbase/placeholders/Inventory-placeholder.png",
    videoSrc: "/video/inventory-demo.mp4",
    vertical: true,
  },
  {
    id: "milk-count",
    eyebrow: "Tool 02",
    title: "Milk Count",
    posterImage: "/images/sirenbase/placeholders/Milkcount-placeholder.png",
  },
  {
    id: "rtde",
    eyebrow: "Tool 03",
    title: "RTD&E Counting",
    posterImage: "/images/sirenbase/placeholders/Rtde-placeholder.png",
  },
  {
    id: "dashboard",
    eyebrow: "Admin",
    title: "Dashboard & Admin",
    posterImage: "/images/sirenbase/placeholders/admin-placeholder.png",
  },
];

// ── Impact ─────────────────────────────────────────────

export const impactIntro =
  "Every tool targets a specific daily bottleneck I experienced firsthand. The improvements below are based on the actual workflows I performed and timed against the original processes.";

export const impactTools: ImpactTool[] = [
  {
    title: "Inventory Tracking",
    improvement: "3x",
    stats: [
      { before: "2\u20133 trips", after: "0 trips", label: "to verify stock per order" },
      { before: "Uncertain", after: "Reliable", label: "order accuracy" },
      { before: "None", after: "Full log", label: "changes tracked" },
    ],
  },
  {
    title: "Milk Count",
    improvement: "4x",
    stats: [
      { before: "10\u201315 min", after: "< 3 min", label: "per daily count" },
      { before: "3 systems", after: "1 workflow", label: "steps to complete" },
      { before: "Manual", after: "Automated", label: "calculations" },
    ],
  },
  {
    title: "RTD&E Restocking",
    improvement: "3x",
    stats: [
      { before: "~5 min", after: "~2 min", label: "per restock cycle" },
      { before: "Repeat trips", after: "1 pass", label: "to restock" },
      { before: "None", after: "Restock cycles", label: "tracked" },
    ],
  },
];

// ── Technical Decisions ────────────────────────────────

export const techDecisionsIntro =
  "The architecture behind Sirenbase was shaped by one constraint: this platform needed to support multiple independent tools without any of them interfering with each other \u2014 and it needed to be built in a way where adding a fourth tool wouldn\u2019t require touching the first three.";

export const techDecisions: TechDecision[] = [
  {
    title: "Hub-and-Spoke Multi-Tool Architecture",
    body: (
      <>
        Every tool is isolated at every layer. The backend uses separate Flask
        Blueprints with prefixed routes (<code>/api/tracking/*</code>,{" "}
        <code>/api/milk-count/*</code>, <code>/api/rtde/*</code>). The database
        uses prefixed tables per tool (<code>tracking_items</code>,{" "}
        <code>milk_count_sessions</code>, <code>rtde_count_sessions</code>)
        sharing only a central <code>users</code> table. The frontend mirrors
        this with nested route trees under <code>/tools/</code>. Authentication,
        UI components, and the design system are shared — everything else is
        namespaced. This wasn&apos;t how the project started. Migration #3 renamed
        the original tables to add the <code>tracking_</code> prefix — the
        moment the architecture shifted from single-tool to multi-tool.
      </>
    ),
  },
  {
    title: "Design System as Documentation",
    body: (
      <>
        Before writing components, I wrote the rules they&apos;d follow. Six modular
        design documents define the system: tokens (OKLCh color space,
        typography, spacing), component patterns, dialog behaviors, layout
        structure, tool-specific UI characteristics, and accessibility standards.
        Performance budgets are defined (page load under 2s, 60fps animations).
        Touch targets are specified at 44px minimum with 8px gaps. Animation
        durations are standardized across four tiers. The design system isn&apos;t a
        style guide — it&apos;s the spec sheet the entire frontend was built against.
      </>
    ),
  },
  {
    title: "226 Tests Across the Full API",
    body: (
      <>
        Testing wasn&apos;t added after the fact — it was a requirement defined in the
        project&apos;s development guidelines. Features without tests are explicitly
        marked incomplete. The 226 backend tests cover authentication, CRUD
        operations, session state transitions, calculation accuracy, role-based
        access enforcement, and edge cases like expired sessions and duplicate
        entries. Every test runs against a real database with full isolation —{" "}
        <code>create_all()</code> and <code>drop_all()</code> bracketing per
        test, no shared state, no interdependencies.
      </>
    ),
  },
  {
    title: "Debounced Auto-Save with Optimistic Updates",
    body: (
      <>
        The RTD&amp;E counting interface updates on every tap — partners are
        counting items quickly and shouldn&apos;t wait for network round-trips.
        Counts save automatically on a 500ms debounce, with the UI updating
        optimistically before the API confirms. A saving indicator displays for a
        minimum of 800ms so it doesn&apos;t flash and disappear. If the save fails,
        the count reverts. Arrow keys navigate between items. The goal was an
        interface that feels instant even on a slow connection.
      </>
    ),
  },
];

export const techStackBadges = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "ShadCN / Radix",
  "Flask",
  "SQLAlchemy",
  "PostgreSQL",
  "JWT",
  "Vercel",
  "Render",
  "Neon",
];

// ── Built with AI ──────────────────────────────────────

export const aiNarrative = [
  "Sirenbase was built over 4.5 months and 281 commits using Claude Code as a development and research partner throughout the process.",
  "I drove every product and architecture decision \u2014 which tools to build, how the workflows should feel, how the database should be structured, and what standards the codebase should follow. That direction lives in the project\u2019s CLAUDE.md \u2014 a 500+ line document defining architecture rules, code style, testing requirements, and documentation standards. It\u2019s both the instruction set that guided every implementation session and an artifact of the workflow itself.",
  "Claude Code accelerated the implementation: generating boilerplate, writing test suites, building out endpoints, and iterating on components faster than I could alone. Directing AI effectively is its own skill \u2014 knowing what to ask for, how to validate the output, and when to override it. The architecture, the testing discipline, the documentation, and the product decisions are mine. The velocity is the partnership.",
];

export interface FileTreeNode {
  name: string;
  description?: string;
  children?: FileTreeNode[];
}

export const aiFileTree: FileTreeNode[] = [
  {
    name: "Design/",
    children: [
      { name: "README.md", description: "Read before all UI work" },
      { name: "tokens.md", description: "Colors, typography, spacing" },
      { name: "components.md", description: "Buttons, cards, forms" },
      { name: "dialogs.md", description: "Modal/dialog patterns" },
      { name: "layout.md", description: "Page structure, scrolling" },
      { name: "tool-specific.md", description: "Per-tool UI" },
      { name: "tool-redesign-guide.md", description: "Redesign workflow" },
      { name: "accessibility.md", description: "WCAG, performance" },
    ],
  },
  {
    name: "Planning/",
    children: [
      { name: "PLANNING.md", description: "Multi-tool system design" },
      { name: "InventoryTracking.md", description: "Tool 1 spec" },
      { name: "MilkCount.md", description: "Tool 2 spec" },
      { name: "RTDE.md", description: "Tool 3 spec" },
      { name: "Deployment.md", description: "Infrastructure plan" },
    ],
  },
  {
    name: "ChangeLog/",
    children: [
      { name: "MULTI_TOOL_ARCHITECTURE.md" },
      { name: "CATEGORY_FIELD_DECISION.md" },
      { name: "DOCKER_DECISION.md" },
      { name: "SQLITE_TESTING_CONFIG.md" },
      { name: "AUTOCOMPLETE_FEATURE.md" },
      { name: "ARCHITECTURAL_CHANGES_RULE.md" },
    ],
  },
  {
    name: "frontend/",
    children: [
      { name: "CLAUDE.md", description: "Frontend rules (584 lines)" },
    ],
  },
  {
    name: "backend/",
    children: [
      { name: "CLAUDE.md", description: "Backend rules (907 lines)" },
    ],
  },
  { name: "TASKS.md", description: "Organized by tool and phase" },
  { name: "BUGS.md", description: "All bugs with IDs and status" },
  { name: "CLAUDE.md", description: "Project rules (566 lines)" },
];

// ── Roadmap ────────────────────────────────────────────

export const roadmapItems: RoadmapItem[] = [
  {
    title: "IMS Integration for Milk Count",
    body: "The milk count workflow currently requires partners to manually enter on-order quantities from the store\u2019s Inventory Management System. With direct IMS access, those numbers would populate automatically \u2014 removing a manual step and eliminating transcription errors. Combined with the existing count data and par levels, the system could then calculate and pre-fill the final milk order automatically.",
  },
  {
    title: "CI/CD Pipeline",
    body: "The 226 tests exist but run manually. A GitHub Actions pipeline would gate every push to main and enforce the testing discipline that\u2019s currently a convention into an automated requirement.",
  },
];

// ── Footer ─────────────────────────────────────────────

export const footerSignoff =
  "Built to solve real problems I watched happen every day. If you want to talk about it, I\u2019d love to hear from you.";
