// Sources were checked in October 2026.
const SRC = {
  secGuide: { title: 'US SEC: Beginners\' guide to financial statements', url: 'https://www.sec.gov/files/investor/pubs/begfinstmtguide.htm' },
  moat: { title: 'Morningstar: What is an economic moat?', url: 'https://www.morningstar.com/investing-definitions/economic-moat' },
  jtbd: { title: 'Christensen et al. (2016): Know your customers\' "jobs to be done" (Harvard Business Review)', url: 'https://hbr.org/2016/09/know-your-customers-jobs-to-be-done' },
  retention: { title: 'Gallo (2014): The value of keeping the right customers (Harvard Business Review)', url: 'https://hbr.org/2014/10/the-value-of-keeping-the-right-customers' },
  yc: { title: 'Y Combinator: Essential startup advice', url: 'https://www.ycombinator.com/library/4D-yc-s-essential-startup-advice' },
}

export const lessons = [
  {
    id: 'bus-model',
    unit: 'How businesses work',
    title: 'How a business makes money',
    summary: 'Every business answers four questions: for whom, what value, how it gets paid, and what it costs.',
    ideas: ['The four parts of a business model', 'Common revenue models'],
    body: `
## The four parts of a business model

A **business model** is how a company creates value for customers and captures some of it as profit. Any business, from a corner café to a software giant, can be described by four questions:

1. **Customers**: who is it for? Be specific. "Busy parents of young children" is better than "everyone".
2. **Value proposition**: what problem does it solve, or what does it make better, for them? Why choose it over the alternatives?
3. **Revenue**: how does money come in? Who pays, how much and how often?
4. **Costs**: what does it cost to create and deliver the value? Which costs are fixed and which grow with each sale?

Profit is what's left when revenue exceeds costs. A great product with no workable revenue model, or with costs that always exceed what customers will pay, isn't a business.

## Common revenue models

- **One-off sales**: buy a product once. A bike shop.
- **Subscription**: pay regularly for ongoing access. Streaming, software, gyms. Predictable revenue, but customers must keep finding it worthwhile.
- **Usage-based**: pay for what you use. Cloud computing, utilities, phone data.
- **Advertising**: users get it free; advertisers pay for their attention. Search engines, social media. The users are not the paying customers.
- **Marketplace or commission**: take a cut of transactions between buyers and sellers. Ride-hailing apps, online marketplaces.
- **Freemium**: a free version attracts users; a minority pay for premium features.
- **Licensing**: others pay to use your intellectual property.

The model shapes behaviour. An ad-funded app is rewarded for holding your attention; a subscription business is rewarded for being worth renewing. When you look at any company, ask: **who pays, and what are they really paying for?**
`,
    takeaways: [
      'A business model covers customers, value proposition, revenue and costs.',
      'Common revenue models: one-off, subscription, usage, advertising, marketplace, freemium, licensing.',
      'The revenue model shapes incentives: ask who pays and for what.',
    ],
    quiz: [
      {
        q: 'In an ad-funded social media app, who is the paying customer?',
        options: ['The users', 'The advertisers', 'The government', 'Nobody'],
        answer: 1,
        why: 'Users get it free; advertisers pay for their attention.',
      },
      {
        q: 'Which is a usage-based revenue model?',
        options: ['A monthly gym membership', 'Paying per gigabyte of cloud storage used', 'Buying a book', 'Free with ads'],
        answer: 1,
        why: 'You pay in proportion to what you use.',
      },
      {
        q: 'A startup has a product people love but can\'t charge more than it costs to deliver. What\'s missing?',
        options: ['Customers', 'A viable business model: revenue exceeding costs', 'A value proposition', 'Marketing'],
        answer: 1,
        why: 'Value alone isn\'t enough; it must be captured profitably.',
      },
    ],
    practice: 'Pick a company you use daily. Describe its customers, value proposition, revenue model and main costs in one sentence each.',
    cards: [
      { id: 'c-bus-model-1', front: 'Four parts of a business model?', back: 'Customers, value proposition, revenue, costs.' },
      { id: 'c-bus-model-2', front: 'Name five revenue models.', back: 'One-off sales, subscription, usage-based, advertising, marketplace commission (also freemium, licensing).' },
    ],
    inTheWild: [
      '"If you\'re not paying for the product, you are the product"',
    ],
  },
  {
    id: 'bus-pnl',
    unit: 'The numbers',
    title: 'Reading a profit and loss statement',
    summary: 'Revenue, gross margin, operating costs and net profit: the four lines that tell most of the story.',
    ideas: ['From revenue to net profit', 'Margins tell you more than totals'],
    body: `
## From revenue to net profit

The **income statement**, or **profit and loss (P&L)**, shows a company's performance over a period. The US SEC's beginners' guide describes it as showing how much revenue a company earned and what it cost to earn it. A simplified version:

\`\`\`
Revenue                        1,000,000
− Cost of goods sold (COGS)      400,000
= Gross profit                   600,000
− Operating expenses             450,000
= Operating profit               150,000
− Interest and tax                50,000
= Net profit                     100,000
\`\`\`

- **Revenue** (sales, turnover, the "top line"): money earned from customers.
- **Cost of goods sold**: costs directly tied to producing what was sold: materials, manufacturing, hosting for each customer, delivery.
- **Gross profit**: revenue minus COGS.
- **Operating expenses**: running the business: salaries, rent, marketing, research.
- **Operating profit**: profit from the core business before interest and tax.
- **Net profit** (the "bottom line"): what's left after everything.

## Margins tell you more than totals

A **margin** is a profit line divided by revenue. In the example:

- **Gross margin**: 600,000 ÷ 1,000,000 = **60%**.
- **Operating margin**: 15%.
- **Net margin**: 10%.

Margins let you compare businesses of different sizes and see trends. Typical margins vary hugely by industry: software companies often have gross margins of 70–80% or more, because an extra copy costs little to deliver; supermarkets often have net margins of just a few per cent, making money on huge volume.

Questions to ask of any P&L:

- Is revenue growing? Faster or slower than costs?
- Is gross margin stable, rising or shrinking?
- Which operating costs are growing fastest?
`,
    takeaways: [
      'The P&L runs from revenue, minus COGS, to gross profit, minus operating costs, to operating and net profit.',
      'Margins (profit ÷ revenue) allow comparisons across sizes and over time.',
      'Typical margins vary greatly by industry.',
    ],
    quiz: [
      {
        q: 'Revenue is £500k and cost of goods sold is £300k. What\'s the gross margin?',
        options: ['20%', '40%', '60%', '160%'],
        answer: 1,
        why: 'Gross profit £200k ÷ revenue £500k = 40%.',
      },
      {
        q: 'Which is an operating expense rather than cost of goods sold, for a furniture maker?',
        options: ['Wood', 'Factory workers\' wages making chairs', 'Office rent for the head office', 'Delivery of each chair'],
        answer: 2,
        why: 'Head office rent is a cost of running the business, not of each unit sold.',
      },
      {
        q: 'Why compare margins rather than raw profit?',
        options: ['Margins are always higher', 'They adjust for size, allowing comparisons and trend-spotting', 'Raw profit is secret', 'Margins include cash'],
        answer: 1,
        why: 'A small firm with high margins may be healthier than a big one with thin margins.',
      },
    ],
    practice: 'Find the latest annual results of a public company you know. Calculate its gross and net margin from the headline figures.',
    cards: [
      { id: 'c-bus-pnl-1', front: 'Gross profit?', back: 'Revenue minus cost of goods sold.' },
      { id: 'c-bus-pnl-2', front: 'Operating vs net profit?', back: 'Operating: after operating expenses, before interest and tax. Net: after everything.' },
      { id: 'c-bus-pnl-3', front: 'What is a margin?', back: 'A profit line divided by revenue, e.g. gross margin = gross profit ÷ revenue.' },
    ],
    sources: [SRC.secGuide],
  },
  {
    id: 'bus-cash',
    unit: 'The numbers',
    title: 'Profit isn\'t cash',
    summary: 'Profitable companies can still run out of money. Cash flow and runway decide survival.',
    ideas: ['Why profit and cash differ', 'Runway and burn rate'],
    body: `
## Why profit and cash differ

A company can show a profit on its P&L and still be unable to pay its bills. That's because profit is recorded when sales are made, but cash arrives when customers actually pay, and costs are often paid before that.

Example: a small manufacturer wins a big order. It buys materials and pays staff now, delivers next month, and the customer pays 60 days after delivery. On paper it's profitable; in the bank, cash runs low for three months. If it can't bridge the gap, it fails despite being "profitable".

The **cash flow statement** shows actual money moving in and out, in three parts:

- **Operating**: cash from running the business.
- **Investing**: buying or selling equipment, property or other companies.
- **Financing**: borrowing, repaying loans, raising money from investors, paying dividends.

**Working capital**, the cash tied up in stock and unpaid customer invoices minus what you owe suppliers, is often where cash problems hide. Ways to improve it include getting paid faster, holding less stock and agreeing longer payment terms with suppliers.

## Runway and burn rate

For a business that isn't yet profitable, such as many startups, two numbers matter most:

- **Burn rate**: how much more cash goes out than comes in each month.
- **Runway**: how many months until the cash runs out. **Cash in the bank ÷ monthly burn**.

£600,000 in the bank burning £50,000 a month gives **12 months** of runway. Raising money or reaching profitability takes time, so founders typically aim to start fundraising with many months of runway left.

The same logic applies to personal finance: your emergency fund is your runway.
`,
    takeaways: [
      'Profit is recorded at sale; cash arrives when customers pay, so they can differ widely.',
      'The cash flow statement covers operating, investing and financing cash.',
      'Runway = cash ÷ monthly burn rate.',
    ],
    quiz: [
      {
        q: 'How can a profitable company run out of cash?',
        options: ['It can\'t', 'Costs are paid before customers pay, so cash runs short despite profits on paper', 'Profit is always cash', 'Taxes are too low'],
        answer: 1,
        why: 'Timing differences between costs and receipts drain cash.',
      },
      {
        q: 'A startup has £900,000 and burns £75,000 a month. What\'s its runway?',
        options: ['6 months', '9 months', '12 months', '18 months'],
        answer: 2,
        why: '£900,000 ÷ £75,000 = 12 months.',
      },
      {
        q: 'Which would improve a company\'s cash position?',
        options: ['Giving customers longer to pay', 'Getting customers to pay faster', 'Buying extra stock', 'Paying suppliers early'],
        answer: 1,
        why: 'Faster collection brings cash in sooner.',
      },
    ],
    cards: [
      { id: 'c-bus-cash-1', front: 'Why can profit and cash differ?', back: 'Profit is recognised at the sale; cash moves when bills are actually paid and received.' },
      { id: 'c-bus-cash-2', front: 'How do you calculate runway?', back: 'Cash in the bank divided by monthly net burn rate.' },
      { id: 'c-bus-cash-3', front: 'Three sections of a cash flow statement?', back: 'Operating, investing and financing.' },
    ],
    related: ['bus-pnl', 'fin-emergency'],
    sources: [SRC.secGuide],
  },
  {
    id: 'bus-unit',
    unit: 'The numbers',
    title: 'Unit economics',
    summary: 'Does each customer or sale make money? Contribution margin, acquisition cost and lifetime value.',
    ideas: ['Contribution margin', 'Customer acquisition cost and lifetime value'],
    body: `
## Contribution margin

**Unit economics** asks whether a single unit, such as one order, one product or one customer, makes or loses money.

**Contribution margin** is the revenue from a unit minus the **variable costs** of that unit: the costs that rise with each sale, such as materials, delivery, payment fees and per-user hosting. It's what each sale **contributes** towards fixed costs like rent and salaries.

A meal-kit company sells a box for £40. Ingredients, packaging, delivery and payment fees cost £34. Contribution margin: **£6 per box**. If fixed costs are £60,000 a month, it needs to sell **10,000 boxes** a month just to break even.

If contribution margin is **negative**, selling more makes losses bigger. Growth can't fix it.

## Customer acquisition cost and lifetime value

For businesses with repeat customers:

- **Customer acquisition cost (CAC)**: total sales and marketing spend ÷ number of new customers. Spending £50,000 on marketing to win 500 customers means a CAC of **£100**.
- **Lifetime value (LTV)**: the total contribution a customer brings over their relationship. Roughly: contribution per month × average months a customer stays. £10 a month × 24 months = **£240**.

The key comparison is **LTV versus CAC**. A common rule of thumb in subscription businesses is that LTV should be at least **three times** CAC, leaving room to cover fixed costs and profit. If LTV is below CAC, every new customer loses money.

Also watch the **payback period**: how many months of contribution it takes to recover CAC. £100 CAC ÷ £10 a month = 10 months. Long payback periods need lots of cash up front, linking back to runway.
`,
    takeaways: [
      'Contribution margin = revenue per unit minus variable costs per unit.',
      'Negative contribution margins can\'t be fixed by growth.',
      'Compare lifetime value with customer acquisition cost; watch the payback period.',
    ],
    quiz: [
      {
        q: 'A product sells for £20 with variable costs of £14. What\'s the contribution margin per unit?',
        options: ['£34', '£14', '£6', '£20'],
        answer: 2,
        why: '£20 − £14 = £6 towards fixed costs.',
      },
      {
        q: 'A company spends £30,000 on marketing and gains 300 customers. What\'s the CAC?',
        options: ['£10', '£100', '£300', '£9,000'],
        answer: 1,
        why: '£30,000 ÷ 300 = £100.',
      },
      {
        q: 'Each customer has an LTV of £80 and CAC of £120. What does that mean?',
        options: ['Healthy growth', 'Each new customer loses money on average', 'Break-even', 'Need more data'],
        answer: 1,
        why: 'Acquiring customers costs more than they\'re worth.',
      },
    ],
    practice: 'For a business you know or imagine, estimate the price, variable costs per sale and contribution margin. How many sales would cover £10,000 of monthly fixed costs?',
    cards: [
      { id: 'c-bus-unit-1', front: 'What is contribution margin?', back: 'Revenue per unit minus variable costs per unit; what each sale contributes to fixed costs.' },
      { id: 'c-bus-unit-2', front: 'CAC and LTV?', back: 'CAC: cost to acquire a customer. LTV: total contribution a customer brings. LTV should comfortably exceed CAC.' },
      { id: 'c-bus-unit-3', front: 'Payback period?', back: 'Months of contribution needed to recover the customer acquisition cost.' },
    ],
    related: ['bus-cash'],
  },
  {
    id: 'bus-pricing',
    unit: 'Strategy and product',
    title: 'Pricing',
    summary: 'Price on value, not just cost, and understand how people perceive prices.',
    ideas: ['Three ways to set a price', 'How people perceive prices'],
    body: `
## Three ways to set a price

1. **Cost-plus**: add a markup to your cost. Simple and ensures each sale covers costs, but ignores what customers would pay. You may leave a lot of money on the table, or price yourself out.
2. **Competitor-based**: price relative to alternatives. Useful in crowded markets, but assumes competitors have priced well.
3. **Value-based**: price based on the value to the customer. If your software saves a business £50,000 a year, £10,000 a year may be an easy decision for them, even if it costs you £500 to provide.

Costs set the **floor** (below it you lose money); customer value sets the **ceiling**. Good pricing lands somewhere between, informed by competitors.

Many businesses underprice, especially new ones, from fear that customers will leave. A small price rise often has a big effect on profit: if your net margin is 10%, a 5% price rise with no loss of customers increases profit by **half**.

## How people perceive prices

Prices aren't judged in isolation:

- **Anchoring**: the first price seen shapes what seems reasonable. Showing a premium option first makes the middle option look affordable.
- **Good–better–best tiers**: offering three options lets customers self-select by how much they value the product. Many people pick the middle option.
- **Price signals quality**: a price that's too low can make people doubt the product.
- **Elasticity**: as the Economics subject explains, customers with good alternatives react more strongly to price changes.

Test prices where you can: offer different prices to different groups, or raise prices for new customers and watch what happens.
`,
    takeaways: [
      'Cost sets the price floor; customer value sets the ceiling.',
      'Value-based pricing often captures far more than cost-plus.',
      'Anchoring, tiers and quality signals shape how prices are perceived.',
    ],
    quiz: [
      {
        q: 'What is value-based pricing?',
        options: ['Cost plus 20%', 'Pricing based on the value to the customer', 'Matching the cheapest competitor', 'Random pricing'],
        answer: 1,
        why: 'It sets prices by what the product is worth to the buyer.',
      },
      {
        q: 'A business has a 10% net margin. If it raises prices 5% and keeps all customers, roughly what happens to profit?',
        options: ['Rises 5%', 'Rises about 50%', 'Doubles', 'No change'],
        answer: 1,
        why: 'The extra 5% of revenue is all profit: 5 on a base of 10 is a 50% increase.',
      },
      {
        q: 'Why do many companies offer three pricing tiers?',
        options: ['To confuse customers', 'Customers self-select by value, and the top tier anchors the middle', 'It\'s required', 'To lower prices'],
        answer: 1,
        why: 'Tiers capture different willingness to pay and use anchoring.',
      },
    ],
    cards: [
      { id: 'c-bus-pricing-1', front: 'Price floor and ceiling?', back: 'Cost sets the floor; customer value sets the ceiling.' },
      { id: 'c-bus-pricing-2', front: 'Three pricing methods?', back: 'Cost-plus, competitor-based, value-based.' },
    ],
    related: ['eco-elasticity', 'neg-anchors'],
  },
  {
    id: 'bus-moats',
    unit: 'Strategy and product',
    title: 'Competitive advantage',
    summary: 'Profits attract competitors. A moat is what stops them taking yours.',
    ideas: ['What a moat is', 'Five common moats'],
    body: `
## What a moat is

High profits attract competitors, who copy the product and cut prices until profits shrink. A durable **competitive advantage**, which Warren Buffett popularised as a **moat**, is something that protects a business's profits from competition for years.

A good product alone usually isn't a moat: products can be copied. Ask: **why can't a well-funded competitor take these customers?**

## Five common moats

Investment research firm Morningstar uses a similar set of sources:

1. **Network effects**: the product gets more valuable as more people use it. A marketplace with the most buyers attracts the most sellers, and vice versa. Messaging apps and payment networks too.
2. **Switching costs**: it's painful to change. Moving a company's accounting system, or retraining staff on new software, costs time, money and risk, so customers stay even if a rival is slightly better.
3. **Cost advantage**: producing more cheaply than rivals, through scale, a better process or unique access to resources. Large retailers buy in such volume that smaller competitors can't match their prices.
4. **Intangible assets**: brands people trust and pay more for, patents, licences and regulatory approvals that block or slow competitors.
5. **Efficient scale**: a market only big enough for one or a few players, such as an airport or pipeline, where a new entrant would make everyone unprofitable.

Moats can erode. New technology can make a cost advantage irrelevant, and brands can fade. Strong companies keep widening their moats rather than relying on them.

For your own career or business, the same question applies: what makes you hard to replace?
`,
    takeaways: [
      'A moat is a durable advantage that protects profits from competitors.',
      'Common moats: network effects, switching costs, cost advantage, intangibles, efficient scale.',
      'Moats erode; good products alone are usually copyable.',
    ],
    quiz: [
      {
        q: 'Which is a network effect?',
        options: ['A shop with low prices', 'A marketplace becoming more useful to buyers as more sellers join, and vice versa', 'A famous logo', 'A patent'],
        answer: 1,
        why: 'Value grows with the number of users.',
      },
      {
        q: 'A company stays with its old HR software even though a rival is a bit better. Which moat is that?',
        options: ['Network effects', 'Switching costs', 'Efficient scale', 'Cost advantage'],
        answer: 1,
        why: 'Changing is costly and risky, so customers stay.',
      },
      {
        q: 'Why isn\'t "we have a great product" usually a moat?',
        options: ['Great products don\'t sell', 'Products can often be copied by well-funded competitors', 'Customers dislike great products', 'It always is'],
        answer: 1,
        why: 'A moat must be hard to replicate.',
      },
    ],
    cards: [
      { id: 'c-bus-moats-1', front: 'What is an economic moat?', back: 'A durable competitive advantage that protects a company\'s profits from competitors.' },
      { id: 'c-bus-moats-2', front: 'Five sources of moats?', back: 'Network effects, switching costs, cost advantage, intangible assets, efficient scale.' },
    ],
    related: ['car-skills'],
    sources: [SRC.moat],
  },
  {
    id: 'bus-product',
    unit: 'Strategy and product',
    title: 'Product thinking',
    summary: 'Start with the customer\'s problem, test cheaply, and learn before you build big.',
    ideas: ['Jobs to be done', 'Build the smallest test'],
    body: `
## Jobs to be done

Clayton Christensen and colleagues argued that customers don't really buy products; they **"hire" them to do a job** in their lives. Understanding the job matters more than knowing customer demographics.

In their well-known example, a fast-food chain wanted to sell more milkshakes. Asking customers how to improve them didn't help. Then researchers noticed many milkshakes were bought early in the morning by people commuting alone. The job: **make a long, boring drive more interesting and keep me full until lunch**. The competition wasn't other milkshakes; it was bagels, bananas and boredom. A thicker shake that lasted the whole commute did the job better.

Questions that reveal the job:

- What were you trying to get done when you chose this?
- What did you use before? Why did you switch?
- What's frustrating about the current way?

## Build the smallest test

Many products fail not because they're badly built but because **nobody wanted them enough**. Startup accelerator Y Combinator's core advice is to make something people want and to talk to users constantly.

Before investing heavily, test the riskiest assumption as cheaply as possible:

- **Talk to potential customers** about the problem, not your solution. Do they have it? How do they handle it now? Would they pay?
- **A landing page** describing the product with a sign-up or pre-order button tests demand before you build anything.
- **Do it manually first**: deliver the service by hand to a few customers before automating it.
- **A minimum viable product (MVP)**: the smallest version that delivers the core value and lets you learn from real use.

Measure what people **do**, not just what they say. "I'd definitely use that" is cheap; signing up, paying or coming back is evidence.
`,
    takeaways: [
      'Customers hire products to do a job; understand the job, not just the customer profile.',
      'Test the riskiest assumption cheaply: interviews, landing pages, manual delivery, MVPs.',
      'Trust behaviour (sign-ups, payment, return use) over stated intentions.',
    ],
    quiz: [
      {
        q: 'In the milkshake example, what job were morning customers hiring the milkshake for?',
        options: ['A healthy breakfast', 'Making a long commute less boring and staying full until lunch', 'A treat for children', 'A cheap dessert'],
        answer: 1,
        why: 'The real competitors were bagels, bananas and boredom.',
      },
      {
        q: 'What\'s the best first test of a new product idea?',
        options: ['Build the full product', 'Talk to potential customers about the problem and test demand cheaply', 'Hire a large team', 'Run a TV ad'],
        answer: 1,
        why: 'Learn whether the problem and demand are real before building.',
      },
      {
        q: 'Which is stronger evidence of demand?',
        options: ['"I\'d definitely use that"', '200 people pre-ordering at the full price', 'Friends saying it\'s a great idea', 'A positive survey'],
        answer: 1,
        why: 'Behaviour, especially payment, beats stated intentions.',
      },
    ],
    practice: 'Pick a product idea, or a feature at work. Write the job it does, the riskiest assumption, and the cheapest test of that assumption.',
    cards: [
      { id: 'c-bus-product-1', front: 'What is "jobs to be done"?', back: 'Customers "hire" products to accomplish a job in their lives; understanding the job guides design.' },
      { id: 'c-bus-product-2', front: 'What is an MVP?', back: 'Minimum viable product: the smallest version that delivers core value and lets you learn from real use.' },
      { id: 'c-bus-product-3', front: 'Behaviour vs stated intention as evidence?', back: 'Behaviour (sign-ups, payment, repeat use) is far stronger evidence.' },
    ],
    related: ['ct-first-principles'],
    sources: [SRC.jtbd, SRC.yc],
  },
  {
    id: 'bus-retention',
    unit: 'Strategy and product',
    title: 'Retention and metrics that matter',
    summary: 'Keeping customers is usually cheaper than finding new ones. Measure what actually drives the business.',
    ideas: ['Retention beats acquisition', 'Cohorts', 'Vanity vs actionable metrics'],
    body: `
## Retention beats acquisition

As Harvard Business Review summarises, acquiring a new customer can cost **5 to 25 times** more than keeping an existing one, depending on the industry. Research by Frederick Reichheld at Bain & Company found that improving customer retention by **5%** could increase profits by **25% to 95%**, because loyal customers buy more over time, cost less to serve and refer others.

A business that pours money into acquiring customers who quickly leave is filling a leaky bucket. Fixing the leak usually comes first.

## Cohorts

Overall numbers can hide what's happening. A **cohort** is a group of customers who started in the same period, such as everyone who signed up in January. Tracking each cohort separately shows:

- What share of each cohort is still active after one, three and twelve months.
- Whether newer cohorts retain better or worse than older ones, which shows whether product changes are working.

If total users are growing but each new cohort drops off faster, growth is masking a worsening product.

## Vanity vs actionable metrics

**Vanity metrics** look impressive but don't guide decisions: total registered users, page views, app downloads, social media followers. They usually only go up.

**Actionable metrics** connect to the health of the business and suggest what to do: active users, retention by cohort, revenue per customer, conversion rate from trial to paid, churn (the share of customers who leave each month).

A useful test: **if this number changed, would we do anything differently?** If not, it's probably vanity. And remember Goodhart's law: once a metric becomes a target, people may optimise it in ways that miss the goal, so watch several together.
`,
    takeaways: [
      'Acquiring customers can cost 5–25 times more than keeping them; retention gains boost profits strongly.',
      'Cohort analysis reveals whether retention is improving over time.',
      'Prefer actionable metrics (retention, churn, conversion) over vanity metrics (downloads, total sign-ups).',
    ],
    quiz: [
      {
        q: 'According to Reichheld\'s Bain research, a 5% improvement in retention could increase profits by about:',
        options: ['1–2%', '25–95%', '500%', 'Nothing'],
        answer: 1,
        why: 'Loyal customers buy more, cost less to serve and refer others.',
      },
      {
        q: 'What does cohort analysis reveal that total user counts can hide?',
        options: ['How many users exist', 'Whether newer groups of customers retain better or worse than older ones', 'Marketing spend', 'Office costs'],
        answer: 1,
        why: 'Totals can grow while each new cohort drops off faster.',
      },
      {
        q: 'Which is a vanity metric?',
        options: ['Monthly churn rate', 'Total app downloads since launch', 'Trial-to-paid conversion', 'Revenue per customer'],
        answer: 1,
        why: 'It only goes up and doesn\'t guide decisions.',
      },
    ],
    cards: [
      { id: 'c-bus-retention-1', front: 'Cost of acquisition vs retention?', back: 'Acquiring a customer can cost 5–25 times more than retaining one.' },
      { id: 'c-bus-retention-2', front: 'What is a cohort?', back: 'A group of customers who started in the same period, tracked together over time.' },
      { id: 'c-bus-retention-3', front: 'Vanity vs actionable metric test?', back: 'If it changed, would we do anything differently?' },
    ],
    related: ['dm-second-order', 'bus-unit'],
    sources: [SRC.retention],
  },
]
