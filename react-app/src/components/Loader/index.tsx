import styles from './Loader.module.scss'

type LoaderProps = {
  size?: number
}

export default function Loader(props: LoaderProps) {
  const size = props.size || 90

  const sizeStyles = {
    width: size,
    height: size
  }

  return (
    <span className={styles.loader} style={sizeStyles} />
  )
}
