import { getChallenge } from '$lib/helpers/challenges';

export const load = async () => {
	const challenge = await getChallenge(new Date());
	return { challenge };
};
