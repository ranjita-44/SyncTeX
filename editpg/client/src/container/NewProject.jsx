import React from "react";
import Splitpane from "react-split-pane";

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const NewProject = () => {
  return <>

    <div className="w-screen h-screen flex flex-col items-start justify-start overflow-hidden">

      {/*alert section */}

      {/*header section */}
      <div className="w-full flex items-start justify-between bg-gray-200 p-1">
        <h1 className="text-xl font-bold">Header</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Button</button>
      </div>

      <div>
        {/*coding section */}


        <Splitpane split="vertical" minSize={100} max={-100} defaultSize={"50%"}>

          <div className="w-full h-full px-2 flex flex-col">
            <div className="bg-gray-300 p-1">
              <h2 className="text-lg font-semibold">Code Editor </h2>

            </div>
            <div className="flex-grow">

              <CodeMirror value="console.log('hello');" height="600rem" extensions={[javascript({ jsx: true })]} onChange={() => { }} />;
            </div>
          </div>

          <div className="w-full h-full flex flex-col">
            <div className="bg-gray-300 p-1 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Preview</h2>
              <button className="bg-blue-500 text-white px-4 py-1 rounded">Compile</button>
            </div>
            <div className="flex-grow">
           </div>
          </div>


        </Splitpane>

      </div>
    </div>






  </>
}

export default NewProject