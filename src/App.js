import Header from "./components/Header";
import Markdown from "./components/Markdown";
import Preview from "./components/Preview";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Markdown />
        <Preview />
      </div>
    </>
    
  );
}

export default App;
