import './Question.css'
import { FC, useState, useReducer, useEffect, useRef } from 'react'
import {RemoveScroll} from 'react-remove-scroll';
import smoothscroll from 'smoothscroll-polyfill'

// kick off the polyfill!
smoothscroll.polyfill()

type Props = {
  data?: any
  setActiveIndex: Function
  updateScore: Function
  isActive: boolean
  activeIndex: number
}

type State = { value: boolean }[]

type Responses = { title: string; valid: boolean }[]

type Payload = { checked: boolean; index: number }

type Action = { type: string; payload: Payload }

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'UPDATE':
      const clone = { ...state }
      const index = action.payload.index
      clone[index].value = action.payload.checked
      return clone
    default:
      return state
  }
}

const Question: FC<Props> = ({
  data,
  isActive,
  activeIndex,
  setActiveIndex,
  updateScore,
}) => {
  // Init the initial state according to the number of questions provided in the data
  const initialState: State = []

  data.responses.map(() =>
    initialState.push({
      value: false,
    }),
  )

  // State
  const [time, setTime] = useState(data.time)
  const [state, dispatch] = useReducer(reducer, initialState)
  //const [error, setError] = useState<null | boolean>(null)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [score, setScore] = useState(0)
  const [elapsed, setElapsed] = useState(false)

  // Dom
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!!isActive && rootRef?.current) {
      rootRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      })
    }
  }, [rootRef, isActive])

  useEffect(() => {
    if (!isActive) return

    time > 0 ? setTimeout(() => setTime(time - 1), 1000) : onTimeOut()
  }, [isActive, time])

  const onTimeOut = () => {
    let errors: boolean[] = []
    let success: boolean[] = []

    Object.keys(state).map((k) => {
      const key = parseInt(k)
      const arrayRef =
        state[key]?.value !== data.responses[key].valid ? errors : success

      arrayRef.push(state[key]?.value)
    })
    changeAllScores(success)
    setElapsed(true)

    //setSubmitted(true)
  }
  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    dispatch({
      type: 'UPDATE',
      payload: { index: index, checked: e.target.checked },
    })
  }

  const question: string = data?.question
  const possibleResponses: Responses = data?.responses

  const changeAllScores = (success: boolean[]) => {
    setScore(success.length)
    updateScore(success.length)
  }

  // When form is submitted compare checked checkboxes with answers
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let errors: boolean[] = []
    let success: boolean[] = []

    Object.keys(state).map((k) => {
      const key = parseInt(k)
      const arrayRef =
        state[key]?.value !== data.responses[key].valid ? errors : success

      arrayRef.push(state[key]?.value)
    })

    setSubmitted(true)
    changeAllScores(success)
  }

  // When a question is submitted change the active index to have next question activated
  useEffect(() => {
    if (submitted) setActiveIndex(activeIndex + 1)
  }, [submitted])

  return (
    <section className={'root'} ref={rootRef}>
      <fieldset className="question-fieldset">
        <h2>{question} ?</h2>
        <div> Temps restant : {time === 0 ? 'écoulé' : time}</div>
        <form onSubmit={onFormSubmit}>
          <div className="checkbox-grid">
            {possibleResponses?.map((value, index) => {
              return (
                <div
                  key={value?.title}
                  className={
                    !!submitted || !!elapsed
                      ? 'input-label submitted'
                      : 'input-label'
                  }
                >
                  <label
                    className={
                      (!!value?.valid && !!state[index]?.value) ||
                      (!value?.valid && !state[index]?.value)
                        ? 'green'
                        : 'red'
                    }
                    htmlFor={`response${index}`}
                  >
                    {value?.title}
                  </label>
                  <input
                    onChange={(e) => onInputChange(e, index)}
                    type="checkbox"
                    id={`response${index}`}
                    name={`response${index}`}
                    value={`response${index}`}
                    disabled={!!submitted || !!elapsed}
                  />
                </div>
              )
            })}
          </div>
          <div>
            <button type="submit" disabled={!isActive}>
              {time === 0 ? 'Question Suivante' : 'Valider les réponses'}
            </button>
          </div>
        </form>
        {(!!submitted || !!elapsed) && <h2>Score : {score} / 4</h2>}
      </fieldset>
    </section>
  )
}

export default Question
