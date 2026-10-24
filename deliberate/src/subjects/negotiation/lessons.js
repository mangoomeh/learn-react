// Sources were checked in October 2026.
const SRC = {
  pon: { title: 'Harvard Program on Negotiation: Principled negotiation, focus on interests to create value', url: 'https://www.pon.harvard.edu/daily/negotiation-skills-daily/principled-negotiation-focus-interests-create-value/' },
  batna: { title: 'Harvard Program on Negotiation: BATNA articles', url: 'https://www.pon.harvard.edu/tag/batna/' },
  galinsky: { title: 'Galinsky & Mussweiler (2001): First offers as anchors', url: 'https://doi.org/10.1037/0022-3514.81.4.657' },
  ames: { title: 'Ames & Mason (2015): Tandem anchoring, informational and politeness effects of range offers', url: 'https://doi.org/10.1037/pspi0000016' },
}

export const lessons = [
  {
    id: 'neg-interests',
    unit: 'Foundations',
    title: 'Interests, not positions',
    summary: 'What people ask for is rarely the whole story. Find out why they want it.',
    ideas: ['Positions vs interests', 'Ask why', 'Separate the people from the problem'],
    body: `
## Positions vs interests

A **position** is what someone says they want. An **interest** is **why** they want it.

A classic story from negotiation teaching: two sisters argue over the last orange. They compromise and cut it in half. One squeezes her half for juice and throws away the peel. The other grates the peel for a cake and throws away the fruit. Both could have had all of what they needed, if they'd asked why.

Arguing over positions turns negotiation into a tug of war: one side's gain is the other's loss. Exploring interests often reveals solutions where both sides do better.

This is the core of **principled negotiation**, from Roger Fisher and William Ury's book *Getting to Yes*, based on work at the Harvard Negotiation Project.

## Ask why

Behind every position are interests like security, money, recognition, control, time or fairness. To find them:

- Ask **"What's important to you about that?"** or **"Help me understand why that matters."**
- Ask **"What would an ideal outcome look like for you?"**
- Share your own interests too, so they can help solve your problem.

A landlord who insists on a rent increase (position) may mainly need reliable payment and less vacancy risk (interests). A tenant who signs a two-year lease and pays on time might be worth more to them than a higher rent with uncertainty.

## Separate the people from the problem

Negotiations get tangled when the relationship and the substance mix: a tough stance on price feels like a personal attack, so people dig in. Fisher and Ury recommend being **soft on the people and hard on the problem**: respectful and friendly, while firm about your interests.

Frame it as working **side by side on a shared problem**, not face to face against each other: "How can we find something that works for both of us?"
`,
    takeaways: [
      'Positions are what people ask for; interests are why they want it.',
      'Ask "What\'s important to you about that?" to uncover interests.',
      'Be soft on the people and hard on the problem.',
    ],
    quiz: [
      {
        q: 'In the orange story, what went wrong?',
        options: ['They should have bought more oranges', 'They split by position instead of discovering their different interests (juice vs peel)', 'One sister was greedy', 'Nothing'],
        answer: 1,
        why: 'Asking why would have let both get everything they needed.',
      },
      {
        q: 'Which question best uncovers interests?',
        options: ['"What\'s your final offer?"', '"What\'s important to you about that?"', '"Why are you being difficult?"', '"Take it or leave it?"'],
        answer: 1,
        why: 'It explores the reasons behind the position.',
      },
      {
        q: 'What does "soft on the people, hard on the problem" mean?',
        options: ['Give in to keep the peace', 'Be respectful to the person while staying firm on your interests', 'Be tough on everyone', 'Avoid negotiation'],
        answer: 1,
        why: 'Keep the relationship warm and the substance firm.',
      },
    ],
    practice: 'Think of a disagreement you\'re in. Write each side\'s position, then at least two interests behind each position.',
    cards: [
      { id: 'c-neg-interests-1', front: 'Positions vs interests?', back: 'Positions are what people demand; interests are the underlying reasons and needs.' },
      { id: 'c-neg-interests-2', front: 'Four principles of Getting to Yes?', back: 'Separate people from the problem; focus on interests; invent options for mutual gain; use objective criteria.' },
    ],
    sources: [SRC.pon],
  },
  {
    id: 'neg-batna',
    unit: 'Foundations',
    title: 'Your BATNA and walk-away point',
    summary: 'Your power in a negotiation comes from what you\'ll do if it fails.',
    ideas: ['BATNA', 'Your walk-away point', 'Improve your BATNA before you negotiate'],
    body: `
## BATNA

**BATNA** stands for **Best Alternative To a Negotiated Agreement**: what you'll do if this negotiation fails. The term comes from *Getting to Yes*.

- Negotiating a salary? Your BATNA might be another job offer, or staying in your current role.
- Selling a car? Your BATNA might be a dealer's trade-in offer.
- Buying a house? Your BATNA might be the second-best house, or continuing to rent.

Your BATNA is your source of power. If you have a strong alternative, you can walk away from a bad deal. If you have none, you're likely to accept almost anything, and the other side may sense it.

## Your walk-away point

From your BATNA, work out your **reservation point** (or walk-away point): the worst deal you'll accept. Anything worse, and you're better off taking your BATNA.

If your BATNA is a job offer at £60,000 with a longer commute you'd value at £3,000 a year, your reservation point for this job might be around £57,000. **Decide it before** the negotiation starts, when you're calm, not in the moment, when anchors and pressure distort judgement.

## Improve your BATNA before you negotiate

The most effective preparation is often improving your alternatives:

- Get a second quote or offer.
- Talk to other suppliers, buyers or employers.
- Work out what you'd really do if this fails, and make that option better.

Also think about **their BATNA**: what happens to them if there's no deal? A company that has spent months recruiting and needs someone to start next month has a weaker alternative than it might admit. The stronger your alternative relative to theirs, the better the deal you can expect.
`,
    takeaways: [
      'BATNA: your best option if this negotiation fails. It\'s your source of power.',
      'Set your walk-away point from your BATNA, before negotiating.',
      'Improve your BATNA in advance, and estimate theirs.',
    ],
    quiz: [
      {
        q: 'What is a BATNA?',
        options: ['Your opening offer', 'Your best alternative if this negotiation fails', 'The other side\'s demand', 'A type of contract'],
        answer: 1,
        why: 'Best Alternative To a Negotiated Agreement.',
      },
      {
        q: 'Why set your walk-away point before negotiating?',
        options: ['It\'s a legal requirement', 'In the moment, pressure and anchors distort judgement', 'So you can share it immediately', 'It doesn\'t matter when'],
        answer: 1,
        why: 'Decide calmly in advance what you won\'t go below.',
      },
      {
        q: 'What usually strengthens your position most?',
        options: ['Talking louder', 'Getting a better alternative, such as a second offer', 'Revealing your walk-away point', 'Rushing to close'],
        answer: 1,
        why: 'A strong BATNA lets you walk away from a bad deal.',
      },
    ],
    practice: 'For a negotiation coming up (pay, a purchase, a deadline), write your BATNA, your walk-away point, and one way to improve your BATNA this week.',
    cards: [
      { id: 'c-neg-batna-1', front: 'What is a BATNA?', back: 'Best Alternative To a Negotiated Agreement: what you\'ll do if no deal is reached.' },
      { id: 'c-neg-batna-2', front: 'What is a reservation (walk-away) point?', back: 'The worst deal you\'ll accept, derived from your BATNA.' },
      { id: 'c-neg-batna-3', front: 'Best way to strengthen a negotiating position?', back: 'Improve your BATNA before negotiating, e.g. get another offer.' },
    ],
    related: ['neg-interests', 'neg-zopa'],
    sources: [SRC.batna],
  },
  {
    id: 'neg-zopa',
    unit: 'Foundations',
    title: 'The bargaining zone',
    summary: 'A deal is possible only where both sides\' walk-away points overlap.',
    ideas: ['The ZOPA', 'Find out where it is'],
    body: `
## The ZOPA

Each side has a walk-away point. The **zone of possible agreement**, or **ZOPA**, is the range between them where a deal is better than both sides' alternatives.

Example: you're selling a used bike.

- Your walk-away point is **£300** (a shop will pay that).
- The buyer's walk-away point is **£450** (a similar new bike would cost more).
- The ZOPA is **£300 to £450**. Any price in that range beats both alternatives.

If the buyer's walk-away point were £250, there'd be **no ZOPA**, and no deal makes sense for both sides. Recognising that early saves time.

Where in the ZOPA you land depends on information, anchors, skill and patience. Most negotiation tactics are about moving the final price within this zone.

## Find out where it is

You know your own walk-away point. The other side's is hidden, and they'll try to hide it. To estimate it:

- **Research**: market prices, salary surveys, comparable sales, published rates.
- **Think about their BATNA**: what will they do without you, and what does that cost them?
- **Ask questions** and listen: "What are you comparing this with?" "What's your timeline?"
- **Watch their reactions** to offers.

Guard your own information: don't reveal your walk-away point. If asked "What's the lowest you'd take?", you can redirect: "I'm looking for a fair price based on what similar bikes sell for, which is around £420."

**Objective criteria**, such as market data or expert valuations, help both sides agree a point in the ZOPA without it becoming a battle of wills.
`,
    takeaways: [
      'The ZOPA is the range between the two walk-away points; no overlap means no deal.',
      'Estimate their walk-away point through research, their BATNA and questions.',
      'Keep your walk-away point private; anchor on objective criteria.',
    ],
    quiz: [
      {
        q: 'Seller\'s walk-away point: £300. Buyer\'s: £450. What\'s the ZOPA?',
        options: ['£0 to £300', '£300 to £450', '£450 and above', 'There is none'],
        answer: 1,
        why: 'Any price between the two walk-away points beats both alternatives.',
      },
      {
        q: 'Seller\'s walk-away: £500. Buyer\'s: £400. What does that mean?',
        options: ['Split the difference at £450', 'There\'s no ZOPA; no deal is better for both', 'The seller should accept £400', 'The buyer must pay £500'],
        answer: 1,
        why: 'Without overlap, no deal beats both sides\' alternatives.',
      },
      {
        q: 'The buyer asks, "What\'s the lowest you\'ll go?" What\'s a good response?',
        options: ['Tell them your walk-away point', 'Redirect to a fair price based on market data', 'Refuse to talk', 'Lower your price immediately'],
        answer: 1,
        why: 'Protect your walk-away point and anchor on objective criteria.',
      },
    ],
    cards: [
      { id: 'c-neg-zopa-1', front: 'What is the ZOPA?', back: 'Zone of possible agreement: the range between both sides\' walk-away points.' },
      { id: 'c-neg-zopa-2', front: 'How do you estimate the other side\'s walk-away point?', back: 'Research market data, consider their BATNA, ask questions, watch reactions.' },
    ],
    related: ['neg-batna', 'neg-anchors'],
  },
  {
    id: 'neg-anchors',
    unit: 'Tactics',
    title: 'First offers and anchors',
    summary: 'The first number on the table pulls the final deal towards it. Use that, and defend against it.',
    ideas: ['First offers anchor the outcome', 'Defending against an anchor'],
    body: `
## First offers anchor the outcome

**Anchoring** is our tendency to rely heavily on the first number we hear. In negotiation, the first offer becomes a reference point that pulls the whole discussion towards it.

In a 2001 study by Adam Galinsky and Thomas Mussweiler, the party who made the first offer tended to get a **better outcome**, and first offers were strongly linked to final prices. Contrary to the common advice "never make the first offer", going first can be an advantage, **if you know enough** to anchor ambitiously but credibly.

A good first offer is:

- **Ambitious**: towards the far end of what's realistic for you, leaving room to concede.
- **Justified**: backed by a reason or objective criteria. "Based on three recent sales on this street, we're asking £420,000."
- **Not absurd**: an offer so extreme it insults the other side can end the conversation or damage trust.

If you know little about the market, let the other side go first, then respond. Being badly wrong with a first offer can cost more than anchoring gains.

## Defending against an anchor

When the other side anchors first, the number will affect you even if you know it's extreme. Galinsky and Mussweiler found a defence: **focusing on the other side's alternatives or your own ideal outcome** removed the anchoring advantage.

- **Don't negotiate from their number.** If it's unreasonable, say so and reset: "That's well outside the market range. Similar roles pay between £65,000 and £75,000."
- **Focus on your own research**, BATNA and target, not on their figure.
- **Make a counteroffer** promptly, so their anchor isn't the only number in play.
`,
    takeaways: [
      'The first offer anchors the negotiation; going first can be an advantage if you\'re well informed.',
      'Make first offers ambitious, justified and not absurd.',
      'Counter an anchor by focusing on your research and alternatives, and counteroffering promptly.',
    ],
    quiz: [
      {
        q: 'What did Galinsky and Mussweiler (2001) find about first offers?',
        options: ['The first mover always loses', 'Making the first offer tended to give a better outcome, and first offers predicted final prices', 'First offers don\'t matter', 'Only buyers should go first'],
        answer: 1,
        why: 'The first number anchors the discussion.',
      },
      {
        q: 'When might you let the other side make the first offer?',
        options: ['Always', 'When you know little about the market and risk anchoring badly', 'Never', 'When you\'re in a hurry'],
        answer: 1,
        why: 'Going first helps only if you know enough to set a good anchor.',
      },
      {
        q: 'The other side opens with an extreme lowball offer. What\'s a good response?',
        options: ['Meet them halfway', 'Reject it as outside the market range and reset with your own justified figure', 'Accept to avoid conflict', 'Make a slightly higher counteroffer near their number'],
        answer: 1,
        why: 'Don\'t negotiate from their anchor; reset with your own.',
      },
    ],
    practice: 'For your next purchase or pay discussion, research a market range and write a justified first offer: the number and the one-sentence reason.',
    cards: [
      { id: 'c-neg-anchors-1', front: 'Anchoring in negotiation?', back: 'The first number tends to pull the final deal towards it.' },
      { id: 'c-neg-anchors-2', front: 'Three features of a good first offer?', back: 'Ambitious, justified with criteria, not absurd.' },
      { id: 'c-neg-anchors-3', front: 'How to defend against an anchor (Galinsky & Mussweiler, 2001)?', back: 'Focus on the other side\'s alternatives or your ideal outcome, reset with your own justified figure.' },
    ],
    related: ['ct-biases-judgement', 'neg-zopa'],
    sources: [SRC.galinsky],
  },
  {
    id: 'neg-concessions',
    unit: 'Tactics',
    title: 'Offers and concessions',
    summary: 'How you move matters as much as where you start.',
    ideas: ['Range offers', 'Concede slowly, and trade', 'Use silence'],
    body: `
## Range offers

Instead of one number, you can offer a range. Daniel Ames and Malia Mason (2015) found that a **bolstering range**, one that starts at your target and goes **above** it ("between £7,000 and £7,500" when your target is £7,000), led to better outcomes than a single number at the target, without seeming less polite.

The catch: the other side will focus on the end of the range that suits them. So the **less favourable end** of your range should still be a number you're happy with. Never give a range whose bottom is below your target.

## Concede slowly, and trade

How you make concessions sends signals:

- **Shrinking concessions** (£1,000, then £500, then £200) signal you're nearing your limit. Big or constant steps suggest there's plenty more to give.
- **Don't concede twice in a row** without a response. If they haven't moved, ask them to.
- **Trade, don't give.** Tie each concession to something in return: "I can do that price if you can pay within 14 days" or "I can start a week earlier if we can agree the higher salary."
- **Label your concessions** so they register: "That's a significant move for us."

Concessions given freely tend to be undervalued and invite requests for more.

## Use silence

After making an offer or hearing one, **stop talking**. People are uncomfortable with silence and often fill it by justifying, softening their position or offering more.

- When you make an offer, state it, give your reason, and wait.
- When you hear an offer you don't like, a pause, or "Hmm, that's lower than I expected", often prompts improvement without your conceding anything.

Patience is a negotiating asset: whoever is in a rush usually concedes more.
`,
    takeaways: [
      'A bolstering range starting at your target can improve outcomes.',
      'Make shrinking concessions, and trade them rather than giving them away.',
      'Silence after an offer often prompts the other side to move.',
    ],
    quiz: [
      {
        q: 'Your target salary is £70,000. Which range follows Ames and Mason\'s findings?',
        options: ['£65,000–70,000', '£70,000–75,000', '£60,000–80,000', '£50,000–70,000'],
        answer: 1,
        why: 'A bolstering range starts at your target; they\'ll focus on the lower end.',
      },
      {
        q: 'What does a pattern of shrinking concessions signal?',
        options: ['You have lots of room', 'You\'re approaching your limit', 'You\'re in a hurry', 'Nothing'],
        answer: 1,
        why: 'Smaller steps suggest less is left to give.',
      },
      {
        q: 'Which is trading a concession rather than giving it?',
        options: ['"Okay, I\'ll lower the price."', '"I can lower the price if you sign a two-year contract."', '"Fine, whatever you want."', '"I\'ll lower it twice."'],
        answer: 1,
        why: 'Each concession gets something in return.',
      },
    ],
    cards: [
      { id: 'c-neg-concessions-1', front: 'What is a bolstering range offer?', back: 'A range starting at your target and going above it; the other side focuses on the lower end.' },
      { id: 'c-neg-concessions-2', front: 'How should concessions be made?', back: 'In shrinking steps, never twice in a row without a response, and traded for something.' },
      { id: 'c-neg-concessions-3', front: 'Why use silence in negotiation?', back: 'People fill silence by softening or offering more.' },
    ],
    related: ['neg-anchors'],
    sources: [SRC.ames],
  },
  {
    id: 'neg-value',
    unit: 'Tactics',
    title: 'Creating value',
    summary: 'Negotiating several issues at once lets both sides win on what they care about most.',
    ideas: ['Expand the pie before dividing it', 'Trade across issues', 'Use objective criteria'],
    body: `
## Expand the pie before dividing it

When a negotiation is about a single number, it's purely **distributive**: every pound you gain, they lose. Most real negotiations involve more issues than that, which allows **integrative** deals that create value for both sides.

A job offer isn't just salary. It might include start date, title, remote days, training budget, holiday, equity, relocation, review timing. A supplier deal might include price, volume, delivery speed, payment terms, contract length and support.

Before haggling over price, list all the issues that could be on the table.

## Trade across issues

Each side values issues differently. That's where value comes from:

- The employer can't raise the salary band but can easily add a training budget or an extra remote day. You care a lot about both.
- The buyer cares most about delivery speed; the supplier cares most about a longer contract. Fast delivery for a two-year commitment makes both better off.

This is called **logrolling**: concede on what matters less to you in exchange for what matters more. To do it:

- Ask about priorities: "Which of these matters most to you?"
- Share yours, at least roughly.
- **Package offers**: propose several issues together rather than settling them one at a time. "£68,000, start on the 1st, three remote days and a £2,000 training budget." Settling issues one by one removes the chance to trade.

## Use objective criteria

When interests genuinely conflict, such as on price, fall back on **objective criteria** that both sides can accept: market rates, published salary data, independent valuations, precedent, what a neutral expert would say. It turns "what I want versus what you want" into "what's fair", which is easier to agree on and less damaging to the relationship.
`,
    takeaways: [
      'Most negotiations have multiple issues; list them all before haggling.',
      'Trade issues you value less for ones you value more (logrolling), using package offers.',
      'Use objective criteria to settle genuine conflicts fairly.',
    ],
    quiz: [
      {
        q: 'Why negotiate several issues at once rather than one at a time?',
        options: ['It\'s faster', 'Packages let both sides trade what they value less for what they value more', 'One at a time is always better', 'It confuses the other side'],
        answer: 1,
        why: 'Settling issues separately removes chances to trade.',
      },
      {
        q: 'An employer can\'t raise the salary. What\'s the best next step?',
        options: ['Accept or walk away immediately', 'Explore other issues, such as start date, remote days, training budget or an early review', 'Insist on salary only', 'Threaten to leave'],
        answer: 1,
        why: 'Other issues may be cheap for them and valuable to you.',
      },
      {
        q: 'Which is an objective criterion?',
        options: ['"I deserve more."', '"Published salary data for this role in this city shows a median of £72,000."', '"My friend earns more."', '"That\'s my final offer."'],
        answer: 1,
        why: 'Independent data both sides can accept.',
      },
    ],
    practice: 'For a negotiation you expect, list every issue that could be on the table. Mark which matter most to you and which you guess matter most to them.',
    cards: [
      { id: 'c-neg-value-1', front: 'Distributive vs integrative negotiation?', back: 'Distributive: dividing a fixed pie. Integrative: creating value across multiple issues.' },
      { id: 'c-neg-value-2', front: 'What is logrolling?', back: 'Trading concessions on issues you value less for gains on issues you value more.' },
      { id: 'c-neg-value-3', front: 'Why package offers?', back: 'Proposing several issues together keeps trades possible.' },
    ],
    related: ['neg-interests'],
    sources: [SRC.pon],
  },
  {
    id: 'neg-salary',
    unit: 'Applying it',
    title: 'Negotiating pay',
    summary: 'Most employers expect you to negotiate. Prepare, anchor with data, and look at the whole package.',
    ideas: ['Prepare with data', 'How to ask', 'Look beyond salary'],
    body: `
## Prepare with data

Many people accept the first offer, often out of fear the offer will be withdrawn. In practice, a polite, well-reasoned request rarely causes that, and recruiters often expect some negotiation.

Before the conversation:

- **Research the market rate** for the role, level and location: salary surveys, job ads with salary ranges, recruiters, people in similar roles.
- **Know your BATNA**: other offers, or your current job.
- **Set your target and walk-away point.**
- **List your value**: specific results, skills and experience relevant to this role.

## How to ask

- **Show enthusiasm** for the role first. You want them to see you as someone they want to make happy, not an adversary.
- **Anchor with a justified number** or bolstering range: "Based on market data for this level and my experience leading payments projects, I was expecting something in the £78,000 to £82,000 range."
- **Don't give the first number too early** if you have no data; ask what the range for the role is. If pressed for your current salary, you can say you'd prefer to focus on the value of this role (and in some places employers can't legally ask).
- **Pause** after stating your number.
- **Get it in writing** once agreed.

For a raise in your current job, the same principles apply: time it well (after a strong result, before budgets are set), bring evidence of your impact and market data, and ask what it would take if the answer is "not now".

## Look beyond salary

If the salary is fixed, negotiate other parts: signing bonus, equity, title, start date, remote work, holiday, training budget, relocation, or an earlier pay review ("Could we review this after six months, against agreed goals?").

Focus on the issues that matter most to you, and package them rather than haggling one at a time.
`,
    takeaways: [
      'Research market rates and know your BATNA before discussing pay.',
      'Show enthusiasm, anchor with a justified number or range, then pause.',
      'If salary is fixed, negotiate bonuses, equity, flexibility or an early review.',
    ],
    quiz: [
      {
        q: 'What\'s the best preparation for a salary negotiation?',
        options: ['Decide on a number that feels right', 'Research market rates, know your BATNA and list your value', 'Ask friends what to say', 'Avoid preparing to seem natural'],
        answer: 1,
        why: 'Data and alternatives give you a justified anchor and power.',
      },
      {
        q: 'Which ask is strongest?',
        options: ['"Can you do any better?"', '"I was hoping for more."', '"Based on market data for this level and my experience, I was expecting £78,000 to £82,000."', '"I need more money."'],
        answer: 2,
        why: 'A justified, specific range anchors the discussion.',
      },
      {
        q: 'The employer says salary is fixed. What could you negotiate instead?',
        options: ['Nothing', 'Signing bonus, start date, remote days or an earlier pay review', 'Only the job title', 'You must accept or decline'],
        answer: 1,
        why: 'Other parts of the package can be valuable.',
      },
    ],
    practice: 'Look up the market range for your current role and location from at least two sources. Write the justified range you\'d ask for.',
    cards: [
      { id: 'c-neg-salary-1', front: 'Three things to prepare for pay negotiation?', back: 'Market rate data, your BATNA, and evidence of your value.' },
      { id: 'c-neg-salary-2', front: 'What to negotiate if salary is fixed?', back: 'Signing bonus, equity, title, start date, flexibility, holiday, training, or an early review.' },
    ],
    related: ['neg-anchors', 'neg-concessions', 'car-interview'],
  },
  {
    id: 'neg-tactics',
    unit: 'Applying it',
    title: 'Hard tactics and emotions',
    summary: 'Recognise pressure tactics so they lose their power, and handle emotions without being run by them.',
    ideas: ['Name the tactic', 'Handle emotions', 'Know when to pause or walk away'],
    body: `
## Name the tactic

Some negotiators use pressure tactics. Recognising them takes away much of their power:

- **Artificial deadlines**: "This price is only valid today." Ask why; real deadlines have reasons.
- **Good cop, bad cop**: one person is tough, the other "on your side". Treat them as one team with one interest.
- **The nibble**: after agreement, "just one more small thing". Treat it as a new request that needs a trade.
- **Higher authority**: "I'd love to, but my manager won't approve it." Ask to involve the decision-maker, or say you'll also need to check your side.
- **Extreme anchors and walkouts**: designed to make you doubt your position. Return to your research and BATNA.

Often the best response is to calmly **name it**: "It sounds like there's a lot of time pressure here. Help me understand why it has to be today." Bad-faith tactics work less well in the open.

## Handle emotions

Negotiations can get heated. Some practical steps:

- **Notice your own emotions** and name them to yourself. Anger and anxiety both push towards bad decisions: giving in, or blowing up a good deal.
- **Acknowledge theirs**: "It sounds like you're frustrated with how long this has taken." Labelling emotions often calms them, as the Stress subject explains.
- **Don't take the bait**: respond to the substance, not the tone.

## Know when to pause or walk away

- **Take a break** when stuck or upset: "Let me think about this and come back to you tomorrow." Few deals need a decision on the spot.
- **Walk away** when the best offer is worse than your BATNA. That's not failure; it's what your preparation was for.
- Leave **politely**. Circumstances change, and the person you walk away from today may come back with a better offer.
`,
    takeaways: [
      'Recognise tactics like artificial deadlines, good cop/bad cop, nibbles and higher authority.',
      'Name tactics calmly; acknowledge emotions and respond to substance.',
      'Pause when stuck, and walk away politely when the deal is worse than your BATNA.',
    ],
    quiz: [
      {
        q: 'After you\'ve agreed a deal, the other side asks for "just one small extra". What\'s this tactic?',
        options: ['Anchoring', 'The nibble', 'Good cop, bad cop', 'Logrolling'],
        answer: 1,
        why: 'Treat it as a new request that requires something in return.',
      },
      {
        q: '"This offer expires at 5pm today." What\'s a good response?',
        options: ['Accept immediately', 'Ask why it has to be today, and decide based on your BATNA', 'Get angry', 'Ignore it completely'],
        answer: 1,
        why: 'Real deadlines have reasons; artificial ones lose force when questioned.',
      },
      {
        q: 'When should you walk away from a negotiation?',
        options: ['When it gets uncomfortable', 'When the best available deal is worse than your BATNA', 'Never', 'After the first offer'],
        answer: 1,
        why: 'Your BATNA tells you when no deal is better than this deal.',
      },
    ],
    cards: [
      { id: 'c-neg-tactics-1', front: 'Four common pressure tactics?', back: 'Artificial deadlines, good cop/bad cop, the nibble, appeals to higher authority.' },
      { id: 'c-neg-tactics-2', front: 'How to respond to a pressure tactic?', back: 'Calmly name it and ask about it; return to your research and BATNA.' },
      { id: 'c-neg-tactics-3', front: 'When to walk away?', back: 'When the best offer is worse than your BATNA.' },
    ],
    related: ['str-naming', 'neg-batna'],
  },
]
