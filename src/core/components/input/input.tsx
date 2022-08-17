import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserAnswerAction } from '../../redux/actions/mysteryNumbersAction'

const maxlenghtInput = 4

const Input: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>()
  const dispatch = useDispatch()

  const changeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    if (value.length <= maxlenghtInput) {
      setInputValue(value)
      const numbers = value.split('').map(Number)
      dispatch(setUserAnswerAction(numbers))
    }
  }

  return <input type="number" onChange={changeNumber} value={inputValue} />
}

export default Input
