import t from 'tap'
import fastify from 'fastify'
import fp from 'fastify-plugin'
import app from '../../../app.js'

const test = t.test

test('no token provided for authentication', async (t) => {
  const server = fastify()

  // so we can access decorators
  server.register(fp(app))

  const res = await server.inject('/protected/something')
  t.equal(res.statusCode, 401)

  await server.close()
})
