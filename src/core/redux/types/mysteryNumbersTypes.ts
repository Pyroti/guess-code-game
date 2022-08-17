export enum MysteryNumbersActionTypes {
  MYSTERY_NUMBER_ANSWER = 'MYSTERY_NUMBER_ANSWER',
  MYSTERY_NUMBER_USER = 'MYSTERY_NUMBER_SUCCESS',
}

export interface MysteryNumbersAnswerAction {
  type: MysteryNumbersActionTypes.MYSTERY_NUMBER_ANSWER
  payload: {
    mysteryNumbersAnswer: number[]
  }
}

export interface MysteryNumbersUserAction {
  type: MysteryNumbersActionTypes.MYSTERY_NUMBER_USER
  payload: {
    userAnswer: number[]
  }
}

export type MysteryNumbersAction =
  | MysteryNumbersAnswerAction
  | MysteryNumbersUserAction
