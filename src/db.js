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
  published: false,
  author: 'p101'
}, {
  id: '666',
  title: 'Post 666',
  body: 'Body 666',
  published: true,
  author: 'p101'
}, {
  id: '555',
  title: 'Post 555',
  body: 'Body 555',
  published: false,
  author: 'x202'
}]

const comments = [{
  id: '111',
  text: 'Comment 111',
  author: 'p101',
  post: '555'
},{
  id: '222',
  text: 'Comment 222',
  author: 'x202',
  post: '555'
},{
  id: '333',
  text: 'Comment 333',
  author: 'p101',
  post: '322'
},{
  id: '444',
  text: 'Comment 444',
  author: 'x202',
  post: '666'
}]

const db = {
  users,
  posts,
  comments
}

export { db as default }