import dotenv from 'dotenv'

dotenv.config()

const API_JWT_SECRET = process.env.API_JWT_SECRET ?? ''
const API_USER_ID = process.env.API_USER_ID ?? ''
const API_USER_PASS = process.env.API_USER_PASS ?? ''
console.log(`env ${process.env.PORT}`)
const API_SERVER_PORT =
  process.env.PORT ?? process.env.API_SERVER_PORT ?? '8080'
console.log(`API ${API_SERVER_PORT}`)
const API_BASE_PATH = process.env.API_BASE_PATH ?? ''
const API_ORIGIN = process.env.API_ORIGIN ?? ''
const API_UPLOAD_DIR = process.env.API_UPLOAD_DIR ?? ''
const HOST_ORIGIN = process.env.HOST_ORIGIN ?? ''

export {
  API_JWT_SECRET,
  API_USER_ID,
  API_USER_PASS,
  API_SERVER_PORT,
  API_BASE_PATH,
  API_ORIGIN,
  API_UPLOAD_DIR,
  HOST_ORIGIN
}
