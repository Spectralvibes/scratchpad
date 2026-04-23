# Hook: MD Version Check

Intent:
Ensure all modified `.md` files have updated version history.

---

## Trigger

* When `.md` files are changed

---

## Input

* list of changed files

---

## Steps

1. Filter files:

   * only `.md` files

2. For each file:

   a. Check if file contains:
   "## VERSION HISTORY"

   b. Check if latest version entry is present at bottom

   c. Validate:

   * version exists
   * date exists
   * change description exists

3. Decision:

   IF version is missing OR not updated:
   → flag issue

   ELSE:
   → pass

---

## Output

* list of files missing version update
* suggestion to update version

---

## Rules

* do NOT modify file automatically (optional: can suggest fix)
* enforce consistency
* ignore non-markdown files
