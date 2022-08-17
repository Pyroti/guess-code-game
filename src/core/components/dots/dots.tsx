import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { mysteryNumbersSelectorSelector } from '../../redux/selectors/mysteryNumbersSelector'
import './style.css'

const Dots: React.FC = () => {
  const { mysteryNumbersAnswer, userAnswer } = useSelector(
    mysteryNumbersSelectorSelector
  )

  return (
    <div className="dots">
      {mysteryNumbersAnswer.map((value: number, index) => {
        const style =
          value === userAnswer[index] ? 'dotRightAnswer' : 'dotWrongAnswer'
        return <div key={uuidv4()} className={style} />
      })}
    </div>
  )
}

export default Dots
