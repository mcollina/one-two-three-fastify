import fastify from 'fastify'

const app = fastify({
  logger: {
    prettyPrint: true
  }
})

app.register(import('./app.js'))

const start = async function () {
  try {
    await app.listen(process.env.PORT || 3000)
  } catch (e) {
    console.error(e)
  }
}

start()
