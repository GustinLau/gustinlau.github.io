const port = 9526
const connect = require('connect')
const serveStatic = require('serve-static')
const chalk = require('chalk')
const app = connect()

app.use(
  '/',
  serveStatic('./dist', {
    index: ['index.html', '/']
  })
)

app.listen(port, function () {
  console.log(chalk.green(`> Preview at  http://localhost:${port}`))
})
