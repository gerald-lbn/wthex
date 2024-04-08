export const formatDateWithDash = (date: string) =>
	new Date(date)
		.toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })
		.replace(/\//g, '-');
