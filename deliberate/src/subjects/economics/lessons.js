// Sources were checked in October 2026.
const SRC = {
  hanoi: { title: 'Atlas Obscura: The Great Hanoi Rat Massacre of 1902', url: 'https://www.atlasobscura.com/articles/hanoi-rat-massacre-1902' },
  ricardo: { title: 'Econlib: Comparative advantage', url: 'https://www.econlib.org/library/Enc/ComparativeAdvantage.html' },
  imfExternalities: { title: 'IMF Finance & Development: Externalities, prices do not capture all costs', url: 'https://www.imf.org/external/pubs/ft/fandd/basics/38-externalities.htm' },
  fed2: { title: 'Federal Reserve: Why does the Federal Reserve aim for inflation of 2 percent over the longer run?', url: 'https://www.federalreserve.gov/faqs/economy_14400.htm' },
  boe: { title: 'Bank of England: Monetary policy', url: 'https://www.bankofengland.co.uk/monetary-policy' },
  nber: { title: 'NBER: Business cycle dating', url: 'https://www.nber.org/research/business-cycle-dating' },
}

export const lessons = [
  {
    id: 'eco-incentives',
    unit: 'Thinking like an economist',
    title: 'Incentives matter',
    summary: 'People respond to rewards and costs, often in ways the designer didn\'t intend.',
    ideas: ['People respond to incentives', 'Perverse incentives'],
    body: `
## People respond to incentives

An **incentive** is anything that makes an action more or less attractive: prices, wages, taxes, fines, rewards, praise, convenience. The core insight of economics is that **people respond to incentives**, so changing them changes behaviour.

- A tax on sugary drinks raises their price, so people buy fewer.
- A bonus for sales makes salespeople push harder, and maybe cut corners.
- Free parking at work encourages driving; charging for it encourages other ways to commute.

Incentives aren't only about money. Status, time, effort, guilt and social approval all count. A small fee for plastic bags cut their use sharply in many countries, far more than the money involved would suggest, partly because it changed the default and the social norm.

## Perverse incentives

A **perverse incentive** produces the opposite of what was intended.

In 1902, the French colonial government in Hanoi, facing a plague of rats, paid a bounty for each rat tail handed in. Thousands of tails arrived. Then officials noticed tailless rats in the streets: people were cutting off tails and releasing the rats to breed. Some reportedly began farming rats. The scheme was dropped.

Modern versions are everywhere:

- Paying programmers per line of code rewards bloated code.
- Judging hospitals only on death rates can discourage them from taking the sickest patients.
- Rewarding support staff for closing tickets quickly encourages closing tickets that aren't solved.

This is closely related to Goodhart's law, covered in Decision Making: when a measure becomes a target, people optimise the measure instead of the goal. Before designing a reward, ask: **"How could someone get the reward without doing what I actually want?"**
`,
    takeaways: [
      'People respond to incentives, which include money, time, status and norms.',
      'Perverse incentives produce the opposite of what was intended.',
      'Ask how someone could earn the reward without achieving the real goal.',
    ],
    quiz: [
      {
        q: 'What happened with the 1902 Hanoi rat bounty?',
        options: ['Rats were eliminated', 'People cut off tails and released rats to breed, so the scheme backfired', 'Nobody participated', 'The bounty was too low'],
        answer: 1,
        why: 'Paying for tails rewarded tails, not fewer rats.',
      },
      {
        q: 'Which is a perverse incentive?',
        options: ['A discount for paying early', 'Paying programmers per line of code written', 'A fine for littering', 'A bonus for customer satisfaction scores verified by surveys'],
        answer: 1,
        why: 'It rewards more code, not better code.',
      },
      {
        q: 'What question helps avoid perverse incentives?',
        options: ['How big should the reward be?', 'How could someone get the reward without doing what I actually want?', 'Who will pay for it?', 'Is it legal?'],
        answer: 1,
        why: 'It surfaces gaming before it happens.',
      },
    ],
    practice: 'Think of a target or reward at your work or school. Write two ways someone could hit it without achieving the real goal.',
    cards: [
      { id: 'c-eco-incentives-1', front: 'What is an incentive?', back: 'Anything that makes an action more or less attractive: price, reward, cost, time, status, norms.' },
      { id: 'c-eco-incentives-2', front: 'What is a perverse incentive?', back: 'An incentive that produces the opposite of the intended result, like the Hanoi rat-tail bounty.' },
    ],
    related: ['dm-second-order'],
    sources: [SRC.hanoi],
  },
  {
    id: 'eco-margin',
    unit: 'Thinking like an economist',
    title: 'Thinking at the margin',
    summary: 'Good decisions compare the extra benefit of one more unit with its extra cost.',
    ideas: ['Marginal benefit vs marginal cost', 'Diminishing returns', 'Ignore sunk costs'],
    body: `
## Marginal benefit vs marginal cost

Most decisions aren't all-or-nothing; they're about **a bit more or a bit less**. Should I study one more hour? Should the café hire one more person? Should the city add one more bus route?

Economists call this thinking **at the margin**: compare the **marginal benefit** (the extra gain from one more unit) with the **marginal cost** (the extra cost of that unit). Keep going while the extra benefit exceeds the extra cost.

A café owner shouldn't ask "Are staff valuable?" (obviously yes) but "Would **one more** person on Saturdays bring in more extra sales than their wages?"

## Diminishing returns

Marginal benefits usually **shrink** as you do more. The first coffee of the day is wonderful; the fourth, not so much. The first hour of revision helps a lot; the eighth in a row helps much less. Adding a third cook to a small kitchen helps; adding a tenth just gets in the way.

This is the law of **diminishing marginal returns**, and it's why the best amount of almost anything is somewhere in the middle, not "as much as possible".

## Ignore sunk costs

A **sunk cost** is money, time or effort already spent that you can't get back. Since it's gone whatever you decide, it shouldn't affect your choice. Only future costs and benefits matter.

> You've paid £50 for a concert ticket, but you're ill and the weather is terrible. The £50 is gone either way. The only question is: would going tonight be better than staying home?

People often continue failing projects because "we've already invested so much". The Critical Thinking subject covers this as the sunk cost fallacy. Thinking at the margin is the fix: ask what the **next** pound or hour will achieve.
`,
    takeaways: [
      'Decide by comparing the marginal benefit of one more unit with its marginal cost.',
      'Marginal benefits usually diminish, so the best amount is rarely the maximum.',
      'Sunk costs are gone whatever you decide; only future costs and benefits matter.',
    ],
    quiz: [
      {
        q: 'A café is deciding whether to hire one more weekend worker. What\'s the right comparison?',
        options: ['Total sales vs total wages', 'Extra sales from that worker vs their wage', 'Last year\'s profit vs this year\'s', 'Average sales per worker'],
        answer: 1,
        why: 'That\'s the marginal benefit vs marginal cost.',
      },
      {
        q: 'Why does the eighth straight hour of revision usually help less than the first?',
        options: ['The material gets harder', 'Diminishing marginal returns', 'Sunk costs', 'Inflation'],
        answer: 1,
        why: 'Each extra unit tends to add less than the one before.',
      },
      {
        q: 'You\'ve spent £2,000 on a course you hate and no longer need. What should decide whether you finish it?',
        options: ['The £2,000 already spent', 'Whether the remaining time and cost are worth what you\'ll gain from now on', 'What friends think', 'How long it has left'],
        answer: 1,
        why: 'The £2,000 is sunk; only future costs and benefits count.',
      },
    ],
    cards: [
      { id: 'c-eco-margin-1', front: 'Thinking at the margin?', back: 'Comparing the extra benefit of one more unit with its extra cost.' },
      { id: 'c-eco-margin-2', front: 'Diminishing marginal returns?', back: 'Each additional unit adds less benefit than the one before.' },
      { id: 'c-eco-margin-3', front: 'Sunk cost?', back: 'A cost already incurred that can\'t be recovered and shouldn\'t affect future decisions.' },
    ],
    related: ['ct-biases-people', 'dm-opportunity-cost'],
  },
  {
    id: 'eco-supply-demand',
    unit: 'Markets',
    title: 'Supply and demand',
    summary: 'Prices move to balance how much people want with how much is available, and carry information as they do.',
    ideas: ['Demand and supply', 'Prices balance the market', 'Price controls have side effects'],
    body: `
## Demand and supply

- **Demand**: how much people want to buy at each price. Usually, the **higher the price, the less people buy**.
- **Supply**: how much producers want to sell at each price. Usually, the **higher the price, the more they offer**, because it's worth producing more.

## Prices balance the market

The price tends to move towards the level where the amount people want to buy equals the amount offered, called the **equilibrium**.

- If the price is too high, there's a **surplus**: unsold stock piles up, so sellers cut prices.
- If the price is too low, there's a **shortage**: queues form and items sell out, so prices rise.

Changes in conditions shift supply or demand:

- A drought damages coffee harvests → **supply falls** → coffee prices rise.
- A heatwave → **demand for fans rises** → fans sell out and prices rise.
- A new, cheaper way to make solar panels → **supply rises** → prices fall.

Prices also carry **information**. A rising price tells consumers to economise and producers to make more, without anyone needing to coordinate them.

## Price controls have side effects

Governments sometimes set prices by law, usually with good intentions:

- A **price ceiling** (maximum price), such as strict rent control, keeps prices low for those who get the product, but can create **shortages**: landlords supply less or let properties deteriorate, and queues and waiting lists grow.
- A **price floor** (minimum price) can create **surpluses**, like agricultural price supports that lead to stockpiles.

Economists debate how large these effects are in specific cases, such as minimum wages, where evidence is genuinely mixed. But the general point holds: when you fix a price, supply and demand still respond, and the adjustment shows up somewhere else.
`,
    takeaways: [
      'Higher prices usually reduce the amount demanded and increase the amount supplied.',
      'Prices move towards the level that balances supply and demand, and signal scarcity.',
      'Price ceilings can cause shortages and floors surpluses; effects show up elsewhere.',
    ],
    quiz: [
      {
        q: 'A frost destroys much of the orange crop. What happens to orange juice prices, other things equal?',
        options: ['They fall', 'They rise, because supply falls', 'No change', 'They rise because demand falls'],
        answer: 1,
        why: 'Lower supply at the same demand pushes the price up.',
      },
      {
        q: 'Tickets for a concert sell out in minutes and resell for triple the price. What does that suggest?',
        options: ['A surplus', 'The ticket price was set below the equilibrium price', 'Demand was low', 'Supply was too high'],
        answer: 1,
        why: 'Sell-outs and resale premiums signal a shortage at that price.',
      },
      {
        q: 'What\'s a common side effect of a strict price ceiling on rents?',
        options: ['A surplus of flats', 'Shortages and reduced supply or maintenance', 'Higher rents for everyone', 'No effect'],
        answer: 1,
        why: 'Below-equilibrium prices reduce supply and increase demand.',
      },
    ],
    practice: 'Pick a product whose price changed noticeably this year. Was it a shift in supply, demand or both? What caused it?',
    cards: [
      { id: 'c-eco-supply-demand-1', front: 'Law of demand?', back: 'Other things equal, higher prices reduce the quantity demanded.' },
      { id: 'c-eco-supply-demand-2', front: 'What is equilibrium price?', back: 'The price where quantity demanded equals quantity supplied.' },
      { id: 'c-eco-supply-demand-3', front: 'Effect of a price ceiling below equilibrium?', back: 'A shortage: more demanded than supplied.' },
    ],
    related: ['eco-elasticity'],
  },
  {
    id: 'eco-elasticity',
    unit: 'Markets',
    title: 'Elasticity',
    summary: 'How strongly people react to price changes explains a lot, from taxes to pricing decisions.',
    ideas: ['Elastic vs inelastic demand', 'What makes demand elastic', 'Why it matters'],
    body: `
## Elastic vs inelastic demand

**Price elasticity of demand** measures how much the quantity people buy changes when the price changes.

- **Elastic** demand: people react strongly. A 10% price rise causes a **more than 10%** drop in purchases.
- **Inelastic** demand: people react weakly. A 10% price rise causes a **less than 10%** drop.

Petrol in the short run is a classic inelastic good: when prices jump, most people still need to drive to work. A particular brand of crisps is elastic: if it gets pricier, people switch to another brand.

## What makes demand elastic

- **Substitutes**: the more alternatives, the more elastic. One brand of cola is elastic; drinks in general are not.
- **Necessity vs luxury**: necessities like medicine and heating are inelastic; luxuries like holidays and eating out are more elastic.
- **Share of budget**: people notice price rises on big purchases more than on small ones.
- **Time**: demand becomes more elastic over time, as people find alternatives, such as switching to an electric car after years of high petrol prices.

## Why it matters

- **Pricing**: a business with inelastic demand can raise prices and increase revenue; one facing elastic demand may lose revenue by raising prices.
- **Taxes**: governments raise more reliable revenue by taxing inelastic goods, like fuel, tobacco and alcohol. Taxes meant to change behaviour, like sugar taxes, work better where demand is more elastic, or where producers can reformulate products.
- **Shocks**: when supply drops for an inelastic good like energy, prices can spike dramatically, because people can't easily buy less.
`,
    takeaways: [
      'Elastic demand reacts strongly to price; inelastic demand reacts weakly.',
      'Substitutes, luxury status, budget share and time make demand more elastic.',
      'Elasticity shapes pricing, tax design and how sharply prices spike in shocks.',
    ],
    quiz: [
      {
        q: 'A 10% price rise causes a 25% fall in sales. Is demand elastic or inelastic?',
        options: ['Elastic', 'Inelastic', 'Neither', 'Can\'t tell'],
        answer: 0,
        why: 'The quantity change is larger than the price change.',
      },
      {
        q: 'Which is likely to have the most inelastic demand?',
        options: ['One brand of chocolate', 'Insulin for diabetics', 'Cinema tickets', 'Designer handbags'],
        answer: 1,
        why: 'It\'s a necessity with few substitutes.',
      },
      {
        q: 'Why can energy prices spike so much when supply falls?',
        options: ['Energy companies are greedy', 'Demand is inelastic in the short run, so prices must rise a lot to cut usage', 'Demand is elastic', 'Supply never changes'],
        answer: 1,
        why: 'People can\'t quickly use less, so small supply drops cause big price rises.',
      },
    ],
    cards: [
      { id: 'c-eco-elasticity-1', front: 'Price elasticity of demand?', back: 'How much quantity demanded responds to a price change.' },
      { id: 'c-eco-elasticity-2', front: 'Four factors making demand more elastic?', back: 'Available substitutes, being a luxury, large budget share, longer time to adjust.' },
    ],
    related: ['eco-supply-demand', 'bus-pricing'],
  },
  {
    id: 'eco-trade',
    unit: 'Markets',
    title: 'Trade and comparative advantage',
    summary: 'Two sides can both gain from trade, even if one is better at everything.',
    ideas: ['Specialisation and trade', 'Comparative advantage'],
    body: `
## Specialisation and trade

You don't grow your own food, make your own clothes or build your own phone. You specialise in your job, earn money, and trade it for things others are better placed to make. Everyone ends up with far more than they could produce alone.

The same logic applies between companies, regions and countries.

## Comparative advantage

Here's the surprising part, first set out by economist David Ricardo in 1817: trade benefits both sides **even if one side is better at producing everything**.

Imagine a lawyer who is also a faster typist than her assistant. Should she do her own typing? No. Each hour she types is an hour not spent on legal work worth far more. Her assistant has a **comparative advantage** in typing: their **opportunity cost** of typing (what they give up) is lower.

- **Absolute advantage**: being better at something, using fewer resources.
- **Comparative advantage**: being able to do something at a **lower opportunity cost** than others.

Countries, like people, gain most by specialising in what they do at the lowest opportunity cost, and trading for the rest. Total output rises, and both sides can end up with more.

## The catch

Trade raises total wealth, but **gains and losses aren't spread evenly**. When imports replace a local industry, consumers pay less, but workers in that industry may lose jobs, and the pain can be concentrated in particular towns. That's why most economists support trade while also arguing for help with retraining and adjustment, and why trade remains politically contested.
`,
    takeaways: [
      'Specialisation and trade let everyone consume more than they could produce alone.',
      'Comparative advantage means producing at lower opportunity cost; both sides can gain.',
      'Trade raises total wealth but creates concentrated losers who may need support.',
    ],
    quiz: [
      {
        q: 'What is comparative advantage?',
        options: ['Being the best at something', 'Being able to produce something at a lower opportunity cost than others', 'Having the most resources', 'Exporting more than importing'],
        answer: 1,
        why: 'It\'s about what you give up, not absolute skill.',
      },
      {
        q: 'A doctor types faster than her receptionist. Why might she still hire the receptionist to type?',
        options: ['Typing is beneath her', 'Her time is worth more seeing patients; the receptionist has the comparative advantage', 'Receptionists are cheaper', 'It\'s required by law'],
        answer: 1,
        why: 'Her opportunity cost of typing is much higher.',
      },
      {
        q: 'Why is trade often politically contested despite raising total wealth?',
        options: ['It always lowers wealth', 'Gains are spread widely but losses can be concentrated in particular jobs and places', 'Economists oppose it', 'It has no effects'],
        answer: 1,
        why: 'Concentrated losses create strong opposition.',
      },
    ],
    cards: [
      { id: 'c-eco-trade-1', front: 'Absolute vs comparative advantage?', back: 'Absolute: better at producing something. Comparative: producing at lower opportunity cost.' },
      { id: 'c-eco-trade-2', front: 'Who first set out comparative advantage?', back: 'David Ricardo, in 1817.' },
    ],
    related: ['dm-opportunity-cost'],
    sources: [SRC.ricardo],
  },
  {
    id: 'eco-externalities',
    unit: 'Markets',
    title: 'Externalities and public goods',
    summary: 'Markets fail when prices don\'t include all the costs or benefits, or when people can free-ride.',
    ideas: ['Externalities', 'Fixing externalities', 'Public goods and free riders'],
    body: `
## Externalities

An **externality** is a cost or benefit that falls on people **outside** a transaction, and isn't reflected in the price.

- **Negative**: a factory's pollution harms nearby residents' health; the factory doesn't pay for that harm, so its prices are too low and it produces more than is good for society. Traffic congestion, noise and carbon emissions are other examples.
- **Positive**: research benefits others who build on it; vaccination protects people around you. Because the person paying doesn't capture all the benefits, there tends to be **too little** of these.

As the International Monetary Fund puts it, prices don't capture all costs. Externalities are one of the main reasons governments intervene in markets.

## Fixing externalities

Common approaches:

- **Taxes** that make the polluter pay the cost they impose, such as carbon taxes or congestion charges. These keep the market working but correct the price.
- **Cap-and-trade**: set a total limit on emissions and let firms trade permits, so cuts happen where they're cheapest.
- **Regulation**: rules like emission standards or bans.
- **Subsidies** for positive externalities, such as funding for basic research or vaccination programmes.

## Public goods and free riders

Some goods are **non-excludable** (you can't stop people using them) and **non-rival** (one person's use doesn't reduce another's): street lighting, national defence, clean air, a lighthouse's signal.

Markets struggle to provide these, because of the **free-rider problem**: why pay if you'll benefit anyway? So **public goods** are usually funded through taxes. The same problem appears in groups everywhere, from team projects to open-source software maintained by a few volunteers.
`,
    takeaways: [
      'Externalities are costs or benefits to outsiders that prices ignore.',
      'Fixes include taxes, cap-and-trade, regulation and subsidies.',
      'Public goods suffer from free riding, so they\'re usually funded collectively.',
    ],
    quiz: [
      {
        q: 'Which is a negative externality?',
        options: ['A shop raising its prices', 'Noise from a nightclub disturbing neighbours', 'Paying tax', 'A company making a loss'],
        answer: 1,
        why: 'Neighbours bear a cost not reflected in the club\'s prices.',
      },
      {
        q: 'What does a carbon tax aim to do?',
        options: ['Ban all emissions', 'Make polluters pay the cost they impose, correcting the price', 'Raise money only', 'Reduce competition'],
        answer: 1,
        why: 'It puts the external cost into the price.',
      },
      {
        q: 'Why do markets under-provide street lighting?',
        options: ['It\'s too expensive to make', 'Free riders benefit without paying, since you can\'t exclude them', 'Nobody wants it', 'It\'s a negative externality'],
        answer: 1,
        why: 'Non-excludable goods invite free riding.',
      },
    ],
    cards: [
      { id: 'c-eco-externalities-1', front: 'What is an externality?', back: 'A cost or benefit falling on people outside a transaction, not reflected in the price.' },
      { id: 'c-eco-externalities-2', front: 'What is a public good?', back: 'Non-excludable and non-rival, like street lighting; markets under-provide it due to free riding.' },
      { id: 'c-eco-externalities-3', front: 'Four fixes for negative externalities?', back: 'Taxes, cap-and-trade, regulation, and (for positive ones) subsidies.' },
    ],
    sources: [SRC.imfExternalities],
  },
  {
    id: 'eco-inflation',
    unit: 'The big picture',
    title: 'Inflation and central banks',
    summary: 'Central banks raise and lower interest rates to keep inflation low and stable.',
    ideas: ['What causes inflation', 'How central banks respond'],
    body: `
## What causes inflation

**Inflation** is a general rise in prices across the economy, usually measured by tracking the cost of a typical basket of goods and services over time.

Broadly, prices rise when:

- **Demand outpaces supply** across the economy: people and businesses want to spend more than the economy can produce, often after a boom, stimulus or easy credit.
- **Costs rise**: energy, raw materials or wages go up, and businesses pass these on. The energy shock after Russia's invasion of Ukraine in 2022 was a major example.
- **Expectations**: if people expect prices to keep rising, workers ask for higher pay and firms raise prices pre-emptively, which can make inflation self-sustaining.

Very high inflation erodes savings and makes planning hard. **Deflation** (falling prices) can also be harmful, because people delay spending and debts get harder to repay in real terms.

## How central banks respond

Most countries have an independent **central bank**, such as the US Federal Reserve, the European Central Bank or the Bank of England, tasked with keeping inflation low and stable. Many target **about 2% a year**. The Fed explains that 2% is low enough not to distort decisions, while leaving room to cut rates in a downturn and avoiding the risks of deflation.

Their main tool is the **policy interest rate**:

- **Raising rates** makes borrowing more expensive and saving more rewarding. People and businesses spend and invest less, demand cools, and inflation tends to fall, but unemployment may rise.
- **Cutting rates** does the opposite, supporting spending and jobs when the economy is weak.

These effects take time, often a year or two to fully show up. That's why central banks try to act on where inflation is heading, not just where it is today.
`,
    takeaways: [
      'Inflation comes from demand outpacing supply, rising costs and expectations.',
      'Many central banks target about 2% inflation.',
      'Raising rates cools demand and inflation; cutting rates supports growth. Effects take time.',
    ],
    quiz: [
      {
        q: 'Inflation is high. What would a central bank typically do?',
        options: ['Cut interest rates', 'Raise interest rates', 'Print more money', 'Nothing'],
        answer: 1,
        why: 'Higher rates cool borrowing and spending, reducing price pressure.',
      },
      {
        q: 'Why do many central banks target about 2% rather than 0% inflation?',
        options: ['2% is easier to measure', 'It avoids deflation risks and leaves room to cut rates in a downturn', 'Governments want high inflation', 'By law it must be 2%'],
        answer: 1,
        why: 'The Fed gives these reasons for its 2% goal.',
      },
      {
        q: 'Why can inflation expectations make inflation worse?',
        options: ['They have no effect', 'Workers and firms raise pay and prices in anticipation, keeping inflation going', 'They lower interest rates', 'They only affect savings'],
        answer: 1,
        why: 'Expectations can become self-fulfilling.',
      },
    ],
    cards: [
      { id: 'c-eco-inflation-1', front: 'Three causes of inflation?', back: 'Demand outpacing supply, rising costs, and expectations of future inflation.' },
      { id: 'c-eco-inflation-2', front: 'Typical central bank inflation target?', back: 'About 2% a year.' },
      { id: 'c-eco-inflation-3', front: 'Effect of raising interest rates?', back: 'Borrowing costs more, spending and investment slow, inflation tends to fall, unemployment may rise.' },
    ],
    related: ['fin-inflation'],
    sources: [SRC.fed2, SRC.boe],
  },
  {
    id: 'eco-gdp',
    unit: 'The big picture',
    title: 'GDP, recessions and jobs',
    summary: 'What the headline numbers measure, and what they miss.',
    ideas: ['What GDP measures', 'Recessions', 'What GDP misses'],
    body: `
## What GDP measures

**Gross domestic product (GDP)** is the total value of all final goods and services produced in a country over a period, usually a quarter or a year. It's the most common measure of the size of an economy.

- **Economic growth** usually means the percentage increase in **real GDP**, which adjusts for inflation.
- **GDP per person** divides by population and gives a rough sense of average living standards.

## Recessions

A **recession** is a significant, widespread decline in economic activity. A common rule of thumb is **two consecutive quarters of falling real GDP**. In the US, the official dating is done by a committee of the National Bureau of Economic Research, which looks at a broader set of indicators, including employment, income and spending, rather than GDP alone.

In a recession, businesses cut investment and hiring, and **unemployment** rises. The **unemployment rate** counts people without work who are actively looking for it, as a share of the labour force. People who have given up looking aren't counted, which is why economists also watch other measures, such as the share of adults in work.

Governments respond with **fiscal policy** (spending and taxes) and central banks with **monetary policy** (interest rates).

## What GDP misses

GDP counts market activity, so it misses a lot:

- **Unpaid work**, like caring for children or relatives and volunteering.
- **Distribution**: GDP can grow while most people's incomes stagnate.
- **Wellbeing and the environment**: cleaning up after a disaster adds to GDP; the pollution that caused it doesn't subtract.
- **Quality improvements and free services**, such as free online tools.

GDP is a useful measure of economic activity, not a complete measure of how well people are doing.
`,
    takeaways: [
      'GDP is the value of final goods and services produced; real GDP adjusts for inflation.',
      'A rule of thumb for recession is two quarters of falling real GDP; the US NBER uses broader indicators.',
      'GDP misses unpaid work, distribution, wellbeing and environmental damage.',
    ],
    quiz: [
      {
        q: 'What\'s the difference between nominal and real GDP?',
        options: ['Real GDP excludes services', 'Real GDP adjusts for inflation', 'Nominal GDP is per person', 'There is none'],
        answer: 1,
        why: 'Real GDP shows changes in actual output, not just prices.',
      },
      {
        q: 'Who officially dates US recessions?',
        options: ['The President', 'A committee of the National Bureau of Economic Research', 'The stock market', 'The Treasury'],
        answer: 1,
        why: 'NBER uses a range of indicators, not just GDP.',
      },
      {
        q: 'Which is NOT counted in GDP?',
        options: ['A restaurant meal', 'A new car', 'Unpaid care for an elderly parent', 'A haircut'],
        answer: 2,
        why: 'GDP counts market transactions, missing unpaid work.',
      },
    ],
    cards: [
      { id: 'c-eco-gdp-1', front: 'What is GDP?', back: 'The total value of final goods and services produced in a country in a period.' },
      { id: 'c-eco-gdp-2', front: 'Rule-of-thumb definition of recession?', back: 'Two consecutive quarters of falling real GDP (official dating varies by country).' },
      { id: 'c-eco-gdp-3', front: 'Three things GDP misses?', back: 'Unpaid work, how income is distributed, and wellbeing or environmental damage.' },
    ],
    related: ['eco-inflation'],
    sources: [SRC.nber],
  },
]
