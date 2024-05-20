export const getItem = <T>(key: string): T | null => {
	const item = localStorage.getItem(key);
	if (!item) return null;
	return JSON.parse(item);
};

export const setItem = <T>(key: string, value: T) => {
	localStorage.setItem(key, JSON.stringify(value));
};
