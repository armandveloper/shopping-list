export const getUniqueCategories = (categories: string[]) => {
	return [...Array.from(new Set<string>(categories))];
};
