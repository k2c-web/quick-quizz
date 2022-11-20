import { debugImg } from './utils'

const defaultImg: string = 'https://picsum.photos/200/300'

type Props = {
  src?: string
  alt?: string
  debug?: boolean
}

const Image: React.FC<Props> = ({
  src = defaultImg,
  alt = '',
  debug = true,
}) => {
  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) =>
    debug && debugImg({ e, status: 'loaded', src, alt })

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) =>
    debug && debugImg({ e, status: 'error', src, alt })

  return <img src={src} alt={alt} onLoad={handleLoad} onError={handleError} />
}

export default Image
