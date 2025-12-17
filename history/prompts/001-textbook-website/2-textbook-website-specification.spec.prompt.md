---
id: 2
title: Textbook Website Specification
stage: spec
date: 2025-12-17
surface: agent
model: Claude Sonnet 4.5
feature: 001-textbook-website
branch: 001-textbook-website
user: user
command: /sp.specify
labels: [specification,textbook,frontend,docusaurus,ai-robotics]
links:
  spec: specs/001-textbook-website/spec.md
  ticket: null
  adr: null
  pr: null
files:
 - specs/001-textbook-website/spec.md
 - specs/001-textbook-website/checklists/requirements.md
tests:
 - none
---

## Prompt

```text
Build a premium, interactive, and fully responsive textbook website titled
"Physical AI & Humanoid Robotics: The Future of Embodied Intelligence" using Docusaurus 3.7.
The final website must feel and look exactly like a real, professionally published technical book (O'Reilly / Manning level) — clean book-like typography, proper chapter hierarchy, elegant page layout, realistic page margins, subtle page shadows, and a reading experience that makes judges say "this looks like a real book". At the same time, it must have modern premium web enhancements (indigo-flourescent blue gradients, Framer Motion animations, dark/light mode, collapsible TOC).
This entire project is executed inside Claude CLI with Context-7 MCP server fully connected, giving complete file-system access and terminal execution rights. Full authority to install Docusaurus 3.7, generate every single file, run commands, commit, and deploy to GitHub Pages autonomously — only checkpoint approvals required.
Content Rules (Non-Negotiable)
Every chapter and every section must contain 100% unique, freshly written, never-seen-before content.
Do NOT copy-paste from the original document word-for-word.
Rewrite everything in a new, richer, more insightful, and highly professional style while keeping all technical facts 100% accurate.
Expand with real-world examples, analogies, and deeper 2025-level insights — make it feel like a flagship 2025 textbook.
Zero plagiarism, zero repetition, zero generic filler.
Features & Exact Structure
Home Page — Hero with title, subtitle, powerful introduction + visual chapter preview cards
3 Main Chapters (exactly 500-650 words each, MDX format):
The Robotic Nervous System (ROS 2)
The Digital Twin (Gazebo & Unity)
The AI-Robot Brain (NVIDIA Isaac™)
Dedicated Pages (all unique, expanded content): • Learning Outcomes (standalone page)
• Weekly Breakdown (Weeks 1–10, beautiful timeline/table)
• Assessments
• Hardware Requirements (rich tables + expandable sections for every option)
Visual & Layout Requirements (must feel like a real book)
Book-like typography: Lexend or Calibri for body, bold modern sans for headings
Max reading width ~65ch, generous line-height 1.7–1.8, proper page margins (4–6rem on desktop)
Subtle page shadow / inner border effect on chapter pages
Collapsible, hierarchical sidebar TOC (always visible on desktop)
Inigo → fluorescent blue gradient accents
Framer Motion: page fade-ins, smooth scroll, hover glow + tiny particle burst on titles
Dark/light mode toggle (instant, persistent)
Beautiful fixed RAG chatbot placeholder in sidebar (supports selected-text highlighting)
Success Criteria
Judges must feel "this is a real published book on the web"
100% unique & fresh content (feels brand-new, not copied)
Lighthouse 95+ across all four categories
Every chapter exactly 500-650 words
Zero grammar/plagiarism issues
Fully responsive (perfect on mobile)
Live on GitHub Pages, zero broken assets
Constraints & Permissions
Running inside Claude CLI + Context-7 MCP server → full terminal + filesystem access
Explicitly authorized to autonomously: • npx create-docusaurus@latest • npm install framer-motion tailwindcss etc. • Create/modify every file • git add/commit/push • npm run deploy (GitHub Pages)
Zero manual work required except "Approved, proceed" at checkpoints
Non-Goals
No backend, no videos, no auth, no paid services
```

## Response snapshot

Created a comprehensive specification for the AI/Spec-Driven Professional Textbook Frontend project. The specification includes:

- User Scenarios & Testing with 5 prioritized user stories covering content access, premium experience, supplementary materials, enhanced features, and future chatbot integration
- Functional Requirements (15 specific requirements) covering home page, chapters, typography, navigation, visual enhancements, content quality, and deployment
- Success Criteria with 8 measurable outcomes including user perception, content quality, performance, and deployment success

The specification follows the required template structure and meets all quality criteria. A quality checklist was also created to validate the specification completeness.

## Outcome

- ✅ Impact: Created foundational specification that defines the textbook website requirements
- 🧪 Tests: none
- 📁 Files: Created specs/001-textbook-website/spec.md and specs/001-textbook-website/checklists/requirements.md
- 🔁 Next prompts: Can proceed with planning phase using /sp.plan
- 🧠 Reflection: The specification provides clear, testable requirements aligned with the project goals

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin with planning phase using /sp.plan