Act as a senior architect for an AI-assisted coding system.

Your task is to design and generate a **complete /status-check feature** inside a `.github`-based agentic system.

This system uses:

* prompts
* agents
* workflows
* instructions
* skills
* MCP (Model Context Provider)
* templates
* hooks

There is NO backend, NO Node.js, and NO external scripts. Everything must work via prompt-driven agent execution.

---

## 🎯 Objective

Create a `/status-check` capability that:

* Fetches GitLab issues
* Filters:

  * assigned to current user
  * only from active sprint
* Groups them by workflow status
* Outputs a clean, readable report

---

## 📦 Required Components

You MUST create ALL of the following:

1. prompt
2. agent
3. workflow
4. MCP definition
5. skill (formatter)
6. instructions
7. template
8. hook (trigger)

Each component must be clearly separated and minimal.

---

## 🧠 System Context

Workflow:

refine → plan → implement → test → review → close

GitLab:

* Issues are the source of truth
* Status is stored as labels: status:<value>
* Sprint is identified via label (e.g., sprint:active)

Environment values (DO NOT hardcode, assume from env):

* GITLAB_PROJECT_ID
* GITLAB_USER
* SPRINT_LABEL

---

## 🔹 MCP REQUIREMENT (CRITICAL)

Define MCP as a **prompt-level interface**, not code.

Create:

MCP: gitlab-status

---

### MCP Responsibilities

* fetch issues from GitLab
* filter:

  * assigned to current user
  * active sprint only
* extract:

  * id
  * title
  * status (from labels)
  * assignee

---

### MCP Output Format

{
"issues": [
{
"id": number,
"title": string,
"status": "refine | plan | implement | test | review | close | blocked",
"assignee": string
}
]
}

---

## 🔹 SKILL REQUIREMENT

Create skill:

status-formatter

---

### Skill Responsibilities

* group issues by status
* count issues
* highlight blocked issues
* format into structured output

---

## 🔹 TEMPLATE REQUIREMENT

Create template:

status-report

---

### Must Include Sections

* Summary (total count)
* refine
* plan
* implement
* test
* review
* blocked (highlighted)

---

## 🔹 AGENT REQUIREMENT

Create:

status-agent

---

### Responsibilities

* call MCP
* pass data to skill
* generate final report using template

---

### Must NOT

* modify GitLab
* change status
* infer missing data

---

## 🔹 WORKFLOW

Define a simple workflow:

1. fetch data via MCP
2. process using skill
3. render using template

---

## 🔹 PROMPT

Create a prompt:

/status-check

---

### Prompt Behavior

* trigger status-agent
* produce report
* no extra explanation

---

## 🔹 INSTRUCTIONS

Define rules:

* be concise
* no hallucination
* highlight blockers
* prefer clarity over verbosity

---

## 🔹 HOOK (OPTIONAL)

Define hook:

* manual trigger OR scheduled
* can post output to GitLab or console

---

## ⚠️ CONSTRAINTS

* Do NOT write any backend code
* Do NOT use APIs directly
* Everything must be conceptual and prompt-driven
* Keep components modular
* Avoid duplication

---

## 📤 OUTPUT FORMAT

Return:

1. File structure
2. Each component as separate section
3. Clean, minimal, production-ready content

---

## 🧠 QUALITY BAR

The design must be:

* simple
* scalable
* agent-friendly
* easy to extend later (daily standup, metrics, etc.)

---

## BONUS (OPTIONAL)

Suggest 2–3 improvements like:

* trend tracking
* yesterday vs today
* auto-post summaries

---

Focus on clarity, modularity, and real usability.
