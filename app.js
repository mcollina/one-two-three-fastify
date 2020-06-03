import { join } from 'desm'

export default async function (app, opts) {
  app.register(import('fastify-autoload'), {
    dir: join(import.meta.url, 'routes')
  })
}
