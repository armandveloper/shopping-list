const months: string[] = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const getEntryMonth = (timestamp: string): string => {
	const date = new Date(timestamp);
	const month = months[date.getMonth()],
		year = date.getFullYear();

	return `${month} ${year}`;
};

export const getEntryDate = (timestamp: string): string => {
	const date = new Date(timestamp);
	const dayOfWeek = days[date.getDay()],
		day = date.getDate(),
		month = date.getMonth() + 1,
		year = date.getFullYear();

	return `${dayOfWeek} ${day}.${month}.${year}`;
};

export const getHistoryMonths = (timestamp: string[]) => {
	const months: string[] = timestamp.map((item: string) =>
		getEntryMonth(item)
	);
	return [...Array.from(new Set<string>(months))];
};
