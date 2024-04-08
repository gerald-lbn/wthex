export const match = (param) => {
	// Check if the param is a date (MM-DD-YYYY)
	const validFormat = /^\d{1,2}-\d{1,2}-\d{4}$/.test(param);

	// Check if the date is valid and can be turned into a Date object
	return validFormat && !!new Date(param);
};
