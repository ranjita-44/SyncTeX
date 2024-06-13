import React from "react";
import Splitpane from "react-split-pane";
import { useState } from "react";

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import { motion, AnimatePresence } from "framer-motion";

import synctex from '../assets/synctex.svg';




const NewProject = () => {
  const [value, setValue] = useState("");
  const [isTitle, setisTitle] = useState("");

  return <>



    <div className="w-screen h-screen flex flex-col items-start justify-start overflow-hidden">

      {/*alert section */}

      {/*header section */}
      <header className="w-full flex items-center justify-betweenpx-12 py-4 bg-[#0d5a52]">
        <div className="flex items-center justify-center gap6  ">

          {/*<Link to={"/home/projects"}> */}

          <img className="px-2
          w-12 h-auto object-contain" src={synctex} alt="SyncTeX logo" />

          {/*</Link> */}


          <div className="flex flex-col items-start justify-start">
            {/*title */}

            <div className="flex items-center justify-center gap3">
              <AnimatePresence> {isTitle ? <>

              </> : <> </>}

              </AnimatePresence>


            </div>
          </div>



        </div>

      </header>

      {/*Main Section */}
      <div className="w-full h-full flex flex-grow overflow-hidden">

        {/*coding section */}


        <Splitpane split="vertical" minSize={100} max={-100} defaultSize={"20%"}>

          {/*file Navigation*/}
          <div className="flex flex-col">

            <div className="bg-[#1e413e] p-4 h-12 flex items-center justify-between">

              <h2 className="text-lg font-semibold">Pane 1</h2>

            </div>

            <div className="flex-grow bg-[#1e413e] "  >
              {/* Content for Pane 1 */}

            </div>

          </div>

          {/*code editor */}
          <Splitpane split="vertical" minSize={100} maxSize={-100} defaultSize={"50%"}>

            <div className="flex flex-col">
              <div className="bg-[#1f4441] p-1 h-12 flex items-center justify-between">

                <h2 className="text-lg font-semibold">Code Editor</h2>

              </div>

              <div className="flex-grow">

                <CodeMirror value={value} height="600rem" extensions={[javascript({ jsx: true })]} onChange={() => { }} />;

              </div>

            </div>

            {/*preview */}

            <div className="flex flex-col">

              <div className="bg-[#1e413e] p-1 h-12 flex items-center justify-between">

                <h2 className="text-lg font-semibold">Preview</h2>

                <button className="bg-[#366f70] text-white px-4 py-1 rounded">Compile</button>

              </div>

              <div className="flex-grow">

              </div>

            </div>

          </Splitpane>
        </Splitpane>

      </div>
    </div>






  </>
}

export default NewProject