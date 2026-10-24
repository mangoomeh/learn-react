// Daily drills for this subject. Multiple-choice drills have `options` + `answer`; open drills
// have a model `answer` that is revealed, and the learner rates their own attempt.
export const drills = [
  {
    id: 'fin-dr-1',
    kind: 'money',
    prompt: 'At 6% a year, roughly how long does it take for an investment to double?',
    options: ['6 years', '12 years', '18 years', '36 years'],
    answer: 1,
    explanation: 'Rule of 72: 72 ÷ 6 = 12 years.',
  },
  {
    id: 'fin-dr-2',
    kind: 'money',
    prompt: 'You have £2,000 spare. You owe £2,000 on a credit card at 24% and could invest in an index fund. What does the maths favour?',
    options: ['Invest; markets return more', 'Pay off the card; it\'s a guaranteed 24% return', 'Split it equally', 'Keep it in a current account'],
    answer: 1,
    explanation: 'Clearing 24% debt beats likely investment returns, with no risk.',
  },
  {
    id: 'fin-dr-3',
    kind: 'money',
    prompt: 'A savings account pays 1.5% while inflation is 4%. What is happening to the real value of the savings, and what does that suggest?',
    answer: 'The real return is about 1.5% − 4% = −2.5% a year, so the money buys less each year even though the balance rises. For an emergency fund that\'s an acceptable price for safety, though it\'s worth finding a higher-interest account. For long-term savings, it suggests investing in a diversified portfolio that has historically beaten inflation over long periods.',
  },
  {
    id: 'fin-dr-4',
    kind: 'money',
    prompt: 'Fund A charges 1.2% a year; Fund B, a broad index fund, charges 0.1%. Both hold similar investments. Over 30 years, why might the choice matter a lot?',
    answer: 'Fees are taken every year on the whole balance, so the 1.1% difference compounds. Over 30 years it could reduce the final pot by roughly a quarter or more, depending on returns. Since most active funds underperform their index anyway, the cheaper index fund is likely to end up well ahead.',
  },
  {
    id: 'fin-dr-5',
    kind: 'money',
    prompt: 'Someone online promises 3% returns per week, guaranteed, if you pay in cryptocurrency. What\'s the most important red flag?',
    options: ['They use cryptocurrency', 'Guaranteed high returns with no risk, which real investments can\'t offer', 'The returns are weekly', 'They contacted you online'],
    answer: 1,
    explanation: 'Guaranteed high returns are the classic sign of investment fraud; the crypto payment and unsolicited contact are further red flags.',
  },
  {
    id: 'fin-dr-6',
    kind: 'money',
    prompt: 'Your monthly essential expenses are £1,800. You have £1,000 in savings and a stable job. What emergency fund target would you set, and how would you build it?',
    answer: 'Three to six months of essentials is £5,400 to £10,800; with a stable job, around £5,400 is a sensible first target. Start with a milestone such as £2,500, automate a monthly transfer on payday into a separate high-interest savings account, and add part of any bonus or pay rise. Once reached, keep building towards the higher end or redirect savings to investing.',
  },
]
