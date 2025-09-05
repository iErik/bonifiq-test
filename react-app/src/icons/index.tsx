import React, { type SVGProps, type Ref } from 'react'

import styles from './Icon.module.scss'

import * as Icons from './components'


export type IconName = keyof typeof Icons

export type IconProps = SVGProps<SVGSVGElement> & {
  icon: IconName
  size?: number
  ref?: Ref<SVGSVGElement>
}

const DEFAULT_SIZE = 24

export default function Icon({
  icon,
  size,
  className = '',
  ...props
}: IconProps) {
  const icnSize = size || DEFAULT_SIZE
  const classList = [
    styles.iconWrapper,
    className || ''
  ].join(' ')

  if (!(icon in Icons)) return null

  const Component = React.createElement(Icons[icon], {
    ...props,
    width: icnSize,
    height: icnSize
  })

  return (
    <span className={classList}>
      { Component }
    </span>
  )
}

