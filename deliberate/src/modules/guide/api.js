import { earn } from '../../core/store/core'
import { addCards } from '../review/api'

export const XP_PER_ARTICLE = 15

// Reading an article puts its flashcards in the review deck. XP is only awarded the first time.
export function markRead(article, alreadyRead) {
  if (alreadyRead) return []
  return [{ type: 'guide/markRead', articleId: article.id }, addCards(article.cards.map((c) => c.id)), earn(XP_PER_ARTICLE)]
}

export const markUnread = (article) => ({ type: 'guide/markUnread', articleId: article.id })
