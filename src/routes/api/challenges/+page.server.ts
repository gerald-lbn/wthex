import { addGuess, doesChallengeExist } from '$lib/helpers/challenges';
import { getOrCreatePlayer } from '$lib/helpers/players';
import { fail } from '@sveltejs/kit';
import { string, length, regex, object, safeParse } from 'valibot';

export const actions = {
	guess: async ({ getClientAddress, request }) => {
		// Get form data
		const formData = await request.formData();
		const guess = formData.get('guess')?.toString();
		const challenge = formData.get('challenge')?.toString();

		// Validate form data
		const schema = object({
			guess: string([
				length(3, 'Code must be 3 characters long'),
				// Hex color code regex (3 digits)
				regex(/^[0-9a-fA-F]{3}$/, 'Code must be a valid hex color with 3 digits')
			]),
			challenge: string()
		});
		const safeForm = safeParse(schema, {
			guess,
			challenge
		});
		if (!safeForm.success) {
			const errors = safeForm.issues;
			console.log(errors);
			return fail(400, {
				guess: errors[0].message
			});
		}

		// Get user IP and create player if necessary
		const userIp = getClientAddress();
		const player = await getOrCreatePlayer(userIp);

		// Check if the challenge exists
		const challengeExists = await doesChallengeExist(safeForm.output.challenge);
		if (!challengeExists)
			return fail(404, {
				message: 'Challenge not found'
			});

		// Register the guess
		const playerGuess = await addGuess({
			userId: player.ip,
			challengeId: safeForm.output.challenge,
			guess: safeForm.output.guess
		});

		return {
			guess: playerGuess
		};
	}
};
