import fastify from 'fastify'

const app = fastify({
  logger: {
    transport: {
      target: 'pino-pretty'
    }
  }
})

app.register(import('./app.js'))

const start = async function () {
  try {
    await app.listen({ port: process.env.PORT || 3000 })
  } catch (e) {
    console.error(e)
  }
}

start()
