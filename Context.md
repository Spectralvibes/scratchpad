Act as a system architect.

You are given an AI-assisted coding framework with the following components:

* Prompt
* Agent
* Instructions
* Skills
* Scripts
* MCP
* Templates
* Workflows

Your task is to **refactor the system by clearly defining responsibilities** for each component.

---

## Goals

1. Ensure **separation of concerns**
2. Avoid overlap between components
3. Keep the system **modular, scalable, and deterministic**
4. Ensure each component has a **single responsibility**

---

## For each component, define:

* Purpose (what it should do)
* Responsibilities (what it must handle)
* Non-responsibilities (what it must NOT do)
* Example usage in this system

---

## Important Constraints

* Prompt → should only trigger or initiate actions
* Agent → should only execute a specific role
* Instructions → define global or type-specific rules
* Skills → provide capabilities/tools (no decision making)
* Scripts → reusable execution logic (deterministic)
* MCP → provide structured context/data access
* Templates → define structured input/output formats
* Workflows → define execution order (orchestration only)

---

## System Context

The system follows this workflow:

refine → plan → implement → test → review → close

* GitLab is the source of truth
* Handoffs are stored in comments
* TYPE is inferred during refine
* Workon Agent orchestrates execution
* All components must remain stateless

---

## Output Format

Return a clean structured definition like:

Component: <name>

Purpose:
...

Responsibilities:

* ...

Non-Responsibilities:

* ...

Example:
...

---

## Additional Task

After defining components, suggest:

1. Any overlaps or conflicts in current design
2. Improvements to make system cleaner
3. Missing components (if any)

---

Focus on clarity, minimalism, and strong architectural boundaries.
