export default async function (app, opts) {
  app.get('/', async () => {
    return 'foo bar'
  })
}
