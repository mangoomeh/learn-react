import { subjects } from '../subjects/index.js'

// Turns each subject's { light, dark } colour into a --t value for [data-subject="<id>"],
// following the same three theme states as the tokens in base.css.
const rules = (prefix, theme) => subjects.map((s) => `${prefix}[data-subject="${s.id}"] { --t: ${s.color[theme]}; }`).join('\n')

const subjectCss = [
  rules('', 'light'),
  `@media (prefers-color-scheme: dark) {\n${rules(':root:not([data-theme="light"]) ', 'dark')}\n}`,
  rules(':root[data-theme="dark"] ', 'dark'),
].join('\n')

export default function SubjectColors() {
  return <style>{subjectCss}</style>
}
