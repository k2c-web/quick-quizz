import Question from './Question'
import { FC, useState, useEffect } from 'react'
import questionsSet from './mokeData'
import Header from './Header'
import StartScreen from './StartScreen'
import EndScreen from './EndScreen'
import './index.css'

type Props = {}

type q = {
  question: string
  time: number
  responses: { title: string; valid: boolean }[]
}

const Quizz: FC<Props> = () => {
  // States
  const [quizzScore, setQuizzScore] = useState(0)
  const [activeIndex, setActiveIndex] = useState(-1)

  // Computed
  const QuestionsLength = questionsSet?.length

  const ended = activeIndex > QuestionsLength - 1

  // Functions
  const startGame = () => setActiveIndex(0)

  const handleNext = (i: number) => setActiveIndex(i)

  const updateScore = (value: number) => setQuizzScore(quizzScore + value)


  return (
    <>
      <Header>Score : {quizzScore}</Header>
      <div className="quizz-root">
        {<StartScreen startGame={startGame} activeIndex={activeIndex} ended={ended} />}
        {activeIndex >=0 && questionsSet.map((q: q, i: number) => {
          return (
            <Question
              data={q}
              key={i}
              activeIndex={activeIndex}
              isActive={activeIndex === i}
              setActiveIndex={handleNext}
              updateScore={updateScore}
            />
          )
        })}
        {!!ended && (
          <EndScreen quizzLength={QuestionsLength} quizzScore={quizzScore} ended={ended}/>
        )}
      </div>
    </>
  )
}

export default Quizz
