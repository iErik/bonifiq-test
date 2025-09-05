const { VITE_API_URL: API_URL } = import.meta.env
const SUCCESS_CODES = [ 200, 201, 202, 204 ]

type AnyErr = Error | Response | boolean

type APIResponse = [
  AnyErr | null,
  any
]

const reqToJson = (
  res: Response
): Promise<APIResponse> => {
  if (!res) return Promise.resolve([ true, undefined ])

  if (!SUCCESS_CODES.includes(res.status))
    return Promise.resolve([ res, undefined ])

  return res.json()
    .catch((err: Error): APIResponse => [ err, null ])
    .then((data: any): APIResponse =>
      [ null, data?.data || data ])
}

export const get = (endpoint: string) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  const config = {
    headers,
    method: 'GET'
  }

  return fetch(`${API_URL}${endpoint}`, config)
    .catch(e => [ e, null ])
    .then(res => reqToJson(res as Response))
}
