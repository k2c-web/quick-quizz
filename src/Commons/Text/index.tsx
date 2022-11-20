import type { FunctionComponent, PropsWithChildren, ReactNode } from 'react'

type Props = PropsWithChildren<{
  Tag: keyof JSX.IntrinsicElements
  children: ReactNode
  className: string
}>

const Text: FunctionComponent<Props> = ({ Tag, children, className }) => (
  <Tag className={className}>{children}</Tag>
)

export default Text
