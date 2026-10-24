// Sources were checked in October 2026. Time-sensitive figures say when they were true.
const SRC = {
  cfpbEmergency: { title: 'CFPB: An essential guide to building an emergency fund', url: 'https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/' },
  compound: { title: 'Investor.gov (SEC): Compound interest calculator', url: 'https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator' },
  fred: { title: 'Federal Reserve (FRED): Interest rate on credit card plans, accounts assessed interest', url: 'https://fred.stlouisfed.org/series/TERMCBCCINTNS' },
  cfpbMinimum: { title: 'CFPB: What is a minimum payment on a credit card?', url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-minimum-payment-on-a-credit-card-en-50/' },
  allocation: { title: 'Investor.gov (SEC): Asset allocation', url: 'https://www.investor.gov/introduction-investing/getting-started/asset-allocation' },
  spiva2025: { title: 'S&P Dow Jones Indices: SPIVA U.S. Scorecard, year-end 2025', url: 'https://www.spglobal.com/spdji/en/spiva/article/spiva-us-year-end-2025/' },
  spiva2024: { title: 'S&P Dow Jones Indices: SPIVA U.S. Scorecard, year-end 2024', url: 'https://www.spglobal.com/spdji/en/spiva/article/spiva-us-year-end-2024' },
  fees: { title: 'Investor.gov (SEC): How fees and expenses affect your investment portfolio', url: 'https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/updated' },
  ftc: { title: 'FTC: Testimony to the Joint Economic Committee on fraud (March 2026)', url: 'https://www.ftc.gov/news-events/news/press-releases/2026/03/ftc-testifies-joint-economic-committee-agencys-efforts-combat-fraud' },
}

export const lessons = [
  {
    id: 'fin-budget',
    unit: 'Foundations',
    title: 'Know where your money goes',
    summary: 'You can\'t plan what you don\'t measure. Track spending, then pay yourself first.',
    ideas: ['Track before you budget', 'Pay yourself first', 'A simple split to start from'],
    body: `
> This subject teaches general principles. Tax rules, account types and protections differ by country, and none of this is personal financial advice.

## Track before you budget

Most people underestimate what they spend, especially on small, frequent things: takeaway coffee, delivery fees, subscriptions. Before setting a budget, **track every expense for a month**. Bank and card apps often categorise spending automatically.

Then sort spending into:

- **Fixed needs**: rent or mortgage, utilities, insurance, minimum debt payments.
- **Variable needs**: groceries, transport.
- **Wants**: eating out, hobbies, entertainment, shopping.

Look for surprises. Subscriptions you forgot about are a common, easy win.

## Pay yourself first

If you save whatever is left at the end of the month, there's usually nothing left. Flip it: **move savings out automatically on payday**, before you can spend it, and live on the rest.

Automation works because it removes the need for willpower each month. It's the same principle as designing your environment in the Habits subject: make the good choice the default.

## A simple split to start from

A popular starting point is the **50/30/20** guideline: roughly 50% of take-home pay on needs, 30% on wants, and 20% on saving and paying off debt beyond the minimums.

It's a rule of thumb, not a law. In expensive cities, needs may take far more than 50%. What matters is that:

- Saving is a **fixed line**, not leftovers.
- Spending matches **your priorities**. Spending a lot on something you value is fine if you cut what you don't.
- You **review** it every few months, especially after a pay rise. Saving part of every raise prevents lifestyle creep.
`,
    takeaways: [
      'Track a month of spending before you set a budget.',
      'Pay yourself first by automating savings on payday.',
      '50/30/20 (needs, wants, saving) is a starting point; adjust to your situation.',
    ],
    quiz: [
      {
        q: 'What\'s the best first step towards a budget?',
        options: ['Pick a target and stick to it', 'Track every expense for a month to see where money actually goes', 'Cancel all subscriptions', 'Open a new bank account'],
        answer: 1,
        why: 'You can\'t plan well without knowing current spending.',
      },
      {
        q: 'What does "pay yourself first" mean?',
        options: ['Spend on yourself before bills', 'Move savings out automatically on payday, then live on the rest', 'Pay off all debt before saving', 'Give yourself a bonus'],
        answer: 1,
        why: 'Savings become a fixed line rather than whatever is left.',
      },
      {
        q: 'Under the 50/30/20 guideline, what\'s the 20% for?',
        options: ['Rent', 'Wants', 'Saving and extra debt repayment', 'Tax'],
        answer: 2,
        why: 'Roughly 50% needs, 30% wants, 20% saving and debt repayment.',
      },
    ],
    practice: 'List every subscription and recurring payment you have. Cancel at least one you don\'t value, and set up an automatic transfer to savings on your next payday, even a small one.',
    cards: [
      { id: 'c-fin-budget-1', front: 'What does "pay yourself first" mean?', back: 'Automatically move savings out on payday, before spending, and live on the rest.' },
      { id: 'c-fin-budget-2', front: 'The 50/30/20 guideline?', back: 'Roughly 50% of take-home pay on needs, 30% on wants, 20% on saving and debt repayment.' },
      { id: 'c-fin-budget-3', front: 'What is lifestyle creep?', back: 'Spending rising with each pay rise, so you never save more; prevent it by saving part of every raise.' },
    ],
    related: ['hab-environment'],
  },
  {
    id: 'fin-emergency',
    unit: 'Foundations',
    title: 'The emergency fund',
    summary: 'A cash buffer turns a crisis into an inconvenience and keeps you out of expensive debt.',
    ideas: ['Why you need a buffer', 'How much and where to keep it'],
    body: `
## Why you need a buffer

Unexpected costs are normal: a car repair, a broken laptop, a vet bill, a gap between jobs. Without savings, these go on a credit card or a loan, often at high interest, and a one-off problem becomes months of repayments.

An **emergency fund** is money set aside only for genuine surprises. It also gives you options: you can leave a bad job, refuse a bad deal or handle bad news without panic.

## How much and where to keep it

A common guideline is **three to six months of essential expenses**: what you'd need for rent, bills, food and transport if your income stopped. Lean towards the higher end if your income is irregular, you're self-employed, you support others, or your industry has frequent layoffs.

That can sound daunting. The US Consumer Financial Protection Bureau suggests starting with a **small goal**, such as a few hundred dollars, then building gradually. Even a modest buffer handles many common surprises, and it's motivating to reach a first milestone.

Where to keep it:

- **Easy to reach** within a day or two, but **separate** from your everyday account, so you're not tempted to spend it.
- **Safe**: a savings account with deposit protection, not shares, which might fall just when you need the money.
- **Earning some interest**, if possible. A high-interest savings account is a common choice.

Decide in advance what counts as an emergency. A sale on a new phone doesn't; a broken phone you need for work might. And when you use the fund, make refilling it your next priority.
`,
    takeaways: [
      'An emergency fund keeps surprises from turning into high-interest debt.',
      'Aim for three to six months of essential expenses; start with a small first goal.',
      'Keep it accessible, separate, safe and ideally earning interest.',
    ],
    quiz: [
      {
        q: 'Why keep an emergency fund in cash savings rather than shares?',
        options: ['Shares are illegal for this', 'Shares can fall just when you need the money', 'Cash always grows faster', 'Shares can\'t be sold'],
        answer: 1,
        why: 'Emergencies often coincide with downturns; the fund needs to be stable.',
      },
      {
        q: 'What\'s a common guideline for the size of an emergency fund?',
        options: ['One week of spending', 'Three to six months of essential expenses', 'Ten years of salary', 'Whatever is in your current account'],
        answer: 1,
        why: 'More if income is irregular or job security is low.',
      },
      {
        q: 'Which is a genuine use for the emergency fund?',
        options: ['A holiday deal', 'An urgent car repair you need to get to work', 'A new TV on sale', 'Concert tickets'],
        answer: 1,
        why: 'Unexpected, necessary costs are what it\'s for.',
      },
    ],
    practice: 'Add up one month of your essential expenses. Multiply by three. Set a first milestone and an automatic transfer towards it.',
    cards: [
      { id: 'c-fin-emergency-1', front: 'Recommended emergency fund size?', back: 'Three to six months of essential expenses; more if income is irregular.' },
      { id: 'c-fin-emergency-2', front: 'Where should an emergency fund be kept?', back: 'Accessible but separate, safe (protected savings, not shares), ideally earning interest.' },
    ],
    related: ['fin-debt'],
    sources: [SRC.cfpbEmergency],
  },
  {
    id: 'fin-compound',
    unit: 'Foundations',
    title: 'Compound interest',
    summary: 'Growth on growth is the most powerful force in personal finance, for savings and for debt.',
    ideas: ['Interest on interest', 'Start early', 'The rule of 72'],
    body: `
## Interest on interest

**Simple interest** pays only on your original amount. **Compound interest** pays on the original amount **plus the interest already earned**. Each year's growth is bigger than the last.

£10,000 growing at 7% a year:

- After 10 years: about £19,700.
- After 20 years: about £38,700.
- After 30 years: about £76,100.

The money roughly doubles every decade, and most of the growth comes in the later years.

## Start early

Because growth accelerates, **time** matters more than almost anything else. Suppose two people each invest £200 a month and earn 7% a year (an assumption for illustration; real returns vary and aren't guaranteed):

- **Alex** starts at 25 and invests until 65: about **£525,000**, from £96,000 of contributions.
- **Sam** starts at 35 and invests until 65: about **£244,000**, from £72,000 of contributions.

Alex paid in only £24,000 more but ended with more than **twice** as much, because their early money had ten extra years to compound.

The lesson isn't to panic if you're starting late; it's that **starting now beats starting later**, whatever your age.

## The rule of 72

A quick way to estimate doubling time: **divide 72 by the annual percentage rate**.

- At 6%, money doubles in about 12 years.
- At 9%, in about 8 years.
- At 24%, in about 3 years.

That last one is a typical credit card rate. Compounding works just as powerfully **against** you on debt.
`,
    takeaways: [
      'Compound interest earns interest on interest, so growth accelerates over time.',
      'Starting ten years earlier can more than double the final amount.',
      'Rule of 72: divide 72 by the rate to estimate doubling time. It works for debt too.',
    ],
    quiz: [
      {
        q: 'Using the rule of 72, how long does money take to double at 8% a year?',
        options: ['About 4 years', 'About 9 years', 'About 18 years', 'About 72 years'],
        answer: 1,
        why: '72 ÷ 8 = 9.',
      },
      {
        q: 'Why did Alex end with more than twice Sam\'s total despite paying in only a bit more?',
        options: ['Alex chose better investments', 'Alex\'s early contributions had ten extra years to compound', 'Sam paid higher fees', 'Alex earned a higher rate'],
        answer: 1,
        why: 'Same rate, same monthly amount: the extra time did the work.',
      },
      {
        q: 'A credit card charges 24% a year. Roughly how quickly does an unpaid balance double?',
        options: ['About 3 years', 'About 10 years', 'About 24 years', 'It never doubles'],
        answer: 0,
        why: '72 ÷ 24 = 3. Compounding works against you on debt.',
      },
    ],
    practice: 'Use the SEC\'s compound interest calculator (in the sources) to see what saving a fixed monthly amount would grow to by retirement, starting now versus in five years.',
    cards: [
      { id: 'c-fin-compound-1', front: 'Simple vs compound interest?', back: 'Simple: interest only on the original amount. Compound: interest on the original plus accumulated interest.' },
      { id: 'c-fin-compound-2', front: 'The rule of 72?', back: 'Divide 72 by the annual rate to estimate how many years it takes to double.' },
      { id: 'c-fin-compound-3', front: 'Why start investing early?', back: 'Compounding accelerates over time; extra years can more than double the result.' },
    ],
    related: ['fin-inflation', 'fin-debt'],
    sources: [SRC.compound],
  },
  {
    id: 'fin-inflation',
    unit: 'Foundations',
    title: 'Inflation and real returns',
    summary: 'Rising prices quietly shrink what your money can buy. What matters is growth after inflation.',
    ideas: ['Inflation erodes buying power', 'Real vs nominal returns'],
    body: `
## Inflation erodes buying power

**Inflation** is the general rise in prices over time. If inflation is 3% a year, something costing £100 today costs about £103 next year. Your money buys a little less each year.

It adds up. At 3% inflation, prices double in about 24 years (72 ÷ 3), which means cash under the mattress loses **about half its buying power** over that time.

Many central banks aim for inflation of around **2% a year**. Actual inflation can be much higher for periods: many countries saw rates of 8–10% or more in 2022.

## Real vs nominal returns

The **nominal** return is the headline percentage. The **real** return is what's left after inflation, which is what actually changes how much you can buy.

> Real return ≈ nominal return − inflation

- A savings account paying 4% with inflation at 3% has a real return of about **1%**.
- A savings account paying 1% with inflation at 3% has a real return of about **−2%**: you're losing buying power, even though the balance grows.

What this means in practice:

- **Cash is right for short-term needs** and your emergency fund, where safety matters most. But over decades, cash usually struggles to beat inflation.
- **Long-term savings** usually need to be invested in assets like shares, which have historically grown faster than inflation over long periods, though with ups and downs along the way.
- **Ask for pay rises that at least match inflation**, or your real pay is falling.
- **Fixed-rate debt** gets easier to repay in real terms when inflation is high.
`,
    takeaways: [
      'Inflation reduces what money buys; at 3%, buying power halves in about 24 years.',
      'Real return ≈ nominal return minus inflation.',
      'Cash suits short-term needs; long-term money usually needs to be invested.',
    ],
    quiz: [
      {
        q: 'Your savings pay 2% and inflation is 4%. What\'s your approximate real return?',
        options: ['+6%', '+2%', '−2%', '0%'],
        answer: 2,
        why: '2% − 4% = −2%: your buying power is shrinking.',
      },
      {
        q: 'At 3% inflation, roughly how long until prices double?',
        options: ['3 years', 'About 24 years', '72 years', '100 years'],
        answer: 1,
        why: 'Rule of 72: 72 ÷ 3 = 24.',
      },
      {
        q: 'Why is cash a poor home for money you won\'t need for 30 years?',
        options: ['Banks might close', 'Over long periods it usually struggles to beat inflation', 'Cash is illegal to hold', 'It\'s too risky'],
        answer: 1,
        why: 'Low real returns compound into large losses of buying power.',
      },
    ],
    cards: [
      { id: 'c-fin-inflation-1', front: 'Real vs nominal return?', back: 'Nominal is the headline rate; real ≈ nominal minus inflation.' },
      { id: 'c-fin-inflation-2', front: 'Effect of 3% inflation over 24 years?', back: 'Prices roughly double, so cash loses about half its buying power.' },
    ],
    related: ['fin-compound', 'eco-inflation'],
  },
  {
    id: 'fin-debt',
    unit: 'Debt',
    title: 'Getting out of expensive debt',
    summary: 'High-interest debt is a guaranteed loss. Here\'s how to pay it off efficiently.',
    ideas: ['Not all debt is equal', 'Minimum payments keep you in debt', 'Avalanche or snowball'],
    body: `
## Not all debt is equal

Debt can be useful, such as a reasonable mortgage or a student loan that raises earnings. What matters most is the **interest rate** and what the debt pays for.

Credit cards are usually the most expensive common debt. According to Federal Reserve data, US credit card accounts that carried a balance paid an average rate of about **22% a year** in August 2026. Paying that off is like getting a guaranteed 22% return, far more than investing is likely to earn.

## Minimum payments keep you in debt

Card companies set low minimum payments. Paying only the minimum keeps the account in good standing, but the balance shrinks very slowly while interest piles up.

Take a **$5,000 balance at 22%**:

- Paying **$100 a month** takes about **11 and a half years** and costs about **$13,700** in total.
- Paying **$250 a month** takes just over **two years** and costs about **$6,300**.

Every extra amount above the minimum goes straight to reducing the balance.

## Avalanche or snowball

With several debts, pay the minimum on all of them, then put every spare amount towards one at a time:

- **Avalanche**: target the **highest interest rate** first. This saves the most money.
- **Snowball**: target the **smallest balance** first. You clear whole debts sooner, which some people find motivating.

The avalanche is mathematically better; the snowball can be better if it's what keeps you going. Either beats spreading extra payments thinly.

Also: stop adding new debt while you pay it down, ask your card provider for a lower rate, and consider a 0% balance transfer if you can clear it before the offer ends, checking the fee first.
`,
    takeaways: [
      'Credit card debt (around 22% in the US in 2026) costs more than investing is likely to earn.',
      'Minimum payments stretch debt over years; extra payments cut time and cost sharply.',
      'Avalanche (highest rate first) saves most; snowball (smallest first) can motivate.',
    ],
    quiz: [
      {
        q: 'You have $5,000 on a card at 22%. Roughly how long does paying $100 a month take?',
        options: ['About 1 year', 'About 4 years', 'About 11 and a half years', 'It never ends'],
        answer: 2,
        why: 'Most of each early payment goes on interest, so progress is slow.',
      },
      {
        q: 'Which debt does the avalanche method target first?',
        options: ['The smallest balance', 'The highest interest rate', 'The oldest debt', 'The newest debt'],
        answer: 1,
        why: 'Highest rate first minimises total interest.',
      },
      {
        q: 'Why is paying off a 22% card often better than investing?',
        options: ['Investing is illegal while in debt', 'It\'s a guaranteed 22% saving, more than investments are likely to return', 'Debt has no interest', 'Banks require it'],
        answer: 1,
        why: 'Clearing high-interest debt is a risk-free return at that rate.',
      },
    ],
    practice: 'List each debt you have with its balance, interest rate and minimum payment. Decide whether you\'ll use the avalanche or snowball, and which debt gets your extra payments first.',
    cards: [
      { id: 'c-fin-debt-1', front: 'Avalanche vs snowball debt repayment?', back: 'Avalanche: highest rate first (saves most). Snowball: smallest balance first (quick wins).' },
      { id: 'c-fin-debt-2', front: 'Why are minimum payments dangerous?', back: 'Balances shrink very slowly; $5,000 at 22% paying $100/month takes about 11.5 years.' },
    ],
    related: ['fin-compound', 'fin-emergency'],
    sources: [SRC.fred, SRC.cfpbMinimum],
  },
  {
    id: 'fin-diversify',
    unit: 'Investing',
    title: 'Risk, return and diversification',
    summary: 'Higher expected returns come with bigger swings. Spreading your money out reduces risk you don\'t need.',
    ideas: ['Risk and return go together', 'Don\'t put all your eggs in one basket', 'Match investments to your time horizon'],
    body: `
## Risk and return go together

Investments that can earn more usually come with more ups and downs:

- **Cash savings**: very stable, low returns.
- **Bonds** (loans to governments or companies): usually steadier than shares, with moderate returns.
- **Shares** (part-ownership of companies): historically the highest long-term returns, with large swings. Falls of 20–50% have happened several times in recent decades.

There's no investment with high returns and no risk. Anyone promising one is mistaken or lying.

## Don't put all your eggs in one basket

**Diversification** means spreading money across many investments, so one failure doesn't sink you. Individual companies can collapse; a broad market of thousands of companies rarely does.

- Holding one company's shares, even your employer's, is concentrated risk. If the company struggles, you could lose your job and your savings together.
- A fund holding hundreds or thousands of companies across countries and industries spreads that risk widely.

Diversification reduces the risk specific to individual companies or sectors. It can't remove the risk of the whole market falling, which is why the next point matters.

## Match investments to your time horizon

**Asset allocation** is how you split money between shares, bonds and cash, and it should depend mainly on **when you'll need the money** and how much risk you can tolerate:

- **Needed within a few years** (house deposit, emergency fund): mostly cash or similar. A market fall right before you need it could be disastrous.
- **Needed in decades** (retirement in your 20s or 30s): you can usually afford more in shares, because there's time to recover from falls.

As the date approaches, gradually shifting towards steadier assets reduces the chance of a big fall at the worst moment.
`,
    takeaways: [
      'Higher expected returns come with larger swings; there\'s no high return without risk.',
      'Diversify across many companies, sectors and countries; avoid concentration.',
      'Choose asset allocation by when you need the money: short-term in cash, long-term can hold more shares.',
    ],
    quiz: [
      {
        q: 'What does diversification protect against best?',
        options: ['Every possible loss', 'Losses from a single company or sector failing', 'Inflation', 'Fees'],
        answer: 1,
        why: 'It spreads company-specific risk; it can\'t remove market-wide falls.',
      },
      {
        q: 'You\'re saving for a house deposit you\'ll need in 18 months. Where should it mostly be?',
        options: ['Shares in a single company', 'Cash or similar stable savings', 'Cryptocurrency', 'A broad share fund'],
        answer: 1,
        why: 'Short horizons can\'t ride out a market fall.',
      },
      {
        q: 'Why can a 25-year-old saving for retirement usually hold more in shares?',
        options: ['Shares never fall', 'They have decades to recover from falls', 'Young people pay no tax', 'Bonds are banned'],
        answer: 1,
        why: 'Long time horizons allow recovery from downturns.',
      },
    ],
    cards: [
      { id: 'c-fin-diversify-1', front: 'What is diversification?', back: 'Spreading money across many investments so no single failure does serious damage.' },
      { id: 'c-fin-diversify-2', front: 'What is asset allocation?', back: 'How you split money between shares, bonds and cash, mainly based on when you need it.' },
      { id: 'c-fin-diversify-3', front: 'Where should money needed within a few years go?', back: 'Mostly cash or similar stable savings.' },
    ],
    related: ['dm-beyond-ev'],
    sources: [SRC.allocation],
  },
  {
    id: 'fin-index',
    unit: 'Investing',
    title: 'Index funds vs picking winners',
    summary: 'Most professional fund managers fail to beat a simple, cheap index fund over the long run.',
    ideas: ['What an index fund is', 'Most active funds underperform'],
    body: `
## What an index fund is

A stock market **index** measures a group of companies, such as the S&P 500 (500 large US companies) or a global index of thousands of companies across many countries. An **index fund** (often bought as an **ETF**, exchange-traded fund) simply holds all the companies in an index, in proportion to their size.

There's no manager trying to pick winners, so:

- It's **cheap**: annual fees are often below 0.2%, sometimes far lower.
- It's **diversified**: one fund can hold thousands of companies.
- You get the **market's return**, minus a small fee.

An **active fund**, by contrast, has managers who choose investments, trying to beat the market. They usually charge higher fees for this.

## Most active funds underperform

S&P Dow Jones Indices publishes the **SPIVA** scorecard, comparing active funds with their benchmark indexes. The results are consistent:

- In **2025**, **79%** of actively managed US large-company funds underperformed the S&P 500.
- Over the **15 years to the end of 2024**, there was **no category** of US stock funds in which most active managers beat their benchmark.

Why? Markets are competitive: millions of professionals are trying to find bargains, so prices quickly reflect available information. Active funds also charge higher fees, which come off returns every year. And the few funds that beat the market in one period rarely keep doing so.

This is why many experts, including Warren Buffett, have recommended low-cost index funds for most individual investors. It's not exciting, but it means you're very likely to beat most professionals simply by not trying to.
`,
    takeaways: [
      'An index fund holds every company in an index: cheap, diversified, market returns.',
      'SPIVA: 79% of US large-cap active funds underperformed the S&P 500 in 2025.',
      'Over 15 years, most active managers in every US stock category lagged their benchmark.',
    ],
    quiz: [
      {
        q: 'What does an index fund do?',
        options: ['Picks the best-performing shares', 'Holds all companies in an index in proportion to their size', 'Guarantees a fixed return', 'Times the market'],
        answer: 1,
        why: 'It tracks the index rather than trying to beat it.',
      },
      {
        q: 'According to SPIVA, what share of US large-cap active funds underperformed the S&P 500 in 2025?',
        options: ['About 10%', 'About 50%', '79%', '100%'],
        answer: 2,
        why: 'Most active funds lagged the index.',
      },
      {
        q: 'Why do most active funds lag over the long run?',
        options: ['Managers are lazy', 'Competitive markets plus higher fees, and past winners rarely keep winning', 'Index funds cheat', 'They don\'t lag'],
        answer: 1,
        why: 'Beating the market consistently after fees is very hard.',
      },
    ],
    cards: [
      { id: 'c-fin-index-1', front: 'What is an index fund?', back: 'A fund that holds all companies in a market index, giving market returns at low cost.' },
      { id: 'c-fin-index-2', front: 'What does SPIVA show?', back: 'Most active funds underperform their benchmark index, especially over long periods.' },
    ],
    related: ['fin-fees', 'fin-diversify'],
    sources: [SRC.spiva2025, SRC.spiva2024],
  },
  {
    id: 'fin-fees',
    unit: 'Investing',
    title: 'Fees compound too',
    summary: 'A 1% fee sounds tiny. Over decades it can take a large share of your returns.',
    ideas: ['Small fees, big differences', 'Where fees hide'],
    body: `
## Small fees, big differences

Investment fees are usually quoted as a percentage of your money per year: 0.1%, 0.5%, 1%. They sound small. But they're charged **every year on your whole balance**, so they compound against you, the same way returns compound for you.

The US Securities and Exchange Commission gives this example. **$100,000** invested for **20 years**, growing at **4% a year** before fees:

- With a **0.25%** annual fee: about **$208,000**.
- With a **0.50%** fee: about **$198,000**.
- With a **1.00%** fee: about **$179,000**.

The 1% fee costs nearly **$30,000** more than the 0.25% fee, on the same investments. Over 30 or 40 years, the gap grows much larger.

Unlike returns, which are uncertain, fees are **certain**. Cutting them is one of the few reliable ways to improve your results.

## Where fees hide

Look for:

- **Fund fees** (the expense ratio or ongoing charge): what the fund charges each year. Broad index funds are often well under 0.2%.
- **Platform or account fees**: what the provider charges to hold your investments.
- **Adviser fees**: often around 1% of your money a year. Good advice can be worth paying for, especially for complex situations, but know what you're paying.
- **Trading costs** and commissions, and the cost of trading often.
- **Sales charges** on some funds when you buy or sell.

Add them up. A total of 1.5–2% a year can quietly consume a large share of your long-term returns. Ask any provider: "What's the total I'll pay each year, in money, on a balance like mine?"
`,
    takeaways: [
      'Fees compound against you every year on your whole balance.',
      'SEC example: on $100,000 over 20 years, a 1% fee leaves about $29,000 less than 0.25%.',
      'Check fund, platform, adviser and trading fees, and add them up.',
    ],
    quiz: [
      {
        q: 'In the SEC example, roughly how much more does a 1% fee cost than a 0.25% fee over 20 years on $100,000?',
        options: ['About $300', 'About $3,000', 'About $29,000', 'Nothing'],
        answer: 2,
        why: 'About $208,000 versus $179,000.',
      },
      {
        q: 'Why are fees especially worth reducing?',
        options: ['They\'re illegal', 'Returns are uncertain but fees are certain', 'They\'re tax-deductible', 'They don\'t compound'],
        answer: 1,
        why: 'Lower fees reliably improve results.',
      },
      {
        q: 'Which question best reveals what you\'ll pay?',
        options: ['"Is it a good fund?"', '"What\'s the total I\'ll pay each year, in money, on my balance?"', '"Did it do well last year?"', '"Is it popular?"'],
        answer: 1,
        why: 'Turning percentages into money makes costs clear.',
      },
    ],
    practice: 'Find the annual fees on any pension or investment account you have. Convert the total percentage into money per year on your balance.',
    cards: [
      { id: 'c-fin-fees-1', front: 'Why do small investment fees matter?', back: 'They\'re charged yearly on the whole balance and compound against you.' },
      { id: 'c-fin-fees-2', front: 'SEC fee example ($100k, 20 years, 4%)?', back: '0.25% fee: ~$208k; 1% fee: ~$179k.' },
    ],
    related: ['fin-index'],
    sources: [SRC.fees],
  },
  {
    id: 'fin-long-term',
    unit: 'Investing',
    title: 'Investing for the long term',
    summary: 'Time in the market beats timing the market. Use tax advantages and employer contributions.',
    ideas: ['Don\'t try to time the market', 'Take the free money first'],
    body: `
## Don't try to time the market

Markets rise and fall unpredictably in the short term. It's tempting to sell when prices fall and wait to buy back "when things settle". In practice:

- Nobody reliably predicts short-term moves, including professionals.
- Some of the market's **best days have historically come close to its worst**, often during turbulent periods. Investors who sell in a panic often miss the recovery.
- Selling after a fall turns a temporary paper loss into a permanent one.

What tends to work better:

- **Invest regularly**, such as monthly, whatever the market is doing. This is sometimes called **pound-cost** or **dollar-cost averaging**: you buy more units when prices are low and fewer when high.
- **Keep a long horizon** for money in shares, and keep short-term money out of the market.
- **Look less often.** Checking daily makes falls feel bigger and tempts you to act.
- **Rebalance** occasionally, back to your chosen mix of shares and bonds.

## Take the free money first

Many countries offer **tax-advantaged accounts** for retirement or long-term saving, such as workplace pensions, 401(k)s and IRAs in the US, ISAs and SIPPs in the UK, or superannuation in Australia. Rules differ widely, so check your local system, but they can significantly boost long-term growth.

If your employer **matches** your pension contributions, for example adding 50p or £1 for every £1 you put in up to a limit, contribute at least enough to get the full match. It's an immediate, guaranteed return of 50–100% on that money, better than almost anything else available. Not taking it is turning down part of your pay.
`,
    takeaways: [
      'Short-term moves are unpredictable; panic selling often locks in losses and misses recoveries.',
      'Invest regularly, keep a long horizon, look less often, and rebalance occasionally.',
      'Use tax-advantaged accounts and always take any full employer match.',
    ],
    quiz: [
      {
        q: 'The market falls 20%. What does long-term evidence suggest for money you won\'t need for 20 years?',
        options: ['Sell everything now', 'Stay invested and keep contributing regularly', 'Move it all to cash until prices recover', 'Buy a single stock'],
        answer: 1,
        why: 'Selling locks in losses and risks missing the recovery.',
      },
      {
        q: 'What is dollar-cost (or pound-cost) averaging?',
        options: ['Buying only when prices fall', 'Investing a fixed amount regularly, regardless of price', 'Selling at the average price', 'Averaging fund fees'],
        answer: 1,
        why: 'You automatically buy more when prices are low.',
      },
      {
        q: 'Your employer matches pension contributions £1 for £1 up to 5% of salary. What should you usually do?',
        options: ['Contribute nothing and save cash instead', 'Contribute at least 5% to get the full match', 'Contribute 1%', 'Ask for cash instead'],
        answer: 1,
        why: 'A full match is an immediate 100% return on that money.',
      },
    ],
    practice: 'Check whether your employer offers pension matching and whether you\'re getting the full amount. If not, work out what you\'d need to contribute.',
    cards: [
      { id: 'c-fin-long-term-1', front: 'Time in the market vs timing the market?', back: 'Staying invested long-term beats trying to predict short-term moves; panic selling often misses recoveries.' },
      { id: 'c-fin-long-term-2', front: 'What is an employer match?', back: 'Your employer adds money when you contribute to a pension; take the full match, it\'s an immediate guaranteed return.' },
    ],
    related: ['fin-diversify', 'ct-biases-judgement'],
  },
  {
    id: 'fin-protect',
    unit: 'Protecting yourself',
    title: 'Insurance and scams',
    summary: 'Insure against what you can\'t afford to lose, and learn the warning signs of fraud.',
    ideas: ['Insure catastrophes, not inconveniences', 'Spot a scam'],
    body: `
## Insure catastrophes, not inconveniences

Insurance is a bet you expect to lose on average: insurers take in more in premiums than they pay out. It's still worth buying when the loss would be **catastrophic** for you:

- **Usually worth it**: health cover where it isn't provided publicly, home or renters insurance, car liability insurance (often legally required), life insurance if others depend on your income, and income protection if you couldn't cope without your salary.
- **Often poor value**: extended warranties on electronics, phone insurance, and small add-ons sold at checkout. You can usually cover these losses from your emergency fund.

A higher **deductible** or **excess** (the part you pay yourself) usually lowers your premium. If you have an emergency fund, choosing a higher excess often saves money over time.

## Spot a scam

According to the US Federal Trade Commission, consumers reported losing a record **$15.9 billion** to fraud in 2025, with **investment scams** the costliest category at **$7.9 billion**. Most fraud goes unreported, so the real figure is higher.

Warning signs:

- **Guaranteed high returns** with little or no risk. Real investments don't work like that.
- **Urgency and pressure**: "act today", "limited spots", threats of fines or arrest.
- **Unusual payment methods**: gift cards, cryptocurrency, wire transfers, or "moving your money to a safe account".
- **Unsolicited contact**, including from someone you met online who later raises investing.
- **Requests for codes, passwords or remote access** to your device.
- Impersonating **banks, government agencies, delivery firms or family members** in trouble.

The safest habit: **stop and verify independently**. Hang up and call the organisation on a number you find yourself. Legitimate organisations won't mind you checking.
`,
    takeaways: [
      'Insure against losses you couldn\'t afford; self-insure small ones with your emergency fund.',
      'US consumers reported $15.9 billion in fraud losses in 2025; investment scams cost the most.',
      'Red flags: guaranteed returns, urgency, gift cards or crypto, unsolicited contact. Stop and verify.',
    ],
    quiz: [
      {
        q: 'Which insurance is usually best value?',
        options: ['An extended warranty on headphones', 'Insurance against a loss you couldn\'t afford, like your home burning down', 'Phone insurance on a cheap phone', 'Checkout add-ons'],
        answer: 1,
        why: 'Insurance makes sense for catastrophic losses.',
      },
      {
        q: 'According to the FTC, which fraud category cost US consumers the most in 2025?',
        options: ['Lottery scams', 'Investment scams', 'Fake charities', 'Prize draws'],
        answer: 1,
        why: 'Investment scams accounted for $7.9 billion of $15.9 billion reported.',
      },
      {
        q: 'You get a call from "your bank" saying your account is compromised and you must move money to a safe account now. What should you do?',
        options: ['Follow their instructions quickly', 'Hang up and call your bank on the number on your card', 'Give them your login to check', 'Move half the money'],
        answer: 1,
        why: 'Urgency plus moving money is a classic scam; verify independently.',
      },
    ],
    practice: 'Review your insurance policies. Is there one covering a loss you could easily absorb? Is there a catastrophic risk you\'re not covered for?',
    cards: [
      { id: 'c-fin-protect-1', front: 'When is insurance worth buying?', back: 'When the loss would be catastrophic for you; small losses are better covered by an emergency fund.' },
      { id: 'c-fin-protect-2', front: 'Five scam red flags?', back: 'Guaranteed returns, urgency, gift cards/crypto/wire payments, unsolicited contact, requests for codes or access.' },
      { id: 'c-fin-protect-3', front: 'Best response to a suspicious call?', back: 'Hang up and contact the organisation on a number you find yourself.' },
    ],
    related: ['fin-emergency'],
    sources: [SRC.ftc],
  },
]
