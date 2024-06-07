import React from "react";
import { Routes} from "react-router-dom";
import { Home } from "./container";


const App = () => {
  return (
    <div className="w-screen h-screen flex items-start justify-start overflow-hidden">
      <Routes>
        <route path="/home/*" element={<Home/>} />
      </Routes>
    </div>
  );
};

export default App;
