// Daily drills for this subject. Multiple-choice drills have `options` + `answer`; open drills
// have a model `answer` that is revealed, and the learner rates their own attempt.
export const drills = [
  {
    id: 'ch-code-1',
    kind: 'code',
    prompt: 'What is the time complexity of this function, and how would you improve it?',
    code: `function hasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i) return true
  }
  return false
}`,
    answer:
      'O(n²): indexOf is a linear scan inside a loop. Use a Set: `return new Set(arr).size !== arr.length` (O(n)), or add items to a Set and return early on the first repeat.',
  },
  {
    id: 'ch-code-2',
    kind: 'code',
    prompt: 'This React component re-fetches in an infinite loop. Why?',
    code: `function Profile({ id }) {
  const [user, setUser] = useState(null)
  const options = { headers: { id } }
  useEffect(() => {
    fetch('/api/user', options).then(r => r.json()).then(setUser)
  }, [options])
  return <p>{user?.name}</p>
}`,
    answer:
      '`options` is a new object on every render, so the effect\'s dependency always changes: fetch, setUser, re-render, new object, fetch again. Depend on `id` instead and build options inside the effect (or memoise them with useMemo).',
  },
  {
    id: 'ch-code-3',
    kind: 'code',
    prompt: 'What does this log, and why?',
    code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0)
}`,
    answer:
      'It logs 3, 3, 3. `var` is function-scoped, so all three callbacks share one `i`, which is 3 by the time they run. Using `let` creates a new binding per iteration and logs 0, 1, 2.',
  },
  {
    id: 'ch-code-4',
    kind: 'code',
    prompt: 'Find the bug.',
    code: `function average(nums) {
  let total = 0
  for (const n of nums) total += n
  return total / nums.length
}`,
    answer:
      'An empty array returns NaN (0 / 0). Decide what an empty input should mean (return 0, null, or throw) and handle it explicitly. Edge cases like empty input are where bugs hide.',
  },
  {
    id: 'ch-code-5',
    kind: 'code',
    prompt: 'Two requests run this at the same moment for an account with balance 100. What can go wrong?',
    code: `async function withdraw(accountId, amount) {
  const acct = await db.get(accountId)
  if (acct.balance < amount) throw new Error('Insufficient funds')
  await db.update(accountId, { balance: acct.balance - amount })
}`,
    answer:
      'A race condition (check-then-act). Both requests read 100, both pass the check, and both write. Two withdrawals of 80 can both succeed, and one update overwrites the other. Fix with an atomic conditional update (`UPDATE ... SET balance = balance - 80 WHERE id = ? AND balance >= 80`), a transaction with row locking, or optimistic concurrency (version numbers).',
  },
  {
    id: 'ch-code-6',
    kind: 'code',
    prompt: 'What is wrong with this way of updating state?',
    code: `function TodoList() {
  const [todos, setTodos] = useState([])
  function add(text) {
    todos.push({ text })
    setTodos(todos)
  }
  // ...
}`,
    answer:
      'It mutates the existing array and passes the same reference back, so React sees no change and may not re-render. Create a new array: `setTodos(prev => [...prev, { text }])`. The updater form also avoids stale-state bugs.',
  },
  {
    id: 'ch-design-1',
    kind: 'design',
    prompt:
      'Your product page is slow because it calls a pricing service on every request. Prices change a few times a day. What would you do, and what is the trade-off?',
    answer:
      'Cache prices (in memory or Redis) with a TTL of a few minutes, or invalidate on price change events. Trade-off: users may briefly see stale prices. Decide whether that\'s acceptable (perhaps re-check the price at checkout) and how you\'ll invalidate. Also consider what happens when the cache is cold or the pricing service is down.',
  },
  {
    id: 'ch-design-2',
    kind: 'design',
    prompt:
      'Sending a welcome email currently happens inside the signup request, and the email provider is sometimes slow, making signups time out. How would you redesign it?',
    answer:
      'Move email sending to a background job: signup writes a "send welcome email" message to a queue and returns immediately; a worker sends it with retries and backoff. Trade-offs: more moving parts, and the email arrives a few seconds later. Make the job idempotent so retries don\'t send duplicates.',
  },
  {
    id: 'ch-design-3',
    kind: 'design',
    prompt:
      'A teammate proposes splitting your 5-person team\'s monolith into 12 microservices "so it scales." How do you respond?',
    answer:
      'Ask what problem it solves: is there an actual scaling or deployment bottleneck? Microservices add network calls, distributed failures, deployment and observability overhead, which is a lot for 5 people. Alternatives: modularise the monolith with clear boundaries, scale it horizontally, extract only a part with genuinely different needs. Steelman their concern first; it may be about deploy coupling or ownership.',
  },
]
