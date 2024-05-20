import { date, pgTable, text } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const hexChallenges = pgTable('hex_challenges', {
	id: text('id')
		.primaryKey()
		.default(sql`gen_random_uuid()`),
	createdAt: date('created_at').notNull().defaultNow(),
	value: text('value').notNull()
});
