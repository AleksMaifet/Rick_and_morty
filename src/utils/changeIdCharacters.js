export const changeIdCharacters = (p) => {
	const nextItems = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']
	return nextItems.map(el => `${p + (Number(el[0]))}${el[1]}`)
}