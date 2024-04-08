import { date, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { relations, sql } from 'drizzle-orm';

export const users = pgTable('users', {
	ip: text('ip')
		.primaryKey()
		.default(sql`gen_random_uuid()`)
});

export const hexChallenges = pgTable('hex_challenges', {
	id: text('id')
		.primaryKey()
		.default(sql`gen_random_uuid()`),
	createdAt: date('created_at').notNull().defaultNow(),
	value: text('value').notNull()
});

export const guesses = pgTable('guesses', {
	id: text('id')
		.primaryKey()
		.default(sql`gen_random_uuid()`),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	value: text('value').notNull(),
	challengeId: text('hex_challenge_id')
		.references(() => hexChallenges.id, { onDelete: 'cascade' })
		.notNull(),
	userId: text('user_id')
		.references(() => users.ip, { onDelete: 'cascade' })
		.notNull()
});

export const hexChallengesRelations = relations(hexChallenges, ({ many }) => ({
	guesses: many(guesses)
}));

export const guessesRelations = relations(guesses, ({ one }) => ({
	challenge: one(hexChallenges, {
		fields: [guesses.challengeId],
		references: [hexChallenges.id]
	}),
	user: one(users, {
		fields: [guesses.userId],
		references: [users.ip]
	})
}));
