const Query = {
  users: (parent, args, { db }, info) => {
    if (!args.query) {
      return db.users
    }

    return db.users.filter((user) => {
      return db.user.name.toLowerCase().includes(args.query.toLowerCase())
    })
  },
  posts: (parent, args, { db }, info) => {
    if (!args.query) {
      return db.posts
    }

    return db.posts.filter((post) => {
      return post.title.toLowerCase().includes(args.query.toLowerCase()) || post.body.toLowerCase().includes(args.query.toLowerCase())
    })
  },
  comments: (parent, args, { db }, info) => {
    return db.comments
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

export { Query as default }