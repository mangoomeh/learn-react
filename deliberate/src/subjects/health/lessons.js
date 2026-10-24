// Sources were checked in October 2026.
const SRC = {
  aasm: { title: 'Watson et al. (2015): Recommended amount of sleep for a healthy adult (AASM and SRS consensus)', url: 'https://doi.org/10.5664/jcsm.4758' },
  vandongen: { title: 'Van Dongen et al. (2003): The cumulative cost of additional wakefulness', url: 'https://doi.org/10.1093/sleep/26.2.117' },
  drake: { title: 'Drake et al. (2013): Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed', url: 'https://doi.org/10.5664/jcsm.3170' },
  ebrahim: { title: 'Ebrahim et al. (2013): Alcohol and sleep I, effects on normal sleep', url: 'https://doi.org/10.1111/acer.12006' },
  nhsSleep: { title: 'NHS: How to get to sleep', url: 'https://www.nhs.uk/live-well/sleep-and-tiredness/how-to-get-to-sleep/' },
  fdaCaffeine: { title: 'US FDA: Spilling the beans, how much caffeine is too much?', url: 'https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much' },
  whoGuidelines: { title: 'Bull et al. (2020): World Health Organization 2020 guidelines on physical activity and sedentary behaviour', url: 'https://doi.org/10.1136/bjsports-2020-102955' },
  whoActivity: { title: 'WHO fact sheet: Physical activity (updated June 2024)', url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity' },
  whoDiet: { title: 'WHO fact sheet: Healthy diet (updated January 2026)', url: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet' },
  hall: { title: 'Hall et al. (2019): Ultra-processed diets cause excess calorie intake and weight gain', url: 'https://doi.org/10.1016/j.cmet.2019.05.008' },
}

export const lessons = [
  {
    id: 'hea-sleep-need',
    unit: 'Sleep',
    title: 'How much sleep you need',
    summary: 'Most adults need at least seven hours, and short sleep impairs you more than you notice.',
    ideas: ['Seven hours or more', 'Sleep debt builds quietly'],
    body: `
> This subject is general education based on public health guidance. It isn't medical advice: if you have a health condition or concern, talk to a doctor.

## Seven hours or more

In 2015, the American Academy of Sleep Medicine and the Sleep Research Society reviewed the evidence and concluded that adults should **regularly sleep seven or more hours a night**. Regularly sleeping less is linked to weight gain, diabetes, high blood pressure, heart disease, depression, weakened immunity, more pain, poorer performance and more accidents.

Some people need more than seven hours, and young adults, people recovering from illness and people catching up on lost sleep may need nine or more. A tiny number of people genuinely need much less, but far more people believe they're in that group than actually are.

A simple sign you're not getting enough: you need an alarm to wake up, then feel sleepy by mid-morning or doze off quickly whenever you sit still.

## Sleep debt builds quietly

In a 2003 study, Van Dongen and colleagues restricted healthy adults to **six hours in bed a night for two weeks**. By the end, their attention and memory performance had declined to levels similar to people kept awake for **one to two nights in a row**.

The worrying part: the six-hour group **reported feeling only slightly sleepy**. Their performance kept falling while their sense of how tired they were levelled off. People adapt to feeling tired, not to being impaired.

So "I'm used to six hours" is not good evidence that six hours is enough. If you're unsure, try a week of consistent eight-hour sleep opportunities and notice the difference in focus and mood.
`,
    takeaways: [
      'Adults should regularly sleep seven or more hours a night.',
      'Two weeks of six hours a night impaired performance like one to two nights of no sleep.',
      'People underestimate how impaired they are by chronic short sleep.',
    ],
    quiz: [
      {
        q: 'What do the AASM and SRS recommend for adults?',
        options: ['At least 5 hours', 'At least 7 hours, regularly', 'Exactly 8 hours', 'Whatever feels fine'],
        answer: 1,
        why: 'Their 2015 consensus is seven or more hours a night on a regular basis.',
      },
      {
        q: 'In Van Dongen et al. (2003), what happened to people sleeping six hours a night for two weeks?',
        options: ['Nothing; they adapted', 'Their performance declined to levels like one to two nights of total sleep loss, while they felt only slightly sleepy', 'They became more alert', 'They slept more on weekends and recovered'],
        answer: 1,
        why: 'Performance kept falling while self-rated sleepiness levelled off.',
      },
      {
        q: 'Why isn\'t "I feel fine on six hours" good evidence?',
        options: ['Feelings never matter', 'People adapt to feeling tired but not to being impaired', 'Everyone needs nine hours', 'Six hours is too much'],
        answer: 1,
        why: 'Subjective sleepiness stops tracking actual impairment.',
      },
    ],
    cards: [
      { id: 'c-hea-sleep-need-1', front: 'Recommended sleep for adults (AASM/SRS 2015)?', back: 'Seven or more hours a night, regularly.' },
      { id: 'c-hea-sleep-need-2', front: 'Effect of 6 hours a night for 2 weeks (Van Dongen 2003)?', back: 'Performance fell to levels like 1–2 nights of total sleep deprivation, while people felt only slightly sleepy.' },
    ],
    inTheWild: [
      'Pulling late nights before deadlines',
      'Feeling fine on short sleep but making more mistakes',
    ],
    sources: [SRC.aasm, SRC.vandongen],
  },
  {
    id: 'hea-sleep-habits',
    unit: 'Sleep',
    title: 'Better sleep habits',
    summary: 'Consistent timing, light at the right times, and care with caffeine and alcohol.',
    ideas: ['Keep a regular schedule and get morning light', 'Caffeine lasts longer than you think', 'Alcohol disrupts sleep'],
    body: `
## Keep a regular schedule and get morning light

Your body clock runs on a roughly 24-hour rhythm, and it's set mainly by **light**. Bright light in the morning helps you feel alert during the day and sleepy at night; bright light late in the evening pushes your clock later.

- Go to bed and get up at **similar times every day**, including weekends.
- Get outside in daylight in the morning if you can.
- Dim lights in the hour before bed, and keep the bedroom dark, quiet and cool.
- If you can't sleep after about 20 minutes, get up and do something calm in dim light until you feel sleepy.

## Caffeine lasts longer than you think

Caffeine blocks a chemical that builds sleep pressure. It takes about five hours on average for your body to clear **half** of a dose, though this varies widely between people.

In a 2013 study by Drake and colleagues, a large dose of caffeine taken **six hours before bed** still reduced total sleep by **more than an hour**, and people often didn't notice. An afternoon coffee can be affecting your night.

The US FDA says up to about **400 mg a day**, roughly two to three mugs of brewed coffee, isn't generally associated with harmful effects in healthy adults. For sleep, timing matters as much as the total: many people do better with a cut-off around midday or early afternoon.

## Alcohol disrupts sleep

Alcohol can help you fall asleep faster, which is why people use it as a nightcap. But a 2013 review by Ebrahim and colleagues found it **disrupts the second half of the night** and reduces REM sleep. You may sleep the hours but wake less rested.
`,
    takeaways: [
      'Keep consistent sleep times and get bright light in the morning, dim light at night.',
      'Caffeine six hours before bed can still cut sleep by over an hour.',
      'Alcohol speeds falling asleep but disrupts later sleep.',
    ],
    quiz: [
      {
        q: 'What mainly sets your body clock?',
        options: ['Food', 'Light', 'Exercise', 'Temperature'],
        answer: 1,
        why: 'Light, especially morning light, is the main signal for your circadian rhythm.',
      },
      {
        q: 'In Drake et al. (2013), what did caffeine taken six hours before bed do?',
        options: ['Nothing', 'Reduced total sleep by more than an hour', 'Improved sleep', 'Only affected dreams'],
        answer: 1,
        why: 'Even six hours before bed, it cut sleep by over an hour.',
      },
      {
        q: 'Why is a nightcap a poor sleep aid?',
        options: ['It keeps you awake at first', 'It helps you fall asleep but disrupts the second half of the night', 'It has no effect', 'It improves REM sleep'],
        answer: 1,
        why: 'Alcohol fragments later sleep and reduces REM.',
      },
    ],
    practice: 'For one week, keep the same wake-up time every day, including weekends, and stop caffeine by early afternoon. Note how you feel.',
    cards: [
      { id: 'c-hea-sleep-habits-1', front: 'Two light habits for better sleep?', back: 'Bright light (ideally daylight) in the morning; dim light in the evening.' },
      { id: 'c-hea-sleep-habits-2', front: 'How long does caffeine affect sleep?', back: 'Its half-life averages about five hours; a dose six hours before bed can cut sleep by over an hour.' },
      { id: 'c-hea-sleep-habits-3', front: 'What does alcohol do to sleep?', back: 'Speeds sleep onset but disrupts the second half of the night and reduces REM sleep.' },
    ],
    related: ['hea-sleep-need'],
    sources: [SRC.nhsSleep, SRC.drake, SRC.fdaCaffeine, SRC.ebrahim],
  },
  {
    id: 'hea-activity',
    unit: 'Movement',
    title: 'How much activity',
    summary: 'The WHO targets, what counts as moderate, and why any amount helps.',
    ideas: ['The weekly targets', 'Moderate vs vigorous', 'Something beats nothing'],
    body: `
## The weekly targets

The World Health Organization's 2020 guidelines recommend that adults do:

- **150–300 minutes a week of moderate** aerobic activity, **or 75–150 minutes of vigorous** activity, or a mix.
- **Muscle-strengthening** activities that work all major muscle groups on **two or more days** a week.
- **Less sitting**, replacing sedentary time with activity of any intensity.

According to the WHO, about **31% of adults** worldwide don't meet the aerobic target.

Regular activity lowers the risk of heart disease, stroke, type 2 diabetes, several cancers, depression and anxiety, and improves sleep, thinking and mood.

## Moderate vs vigorous

A simple guide is the **talk test**:

- **Moderate**: you can talk but not sing. Brisk walking, cycling on flat ground, gardening, doubles tennis.
- **Vigorous**: you can only say a few words before pausing for breath. Running, swimming laps, fast cycling, football.

One minute of vigorous activity is roughly worth two of moderate. So 150 minutes of brisk walking or 75 minutes of running both meet the minimum.

## Something beats nothing

The guidelines changed in 2020 to drop an old rule that activity only counted in bouts of at least ten minutes. **All movement counts.** Taking the stairs, walking to the shops and carrying shopping all add up.

The biggest health gains come from going from **doing nothing to doing a little**. If 150 minutes sounds impossible, start with ten minutes of walking a day and build up. More is better, up to a point, but the first steps are worth the most.
`,
    takeaways: [
      'WHO: 150–300 min moderate or 75–150 min vigorous a week, plus strength on 2+ days.',
      'Talk test: moderate means you can talk but not sing.',
      'All movement counts, and the biggest gains come from doing something rather than nothing.',
    ],
    quiz: [
      {
        q: 'What do WHO guidelines recommend for adults\' aerobic activity?',
        options: ['30 minutes a month', '150–300 minutes of moderate or 75–150 of vigorous a week', 'Two hours a day', '10,000 steps exactly'],
        answer: 1,
        why: 'That range, plus strength work on two or more days.',
      },
      {
        q: 'During brisk walking you can talk but not sing. What intensity is that?',
        options: ['Light', 'Moderate', 'Vigorous', 'Maximal'],
        answer: 1,
        why: 'That\'s the talk test for moderate intensity.',
      },
      {
        q: 'Where are the biggest health gains from activity?',
        options: ['Going from a little to a lot', 'Going from nothing to a little', 'Only above 300 minutes a week', 'Only from vigorous exercise'],
        answer: 1,
        why: 'The first increments of activity bring the largest benefit.',
      },
    ],
    cards: [
      { id: 'c-hea-activity-1', front: 'WHO adult activity guidelines?', back: '150–300 min/week moderate or 75–150 vigorous, muscle strengthening on 2+ days, and less sitting.' },
      { id: 'c-hea-activity-2', front: 'The talk test?', back: 'Moderate: you can talk but not sing. Vigorous: only a few words before pausing for breath.' },
      { id: 'c-hea-activity-3', front: 'Does activity need to be in 10-minute bouts?', back: 'No. Since 2020, WHO says all movement counts.' },
    ],
    sources: [SRC.whoGuidelines, SRC.whoActivity],
  },
  {
    id: 'hea-strength',
    unit: 'Movement',
    title: 'Strength and sitting less',
    summary: 'Muscle matters for long-term health, and long stretches of sitting are worth breaking up.',
    ideas: ['Why strength training matters', 'Break up sitting'],
    body: `
## Why strength training matters

Many people think of exercise as cardio, but the WHO also recommends **muscle-strengthening activity on two or more days a week**. Strength work helps keep muscles and bones strong, supports blood sugar control, and makes everyday tasks easier. From middle age, people lose muscle gradually unless they use it, and that loss is a major reason older people lose independence.

You don't need a gym:

- **Bodyweight**: squats, push-ups (against a wall or table if needed), lunges, planks.
- **Resistance bands** or household items like water bottles.
- **Everyday heavy tasks**: carrying shopping, gardening, climbing stairs.

The key principle is **progressive overload**: gradually make it harder (more repetitions, more weight, slower movements) as you get stronger. A good working rule is to finish each set feeling you could have done only a couple more repetitions with good form.

Start light, learn the movements properly, and build up. Soreness for a day or two after a new exercise is normal; sharp pain isn't.

## Break up sitting

Separately from exercise, spending long uninterrupted periods sitting is linked to poorer health. The WHO guidelines advise adults to **limit sedentary time** and replace it with activity of any intensity, and note that doing more than the minimum activity can help offset the risks of a lot of sitting.

Practical ways to move more in a desk-based day:

- Stand up and move for a minute or two every half hour or so.
- Take calls standing or walking.
- Walk to talk to a colleague instead of messaging.
- Use a timer or a habit stack: "after each meeting, I'll walk to refill my water."
`,
    takeaways: [
      'Do muscle-strengthening activity on two or more days a week; bodyweight works.',
      'Progressive overload: make it gradually harder as you get stronger.',
      'Break up long periods of sitting with movement of any intensity.',
    ],
    quiz: [
      {
        q: 'How often does WHO recommend muscle-strengthening activity?',
        options: ['Never', 'Two or more days a week', 'Once a month', 'Every day for an hour'],
        answer: 1,
        why: 'Two or more days, working all major muscle groups.',
      },
      {
        q: 'What is progressive overload?',
        options: ['Lifting as much as possible on day one', 'Gradually making exercises harder as you get stronger', 'Exercising when injured', 'Doing only cardio'],
        answer: 1,
        why: 'Steady increases in challenge drive continued improvement.',
      },
      {
        q: 'You work at a desk all day and exercise three times a week. What else does WHO guidance suggest?',
        options: ['Nothing; you\'ve met the target', 'Also limit sedentary time by breaking up long sitting', 'Stop exercising', 'Sit more on rest days'],
        answer: 1,
        why: 'Reducing sitting is a separate recommendation from exercise.',
      },
    ],
    practice: 'Add a ten-minute bodyweight routine (squats, wall or table push-ups, a plank) to two days this week, and set a reminder to stand up every half hour at work.',
    cards: [
      { id: 'c-hea-strength-1', front: 'Why does strength training matter for long-term health?', back: 'Keeps muscle and bone strong, supports blood sugar control, and preserves independence with age.' },
      { id: 'c-hea-strength-2', front: 'What is progressive overload?', back: 'Gradually increasing the challenge (reps, weight, tempo) as you get stronger.' },
    ],
    related: ['hea-activity'],
    sources: [SRC.whoGuidelines],
  },
  {
    id: 'hea-start',
    unit: 'Movement',
    title: 'Starting and sticking with exercise',
    summary: 'The best exercise is one you\'ll actually keep doing.',
    ideas: ['Choose what you\'ll enjoy', 'Start easier than you think', 'Build it into your week'],
    body: `
## Choose what you'll enjoy

Long-term, consistency matters far more than picking the perfect workout. People stick with activities they **enjoy** or that fit their life, so start there:

- Like being social? Try a team sport, a running club or a dance class.
- Prefer solitude? Walking, cycling or swimming with a podcast.
- Short of time? Active commuting, or short home workouts.
- Like goals? Sign up for a 5k or a charity walk a few months away.

It's fine to try several things. Treat the first month as an experiment.

## Start easier than you think

A common mistake is starting too hard: a long, intense session after months of nothing, followed by days of soreness and no wish to repeat it. Start at a level that feels **comfortably easy**, then increase gradually, by roughly 10% a week in time or distance.

If you have a heart condition, other health problems, chest pain, or dizziness on exertion, check with a doctor before starting vigorous exercise. For most people, starting with walking is safe.

## Build it into your week

Everything from the Habits subject applies:

- **Fixed times**: "Tuesday and Thursday at 7am, Saturday at 10am." Put them in your calendar.
- **Lower friction**: clothes laid out, bag packed, a gym on your commute.
- **Tiny minimum**: on bad days, a ten-minute walk still counts and keeps the habit alive.
- **Plan for obstacles**: "If it's raining, I'll do the indoor routine."

Expect missed sessions. What matters is the pattern over months, not any single week.
`,
    takeaways: [
      'Pick activities you enjoy or that fit your life; consistency beats optimisation.',
      'Start comfortably easy and increase gradually.',
      'Use fixed times, low friction and a tiny minimum to make it a habit.',
    ],
    quiz: [
      {
        q: 'What matters most for the long-term benefits of exercise?',
        options: ['Finding the scientifically optimal workout', 'Doing something you\'ll stick with consistently', 'Exercising as hard as possible', 'Buying good equipment'],
        answer: 1,
        why: 'An activity you keep doing beats a perfect one you quit.',
      },
      {
        q: 'Someone inactive for a year wants to start running. What\'s the best first week?',
        options: ['A 10k run to test themselves', 'Easy walk-run sessions that feel comfortable', 'Running every day until exhausted', 'Wait until they feel fitter'],
        answer: 1,
        why: 'Start comfortably easy and increase gradually to avoid soreness and injury.',
      },
      {
        q: 'Which habit strategy helps most with exercise?',
        options: ['Exercise when you feel like it', 'Fixed times in your calendar, with a tiny fallback for bad days', 'Only exercise on perfect days', 'Change the schedule every week'],
        answer: 1,
        why: 'Stable cues and a small minimum keep the habit going.',
      },
    ],
    practice: 'Choose one activity to try this week, schedule three specific times for it, and write your "bad day" minimum version.',
    cards: [
      { id: 'c-hea-start-1', front: 'Best type of exercise for health?', back: 'One you enjoy enough to do consistently.' },
      { id: 'c-hea-start-2', front: 'How fast should you increase training?', back: 'Gradually: start comfortably easy and add roughly 10% a week.' },
    ],
    related: ['hab-tiny', 'hab-intentions', 'hea-activity'],
  },
  {
    id: 'hea-food',
    unit: 'Food',
    title: 'Eating basics',
    summary: 'The core of healthy eating hasn\'t changed much: plenty of plants, less sugar and salt.',
    ideas: ['The WHO basics', 'Mostly whole foods', 'Read labels for sugar and salt'],
    body: `
## The WHO basics

Nutrition headlines change weekly, but the core advice from the World Health Organization is stable:

- Eat **at least 400 g of fruit and vegetables a day**, about five portions (potatoes don't count).
- Keep **free sugars below 10% of daily energy**, about 50 g or 12 teaspoons for an average adult, and below 5% for extra benefit. Free sugars include sugar added to food and drinks, plus the sugar in honey, syrups and fruit juice.
- Keep **total fat at or below 30%** of energy, with saturated fat under 10% and as little industrially produced trans fat as possible. Prefer unsaturated fats: nuts, seeds, olive oil, oily fish.
- Eat **less than 5 g of salt a day**, about a teaspoon. Most salt comes from processed food, bread and restaurant meals, not the salt shaker.
- Include wholegrains, legumes (beans, lentils, chickpeas), and nuts.

## Mostly whole foods

A practical summary: build most meals around **minimally processed foods**, such as vegetables, fruit, wholegrains, beans, nuts, eggs, fish, meat, and plain dairy, and treat sugary drinks, sweets and heavily processed snacks as occasional.

You don't need to be perfect or follow a named diet. Patterns matter more than single foods: no one meal makes or breaks your health.

## Read labels for sugar and salt

Sugar and salt hide in foods that don't taste sweet or salty: bread, sauces, cereals, soups, flavoured yoghurts. Checking labels on things you buy regularly is an easy win.

- Compare products per 100 g to see which has less.
- Sugary drinks are one of the largest sources of free sugar for many people. Swapping them for water is one of the simplest changes with a big effect.
`,
    takeaways: [
      'WHO: 400 g+ fruit and veg daily, free sugars under 10% of energy, salt under 5 g.',
      'Build meals mostly from minimally processed foods; patterns matter more than single foods.',
      'Check labels for hidden sugar and salt; sugary drinks are an easy swap.',
    ],
    quiz: [
      {
        q: 'How much fruit and vegetables does WHO recommend daily?',
        options: ['At least 100 g', 'At least 400 g', 'Exactly 1 kg', 'None needed'],
        answer: 1,
        why: 'At least 400 g, about five portions.',
      },
      {
        q: 'Which counts as free sugar under WHO guidance?',
        options: ['Sugar in a whole apple', 'Sugar in fruit juice', 'Sugar naturally in plain milk', 'Starch in potatoes'],
        answer: 1,
        why: 'Free sugars include added sugars plus sugar in honey, syrups and fruit juices.',
      },
      {
        q: 'Where does most salt in a typical diet come from?',
        options: ['The salt shaker at home', 'Processed food, bread and restaurant meals', 'Fresh vegetables', 'Water'],
        answer: 1,
        why: 'Most salt is already in food before it reaches you.',
      },
    ],
    practice: 'Check the labels of three foods you buy every week for sugar and salt per 100 g. Find a lower option for one of them.',
    cards: [
      { id: 'c-hea-food-1', front: 'WHO daily targets for fruit/veg, free sugar and salt?', back: '400 g+ fruit and veg; free sugars under 10% of energy (ideally 5%); under 5 g salt.' },
      { id: 'c-hea-food-2', front: 'What are free sugars?', back: 'Sugars added to food and drinks, plus those in honey, syrups and fruit juices.' },
    ],
    sources: [SRC.whoDiet],
  },
  {
    id: 'hea-energy',
    unit: 'Food',
    title: 'Energy balance and fullness',
    summary: 'Weight depends on energy in and out, but what you eat strongly affects how much you eat.',
    ideas: ['Energy in, energy out', 'Ultra-processed food and overeating', 'Foods that keep you full'],
    body: `
## Energy in, energy out

Over time, body weight changes when the energy you take in from food differs from the energy you use. That principle is simple; acting on it isn't, because appetite, sleep, stress, medication, genetics and environment all affect how much you eat and burn.

Two common misconceptions:

- **Exercise alone rarely produces big weight loss**: a 30-minute run might burn 300 kcal, about one pastry. Exercise has huge health benefits regardless of weight, but changes in eating usually matter more for weight.
- **No single food or nutrient** makes you gain or lose weight by itself. Total intake over weeks matters.

## Ultra-processed food and overeating

**Ultra-processed foods** are industrial products made mostly from refined ingredients and additives: many packaged snacks, sweets, soft drinks, instant noodles, reconstituted meats.

In a 2019 trial, Kevin Hall and colleagues housed 20 adults in a research centre for four weeks. For two weeks they ate an ultra-processed diet, and for two weeks a minimally processed one, matched for calories, sugar, fat, fibre and salt **on offer**, and could eat as much as they wanted. On the ultra-processed diet, they ate about **500 kcal more per day** and gained weight; on the minimally processed diet, they lost weight.

It was a small study, but it showed in a controlled setting that the type of food can change how much people eat. Ultra-processed food tends to be eaten faster and is easy to overeat.

## Foods that keep you full

Meals higher in **protein**, **fibre** and **water** tend to be more filling per calorie: vegetables, fruit, beans, lentils, wholegrains, eggs, fish, yoghurt. Eating slowly gives fullness signals time to arrive.
`,
    takeaways: [
      'Weight follows energy balance, but many factors affect intake and expenditure.',
      'In a controlled trial, an ultra-processed diet led people to eat about 500 kcal more a day.',
      'Protein, fibre and water-rich foods are more filling per calorie.',
    ],
    quiz: [
      {
        q: 'Why does exercise alone rarely produce large weight loss?',
        options: ['Exercise doesn\'t burn energy', 'The energy burned is modest compared with what\'s easily eaten', 'Exercise causes weight gain', 'It always does'],
        answer: 1,
        why: 'A run might burn about as much as a pastry. Exercise is valuable for health regardless.',
      },
      {
        q: 'In Hall et al. (2019), what happened on the ultra-processed diet?',
        options: ['People ate about the same', 'People ate about 500 kcal more per day and gained weight', 'People lost weight', 'People felt less hungry'],
        answer: 1,
        why: 'Even with matched nutrients on offer, they ate more and gained weight.',
      },
      {
        q: 'Which breakfast is likely to keep you fuller for longer?',
        options: ['A sugary cereal and juice', 'Eggs with wholegrain toast and fruit', 'A pastry', 'A soft drink'],
        answer: 1,
        why: 'Protein, fibre and water increase fullness per calorie.',
      },
    ],
    cards: [
      { id: 'c-hea-energy-1', front: 'What drives weight change over time?', back: 'Energy balance: intake vs expenditure, influenced by appetite, sleep, stress, genetics and environment.' },
      { id: 'c-hea-energy-2', front: 'Hall et al. (2019) ultra-processed trial result?', back: 'People ate about 500 kcal/day more on the ultra-processed diet and gained weight.' },
      { id: 'c-hea-energy-3', front: 'What makes food more filling per calorie?', back: 'Protein, fibre and water.' },
    ],
    related: ['hea-food'],
    sources: [SRC.hall],
  },
  {
    id: 'hea-claims',
    unit: 'Food',
    title: 'Judging health claims',
    summary: 'How to tell solid health advice from hype, supplements and single studies.',
    ideas: ['One study isn\'t the answer', 'Check who benefits and how big the effect is', 'Supplements and miracle fixes'],
    body: `
## One study isn't the answer

Headlines love "coffee prevents cancer" one week and "coffee causes cancer" the next. Individual studies vary by chance, method and population. Ask:

- Is this **one study** or a **review of many**? Systematic reviews and guidelines from bodies like the WHO weigh all the evidence.
- Was it in **humans**? Results in mice or cells often don't translate.
- Was it an **experiment** (randomised trial) or an **observational** study? Observational studies find links, not causes: people who drink red wine may also be wealthier and eat better.
- **How many people**? Small studies are noisy.

## Check who benefits and how big the effect is

- "Cuts risk by 50%" sounds big, but if the risk goes from 2 in 10,000 to 1 in 10,000, the absolute change is tiny. Look for **absolute numbers**.
- Is the person making the claim **selling** the product?
- Do testimonials replace evidence? "It worked for me" can't tell you whether it would have happened anyway.

## Supplements and miracle fixes

For most healthy people eating a varied diet, supplements add little. There are important exceptions, such as folic acid before and in early pregnancy, vitamin B12 for vegans, and vitamin D in some countries in winter, so follow your national health service's guidance and ask a doctor or pharmacist.

Be wary of anything promising fast, effortless results: detoxes (your liver and kidneys already do this), fat-burning pills, or one superfood. The unglamorous basics, which are sleep, movement, plants and not smoking, have by far the strongest evidence.

The Critical Thinking subject goes deeper on causation and base rates, and Statistics on reading risk.
`,
    takeaways: [
      'Prefer reviews and guidelines over single studies; check human, experimental and sample size.',
      'Ask for absolute risk and who profits from the claim.',
      'Most healthy people need few supplements; be wary of quick fixes.',
    ],
    quiz: [
      {
        q: 'A headline says a food "halves cancer risk", based on one observational study. What\'s the best response?',
        options: ['Start eating it daily', 'Treat it as a weak signal: observational, single study, and check the absolute risk', 'Assume it\'s false', 'Share it widely'],
        answer: 1,
        why: 'One observational study shows a link at best; absolute numbers show whether it matters.',
      },
      {
        q: 'Why are observational studies weak evidence of cause?',
        options: ['They use too many people', 'Other differences between groups (confounders) can explain the link', 'They\'re always wrong', 'They only study animals'],
        answer: 1,
        why: 'People who choose a habit often differ in other ways that affect health.',
      },
      {
        q: 'Which claim deserves the most scepticism?',
        options: ['WHO guidance on fruit and vegetables', 'A product sold by the influencer promoting it, promising detox in 3 days', 'Advice to get seven hours of sleep', 'A systematic review of exercise'],
        answer: 1,
        why: 'A financial interest plus a fast, effortless promise is a red flag.',
      },
    ],
    practice: 'Find a recent health headline. Check: one study or a review? Humans? Experiment or observational? Absolute risk? Write your verdict in two sentences.',
    cards: [
      { id: 'c-hea-claims-1', front: 'Four questions to ask about a health study?', back: 'One study or a review? Humans? Experimental or observational? How many people?' },
      { id: 'c-hea-claims-2', front: 'Relative vs absolute risk in health claims?', back: '"Halves risk" may mean 2 in 10,000 to 1 in 10,000. Ask for absolute numbers.' },
      { id: 'c-hea-claims-3', front: 'Do most healthy people need supplements?', back: 'Generally not, with exceptions such as folic acid in pregnancy and B12 for vegans. Follow national guidance.' },
    ],
    related: ['ct-causation', 'ct-reading-numbers'],
  },
]
