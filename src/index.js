import { createServer } from 'node:http'
import { createSchema, createYoga, createPubSub } from 'graphql-yoga'
import typeDefs from './typeDefs'
import db from './db'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'

import User from './resolvers/User'
import Post from './resolvers/Post'
import Comment from './resolvers/Comment'

const pubSub = createPubSub()

const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers: {
      Query,
      Mutation,
      Subscription,
      User,
      Post,
      Comment
    }
  }),
  context: {
    db,
    pubSub
  }
})

const server = createServer(yoga)

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})