import type { MouseEvent } from 'react'
import styles from './TriggerButton.module.scss'

import Icon from '@icons'

type TriggerButtonProps = {
  opened: boolean
  onClick: (ev: MouseEvent<HTMLButtonElement>) => any
}

export default function TriggerButton(
  props: TriggerButtonProps
) {
  const classList = [
    styles.triggerButton,
    props.opened ? styles['-opened'] : ''
  ].join(' ')

  return (
    <button
      className={classList}
      onClick={props.onClick}
    >
      <Icon className={styles.icon} icon="ArrowUp" />
    </button>
  )
}
