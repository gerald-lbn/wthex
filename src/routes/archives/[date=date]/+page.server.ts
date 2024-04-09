import { getChallenge } from '$lib/helpers/challenges';

export const load = async ({ getClientAddress, params }) => {
	const date = new Date(params.date);

	const userIp = getClientAddress();

	const challenge = await getChallenge(date, userIp);

	return { challenge };
};
