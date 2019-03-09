// const { createServer } = require("http");
// const { parse } = require("url");
// const next = require("next");
// const compression = require("compression");
//
// const port = parseInt(process.env.PORT, 10) || 3000;
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();
//
// app.prepare().then(() => {
//   createServer((req, res) => {
//     const parsedUrl = parse(req.url, true);
//     const { pathname, query } = parsedUrl;
//
//     if (pathname.length > 1 && pathname.slice(-1) === "/") {
//       app.render(req, res, pathname.slice(0, -1), query);
//     } else {
//       handle(req, res, parsedUrl);
//     }
//   }).listen(port, err => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${port}`);
//   });
// });

const next = require('next')

const Koa = require('koa')
const Router = require('koa-router')
const compression = require('compression')
const koaConnect = require('koa-connect')
const favicon = require('koa-favicon')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  server.use(koaConnect(compression()))

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(favicon(__dirname + '/static/favicon.ico'));

  server.use(router.routes())
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
