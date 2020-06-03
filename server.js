import fastify from 'fastify'

const app = fastify({
  logger: {
    prettyPrint: true
  }
})

app.register(import('./app.js'))

app.listen(process.env.PORT || 3000)
