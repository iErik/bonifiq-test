import * as http from '@utils/http'

export const userInfo = (userId: number) => http
  .get(`users/${userId}`)

export const userPosts = (userId: number) => http
  .get(`posts?userId=${userId}`)
