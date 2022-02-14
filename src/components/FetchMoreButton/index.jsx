import Button from "../Button/index";
import {memo, useCallback} from "react";

const SET_NEXT_PAGE = 1;

const FetchMoreButton = memo(({nextPage}) => {

	const onSubmit = useCallback(() => nextPage(state => state + SET_NEXT_PAGE), [nextPage]);

	return (
		<Button onClick={onSubmit}>Next</Button>
	);
});

export default FetchMoreButton;