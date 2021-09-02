import Header from "./Header";
import ContentList from "./ContentList";
import { useLoadContent } from "../hooks/useLoadContent";
import "./App.css";

const App = () => {
  const [content, getContent] = useLoadContent();

  return (
    <div className="App">
      <Header onSearch={getContent} />
      <h1>Simple content list</h1>
      <ContentList content={content} />
      {/* TODO: Put FetchMoreButton component here */}
    </div>
  );
};

export default App;
