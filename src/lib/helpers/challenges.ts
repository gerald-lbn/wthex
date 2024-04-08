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

export const createChallenge = async (colorSize: number, date?: Date) => {
	const color = createHexColor(colorSize);
	const [chall] = await db
		.insert(hexChallenges)
		.values({
			value: color,
			createdAt: date ? date.toDateString() : new Date().toDateString()
		})
		.returning();

	return chall;
};

export const getChallenge = async (date: Date, userId: string) => {
	const chall = await db.query.hexChallenges.findFirst({
		where: ({ createdAt }, { eq }) => eq(createdAt, date.toDateString()),
		with: {
			guesses: {
				where: ({ userId: uid }, { eq }) => eq(uid, userId),
				orderBy: ({ createdAt }, { desc }) => desc(createdAt)
			}
		}
	});
	return chall;
};

export const getArchivedChallenges = async (userId: string) => {
	return await db.query.hexChallenges.findMany({
		orderBy: ({ createdAt }, { desc }) => desc(createdAt),
		with: {
			guesses: {
				where: ({ userId: uid, value }, { and, eq }) =>
					and(eq(hexChallenges.value, value), eq(uid, userId)),
				limit: 1
			}
		}
	});
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
