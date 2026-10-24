// Sources were checked in October 2026.
const SRC = {
  pew: { title: 'Pew Research Center: Understanding the margin of error in election polls', url: 'https://www.pewresearch.org/short-reads/2016/09/08/understanding-the-margin-of-error-in-election-polls/' },
  asa: { title: 'Wasserstein & Lazar (2016): The ASA statement on p-values', url: 'https://doi.org/10.1080/00031305.2016.1154108' },
  amrhein: { title: 'Amrhein, Greenland & McShane (2019): Scientists rise up against statistical significance (Nature)', url: 'https://doi.org/10.1038/d41586-019-00857-9' },
  bickel: { title: 'Bickel, Hammel & O\'Connell (1975): Sex bias in graduate admissions, data from Berkeley', url: 'https://doi.org/10.1126/science.187.4175.398' },
  anscombe: { title: 'Anscombe (1973): Graphs in statistical analysis', url: 'https://doi.org/10.1080/00031305.1973.10478966' },
}

export const lessons = [
  {
    id: 'sta-averages',
    unit: 'Describing data',
    title: 'Mean, median and mode',
    summary: 'Three kinds of "average" can tell very different stories about the same data.',
    ideas: ['Three averages', 'Skew pulls the mean'],
    body: `
## Three averages

"Average" can mean several things:

- **Mean**: add everything up and divide by how many there are. The mean of 2, 3 and 10 is 15 ÷ 3 = **5**.
- **Median**: the middle value when sorted. For 2, 3, 10 it's **3**. With an even count, it's halfway between the two middle values.
- **Mode**: the most common value. Useful for categories, like the most popular shoe size.

## Skew pulls the mean

When data is **symmetric**, the mean and median are similar. When it's **skewed**, with a long tail on one side, they diverge, because the mean is pulled towards extreme values and the median isn't.

Income is the classic example. Imagine ten people in a café, each earning £30,000 a year. The mean and median are both £30,000. A billionaire walks in. The **mean** income in the room jumps to about £90 million. The **median** stays at £30,000. Which describes the typical person better?

That's why household income, house prices and wealth are usually reported as **medians**: a few very high values make the mean much higher than what most people experience. In many countries, mean income is well above median income.

Other skewed data: time to complete tasks (a few take far longer), website response times, city sizes, book sales.

When someone quotes an average, ask:

- **Which average?** Mean or median?
- **Is the data likely skewed?** If so, the mean may mislead.
- **What's the spread?** Two groups with the same average can look completely different, as the next lesson shows.
`,
    takeaways: [
      'Mean adds and divides; median is the middle value; mode is the most common.',
      'Skewed data pulls the mean towards extreme values; the median resists.',
      'Income and house prices are usually reported as medians for this reason.',
    ],
    quiz: [
      {
        q: 'What\'s the median of 4, 8, 1, 100, 6?',
        options: ['6', '23.8', '8', '100'],
        answer: 0,
        why: 'Sorted: 1, 4, 6, 8, 100. The middle value is 6.',
      },
      {
        q: 'Why is household income usually reported as a median?',
        options: ['It\'s easier to calculate', 'A few very high incomes pull the mean far above what typical households earn', 'Means are illegal', 'Medians are always higher'],
        answer: 1,
        why: 'Income is right-skewed.',
      },
      {
        q: 'In a right-skewed distribution, how do mean and median usually compare?',
        options: ['Mean is lower', 'Mean is higher', 'They\'re equal', 'No relationship'],
        answer: 1,
        why: 'The long right tail pulls the mean upwards.',
      },
    ],
    practice: 'Find a news story quoting an "average" salary, price or time. Check whether it\'s a mean or median, and whether the data is likely skewed.',
    cards: [
      { id: 'c-sta-averages-1', front: 'Mean vs median vs mode?', back: 'Mean: sum ÷ count. Median: middle value. Mode: most common value.' },
      { id: 'c-sta-averages-2', front: 'Effect of skew on mean and median?', back: 'Skew pulls the mean towards the tail; the median resists extreme values.' },
    ],
    related: ['ct-reading-numbers'],
  },
  {
    id: 'sta-spread',
    unit: 'Describing data',
    title: 'Spread and the normal curve',
    summary: 'How spread out data is matters as much as its average.',
    ideas: ['Range, percentiles and standard deviation', 'The normal distribution', 'Long tails'],
    body: `
## Range, percentiles and standard deviation

Two teams both average 30 minutes to answer support tickets. In one, almost every ticket takes 25–35 minutes. In the other, half take 5 minutes and half take an hour. Same average, very different experience.

Ways to describe spread:

- **Range**: largest minus smallest. Simple, but driven by extremes.
- **Percentiles**: the value below which a given percentage falls. The **90th percentile** response time means 90% of responses were faster. Engineers often watch p95 or p99 latency because the slowest users matter.
- **Standard deviation (SD)**: roughly, the typical distance of values from the mean. Small SD: values cluster tightly. Large SD: they're spread out.

## The normal distribution

Many measurements, like adult heights or measurement errors, roughly follow a **normal distribution**: a symmetric bell curve. For normal data, a handy rule:

- About **68%** of values fall within 1 SD of the mean.
- About **95%** within 2 SDs.
- About **99.7%** within 3 SDs.

If adult male height in a country has a mean of 175 cm and an SD of 7 cm, about 95% of men are between 161 and 189 cm.

## Long tails

Lots of real-world data is **not** normal. Wealth, city sizes, book sales, earthquake sizes and many internet metrics have **long tails**: extreme values are far more common than a bell curve predicts.

In long-tailed data, the average can be misleading, and "rare" extremes happen regularly. Planning for typical cases while ignoring the tail is how systems fall over, budgets blow up and investors get caught out. Look at the shape of the data, not just its centre.
`,
    takeaways: [
      'Describe spread with range, percentiles or standard deviation.',
      'For normal data, about 68%, 95% and 99.7% fall within 1, 2 and 3 SDs.',
      'Many real datasets have long tails where extremes are common; check the shape.',
    ],
    quiz: [
      {
        q: 'What does a 95th percentile response time of 2 seconds mean?',
        options: ['The average is 2 seconds', '95% of responses took 2 seconds or less', '95 responses took 2 seconds', 'The slowest took 2 seconds'],
        answer: 1,
        why: 'Percentiles describe the share of values below a threshold.',
      },
      {
        q: 'Test scores are normal with mean 70 and SD 10. About what share score between 50 and 90?',
        options: ['68%', '95%', '99.7%', '50%'],
        answer: 1,
        why: '50 to 90 is within 2 SDs of the mean.',
      },
      {
        q: 'Why can planning for the "average" fail with long-tailed data?',
        options: ['Averages are always wrong', 'Extreme values are much more common than expected and can dominate outcomes', 'Long tails have no average', 'It can\'t'],
        answer: 1,
        why: 'In long-tailed data, rare extremes happen regularly.',
      },
    ],
    cards: [
      { id: 'c-sta-spread-1', front: 'What is standard deviation?', back: 'Roughly, the typical distance of values from the mean; a measure of spread.' },
      { id: 'c-sta-spread-2', front: '68–95–99.7 rule?', back: 'For normal data, about 68%, 95% and 99.7% of values lie within 1, 2 and 3 standard deviations of the mean.' },
      { id: 'c-sta-spread-3', front: 'What is a long-tailed distribution?', back: 'One where extreme values are far more common than a bell curve predicts, like wealth or city sizes.' },
    ],
    related: ['sta-averages'],
  },
  {
    id: 'sta-percent',
    unit: 'Describing data',
    title: 'Percentages and percentage points',
    summary: 'Small wording differences in percentages can make changes look much bigger or smaller.',
    ideas: ['Percent vs percentage points', 'Percentage change and base effects'],
    body: `
## Percent vs percentage points

If an interest rate rises from 4% to 5%, has it gone up by 1% or by 25%? Both, depending on what you mean:

- It rose by **1 percentage point** (5 − 4).
- It rose by **25 percent** (the increase of 1 is 25% of the starting 4).

Mixing these up is common and can mislead. "Unemployment rose 50%" sounds alarming; "unemployment rose from 2% to 3%", a 1 percentage point rise, is the same fact. Be precise: use **percentage points** for differences between percentages.

## Percentage change and base effects

**Percentage change** = (new − old) ÷ old × 100.

- From 200 to 250: (250 − 200) ÷ 200 = **+25%**.
- From 250 back to 200: (200 − 250) ÷ 250 = **−20%**.

Notice: a 25% rise followed by a 20% fall gets you back where you started. Percentages up and down aren't symmetric. A 50% loss needs a **100% gain** to recover, which matters for investments.

**Base effects**: small starting numbers produce huge percentages.

- "Sales of our new product grew 400%!" might mean from 5 units to 25.
- "Cases tripled" might mean from 1 to 3.

Always ask: **percentage of what?** What were the actual numbers before and after? And over what period? A 10% change over ten years is very different from 10% in a month.

Also watch for **cumulative** effects: 3% inflation a year sounds modest, but over ten years prices rise about 34%, not 30%, because each year compounds on the last.
`,
    takeaways: [
      'Use percentage points for differences between percentages; percent for relative change.',
      'Percentage change = (new − old) ÷ old; ups and downs aren\'t symmetric.',
      'Small bases make huge percentages; always ask for the actual numbers.',
    ],
    quiz: [
      {
        q: 'Support for a policy rises from 40% to 50%. Which is correct?',
        options: ['It rose 10%', 'It rose 10 percentage points, or 25%', 'It rose 50%', 'It rose 10 percent and 10 points, the same thing'],
        answer: 1,
        why: '50 − 40 = 10 points; 10 ÷ 40 = 25%.',
      },
      {
        q: 'An investment falls 50%. What gain is needed to return to the starting value?',
        options: ['50%', '75%', '100%', '200%'],
        answer: 2,
        why: 'From 50 back to 100 is a 100% gain.',
      },
      {
        q: '"Visits grew 300%!" What should you ask first?',
        options: ['Is 300% good?', 'From how many to how many, over what period?', 'Who wrote it?', 'Nothing'],
        answer: 1,
        why: 'Base effects can make tiny changes look huge.',
      },
    ],
    practice: 'Find a headline using a percentage. Work out the actual numbers before and after, and whether "percent" or "percentage points" was the right term.',
    cards: [
      { id: 'c-sta-percent-1', front: 'Percent vs percentage points?', back: 'From 4% to 5% is a 1 percentage point rise, or a 25% relative increase.' },
      { id: 'c-sta-percent-2', front: 'Gain needed to recover from a 50% loss?', back: '100%.' },
      { id: 'c-sta-percent-3', front: 'What is a base effect?', back: 'Small starting values make percentage changes look huge.' },
    ],
    related: ['ct-reading-numbers', 'fin-compound'],
  },
  {
    id: 'sta-probability',
    unit: 'Uncertainty',
    title: 'Probability basics',
    summary: 'How to combine chances, and why streaks don\'t make the next result "due".',
    ideas: ['Independent events and the gambler\'s fallacy', 'Combining probabilities', 'More detail, less likely'],
    body: `
## Independent events and the gambler's fallacy

Events are **independent** if one doesn't affect the other. Coin flips are independent: after five heads in a row, the chance of heads next is still **50%**. The coin has no memory.

The **gambler's fallacy** is believing a result is "due" after a streak: "Red has come up eight times, so black is due." In a fair game, past results don't change future odds.

Many real events **aren't** independent, though: if it rained yesterday, rain today is more likely; one server failing can overload others. Ask whether there's a real mechanism linking events.

## Combining probabilities

- **Both A and B** (independent): multiply. Two coin flips both landing heads: 0.5 × 0.5 = **0.25**.
- **At least one**: often easiest as 1 minus the chance of none. Chance of at least one six in four dice rolls: 1 − (5/6)⁴ ≈ **52%**.

Multiplying small chances is how "rare" events become common. A system with ten parts, each 99% reliable and all needed, works only 0.99¹⁰ ≈ **90%** of the time.

And over many tries, unlikely things happen: a 1-in-1,000 daily event will probably happen at least once in about two years. With millions of people, one-in-a-million coincidences happen every day.

## More detail, less likely

Each added detail makes a story **less** probable, even as it feels more convincing. "The project will be late" is more likely than "the project will be late because the vendor goes bust", since the second requires both things to happen.

This is the **conjunction fallacy**. Vivid, detailed scenarios feel plausible, but every extra condition multiplies in another probability below 1.
`,
    takeaways: [
      'Independent events have no memory; streaks don\'t make outcomes "due".',
      'For "and", multiply; for "at least one", use 1 minus the chance of none.',
      'Every extra detail makes a scenario less likely, however convincing it feels.',
    ],
    quiz: [
      {
        q: 'A fair coin lands heads six times in a row. What\'s the chance the next flip is heads?',
        options: ['Less than 50%', '50%', 'More than 50%', '1.5%'],
        answer: 1,
        why: 'Flips are independent; the coin has no memory.',
      },
      {
        q: 'Three independent steps each succeed 90% of the time. What\'s the chance all three succeed?',
        options: ['90%', 'About 73%', '30%', '270%'],
        answer: 1,
        why: '0.9 × 0.9 × 0.9 ≈ 0.73.',
      },
      {
        q: 'Which is more likely?',
        options: ['Ana is a teacher', 'Ana is a teacher who plays the violin', 'Both equally likely', 'Can\'t say'],
        answer: 0,
        why: 'Adding a condition can only keep or reduce probability.',
      },
    ],
    cards: [
      { id: 'c-sta-probability-1', front: 'Gambler\'s fallacy?', back: 'Believing an outcome is "due" after a streak of independent events.' },
      { id: 'c-sta-probability-2', front: 'Probability of "at least one"?', back: '1 minus the probability that none occur.' },
      { id: 'c-sta-probability-3', front: 'Conjunction fallacy?', back: 'Judging a detailed scenario as more likely than a simpler one it includes.' },
    ],
    related: ['dm-expected-value', 'ct-base-rates'],
  },
  {
    id: 'sta-margin',
    unit: 'Uncertainty',
    title: 'Samples and margins of error',
    summary: 'A poll of 1,000 people can describe millions, within limits. Here\'s how to read those limits.',
    ideas: ['Why samples work', 'Margin of error', 'What the margin doesn\'t cover'],
    body: `
## Why samples work

You don't need to ask everyone. A **random sample**, where every person has an equal chance of being picked, tends to reflect the population. What matters most is **how the sample is chosen** and its **size**, not the size of the population. A well-drawn sample of 1,000 people describes a city or a country about equally well.

A **biased** sample, like an online poll anyone can answer or a survey of only your customers, can be wrong however large it is.

## Margin of error

Even random samples vary by chance. The **margin of error** describes that uncertainty. For a random sample of about **1,000** people, it's roughly **±3 percentage points** at a **95% confidence level**.

As Pew Research Center explains, that means if the same survey were repeated many times, about 95% of results would land within 3 points of the true value.

Two important consequences:

- The margin applies to **each figure**. For the **gap** between two figures, such as two candidates, it's roughly **double**. A poll showing 48% to 45% with ±3 points doesn't show a clear lead.
- **Bigger samples help, slowly.** Error shrinks with the square root of the sample size, so **quadrupling** the sample only **halves** the margin. Subgroups in a poll, such as one age group, have much larger margins.

A **confidence interval** expresses the same idea as a range: "45% to 51%" rather than "48% ± 3".

## What the margin doesn't cover

The margin of error only covers random sampling variation. It doesn't cover:

- People who weren't reachable or refused to answer.
- Leading or confusing question wording.
- People not telling the truth.

These can matter more than the margin, and they don't shrink with a bigger sample.
`,
    takeaways: [
      'Random samples can describe large populations; how they\'re drawn matters more than population size.',
      'A sample of about 1,000 gives roughly ±3 points; the margin on a gap is about double.',
      'Quadrupling the sample halves the margin; the margin ignores non-response and wording bias.',
    ],
    quiz: [
      {
        q: 'A poll of 1,000 people shows Candidate A at 47% and B at 44%, ±3 points. What can you conclude?',
        options: ['A is clearly ahead', 'The race is too close to call from this poll', 'B is ahead', 'The poll is wrong'],
        answer: 1,
        why: 'The margin on the gap is about double, so a 3-point lead is within noise.',
      },
      {
        q: 'To halve a poll\'s margin of error, roughly how much bigger must the sample be?',
        options: ['Twice as big', 'Four times as big', 'Ten times as big', 'Half the size'],
        answer: 1,
        why: 'Error shrinks with the square root of sample size.',
      },
      {
        q: 'A website poll gets 50,000 responses. Why might it still be unreliable?',
        options: ['50,000 is too few', 'Self-selected respondents are a biased sample, however many there are', 'Polls can\'t use websites', 'It\'s reliable'],
        answer: 1,
        why: 'Size doesn\'t fix a biased sampling method.',
      },
    ],
    cards: [
      { id: 'c-sta-margin-1', front: 'Margin of error for a random sample of ~1,000?', back: 'About ±3 percentage points at 95% confidence.' },
      { id: 'c-sta-margin-2', front: 'Margin of error on the gap between two candidates?', back: 'Roughly double the margin for each candidate.' },
      { id: 'c-sta-margin-3', front: 'How does sample size affect margin of error?', back: 'It shrinks with the square root: four times the sample halves the margin.' },
    ],
    related: ['ct-samples'],
    sources: [SRC.pew],
  },
  {
    id: 'sta-significance',
    unit: 'Uncertainty',
    title: 'p-values and significance',
    summary: '"Statistically significant" doesn\'t mean important or true. Here\'s what it does mean.',
    ideas: ['What a p-value is', 'What it isn\'t', 'Effect size matters'],
    body: `
## What a p-value is

Studies compare groups: a new drug versus a placebo, design A versus design B. Groups always differ a bit by chance. A **p-value** asks: **if there were really no effect, how surprising would a difference this big be?**

A p-value of 0.03 means: if there were truly no difference, you'd see a result at least this extreme about 3% of the time by chance alone. By convention, results with p below 0.05 are often called **statistically significant**.

## What it isn't

In 2016, the American Statistical Association issued an unusual public statement because p-values are so widely misunderstood. Among its points:

- A p-value is **not** the probability that the hypothesis is true, or that the result was due to chance.
- Scientific conclusions and decisions **shouldn't rest only** on whether p passes a threshold like 0.05.
- A p-value **doesn't measure the size or importance** of an effect.

The 0.05 line is arbitrary. p = 0.049 and p = 0.051 are practically the same evidence, yet one gets called "significant" and the other "no effect". In 2019, over 800 scientists signed a call in Nature to stop treating results as a simple yes or no based on significance.

Also, if you test enough things, some will be "significant" by chance: test 20 useless treatments and you'd expect about one to pass p < 0.05. Studies that try many analyses and report only the ones that worked are a major source of false findings.

## Effect size matters

Ask **how big** the effect is, not just whether it's significant. With a huge sample, a tiny, meaningless difference can be highly significant. A diet that reduces weight by 100 grams on average might pass p < 0.05 in a big study and still not matter to anyone.

Look for the effect size and its **confidence interval**, and ask whether a difference that big would matter in practice.
`,
    takeaways: [
      'A p-value is how surprising the data would be if there were no real effect.',
      'It isn\'t the probability the hypothesis is true, and 0.05 is an arbitrary line.',
      'Check effect size and confidence intervals; significant isn\'t the same as important.',
    ],
    quiz: [
      {
        q: 'What does p = 0.03 mean?',
        options: ['There\'s a 3% chance the hypothesis is false', 'If there were no effect, a result at least this extreme would occur about 3% of the time', 'The effect is 3% large', 'The study is 97% correct'],
        answer: 1,
        why: 'It\'s about the data under a no-effect assumption, not the hypothesis\'s truth.',
      },
      {
        q: 'A huge study finds a significant but tiny effect. What should you consider?',
        options: ['It must be important', 'Whether the effect size matters in practice', 'That p-values are useless', 'Nothing more'],
        answer: 1,
        why: 'Large samples can make trivial effects statistically significant.',
      },
      {
        q: 'A researcher tests 40 outcomes and reports the two with p < 0.05. What\'s the concern?',
        options: ['Too few outcomes', 'With many tests, a couple will pass by chance alone', 'p-values can\'t be used', 'No concern'],
        answer: 1,
        why: 'Multiple testing inflates false positives.',
      },
    ],
    cards: [
      { id: 'c-sta-significance-1', front: 'What is a p-value?', back: 'The probability of data at least as extreme as observed, if there were no real effect.' },
      { id: 'c-sta-significance-2', front: 'Is p < 0.05 proof an effect is real and important?', back: 'No. It\'s an arbitrary threshold and says nothing about effect size.' },
      { id: 'c-sta-significance-3', front: 'Statistical vs practical significance?', back: 'Statistical: unlikely under no effect. Practical: big enough to matter.' },
    ],
    related: ['ct-causation', 'hea-claims'],
    sources: [SRC.asa, SRC.amrhein],
  },
  {
    id: 'sta-simpson',
    unit: 'Studies and charts',
    title: 'Simpson\'s paradox',
    summary: 'A trend that appears in every group can reverse when the groups are combined.',
    ideas: ['When combining data reverses the story', 'Look for the hidden variable'],
    body: `
## When combining data reverses the story

In 1973, the University of California, Berkeley, appeared to be biased against women in graduate admissions: overall, men were admitted at a noticeably higher rate than women.

But when statisticians Peter Bickel and colleagues looked **department by department**, most departments admitted women at similar or **higher** rates than men. How?

Women had applied more often to departments that were **highly competitive** with low admission rates for everyone, while men had applied more often to departments that admitted most applicants. Combined, the overall numbers suggested bias against women, though within departments there was little or none.

This is **Simpson's paradox**: a pattern that holds within each group can disappear or reverse when the groups are combined, because the groups differ in size and composition.

A medical example: Treatment A has a higher success rate than B for mild cases **and** for severe cases. But overall, B looks better, because doctors gave A mostly to severe cases, which have lower success rates whatever the treatment.

## Look for the hidden variable

Simpson's paradox happens when a third variable, like department or case severity, is linked to both the grouping and the outcome. It's closely related to **confounding**, covered in Critical Thinking.

When you see a comparison:

- Ask whether the groups differ in some important way: age, severity, location, type of customer.
- Look at the breakdown by that variable, if available.
- Decide which level answers your question. For "Is this department biased?", the department-level data is what matters.

There's no rule that the combined or split data is always right. It depends on the causal story, which is why numbers alone can't settle it.
`,
    takeaways: [
      'Simpson\'s paradox: a trend within every group can reverse when groups are combined.',
      'It\'s driven by a hidden variable linked to both group membership and the outcome.',
      'Break data down by likely confounders, and think about which level answers your question.',
    ],
    quiz: [
      {
        q: 'What explained the Berkeley admissions paradox?',
        options: ['Departments were hiding data', 'Women applied more to competitive departments with low admission rates for everyone', 'Men had better grades', 'The data was wrong'],
        answer: 1,
        why: 'Differences in where people applied created the overall gap.',
      },
      {
        q: 'Treatment A beats B for mild and severe cases, but B looks better overall. What\'s the likely cause?',
        options: ['A is actually worse', 'A was given mostly to severe cases, which have lower success rates', 'Random error', 'B is a placebo'],
        answer: 1,
        why: 'The mix of cases differs between treatments.',
      },
      {
        q: 'What\'s the best defence against Simpson\'s paradox?',
        options: ['Always use combined data', 'Break down by variables that might differ between groups, and think about cause', 'Ignore subgroups', 'Use larger samples'],
        answer: 1,
        why: 'Look for the hidden variable driving both group and outcome.',
      },
    ],
    cards: [
      { id: 'c-sta-simpson-1', front: 'What is Simpson\'s paradox?', back: 'A trend appearing in every subgroup that disappears or reverses when the groups are combined.' },
      { id: 'c-sta-simpson-2', front: 'What causes Simpson\'s paradox?', back: 'A hidden variable linked to both group membership and the outcome, so group compositions differ.' },
    ],
    related: ['ct-causation'],
    sources: [SRC.bickel],
  },
  {
    id: 'sta-charts',
    unit: 'Studies and charts',
    title: 'Reading charts critically',
    summary: 'Charts can mislead through axes, timeframes and design. Always look at the data, too.',
    ideas: ['Check the axes', 'Check the timeframe and comparisons', 'Always plot the data'],
    body: `
## Check the axes

- **Truncated y-axis**: a bar chart starting at 95 instead of 0 makes the difference between 96 and 98 look enormous. For **bar charts**, the axis should usually start at zero, since bar length represents the amount. Line charts can reasonably zoom in to show change, but read the scale.
- **Uneven intervals**: gaps between ticks that aren't equal distort trends.
- **Two y-axes**: dual-axis charts can make any two lines look related by stretching scales. Be very sceptical.
- **Log scales**: each step multiplies rather than adds. Useful for growth, but easy to misread if you don't notice.

## Check the timeframe and comparisons

- **Cherry-picked windows**: starting a chart at a peak or trough can create the trend you want. "Shares down 30% since March" might hide that they're up 200% over five years.
- **Missing context**: is a rise unusual, or within normal ups and downs? Compare with previous years.
- **Totals vs rates**: a bigger city has more crime, more doctors and more of everything. Compare **per person** rates.
- **Area and 3D**: pictures scaled in two dimensions exaggerate differences; 3D charts distort proportions.

## Always plot the data

In 1973, statistician Francis Anscombe created four small datasets, now called **Anscombe's quartet**, with nearly identical means, variances, correlations and regression lines. Plotted, they look completely different: one is a neat line, one a curve, one a line with an outlier, and one a vertical cluster with a single extreme point.

The lesson: **summary statistics can hide very different patterns**. Look at the data visually before trusting averages, correlations or trend lines, and be wary of charts that show only a fitted line without the points.
`,
    takeaways: [
      'Check axes: bar charts should start at zero; watch dual axes and log scales.',
      'Watch for cherry-picked timeframes, missing context and totals instead of rates.',
      'Anscombe\'s quartet: identical summary statistics can hide very different data. Plot it.',
    ],
    quiz: [
      {
        q: 'A bar chart\'s y-axis starts at 90, making a rise from 92 to 94 look huge. What\'s the issue?',
        options: ['Nothing', 'A truncated axis exaggerates the difference', 'The bars are the wrong colour', 'It should be a pie chart'],
        answer: 1,
        why: 'Bar length implies amount, so bars should usually start at zero.',
      },
      {
        q: 'A chart shows crime is higher in City A than City B. What should you check?',
        options: ['The colour scheme', 'Whether it\'s per person, since City A may simply be larger', 'The font', 'Nothing'],
        answer: 1,
        why: 'Totals scale with population; rates allow fair comparison.',
      },
      {
        q: 'What does Anscombe\'s quartet show?',
        options: ['All data is normal', 'Datasets with identical summary statistics can look completely different when plotted', 'Correlation proves causation', 'Charts always mislead'],
        answer: 1,
        why: 'Always look at the data, not just the summaries.',
      },
    ],
    practice: 'Find a chart in the news or at work. Check its axes, timeframe and whether it shows totals or rates. Would a different view tell a different story?',
    cards: [
      { id: 'c-sta-charts-1', front: 'Should bar chart axes start at zero?', back: 'Usually yes, because bar length represents the amount.' },
      { id: 'c-sta-charts-2', front: 'What is Anscombe\'s quartet?', back: 'Four datasets with nearly identical summary statistics that look completely different when plotted.' },
      { id: 'c-sta-charts-3', front: 'Totals vs rates in charts?', back: 'Compare per-person rates; totals scale with size.' },
    ],
    related: ['ct-reading-numbers'],
    sources: [SRC.anscombe],
  },
]
