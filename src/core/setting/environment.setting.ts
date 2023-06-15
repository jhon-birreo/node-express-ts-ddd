
import 'dotenv/config'

export const env = {
  SERVICE_NAME: process.env.SERVICE_NAME || 'Node-Express-TS-DDD',
  JWT_SECRET: process.env.JWT_SECRET || 'ssl?$23',
  JWT_EXPIRE: process.env.JWT_EXPIRE || '7d',

  SERVER_PATH: process.env.SERVER_PATH || '/api/v1',
  SERVER_HOST: process.env.SERVER_HOST || 'http://localhost',
  SERVER_PORT: process.env.SERVER_PORT || 3000,
}
