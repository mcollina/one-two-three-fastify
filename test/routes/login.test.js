import t from 'tap'
import fastify from 'fastify'
import fp from 'fastify-plugin'
import app from '../../app.js'

const { test } = t

test('login to obtain token for authentication', async (t) => {
  const server = fastify()

  // so we can access decorators
  server.register(fp(app))

  const wrongPassword = await server.inject({
    url: '/login',
    method: 'POST',
    body: {
      username: 'matteo',
      password: 'santos'
    }
  })
  t.is(wrongPassword.statusCode, 401)

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

  t.deepEqual(res.json(), { hello: 'world' })

  await server.close()
})
