import db from '$lib/db';
import { hexChallenges } from '$lib/db/schema';

const createHexColor = (size: number) => {
	const digits = '0123456789ABCDEF';
	return Array.from({ length: size }, () => digits[Math.floor(Math.random() * 16)]).join('');
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

export const getChallenge = async (date: Date) => {
	const chall = await db.query.hexChallenges.findFirst({
		where: ({ createdAt }, { eq }) => eq(createdAt, date.toDateString())
	});
	return chall;
};

export const getArchivedChallenges = async () => {
	return await db.query.hexChallenges.findMany({
		orderBy: ({ createdAt }, { desc }) => desc(createdAt)
	});
};
