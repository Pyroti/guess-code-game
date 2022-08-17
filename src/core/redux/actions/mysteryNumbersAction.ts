import {
  MysteryNumbersAction,
  MysteryNumbersActionTypes,
} from '../types/mysteryNumbersTypes'

export const setMysteryNumbersAnswerAction = (
  mysteryNumbersAnswer: number[]
): MysteryNumbersAction => ({
  type: MysteryNumbersActionTypes.MYSTERY_NUMBER_ANSWER,
  payload: {
    mysteryNumbersAnswer,
  },
})

export const setUserAnswerAction = (
  userAnswer: number[]
): MysteryNumbersAction => ({
  type: MysteryNumbersActionTypes.MYSTERY_NUMBER_USER,
  payload: {
    userAnswer,
  },
})
