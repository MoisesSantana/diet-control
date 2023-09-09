import 'dotenv/config'
import { knex as setupKnex, Knex } from 'knex'

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL must be set')

export const knexConfig: Knex.Config = {
  client: process.env.DATABASE_CLIENT,
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './database/migrations',
  },
}

export const knex = setupKnex(knexConfig)