import db from '$lib/db';
import { users } from '$lib/db/schema';

export const getOrCreatePlayer = async (userId: string) => {
	const player = await db.query.users.findFirst({
		where: ({ ip }, { eq }) => eq(ip, userId)
	});

	if (player) return player;

	const [newPlayer] = await db.insert(users).values({ ip: userId }).returning();
	return newPlayer;
};
