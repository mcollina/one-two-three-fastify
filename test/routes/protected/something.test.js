import t from 'tap'
import fastify from 'fastify'
import fp from 'fastify-plugin'
import app from '../../../app.js'

const test = t.test

test('authentication', async ({ same }) => {
  const server = fastify()

  // so we can access decorators
  server.register(fp(app))

  const { token } = (await server.inject({
    url: '/login',
    method: 'POST',
    body: {
      username: 'matteo',
      password: 'collina'
    }
  })).json()

  const res = await server.inject({
    url: '/protected/something',
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  same(res.json(), { hello: 'world' })

  await server.close()
})
