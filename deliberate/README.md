# Deliberate

A daily practice app for getting better at **software engineering**, **critical thinking** and **decision making**, in one place.

Each day the app gives you four short "reps":

1. **Study one lesson.** 21 lessons across three tracks, each with a quiz, a practice exercise and flashcards.
2. **Review flashcards.** Spaced repetition (an SM-2 variant) brings cards back right before you'd forget them.
3. **Solve a daily drill.** Spot fallacies, name biases, read statistics, reason about code, make Fermi estimates and work through decision scenarios.
4. **Reflect.** A rotating journal prompt. Lesson practice answers are saved to the journal too.

**Field Guide** (the Guide tab): 18 practical articles on things you meet on the job but rarely learn in school, grouped into keeping services alive (health checks, heartbeats, graceful shutdown, retries and backoff, idempotency), background work (jobs and queues, cron and scheduled tasks, background services, webhooks), observability (logs, metrics, traces, alerting and incidents), shipping (config and secrets, feature flags, migrations, deployments) and APIs (rate limiting, pagination, time zones). Marking an article as read adds its flashcards to your review deck.

Decision tools:

- **Decision journal.** Log a decision with a checkable prediction and a confidence %, then review it later. Process quality is scored separately from the outcome.
- **Weighted decision matrix.** Options × weighted criteria, with a sensitivity check that tells you when the result is a close call.
- **Calibration.** A chart of stated confidence against actual accuracy, with a Brier score, fed by your reviewed decisions and a true/false practice set.

Progress (XP, levels, streaks, a 12-month activity heatmap) is saved in your browser's localStorage. Use **Stats → Export backup** to move it between devices.

## Tracks

| Software Engineering | Critical Thinking | Decision Making |
| --- | --- | --- |
| Readable code | Anatomy of an argument | One-way and two-way doors |
| Big-O and complexity | Common logical fallacies | Expected value and thinking in bets |
| Choosing data structures | Cognitive biases | Second-order thinking |
| Debugging systematically | Evidence and statistics | Pre-mortems and inversion |
| Testing that pays off | First-principles thinking | Opportunity cost and prioritisation |
| System design basics | Steelmanning and intellectual humility | Decision journals and calibration |
| Code review and communication | | Weighted decision matrices |
| Version control habits | | |

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

## How it's built (React concepts used)

This app uses the same concepts as the notes in the repo's main README:

- **useReducer + useContext**: all progress lives in one reducer (`src/store/ProgressContext.jsx`) shared through context.
- **useEffect**: persists state to localStorage whenever it changes.
- **React Router**: `HashRouter` with nested routes (`/decide/matrix`, `/decide/calibration`) and URL params (`/learn/:lessonId`).
- **Conditional rendering and lists** throughout the pages.
- **`key` to reset state**: `<LessonView key={lesson.id}>` clears quiz answers when you move to another lesson.

```
src/
  data/        lesson content, Field Guide articles, drills, calibration statements
  lib/         dates & streaks, spaced repetition, XP/levels
  store/       ProgressContext (reducer + persistence)
  components/  Layout, Markdown renderer, Heatmap, small UI pieces
  pages/       Today, Learn, Lesson, Guide, Article, Review, Drills, Journal, Decide/*, Stats
```

To add a lesson, append an object to a track in `src/data/*.js`. Its flashcards join the review deck automatically once the lesson is completed.
