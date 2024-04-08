import db from '$lib/db';
import { guesses, hexChallenges } from '$lib/db/schema';

const createHexColor = (size: number) => {
	const digits = '0123456789ABCDEF';
	return Array.from({ length: size }, () => digits[Math.floor(Math.random() * 16)]).join('');
};

export const doesChallengeExist = async (challengeId: string) => {
	const challenge = await db.query.hexChallenges.findFirst({
		where: ({ id }, { eq }) => eq(id, challengeId)
	});
	return !!challenge;
};

export const createChallenge = async (colorSize: number) => {
	const color = createHexColor(colorSize);
	const [chall] = await db
		.insert(hexChallenges)
		.values({
			value: color,
			createdAt: new Date().toDateString()
		})
		.returning();

	return chall;
};

export const getTodayChallenge = async (userId: string) => {
	const today = new Date().toDateString();
	const chall = await db.query.hexChallenges.findFirst({
		where: ({ createdAt }, { eq }) => eq(createdAt, today),
		with: {
			guesses: {
				where: ({ userId: uid }, { eq }) => eq(uid, userId),
				orderBy: ({ createdAt }, { desc }) => desc(createdAt)
			}
		}
	});
	return chall;
};

export const addGuess = async ({
	userId,
	challengeId,
	guess
}: {
	userId: string;
	challengeId: string;
	guess: string;
}) => {
	const [guessDoc] = await db
		.insert(guesses)
		.values({
			challengeId,
			userId,
			value: guess
		})
		.returning();

	return guessDoc;
};

export const getPlayerGuesses = async ({
	userId,
	challengeId
}: {
	userId: string;
	challengeId: string;
}) => {
	const guesses = await db.query.guesses.findMany({
		where: ({ userId: uid, challengeId: cid }, { eq }) => eq(uid, userId) && eq(cid, challengeId),
		orderBy: ({ createdAt }, { desc }) => desc(createdAt)
	});
	return guesses;
};
