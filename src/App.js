import React, { useState, useEffect } from "react";
import "./App.css";
import Text from "./components/Text";
import MarkDown from "./components/MarkDown";

function App() {
  const initialMarkdown = `

Hello **how** *are* you ?

- Item 1
- Item 2
- Item 3

> we love REACT.JS`;
  const [text, setText] = useState(initialMarkdown);

  return (
    <div className="App">
      <Text text={text} setText={setText} />
      <MarkDown text={text} />
    </div>
  );
}

export default App;
