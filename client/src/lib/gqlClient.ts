import { GraphQLClient } from 'graphql-request'

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_URL as string

export const gqlClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
  credentials: 'include',
  mode: 'cors'
})
