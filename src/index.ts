import 'reflect-metadata';
import * as path from 'path';
import { createConnection } from 'typeorm';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import * as serve from 'koa-static';
import * as send from 'koa-send';
import { AppRoutes } from './routes';

createConnection()
  .then(async connection => {
    const app = new Koa();
    const router = new Router();

    AppRoutes.forEach(route => {
      router[route.method](route.path, route.action);
    });

    router.get('/', async ctx => {
      console.log(
        'path',
        path.join(__dirname, 'src/client/build', 'index.html')
      );
      await send(ctx, path.join(__dirname, 'src/client/build', 'index.html'));
    });

    router.get('/(.*)', async ctx => {
      console.log(
        'path no dirname',
        path.join('src/client/build', 'index.html')
      );
      await send(ctx, path.join('/app/src/client/build', 'index.html'));
    });

    app.use(bodyParser());
    app.use(serve(path.join(__dirname, '/client/build')));
    app.use(router.routes());
    app.use(router.allowedMethods());

    const port = process.env.PORT || 3001;

    app.listen(port);

    console.log(
      `Koa application is up and running at http://localhost:${port}`
    );
  })
  .catch(error => console.log(error));
