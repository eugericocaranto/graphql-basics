import { createServer } from 'node:http'
import { createSchema, createYoga } from 'graphql-yoga'

const users = [{
  id: 'p101',
  name: 'Koala',
  email: 'koala@mail.com',
  age: 12
}, {
  id: 'x202',
  name: 'Blue',
  email: 'blue@mail.com'
}, {
  id: 'k303',
  name: 'Red',
  email: 'red@mail.com'
}]

const posts = [{
  id: '322',
  title: 'Post 1',
  body: 'Body 1',
  published: false
}, {
  id: '666',
  title: 'Post 666',
  body: 'Body 666',
  published: true
}, {
  id: '555',
  title: 'Post 555',
  body: 'Body 555',
  published: false
}]

const yoga = createYoga({schema: createSchema({
  typeDefs: `
    type Query {
      users(query: String): [User!]!
      posts(query: String): [Post!]!
      me: User!
      post: Post!
    }

    type User {
      id: ID!
      name: String!
      email: String!
      age: Int
    }

    type Post {
      id: ID!
      title: String!
      body: String!
      published: Boolean!
    }
  `,
  resolvers: {
    Query: {
      users: (parent, args, ctx, info) => {
        if (!args.query) {
          return users
        }

        return users.filter((user) => {
          return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
      },
      posts: (parent, args, ctx, info) => {
        if (!args.query) {
          return posts
        }

        return posts.filter((post) => {
          return post.title.toLowerCase().includes(args.query.toLowerCase()) || post.body.toLowerCase().includes(args.query.toLowerCase())
        })
      },
      me: () => {
        return {
          id: 'p101',
          name: 'Fook',
          email: 'fook@mail.com',
        }
      },
      post: () => {
        return {
          id: 'x303',
          title: 'Wolverine',
          body: 'Steel',
          published: true
        }
      }
    }
  }
})})

const server = createServer(yoga)

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})