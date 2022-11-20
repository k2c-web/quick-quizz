import { useEffect } from 'react'
import { RemoveScroll } from 'react-remove-scroll'
import './styles.css'

const StartScreen = ({ startGame, ended }: { startGame: React.MouseEventHandler,  ended: boolean }) => {

  useEffect( () => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <RemoveScroll enabled={!ended}>
      <section className="start-screen" onClick={startGame}>
        <div>
        <h2>Règles du Jeu :</h2>
          <ul>
            <li>4 points à gagner par question</li>
            <li>1 ou plusieurs bonnes réponses</li>
            <li>1 point par bonne réponse cochée</li>
            <li>
              1 point par mauvaise réponse non cochée
            </li>
            <li>1 réponse minimum pour scorer</li>
          </ul>
        </div>
        <button>Start Quizz</button>
      </section>
    </RemoveScroll>
  )
}

export default StartScreen
