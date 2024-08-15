/* eslint-disable no-console */
import { drizzle } from 'drizzle-orm/postgres-js'
import { users } from '../src/schema'
import { faker } from '@faker-js/faker'
import * as dotenv from 'dotenv'
import { client } from '../src/database'

dotenv.config({ path: './.env' })

if (!('DATABASE_URL' in process.env))
  throw new Error('DATABASE_URL not found on .env')

const main = async () => {
  const db = drizzle(client)
  const data: (typeof users.$inferInsert)[] = []

  for (let i = 0; i < 20; i++) {
    data.push({
      name: faker.person.fullName(),
    })
  }

  console.log('Seed start')
  await db.insert(users).values(data)
  console.log('Seed done')
  await client.end()
}

main()
