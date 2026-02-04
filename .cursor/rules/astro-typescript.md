# Astro (TypeScript)

Comprehensive guidelines for developing and maintaining an Astro project using TypeScript and TailwindCSS.

Source: [awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules/tree/main/rules/astro-typescript-cursorrules-prompt-file)

---

## Commit message guidelines

- Use the [Conventional Commits](https://www.conventionalcommits.org/) spec.
- Format: `type(optional scope): description` — keep scope and type in lowercase.
- Keep the commit message concise and under 60 characters.
- Suggest a message that can be pasted into the terminal without editing.
- When asked to commit, provide the full `git commit -m '...'` command, not only the message.

**Slash command:** `/commit` — Generate a Git commit using the conventional commits spec.

Example: `/commit` → `git commit -m 'feat: add responsive navbar with TailwindCSS'`

---

## Development guidelines

- **TypeScript:** Use strict TypeScript settings and keep type safety across the project.
- **TailwindCSS:** Use Tailwind for all styling with a utility-first approach.
- **Astro components:** Keep components modular, reusable, and with clear separation of concerns.

---

## Coding style

- Start each file with a one-line comment with the path/filename.
- Write comments that describe **purpose**, not what the code literally does.
- Prefer modularity, DRY, and performance.
