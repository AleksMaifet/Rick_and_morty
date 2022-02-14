import {useCallback, useEffect, useState} from "react";

const START_PAGE = 0;

export const useLoadContent = () => {
	const [imgList, setImgList] = useState([]);
	const [page, setPage] = useState(START_PAGE)

	useEffect(async () => {
		await getContent()
	}, [page])

	const getData = async (url) => {
		const res = await fetch(url);
		return await res.json();
	};

	const changeIdCharacters = (p) => {
		const nextItems = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']
		return nextItems.map(el => `${p + (Number(el[0]))}${el[1]}`)
	}

	const getContent = useCallback(async (searchValue) => {
		if (searchValue) {
			try {
				const request = await getData(`${process.env.REACT_APP_THE_RICK_AND_MORTY_BASE_URL}?name=${searchValue}`)
				const {results} = request
				setImgList(results);
				return
			} catch (e) {
				console.log(e)
			}
		}
		try {
			const requestNextItems = await getData(`${process.env.REACT_APP_THE_RICK_AND_MORTY_BASE_URL}${changeIdCharacters(page)}`)
			setImgList([...imgList, ...requestNextItems])
		} catch (e) {
			console.log(e)
		}
	}, [page]);


	return [imgList, getContent, setPage];
};