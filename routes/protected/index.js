export default async function (app, opts) {
  app.addHook('onRequest', app.authenticate)

  app.register(import('./something.js'))
}
