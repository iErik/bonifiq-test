import styles from './UserPost.module.scss'

type UserPostProps = {
  post: Post
  className?: string
}

export default function UserPost(props: UserPostProps) {
  const rootClasses = [
    styles.userPost,
    props.className || ''
  ].join(' ')

  return (
    <div className={rootClasses}>
      <h3 className={styles.title}>
        { props.post?.title || '' }
      </h3>

      <p className={styles.body}>
        { props.post?.body || '' }
        </p>
    </div>
  )
}
