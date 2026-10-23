# Deliberate

A daily practice app for getting better at **software engineering**, **critical thinking** and **decision making**, in one place.

Each day the app gives you four short "reps":

1. **Study one lesson.** Picked from whichever subject you're furthest behind in, so every subject grows together.
2. **Review flashcards.** Spaced repetition (an SM-2 variant) brings cards back right before you'd forget them.
3. **Solve a daily drill.** Spot fallacies, name biases, read statistics, reason about code, make Fermi estimates and work through decision scenarios.
4. **Reflect.** A rotating journal prompt. Lesson practice answers are saved to the journal too.

**The library** (Learn tab) holds subjects. Each subject has units of bite-sized lessons: at most 3 ideas each and about 8–11 minutes, with a quiz, flashcards and usually a practice exercise. Each lesson shows its size ("3 ideas · ~11 min") and what it covers. If you stop partway, your quiz answers, notes and place on the page are saved, and the lesson shows as "In progress". Software Engineering also has optional "On the job" units: 36 practical lessons on things you meet at work but rarely learn in school (health checks, heartbeats, cron, background workers, retries, idempotency, observability, deploys, migrations, rate limiting, time zones and more). You can search across every lesson.

Adding a subject means adding a content folder; see [`src/subjects/README.md`](./src/subjects/README.md).

Decision tools:

- **Decision journal.** Log a decision with a checkable prediction and a confidence %, then review it later. Process quality is scored separately from the outcome.
- **Weighted decision matrix.** Options × weighted criteria, with a sensitivity check that tells you when the result is a close call.
- **Calibration.** A chart of stated confidence against actual accuracy, with a Brier score, fed by your reviewed decisions and a true/false practice set.

Progress (XP, levels, streaks, a 12-month activity heatmap) is saved in your browser's localStorage. Use **Stats → Export backup** to move it between devices.

## Run it

```bash
cd deliberate
npm install
npm run dev          # http://localhost:5173
npm run build        # static site in dist/ (relative paths, works on GitHub Pages)
npm run build:single # one self-contained HTML file in dist-single/
```

## Deploy to GitHub Pages

`.github/workflows/deploy-pages.yml` builds and deploys the app whenever `deliberate/` changes on `main`. You can also run it by hand from the Actions tab.

One-time setup: in the repo go to **Settings → Pages** and set **Source** to **GitHub Actions**. The site is then served at `https://<user>.github.io/<repo-name>/` (currently https://mangoomeh.github.io/deliberate/). Relative asset paths and hash routing mean no extra base-path config is needed.

## How it's built

Content lives in `src/subjects/`, one folder per subject. Features are self-contained **modules** (Learn, Review, Drills, Decide, Journal), each owning its pages, styles and saved state. A small `core` provides the store and shared UI, and the `app` shell assembles the nav, Today and Stats from what each module contributes. See [`src/modules/README.md`](./src/modules/README.md) for the structure, the import rules (checked by `npm run lint`) and how to add a module.

React concepts it uses (the same ones as the notes in the repo's main README):

- **useReducer + useContext**: one store (`src/core/store/ProgressStore.jsx`) combines a reducer per module and shares it through context.
- **useEffect**: saves progress to localStorage whenever it changes.
- **React Router**: `HashRouter`, with routes contributed by each module, nested routes (`/decide/matrix`) and URL params (`/learn/:subjectId/:lessonId`).
- **Conditional rendering and lists** throughout the pages.
- **`key` to reset state**: `<LessonView key={lesson.id}>` clears quiz answers when you move to another lesson.

To add a lesson, append it to a subject's `lessons.js`. `npm run lint` checks the content, and the lesson's flashcards join the review deck once it is completed.
