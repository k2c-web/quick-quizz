import { useEffect, useRef } from 'react'
import { RemoveScroll } from 'react-remove-scroll'
import './styles.css'

const StartScreen = ({ startGame, activeIndex, ended }: { startGame: React.MouseEventHandler, activeIndex: number, ended: boolean }) => {

  useEffect( () => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <RemoveScroll enabled={!ended}>
      <section className="start-screen" onClick={startGame}>
        <p>
          <ul>
            <li>Il y a 4 points par réponse</li>
            <li>Il y a au moins une, ou plusieurs bonnes réponses</li>
            <li>Vous marquez un point si vous selectionnez une bonne réponse</li>
            <li>
              Vous ne marquez pas le point si vous selectionnez une mauvaise
              réponse
            </li>
            <li>
              Il faut au moins cocher une réponse pour scorer sur la question
            </li>
          </ul>

          <button>Start Quizz</button>
        </p>
      </section>
    </RemoveScroll>
  )
}

export default StartScreen
