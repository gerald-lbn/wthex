import type { guesses, hexChallenges } from './schema';

export type HexChallenge = typeof hexChallenges.$inferSelect;

export type Guess = typeof guesses.$inferSelect;

export type HexChallengeWithGuesses = HexChallenge & {
	guesses: Guess[];
};
