import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Dots from './core/components/dots/dots'
import Input from './core/components/input/input'
import { setMysteryNumbersAnswerAction } from './core/redux/actions/mysteryNumbersAction'
import { mysteryNumbersSelectorSelector } from './core/redux/selectors/mysteryNumbersSelector'
import { checkAnswers } from './core/helpers/checkAnswer'
import { makeMysteryNumbersAnswer } from './core/helpers/makeMysteryNumbersAnswer'

const App: React.FC = () => {
  const { mysteryNumbersAnswer, userAnswer } = useSelector(
    mysteryNumbersSelectorSelector
  )
  const dispatch = useDispatch()

  useEffect(() => {
    const answer = makeMysteryNumbersAnswer()
    dispatch(setMysteryNumbersAnswerAction(answer))
  }, [dispatch])

  const isRigth = checkAnswers(mysteryNumbersAnswer, userAnswer)

  return (
    <div className="App">
      <div className="appWin">{isRigth && 'You win'}</div>
      <Dots />
      <Input />
    </div>
  )
}

export default App
