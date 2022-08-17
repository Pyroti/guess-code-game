import {
  MysteryNumbersAction,
  MysteryNumbersActionTypes,
} from '../types/mysteryNumbersTypes'

export interface InitMysteryNumbersState {
  mysteryNumbersAnswer: number[]
  userAnswer: number[]
}

const initialState: InitMysteryNumbersState = {
  mysteryNumbersAnswer: [],
  userAnswer: [],
}

const MysteryNumbersReducer = (
  state = initialState,
  action: MysteryNumbersAction
): InitMysteryNumbersState => {
  switch (action.type) {
    case MysteryNumbersActionTypes.MYSTERY_NUMBER_ANSWER:
      return {
        ...state,
        mysteryNumbersAnswer: action.payload.mysteryNumbersAnswer,
      }
    case MysteryNumbersActionTypes.MYSTERY_NUMBER_USER:
      return {
        ...state,
        userAnswer: action.payload.userAnswer,
      }
    default:
      return state
  }
}

export default MysteryNumbersReducer
