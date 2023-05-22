import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: ['query'],
}) // criar variavel prisma para receber o prismaClient
