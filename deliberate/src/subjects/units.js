// Groups lessons into units by their `unit` field, keeping the order units first appear in.
export function unitsFrom(lessons) {
  const units = []
  for (const lesson of lessons) {
    let unit = units.find((u) => u.title === lesson.unit)
    if (!unit) units.push((unit = { id: lesson.unit.toLowerCase().replace(/\W+/g, '-'), title: lesson.unit, lessons: [] }))
    unit.lessons.push(lesson)
  }
  return units
}
