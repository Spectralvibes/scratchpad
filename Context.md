
# AI Development System Context

version: 3.2.0
last_updated: 2026-04-19

---

## 1. SYSTEM OVERVIEW

This repository follows a **spec-driven, agent-based AI development workflow**.

Execution is:

* prompt-driven (via work-on prompt)
* orchestrated by Workon Agent
* powered by MCP tools for GitLab and repository access

There is:

* no backend service
* no UI orchestration layer
* no local state

---

## 2. SOURCE OF TRUTH

All state is maintained in GitLab.

GitLab is responsible for:

* Issues → tasks/features
* Issue state → open / closed
* Status → workflow stage
* Comments → HANDOFF blocks
* Merge Requests → final output

Agents MUST NOT maintain independent state.

---

## 3. CORE PRINCIPLES

### Stateless Execution

Agents operate only on:

* issue context
* latest HANDOFF
* repository state

---

### Handoff-Driven Context

Handoffs are the ONLY mechanism for passing context.

Agents MUST:

* read latest HANDOFF only
* produce a new HANDOFF
* include NEXT_ACTION

---

### Deterministic Routing

Execution decisions are based on:

* issue state
* status
* latest HANDOFF

---

### Modular Architecture

System is composed of:

* prompts
* agents
* workflows
* instructions
* templates
* skills
* scripts
* mcp

Each component has a single responsibility.

---

## 4. WORKFLOW

refine → plan → implement → test → review → close

---

## 5. STATE MANAGEMENT

### Issue State

* open
* closed

---

### Status Values

* refine
* plan
* implement
* test
* review
* close
* blocked

---

### Transitions

refine → plan → implement → test → review → close → closed

Loops:

* test → implement
* review → implement

---

## 6. ISSUE TYPE (INFERRED)

TYPE is NOT required from user.

---

### Detection Rules (Refine Stage)

Refiner Agent must:

1. Use explicit TYPE if provided
2. Else infer from issue content
3. If uncertain → ask user

---

### Supported Types

* feature
* refactor
* bug
* test
* prototype
* performance
* enhancement

---

### Requirement

TYPE MUST be included in HANDOFF and used by all agents.

---

## 7. TYPE-BASED BEHAVIOR

Workflow remains constant.
Behavior adapts based on TYPE.

---

### Instruction Loading

Agents MUST load:

* global instructions
* type-specific instructions

---

### Examples

refactor:

* do not change behavior
* improve structure

test:

* focus on coverage
* do not change production logic

performance:

* optimize bottlenecks

prototype:

* prioritize speed

feature:

* full design + implementation

---

## 8. HANDOFF SYSTEM

Handoffs are stored as GitLab comments.

---

### Required Format

## HANDOFF vX

META:
from: 
to: 

TYPE:\

CONTEXT:

DONE:

* completed work

TODO:

* remaining work

RISKS:

* potential issues

NEXT_ACTION:\

---

### Rules

* Always include TYPE
* Always include NEXT_ACTION
* Keep concise
* Include only delta (no repetition)

---

## 9. WORKON AGENT

The Workon Agent is the ONLY orchestrator.

---

### Responsibilities

* fetch issue via MCP
* fetch comments
* extract latest HANDOFF
* determine next agent
* delegate execution

---

### Decision Logic

1. If issue.state == closed → STOP

2. If latest HANDOFF exists
   → next agent = HANDOFF.to

3. Else
   → next agent = status mapping

---

### Status Mapping

* refine → refiner
* plan → planner
* implement → coder
* test → tester
* review → reviewer
* close → mr-agent

---

### Constraints

Workon Agent MUST NOT:

* execute tasks
* modify code
* generate outputs

---

## 10. CONTEXT MODEL (MCP)

Agents receive structured context:

{
"issue": {...},
"state": "open",
"status": "plan",
"type": "feature",
"comments": [...],
"latest_handoff": {...}
}

Agents MUST NOT reconstruct context manually.

---

## 11. COMPONENT MODEL

Each workflow step is composed of:

* prompt → trigger
* agent → executor
* instructions → rules
* templates → structure
* skills → tools
* workflow → orchestration

---

## 12. DESIGN CAPABILITY

During plan stage, system may:

* create design documents
* generate diagrams using draw.io MCP

Artifacts stored in:

/docs/design/

---

## 13. SKILLS

Agents may use MCP tools:

* GitLab (issues, comments, status)
* filesystem (read/write files)
* git (commit, push, MR)
* test execution
* draw.io (diagram generation)

---

## 14. FAILURE HANDLING

On failure:

* create HANDOFF describing issue
* set status = blocked
* include recovery guidance

---

## 15. EXECUTION MODEL

Execution is triggered via:

work-on prompt → Workon Agent → target agent

Execution is iterative and step-based.

---

## 16. NON-GOALS

This system does NOT:

* rely on chat history
* maintain local state
* allow unstructured execution
* mix responsibilities

---

## 17. DESIGN INTENT

System is designed to be:

* deterministic
* modular
* scalable
* type-aware
* agent-driven

---

## VERSION HISTORY

### v3.2.0 (2026-04-19)

* Simplified context (lean design)
* Enforced modular workflow separation
* TYPE inference retained
* Codex-friendly structure finalized
