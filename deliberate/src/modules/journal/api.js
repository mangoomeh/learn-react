// Public API: what other modules may use from the Journal.
import { earn } from '../../core/store/core'

export const XP_PER_ENTRY = 10

// Save a journal entry; `source` says where it came from (e.g. a lesson title).
export const addEntry = ({ prompt, text, source }) => [{ type: 'journal/add', prompt, text, source }, earn(XP_PER_ENTRY)]

export const deleteEntry = (id) => ({ type: 'journal/delete', id })
