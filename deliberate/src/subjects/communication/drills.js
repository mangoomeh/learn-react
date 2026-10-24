// Daily drills for this subject. Multiple-choice drills have `options` + `answer`; open drills
// have a model `answer` that is revealed, and the learner rates their own attempt.
export const drills = [
  {
    id: 'com-dr-1',
    kind: 'writing',
    prompt: 'Rewrite this so the point comes first: "Over the last few weeks, the team has been looking into the slowness some customers reported. We tried several things. Eventually we found the database was missing an index. We\'d like to add it on Saturday night, which needs a 10-minute outage."',
    answer: '"Can we take a 10-minute outage on Saturday night to add a database index? It should fix the slowness customers have been reporting. We traced the problem to the missing index after testing several other causes." The request and its benefit come first; the background follows for anyone who wants it.',
  },
  {
    id: 'com-dr-2',
    kind: 'writing',
    prompt: 'Simplify: "In order to facilitate the commencement of the project, it is requested that all stakeholders utilise the shared folder at this point in time."',
    answer: '"To start the project, please use the shared folder now." Or, naming the actor: "Please put your project files in the shared folder so we can start." Long words replaced, passive voice made active, filler removed.',
  },
  {
    id: 'com-dr-3',
    kind: 'writing',
    prompt: 'Which request is most likely to get a useful reply on time?',
    options: ['"Thoughts?"', '"Let me know what you think when you can."', '"Could you check the pricing table on page 3 by Thursday noon and tell me if anything is unclear?"', '"Please review everything ASAP."'],
    answer: 2,
    explanation: 'It names the part, the deadline and the type of feedback needed.',
  },
  {
    id: 'com-dr-4',
    kind: 'conversation',
    prompt: 'A colleague tells you, frustrated, that the client changed requirements again. What\'s the best first response?',
    options: ['"That happens on every project."', '"You should push back harder."', '"So they\'ve changed the requirements again, after you\'d started building. That sounds frustrating. What changed?"', '"Let\'s not complain."'],
    answer: 2,
    explanation: 'Reflecting back and asking a follow-up shows you listened before jumping to advice.',
  },
  {
    id: 'com-dr-5',
    kind: 'writing',
    prompt: 'Which sentence suffers most from the curse of knowledge, for a new hire?',
    options: ['"The office opens at 8am."', '"Ping the SRE on-call via PD if the p99 SLO burns."', '"Lunch is provided on Fridays."', '"Your laptop arrives on Monday."'],
    answer: 1,
    explanation: 'It\'s packed with jargon and acronyms a newcomer won\'t know.',
  },
  {
    id: 'com-dr-6',
    kind: 'writing',
    prompt: 'You have to give a 5-minute update on a project that\'s behind schedule. Outline it.',
    answer: 'Message first: "We\'re two weeks behind, and here\'s how we\'ll land by the end of June." Then two or three points: what caused the delay (with one concrete example), what you\'ve changed, and what you need from the audience (for example, a decision to cut one feature). Close by restating the new date and the decision you need. Keep slides to one idea each and practise once out loud.',
  },
]
