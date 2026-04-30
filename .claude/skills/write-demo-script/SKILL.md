---
name: write-demo-script
description: Write a voiceover script for a SirenBase demo video. Use when creating or rewriting demo scripts for the portfolio video series. Follows strict narration principles that prioritize root-cause framing and design reasoning over surface-level UI descriptions.
argument-hint: [tool-name]
disable-model-invocation: true
allowed-tools: Read, Grep, Glob, Write, Edit
---

# SirenBase Demo Script Writing

You are writing a voiceover script for a SirenBase demo video. The tool being demoed is: **$ARGUMENTS**

Before writing, read the following reference files:
- `/Users/johnjohn/Development/Portfolio/Sirenbase-build/demos/InventoryTrackingDemo.md` — for document structure (header, numbered scenes, production notes, checklist)
- `/Users/johnjohn/Development/Portfolio/Sirenbase-build/demos/MilkCountDemo.md` — for narration tone and voice (this is the gold standard for how voiceover lines should read)
- `/Users/johnjohn/Development/Portfolio/Sirenbase-build/overview.md` — for project context, problem framing, and impact statements
- The relevant feature documentation in `/Users/johnjohn/Development/Projects/SirenBase/Planning/` — for technical details, UI states, and workflow specifics

---

## The One Rule

**The voiceover narrates at the level of root causes and design reasoning — never at the level of UI actions or surface-level process descriptions.**

The screen recording shows the interface. The viewer can see the counters, the buttons, the tables. The voiceover explains **what they're actually looking at** — the structural problem being solved and the design decisions that solve it.

---

## Problem Framing: Name the Root Cause, Not the Symptoms

The biggest mistake is listing what a broken process looks like — the manual steps, the paper, the repeated trips — and expecting the viewer to feel the weight. Someone who hasn't lived through that workflow won't understand why those things are bad. They sound like a normal process. Maybe even a reasonable one.

**WRONG — surface-level symptoms:**
> "Partners counted milk across multiple fridges, carried totals forward on paper, and calculated orders by hand."

This describes what people did. It doesn't explain what's actually wrong. A viewer thinks: "So? That sounds fine."

**RIGHT — root cause:**
> "When a daily workflow runs without shared state, small inefficiencies repeat. When that same workflow lives inside a single system, those inefficiencies disappear — and automation becomes possible."

This names the **structural gap** — no shared state — and makes the consequences self-evident. By naming the root cause, the solution becomes obvious before the viewer even sees it.

**Test:** Would someone who has never done this task understand why the current process is broken? If the answer depends on the viewer imagining what it feels like, the framing is too shallow.

---

## Solution Framing: Describe Principles, Not Features

When narrating what the tool does, don't name UI elements or explain interactions. Describe the **design principle** the viewer is watching in action.

**WRONG — feature description:**
> "Morning count carries last night's back-of-house numbers forward automatically. The partner either recounts current BOH — and the system calculates what was delivered — or enters the delivery count directly."

This is a product tour. It tells the viewer what the buttons do, which they can already see.

**RIGHT — design principle:**
> "The next phase builds directly on what already exists. Previous state becomes the baseline, and the system derives what changed — removing the need for manual reconciliation."

This describes **state propagation** — a principle that applies whether it's milk, inventory, or anything else with sequential state.

**Test:** Does this sentence describe a specific screen, or a principle that the screen demonstrates? If you can swap the domain and the sentence still holds, you're at the right level.

---

## Generalizable Language

Every line should be valid beyond the specific tool being shown. This is a portfolio piece — the viewer should see engineering thinking, not just a working app.

**Too specific:**
> "Back-of-house uses the same interface — only the location changes."

**Generalizable:**
> "As context changes, the structure stays consistent. State carries forward without reinterpretation or rework."

**For each scene, ask:** "What engineering principle is being demonstrated right now?" Write the narration about that principle. Let the screen recording handle the specifics.

---

## Closing Lines

The final line does two things:

1. **State the measurable outcome** — briefly, as proof the design works
2. **Point forward** — frame the implementation as a foundation, not a finished product

**WRONG:**
> "The full count takes under two minutes — down from ten to fifteen. A session state machine enforces every step in sequence."

Ends on an implementation detail.

**RIGHT:**
> "The full workflow completes in under two minutes. More importantly, it establishes a foundation — where calculations disappear today, and full automation becomes achievable tomorrow."

The time stat proves the design works. The closing reframes the tool as a stepping stone — signaling architectural vision.

---

## Scene Writing Process

For each scene:

1. **What is on screen?** → Write the `[SCREEN]` direction (factual, light — UI states and transitions only)
2. **What engineering principle does this screen demonstrate?** → (State propagation? Input isolation? Derived computation? Structural consistency?)
3. **Write the voiceover about the principle, not the screen**
4. **Check:** Would someone outside this domain understand? Does it describe a principle or a feature? Could the viewer already see what you're saying?

---

## Tone

- **Calm and precise.** Not salesy, not excited.
- **Declarative.** State what the system does and why.
- **No imperative phrasing.** Never "click here", "tap this", "notice how."
- **No hedging.** Don't say "helps with" or "makes it easier to." State the structural change directly.
- **Portfolio voice.** An engineer explaining design decisions to other engineers. Not a product marketer, not a tutorial narrator.

---

## Common Mistakes

| Mistake | Why it fails | Fix |
|---|---|---|
| Listing manual steps from the old process | Viewer hasn't lived it — symptoms don't land | Name the structural gap that causes all the symptoms |
| Describing what the UI shows | Redundant with screen recording | Describe the principle the UI demonstrates |
| Naming buttons, counters, or screen elements | Turns narration into a product tour | Talk about what the system does architecturally |
| Domain-specific jargon without abstraction | Limits narration to people who know the domain | "State carries forward" not "last night's BOH numbers carry forward" |
| Ending on a feature or tech stack | Closes on implementation, not vision | End on where the design leads |
| Making the solution sound like more work than the problem | Happens when you describe process steps | Frame solution as removal of friction, not addition of steps |

---

## Document Structure

Output the script as a markdown file with these sections:

1. **Header** — Tool name, target length (~80-90s), series position, audience
2. **Script** — Numbered scenes, each with:
   - `### Scene N — Title (~Xs)`
   - `**[SCREEN: ...]**` direction
   - `> "Voiceover text"`
3. **Production Notes** — Demo data, recording setup table, voiceover guidance, multi-phase recording tips if applicable
4. **Checklist** — Pre-recording preparation items

Target **~200 words** of voiceover for an 80-90 second video at conversational pace (~138-150 wpm).

No CTA on any video except the final one in the series.
