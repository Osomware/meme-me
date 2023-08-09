import toast from 'react-hot-toast'
import { GraphQLClient } from 'graphql-request'
import { deleteCookie, getCookie } from 'cookies-next'
import { GraphQLClientResponse } from 'graphql-request/build/esm/types'

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_URL as string

export const gqlClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
  requestMiddleware: (request) => {
    const accessToken = getCookie('accessToken')
    const refreshToken = getCookie('refreshToken')
    return {
      ...request,
      headers: {
        ...request.headers,
        accessToken: accessToken as string,
        refreshToken: refreshToken as string,
        authorization: `Bearer ${accessToken as string}`
      }
    }
  },
  responseMiddleware: (response: GraphQLClientResponse<unknown> | Error) => {
    if (response instanceof Error) {
      const match = response?.message.match(/Unauthorized/g)
      if (match !== null) {
        handleUnauthorizedError()
      }
    }
  }
})

export const handleUnauthorizedError = (): void => {
  try {
    deleteCookie('accessToken')
    deleteCookie('refreshToken')
    toast.error('You are unauthorized, Please login again!')
    document.location.href = '/sign-in'
  } catch {}
}
