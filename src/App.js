import React, { useState } from "react";
import PlayerScreen from "./screens/PlayerScreen";

function App() {
  const [text, setText] = useState('')
  return (
    <div>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Search..."
            onChange={e => setText(e.target.value)}
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <PlayerScreen text={text.toLowerCase()} />
    </div>
  );
}

export default App;
