import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

import UserPosts from '@components/UserPosts'
import Loader from '@components/Loader'
import Icon from '@icons'


import * as userService from '@services/user'

import styles from './Widget.module.scss'

const INFO_ERR_MSG = 'Não foi possível obter as informações do usuário!'
const POSTS_ERR_MSG = 'Não foi possível obter as postagens do usuário!'

type WidgetProps = {
  userId: number | null
  onClose: () => any
}

export default function Widget(props: WidgetProps) {
  const [ errMsg, setErrMsg ] = useState<string | null>(null)
  const [ user, setUser ] = useState<User | null>(null)
  const [ posts, setPosts ] = useState<Post[]>([])
  const [ loading, setLoading ] = useState<boolean>(true)

  useEffect(() => {
    if (props.userId == null) {
      setErrMsg(INFO_ERR_MSG)
      return
    }

    const fetchUserData = async (userId: number) => {
      const [
        [ userInfoErr, userInfo ],
        [ userPostsErr, userPosts ]
      ] = await Promise.all([
        userService.userInfo(userId),
        userService.userPosts(userId),
      ])

      return {
        userInfo,
        userPosts,
        err: (userInfoErr && INFO_ERR_MSG) ||
             (userPostsErr && POSTS_ERR_MSG)
      }
    }

    setLoading(true)

    fetchUserData(props.userId).then(data => {
      setErrMsg(data.err || null)
      setUser(data.userInfo)
      setPosts(data.userPosts)
      setLoading(false)
    })

  }, [ props.userId ])

  const showPosts = !loading && !errMsg && user
  const showErr = !loading && errMsg

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.widget}
    >
      { showPosts &&
          <UserPosts
            user={user}
            posts={posts}
            onClose={props.onClose}
          />
      }

      { loading && <Loader /> }

      { showErr &&
        <div className={styles.error}>
          <Icon
            icon="Exclamation"
            size={60}
            className={styles.errorIcon}
          />

          <p className={styles.errorMsg}>{errMsg}</p>
        </div>
      }
    </motion.div>
  )
}
