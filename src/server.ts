import 'reflect-metadata';

import { App } from './core/app';
async function main() {
  const app = new App();
  await app
    .database()
    .then(async () => {
      await app.listen();
    })
    .catch((error: Error) => {
      console.log(error);
    });
  await app.redis();
  app.routes();
}
main();