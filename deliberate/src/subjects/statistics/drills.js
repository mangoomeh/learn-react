// Daily drills for this subject. Multiple-choice drills have `options` + `answer`; open drills
// have a model `answer` that is revealed, and the learner rates their own attempt.
export const drills = [
  {
    id: 'sta-dr-1',
    kind: 'stats',
    prompt: 'A company says its "average salary" is £85,000. Most staff earn £35,000–45,000, and the five executives earn over £1 million each. What\'s going on?',
    options: ['The figure is a lie', 'It\'s likely the mean, pulled up by a few huge salaries; the median would be far lower', 'It\'s the median', 'Salaries are normally distributed'],
    answer: 1,
    explanation: 'Skewed data pulls the mean towards extremes; the median better describes a typical employee.',
  },
  {
    id: 'sta-dr-2',
    kind: 'stats',
    prompt: 'A headline says "Mortgage rates soar 50%!" Rates went from 4% to 6%. Rewrite it accurately.',
    answer: '"Mortgage rates rise 2 percentage points, from 4% to 6%." Both "50%" (relative increase) and "2 percentage points" (absolute difference) are technically correct, but stating the actual rates avoids exaggeration and lets readers judge the impact, such as the change in monthly payments.',
  },
  {
    id: 'sta-dr-3',
    kind: 'stats',
    prompt: 'A poll of 1,000 shows 52% support and 48% opposition, with a ±3 point margin. Is there clear majority support?',
    options: ['Yes, 52% is a majority', 'Not clearly: the margin on the 4-point gap is about ±6, so it\'s within sampling error', 'No, opposition is ahead', 'The poll is invalid'],
    answer: 1,
    explanation: 'The margin of error on a difference is roughly double the stated margin.',
  },
  {
    id: 'sta-dr-4',
    kind: 'stats',
    prompt: 'A study of 200,000 people finds a supplement lowers blood pressure, p < 0.001. The effect is 0.5 mmHg. How should you interpret this?',
    answer: 'The result is very unlikely to be pure chance, but the effect is tiny: 0.5 mmHg is clinically negligible. With huge samples, trivial effects become highly significant. What matters is the effect size and its confidence interval, and whether the change would matter to anyone\'s health.',
  },
  {
    id: 'sta-dr-5',
    kind: 'stats',
    prompt: 'A roulette wheel has landed on red eight times in a row. What\'s the probability of black next spin (ignoring green)?',
    options: ['Higher than usual; black is due', 'The same as always: about 50%', 'Lower; red is on a streak', 'Exactly 8%'],
    answer: 1,
    explanation: 'Spins are independent; believing black is "due" is the gambler\'s fallacy.',
  },
  {
    id: 'sta-dr-6',
    kind: 'stats',
    prompt: 'Hospital A has a higher overall death rate than Hospital B, but A has lower death rates for both routine and complex surgery. How is that possible, and which is better?',
    answer: 'Simpson\'s paradox: A probably handles a much larger share of complex, high-risk surgery, which has higher death rates anywhere. Combining all cases makes A look worse. Within each type of surgery, A does better, so for a patient choosing based on their own type of operation, A is likely the better choice.',
  },
]
