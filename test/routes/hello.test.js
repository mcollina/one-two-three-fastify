import t from 'tap'
import fastify from 'fastify'
import fp from 'fastify-plugin'
import app from '../../app.js'

const test = t.test

test('load the hello world', async ({ is }) => {
  const server = fastify()

  // so we can access decorators
  server.register(fp(app))

  const res = await server.inject('/')
  is(res.body, 'hello world')

  await server.close()
})
