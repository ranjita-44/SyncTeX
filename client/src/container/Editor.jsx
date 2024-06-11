import React, { useState } from "react";
import SplitPane from "react-split-pane";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { motion, AnimatePresence } from "framer-motion";
import { MdCheck, MdEdit, MdDownload, MdShare } from "react-icons/md";
import synctex from "../assets/synctex.svg";

const Editor = () => {
  const [value, setValue] = useState("");
  const [isTitle, setIsTitle] = useState("");
  const [title, setTitle] = useState("Untitled");

  return (
    <div className="w-screen h-screen bg-[#4D4861] flex flex-col items-start justify-start overflow-hidden">
      {/* Header section */}
      <header className="w-full flex items-center justify-between px-12 py-4 h-12 bg-[#2A2734]">
        <div className="flex items-center justify-center gap-6">
          <img
            className="px-2 w-12 h-auto object-contain"
            src={synctex}
            alt="SyncTeX logo"
          />

          {/*Project TiTle */}

          <div className="flex flex-col items-start justify-start">
            <div className="flex items-center justify-center gap-3">
              <AnimatePresence>
                {isTitle ? (
                  <motion.input
                    key={"TitleInput"}
                    type="text"
                    placeholder="Project Title"
                    className="px-3 py-2 rounded-md bg-transparent text-primaryText text-base outline-none border-none"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                ) : (
                  <motion.p
                    key={"titleLabel"}
                    className="px-3 py-2 text-white text-lg"
                  >
                    {title}
                  </motion.p>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {isTitle ? (
                  <motion.div
                    key={"MdCheck"}
                    className="cursor-pointer"
                    onClick={() => setIsTitle(false)}
                  >
                    <MdCheck className="text-2xl text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key={"MdEdit"}
                    className="cursor-pointer text-white"
                    onClick={() => setIsTitle(true)}
                  >
                    <MdEdit />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Share Button */}
        <div className="flex items-center">
          <div
            key="MdShare"
            className="cursor-pointer text-white hover:text-[#808285]"
          >
            <MdShare />
          </div>
        </div>
      </header>

      {/* Main Section */}

      <div className="w-full h-full flex flex-grow overflow-hidden">
        <SplitPane
          split="vertical"
          minSize={100}
          max={-100}
          style={{ paddingLeft: "20px" }}
          defaultSize={"50%"}
        >
          {/* Code editor */}
          <div className="flex flex-col">
            <div className="bg-[#4D4861] p-1 h-10 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Code Editor</h2>
            </div>
            <div className="flex-grow">
              <CodeMirror
                value={value}
                height="600rem"
                extensions={[javascript({ jsx: true })]}
                onChange={(Editor, data, value) => setValue(value)}
              />
            </div>
          </div>

          {/* Preview pane */}
          <div className="flex flex-col">
            <header className="bg-[#4D4861] p-1 h-10  flex items-center ">
              <button
                className="bg-[#808285] hover:bg-[#2A2734] h-7 flex items-center text-white font-bold py-2 px-4 rounded-full"
                
              >
                Compile
              </button>
              <div
                key="MdDownload"
                className="cursor-pointer text-white hover:text-[#2A2734] px-3"
              >
                <MdDownload />
              </div>
            </header>
            <div className="flex-grow">{/* Placeholder for preview */}</div>
          </div>
        </SplitPane>
      </div>
    </div>
  );
};

export default Editor;
