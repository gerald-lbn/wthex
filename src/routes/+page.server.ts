import { getTodayChallenge } from '$lib/helpers/challenges';

export const load = async ({ getClientAddress }) => {
	const userIp = getClientAddress();

	const challenge = await getTodayChallenge(userIp);

	return { challenge };
};
