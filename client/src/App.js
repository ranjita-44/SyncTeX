import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Projects, Editor } from "./container";




const App = () => {
  const [editorValue, setEditorValue] = useState("");

  return (
    <div className="w-screen h-screen items-start justify-start overflow-hidden ">
      <Routes>
        <Route path="/Home/*" element={<Home />} />

        <Route path="*" element={<Navigate to={"/Editor"} />} />

        
        <Route path="/editor/*" element= {<Editor/>} />

        <Route path="/projects" component={Projects} />
    
       
      </Routes>
    </div>
  );
};

export default App;
