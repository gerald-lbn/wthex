import { getArchivedChallenges } from '$lib/helpers/challenges.js';

export const load = async ({ getClientAddress }) => {
	const userIp = getClientAddress();
	const challenges = await getArchivedChallenges(userIp);

	return {
		userIp,
		challenges
	};
};
