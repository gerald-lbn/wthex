import { CRON_SECRET } from '$env/static/private';
import { createChallenge } from '$lib/helpers/challenges';

export async function GET({ request }) {
	if (request.headers.get('Authorization') !== `Bearer ${CRON_SECRET}`) {
		return new Response('Unauthorized', { status: 401 });
	}

	const chall = await createChallenge(6, new Date());

	return new Response(JSON.stringify(chall), {
		status: 200
	});
}
