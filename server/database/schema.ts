import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const waitlist = sqliteTable('waitlist', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    email: text('email').notNull().unique(),
    verified: integer('created_at', { mode: 'timestamp' }),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
})
