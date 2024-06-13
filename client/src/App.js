import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Projects, NewProject } from "./container";




const App = () => {
  const [editorValue, setEditorValue] = useState("");

  return (
    <div className="w-screen h-screen items-start justify-start overflow-hidden ">
      <Routes>
        <Route path="/Home/*" element={<Home />} />

        <Route path="*" element={<Navigate to={"/Home"} />} />

        
        <Route path="/NewProject/*" element= {<NewProject/>} />

        <Route path="/projects" component={Projects} />
        <Route path="/project/:projectId" component={NewProject} />
       
      </Routes>
    </div>
  );
};

export default App;
