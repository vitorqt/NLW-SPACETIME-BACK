import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true, // todas url de frontend pode acessar o nosso backend
})

app.register(jwt, {
  // usado para criar uma especie de variavel para o token funcionar nas demais requisicoes, pois o do github expira.
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333, // abre a porta 3333
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
