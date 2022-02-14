import Header from "./Header";
import ContentList from "./ContentList";
import {useLoadContent} from "../hooks/useLoadContent";
import "./App.css";
import FetchMoreButton from "./FetchMoreButton";

const MAX_ITEMS = 10

const App = () => {
	const [content, getContent, setPage] = useLoadContent();
	const isShowFetchMore = content.length >= MAX_ITEMS

	return (<>
			<div className="App">
				<Header onSearch={getContent}/>
				<h1>Simple content list</h1>
				<ContentList content={content}/>
			</div>
			{isShowFetchMore && <div className="App">
				<FetchMoreButton nextPage={setPage}/>
			</div>}
		</>

	);
};
export default App;
