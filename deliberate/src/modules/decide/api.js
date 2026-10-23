import { earn } from '../../core/store/core'

export const XP = { decision: 15, review: 20, calibration: 3 }

export const addDecision = (decision) => [{ type: 'decide/add', decision }, earn(XP.decision)]

export const reviewDecision = (id, outcome) => [{ type: 'decide/review', id, outcome }, earn(XP.review)]

export const deleteDecision = (id) => ({ type: 'decide/delete', id })

export const logCalibration = (id, confidence, correct) => [{ type: 'decide/calibrate', id, confidence, correct }, earn(XP.calibration)]
