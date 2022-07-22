import { join } from 'desm'
import jwt from '@fastify/jwt'
import autoload from '@fastify/autoload'

export default async function (app, opts) {
  app.register(jwt, {
    secret: 'CHANGEME',
    sign: {
      expiresIn: 3600
    }
  })

  app.decorate('authenticate', async function (request, reply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })

  app.register(autoload, {
    dir: join(import.meta.url, 'routes')
  })
}
