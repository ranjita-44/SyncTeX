import React from "react";
import Splitpane from "react-split-pane";

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const NewProject = () => {
  return <>

    <div className="w-screen h-screen flex flex-col items-start justify-start overflow-hidden">

      {/*alert section */}

      {/*header section */}

      {/*coding section */}
      <div>

        <Splitpane split="vertical" minSize={100} max={-100} defaultSize={"50%"}>

          <div className="w-full px-2">
          <CodeMirror value="console.log('hello');" height="600px" extensions={[javascript({ jsx: true })]} onChange={() =>{}} />;
          </div>



          <div className="w-full h-full flex items-start justify-start"></div>


        </Splitpane>
      </div>





    </div>

  </>
}

export default NewProject