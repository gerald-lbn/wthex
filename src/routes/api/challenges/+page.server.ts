import { fail } from '@sveltejs/kit';
import { string, length, regex, object, safeParse } from 'valibot';

import * as m from '$lib/paraglide/messages';

export const actions = {
	guess: async ({ request }) => {
		// Get form data
		const formData = await request.formData();
		const guess = formData.get('guess')?.toString();

		// Validate form data
		const schema = object({
			guess: string([
				length(6, m.notLongEnoughGuess()),
				// Hex color code regex (3 digits)
				regex(/^[0-9a-fA-F]{6}$/, m.invalidHex())
			])
		});
		const safeForm = safeParse(schema, {
			guess
		});
		if (!safeForm.success) {
			const errors = safeForm.issues;
			return fail(400, {
				guess: errors[0].message
			});
		}

		return { guess };
	}
};
