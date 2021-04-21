import Header from "./Header";
import ContentList from "./ContentList";
import { useFetchContent } from "../hooks/useFetchContent";
import "./App.css";

const App = () => {
  const [fetch, content] = useFetchContent();

  return (
    <div className="App">
      <Header onSearch={fetch} />
      <h1>Simple content list</h1>
      <ContentList content={content} />
      {/* TODO: Put FetchMoreButton component here */}
    </div>
  );
};

export default App;
