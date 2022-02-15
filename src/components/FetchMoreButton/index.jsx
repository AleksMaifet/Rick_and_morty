import Button from "../Button/index";
import {memo, useCallback} from "react";

const SET_NEXT_PAGE = 1;
const BUTTON_VALUE = "Next";

const FetchMoreButton = memo(({nextPage}) => {

	const onSubmit = useCallback(() => nextPage(state => state + SET_NEXT_PAGE), [nextPage]);

	return (
		<Button onClick={onSubmit}>{BUTTON_VALUE}</Button>
	);
});

export default FetchMoreButton;