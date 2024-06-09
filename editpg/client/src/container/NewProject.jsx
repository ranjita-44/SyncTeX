//importing required dependencies

import React from "react";
import {useEffect, useState } from "react";
import Splitpane from "react-split-pane";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { motion, AnimatePresence } from "framer-motion";
import synctex from '../assets/synctex.svg';



const NewProject = ({value,onValueChange}) => {

  const [title, setTitle] = useState("Untitled");
  const [isTitle, setisTitle] = useState("");

  return <>

    <div className="w-screen h-screen flex flex-col items-start justify-start overflow-hidden">

      {/*header section*/}
      <header className="w-full flex items-center justify-betweenpx-12 py-1 bg-[#1f666d]">
        <div className="flex items-center justify-center gap6  ">

          {/*<Link to={"/home/projects"}> */}

          <img className="px-2
          w-12 h-auto object-contain" src={synctex} alt="SyncTeX logo" />

          {/*</Link> */}


          <div className="flex flex-col items-start justify-start">
            {/*title */}

            <div className="flex items-center justify-center gap3">
              <AnimatePresence> {isTitle ? <>
                <motion.input key={"TitleInput"}
                  type="text"
                  placeholder="Project Title"
                  value={title}
                  onChange={(e) => setisTitle(e.target.value)} />

              </> : <>
                <motion.p key={"titleLabel"}
                  className="px-3 py-2 text-white text-lg">
                  {title}

                </motion.p>

              </>}

              </AnimatePresence>

              <AnimatePresence>
                {isTitle ? (
                  <>
                    <motion.div key={"MdCheck"} whileTap={{ scale: 0.9 }}
                      className="cursor-pointer" onClick={() => setTitle(false)}> </motion.div>

                      
                  </>
                ) :(
                  <>
                  <motion.div key={"MdEdit"} whileTap={{ scale: 0.9 }}
                      className="cursor-pointer" onClick={() => setTitle(true)}> </motion.div>


                  </>)
                  }

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

            <div className="bg-[#1d5a5a] p-4 h-12 flex items-center justify-between">

              <h2 className="text-lg font-semibold ">File Navigation</h2>

            </div>

            <div className="flex-grow bg-[#5f6063] "  >
              {/* Content for Pane 1 */}

            </div>

          </div>

          {/*code editor */}
          <Splitpane split="vertical" minSize={100} maxSize={-100} defaultSize={"50%"}>

            <div className="flex flex-col">
              <div className="bg-[#1d5a5a] p-1 h-12 flex items-center justify-between">

                <h2 className="text-lg font-semibold">Code Editor</h2>

              </div>

              <div className="flex-grow">

                <CodeMirror value={value} height="600rem" extensions={[javascript({ jsx: true })]} onChange={(e) => { onValueChange(e)}} />;

              </div>

            </div>

            {/*preview */}

            <div className="flex flex-col">

              <div className="bg-[#1d5a5a] p-1 h-12 flex items-center justify-between">

                <h2 className="text-lg font-semibold">Preview</h2>

                <button className="bg-[#2cb7b0] text-white px-4 py-1 rounded">Compile</button>

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