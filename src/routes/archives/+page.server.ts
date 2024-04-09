import { getArchivedChallenges } from '$lib/helpers/challenges';

export const load = async ({ getClientAddress }) => {
	const userIp = getClientAddress();
	const challenges = await getArchivedChallenges(userIp);

	return {
		userIp,
		challenges
	};
};
