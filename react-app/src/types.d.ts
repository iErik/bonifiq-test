type UserAddress = {
  city?: string
  street?: string
  suite?: string
  zipcode?: string
  geo?: { lat?: string, lng?: string }
}

type UserCompany = {
  bs?: string
  catchPhrase?: string
  name?: string
}

type User = {
  id: number
  name?: string
  email?: string
  phone?: string
  username?: string
  website?: string
  company?: UserCompany
  address?: UserAddress
}

type Post = {
  userId: number
  id: number
  title: string | null
  body: string | null
}
