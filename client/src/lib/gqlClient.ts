import { GraphQLClient } from 'graphql-request'
import { deleteCookie, getCookie } from 'cookies-next'

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_URL as string

type Response = {
  response: {
    status: number
  }
}

export const gqlClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
  requestMiddleware: (request) => {
    const accessToken = getCookie('accessToken')
    const refreshToken = getCookie('refreshToken')
    return {
      ...request,
      headers: {
        ...request.headers,
        accessToken: accessToken as string,
        refreshToken: refreshToken as string
      }
    }
  },
  responseMiddleware: (response) => {
    const resultResponse: Response = JSON.parse(JSON.stringify(response))
    if (response instanceof Error && resultResponse.response.status === 401) {
      deleteCookie('accessToken')
      deleteCookie('refreshToken')
      document.location.href = '/sign-in'
    }
  },
  headers: {
    Authorization: `Bearer ${getCookie('accessToken') as string}`
  }
})
