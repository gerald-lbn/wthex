import { type AvailableLanguageTag } from '$lib/paraglide/runtime';

export const formatDateWithDash = (date: string) =>
	new Date(date)
		.toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })
		.replace(/\//g, '-');

export const verbalDate = (date: string, lang: AvailableLanguageTag) => {
	return new Date(date).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
};
