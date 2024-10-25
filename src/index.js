import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoDb.js';

const boostrap = async () => {
  await initMongoConnection();
  setupServer();
};

boostrap();
