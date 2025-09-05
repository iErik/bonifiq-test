import UserPost from '@components/UserPost'
import Button from '@components/Button'
import Icon from '@icons'

import {
  OverlayScrollbarsComponent as ScrollView,
} from 'overlayscrollbars-react'

import styles from './UserPosts.module.scss'


type UserPostsProps = {
  posts: Post[]
  user: User
  onClose: () => any
}

export default function UserPosts(props: UserPostsProps) {
  return (
    <div className={styles.userPosts}>
      <div className={styles.header}>
        <div className={styles.meta}>
          <p className={styles.hLabel}>Nome:</p>
          <p className={styles.hText}>{props.user.name}</p>

          <p className={styles.hLabel}>Email:</p>
          <p className={styles.hText}>{props.user.email}</p>
        </div>

        <Button
          className={styles.closeBtn}
          onClick={props.onClose}
        >
          <Icon icon="Close" size={12} />
        </Button>
      </div>

      <ScrollView className={styles.scrollView}>
        { props.posts.map(post =>
            <UserPost
              key={post.id}
              post={post}
              className={styles.userPost}
            />)
        }
      </ScrollView>
    </div>
  )
}
