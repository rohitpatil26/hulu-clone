import Header from "./Header";
import "./App.css";
import Nav from "./Nav";
import Results from "./Results";
import { useState } from "react";
import requests from "./request";

function App() {
  const [selectedOptions, setselectedOptions] = useState(
    requests.fetchTrending
  );

  return (
    <div className="app">
      <Header />
      <Nav setselectedOptions={setselectedOptions} />
      <Results selectedOptions={selectedOptions} />
    </div>
  );
}

export default App;
