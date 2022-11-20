import Text from '../../Commons/Text'
import { FC } from 'react'

type Props = {
  children?: React.ReactNode
}
const Header: FC<Props> = ({ children }) => {
  return (
    <header>
      <Text Tag="h1" className="site-title" children={children} />
    </header>
  )
}

Header.displayName = 'Header'

export default Header
