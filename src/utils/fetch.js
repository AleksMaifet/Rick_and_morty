export const getData = async (url) => {
	const res = await fetch(url);
	return await res.json();
};