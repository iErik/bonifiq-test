import type { MouseEvent } from 'react'
import type { ReactNode } from 'react'

import styles from './Button.module.scss'

type ButtonProps = {
  children: ReactNode
  className?: string
  type?: 'submit' | 'reset' | 'button'
  onClick: (ev: MouseEvent<HTMLButtonElement>) => any
}

export default function Button(props: ButtonProps) {
  const rootClasses = [
    styles.btn,
    props.className || ''
  ].join(' ')

  return (
    <button
      type={props.type || 'button'}
      className={rootClasses}
      onClick={props.onClick}
    >
      { props.children }
    </button>
  )
}
