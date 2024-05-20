import { getArchivedChallenges } from '$lib/helpers/challenges';

export const load = async () => {
	const challenges = await getArchivedChallenges();

	return {
		challenges
	};
};
