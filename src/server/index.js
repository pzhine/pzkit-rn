import express from 'express'
import compression from 'compression'
import cors from 'cors'
import bodyParser from 'body-parser'
import config from '../content/config.json'
import api from './api'

const port = process.env.PORT || config.serverPort
const server = express()

// Remove annoying Express header addition.
server.disable('x-powered-by')

// Compress (gzip) assets in production.
server.use(compression())

// API
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use('/api', cors(), api)

server.listen(port, () => {
  console.log(`✅  server started on port: ${port}`) // eslint-disable-line no-console
})
