// The three skill tracks. Shared vocabulary: lessons belong to a track, drills and
// flashcards are tagged with one, and each has its own colour (see [data-track] in base.css).
export const tracks = [
  { id: 'engineering', title: 'Software Engineering', short: 'Engineering' },
  { id: 'thinking', title: 'Critical Thinking', short: 'Thinking' },
  { id: 'decisions', title: 'Decision Making', short: 'Decisions' },
]

export const trackById = Object.fromEntries(tracks.map((t) => [t.id, t]))
