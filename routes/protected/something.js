export default async function (app, opts) {
  app.get('/something', async (req, res) => {
    return { hello: 'world' }
  })
}
