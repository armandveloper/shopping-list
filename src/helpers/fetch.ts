export const fetchWithoutToken = (
	endpoint: string,
	data?: any,
	method: string = 'GET'
) => {
	const baseURL = process.env.REACT_APP_API_URL;
	const url = `${baseURL}/${endpoint}`;
	if (method === 'GET') {
		return fetch(url);
	}
	return fetch(url, {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
};

export const fetchWithToken = (
	endpoint: string,
	data?: any,
	method: string = 'GET'
) => {
	const baseURL = process.env.REACT_APP_API_URL;
	const url = `${baseURL}/${endpoint}`;
	const token = localStorage.getItem('shopping-list:token') || '';
	if (method === 'GET') {
		return fetch(url, {
			method,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}
	return fetch(url, {
		method,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(data),
	});
};
