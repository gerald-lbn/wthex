import { getChallenge } from '$lib/helpers/challenges';

export const load = async ({ getClientAddress }) => {
	const userIp = getClientAddress();

	const challenge = await getChallenge(new Date(), userIp);
	return { challenge };
};
