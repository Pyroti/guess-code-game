export const checkAnswers = (answer: number[], userAnswer: number[]) => {
  const isEqual =
    answer.length === userAnswer.length &&
    answer.every((value, index) => value === userAnswer[index])
  return isEqual
}
