import { useState } from "react";
import Header from "./Header";
import "./App.css";
import BooksContainer from "./BookContainer/BooksContainer";

function App() {
  // search keywoard from input
  const [keywords, setKeywords] = useState("new");
  const [change, setChange] = useState("");

  return (
    <div className="App">
      <Header />

      <div className="search-bar">
        <input
          onChange={(e) => setChange(e.target.value)}
          value={change}
          type="text"
          placeholde="enter keywords"
        />
        <button onClick={() => setKeywords(change)}>Search</button>
      </div>

      <BooksContainer keywords={keywords} />
    </div>
  );
}

export default App;
