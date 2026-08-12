---
description: Branch, implement, commit-by-logical-change, and open a PR for one piece of work
---

## Task

$ARGUMENTS

## Flow

Follow these steps in order. This command is pre-authorized to push branches and open PRs as
part of its normal operation — no need to ask for confirmation before those specific steps,
since opening a PR (not merging) is the intended, reversible end state of this flow.

1. **Branch**
   - Run `git status` first. If there are uncommitted changes unrelated to this task, stop and
     ask the user how to proceed rather than mixing them in.
   - Pick a branch prefix based on what kind of change the task actually is:
     - `feature/` — new functionality or user-facing behavior
     - `fix/` — bug fixes
     - `chore/` — tooling, config, dependency, or dev-environment changes (hooks, workflows,
       slash commands, lint config, etc.) that aren't a feature or a fix
     - `ci/` — changes scoped only to CI/CD pipeline files (e.g. `.github/workflows/**`)
     If a task doesn't clearly fit one category, prefer `feature/` for anything user-facing and
     `chore/` otherwise.
   - From the latest `main` (`git fetch origin main` if needed), create a branch named
     `<prefix>/<slug>`, where `<slug>` is a short kebab-case description of the task derived from
     the task text above (e.g. "add dark mode toggle" -> `feature/add-dark-mode-toggle`,
     "add lint hook" -> `chore/add-lint-hook`).

2. **Implement**
   - Do the actual development work directly: read the relevant code, make the changes, run
     type-checking/build/tests as appropriate for the stack. Don't ask the user to write code —
     that's this command's job.

3. **Commit by logical change, not by file**
   - Once implementation is complete, review the full diff (`git diff`, `git status`).
   - Group the changes into logically coherent commits (one concern per commit — e.g. "add
     component", "wire up state", "update styles" — even if a group touches multiple files, and
     even if one file's changes get split across commits via `git add -p` when it mixes concerns).
     Avoid the trap of one commit per file when several files belong to the same concern.
   - Write a concise commit message per commit **in Korean**, describing *why*, following this
     repo's existing commit style, ending with:
     ```
     Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
     ```

4. **Push and open the PR**
   - Push the branch: `git push -u origin <prefix>/<slug>`.
   - Open the PR with `gh pr create --base main --title "..." --body "..."`, where the title and
     body are written **in Korean** and generated from the actual diff/commits (summary + test
     plan, following the repo's PR conventions if any exist).
   - Report the PR URL back to the user as the final step.
