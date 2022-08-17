const maxAnswersCount = 4
const maxNumberValue = 9

export const makeMysteryNumbersAnswer = () => {
  const answer = new Array(maxAnswersCount)
    .fill(0)
    .map(() => Math.round(Math.random() * maxNumberValue))
  return answer
}
