import { useEffect, useRef } from 'react'
import './styles.css'

type Props = {
  quizzLength: number
  quizzScore: number
  ended: boolean
}

const EndScreen: React.FC<Props> = ({ quizzLength, quizzScore, ended }) => {
  const rootRef = useRef<null | HTMLDivElement>(null)
  useEffect(() => {
    if (!!ended && rootRef?.current) {
      rootRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    }
  }, [rootRef])

  return (
    <section ref={rootRef} className="end-screen">
      <p>Le scroll est débloqué, remontez voir en détails si vous le souhaitez :)</p>
      <h2>
        Votre Score final : {quizzScore} sur {quizzLength * 4}
      </h2>
    </section>
  )
}

export default EndScreen
