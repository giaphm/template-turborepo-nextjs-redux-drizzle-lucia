import 'dotenv/config'

import * as schema from './schema'
import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import { get } from 'env-var'

export const client = postgres(get('DATABASE_URL').required().asString())
export const db = drizzle(client, { schema })
