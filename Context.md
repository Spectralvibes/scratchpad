Act as a senior backend engineer.

Your task is to create a **GitLab MCP (Model Context Provider)** module for an AI-assisted coding system.

---

## Objective

Build a **lightweight MCP layer** that provides structured access to GitLab for agents.

The MCP should be:

* stateless
* minimal
* deterministic
* reusable

---

## Tech Stack

* Node.js (JavaScript or TypeScript)
* Axios (for HTTP calls)

---

## GitLab Details

Use GitLab REST API v4.

Environment variables:

* GITLAB_URL
* GITLAB_TOKEN
* GITLAB_PROJECT_ID

---

## Required Features (STRICT SCOPE)

Implement only these functions:

1. getIssue(issueId)
2. getComments(issueId)
3. addComment(issueId, content)
4. updateStatus(issueId, status)

---

## Behavior Rules

* Do NOT include business logic
* Do NOT include workflow logic
* Do NOT decide anything based on status
* Only fetch, transform, and return data

---

## Output Format (IMPORTANT)

Standardize all outputs.

### getIssue()

Return:

{
"id": number,
"title": string,
"description": string,
"state": "open" | "closed",
"labels": string[]
}

---

### getComments()

Return:

[
{
"body": string,
"created_at": string
}
]

---

### addComment()

* Add comment to issue
* Return success response

---

### updateStatus()

* Use labels in format: status:<value>
* Replace existing status label

Example:
status:plan

---

## File Structure

Create:

/mcp/gitlab/
client.js
config.js
index.js

---

## Implementation Requirements

* Use Axios
* Centralize API config
* Handle errors properly
* Keep functions small and clean

---

## Additional Helper (IMPORTANT)

Also create:

getLatestHandoff(comments)

* Extract last comment containing "## HANDOFF"
* Return parsed structure

---

## Coding Standards

* clean, readable code
* no over-engineering
* no unnecessary abstractions

---

## Output

Provide:

1. Complete code for all files
2. Example usage
3. Environment setup instructions

---

## Constraints

* Keep MCP as a thin wrapper
* Do not mix with agent logic
* Do not include authentication logic beyond token header

---

Focus on simplicity, clarity, and production readiness.
