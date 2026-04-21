Act as a system architect for an AI-assisted coding framework.

Your task is to refactor the existing MCP (Model Context Provider) into a **pure agentic MCP design** that works entirely within `.github` using prompts, agents, and skills.

---

## Objective

Design MCP as a **logical capability layer**, not as code or external service.

The MCP must:

* NOT use Node.js or any backend
* NOT rely on external scripts
* Be fully usable within prompt-driven agent execution
* Be invoked conceptually as a "skill" by agents

---

## Context

The system uses:

* prompts
* agents
* workflows
* instructions
* templates
* skills
* MCP (to be refactored)

Workflow:

refine → plan → implement → test → review → close

GitLab is the source of truth.

---

## Requirements

### 1. Define MCP as Prompt-Based Interface

Convert MCP functions into **agent-callable instructions**, e.g.:

* get_issue
* get_comments
* add_comment
* update_status
* get_style_guide
* get_architecture

Each should be defined as:

* intent
* input
* expected output format
* rules

---

### 2. Define MCP Usage Pattern

Explain how agents will "call MCP" using prompts.

Example:

"Use MCP to fetch issue details"

The system should interpret this as:

* retrieving structured context
* not executing code

---

### 3. Separate MCP from Skills

Clarify:

* MCP → provides context/data
* Skills → perform actions (generate code, create components, etc.)

---

### 4. Define Standard MCP Response Format

All MCP outputs must follow consistent structure:

{
"type": "...",
"data": {...},
"source": "gitlab | confluence | style-guide"
}

---

### 5. Integration with Agents

Explain how:

* Workon Agent uses MCP to fetch context
* Refiner uses MCP to read issue
* Planner uses MCP to fetch architecture
* Reviewer uses MCP to validate against style guide

---

### 6. Constraints

* No implementation code
* No API calls
* No external dependencies
* Only conceptual + prompt-level design

---

## Output Format

Provide:

1. MCP definition (conceptual)
2. MCP function list with structure
3. Example usage in agents
4. Clear distinction: MCP vs Skill vs Instruction
5. Best practices

---

## Goal

Make MCP:

* simple
* consistent
* agent-friendly
* fully integrated into prompt-based workflow

Focus on clarity and clean architecture.
