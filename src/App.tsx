import React, { useState } from "react";
import Todos from "components/Todos";
import Toreads from "components/Toreads";

const App = () => {
  const [isTodos, setIsTodos] = useState(true);
  const toggle = () => setIsTodos(!isTodos);

  return (
    <div className="App">
      <div className="content">
        <div className="heading">Action items</div>
        <p className="parent-tab">
          <span onClick={toggle} className={`tab ${isTodos && "active disabled"}`}>
             To do
          </span>
          <span onClick={toggle} className={`tab ${!isTodos && "active disabled"}`}>
            To read
          </span>
        </p>
        {isTodos ? <Todos /> : <Toreads />}
      </div>
    </div>
  );
};

export default App;
