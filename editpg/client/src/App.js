import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NewProject } from "./container";
import io from "socket.io-client"

// config file ma halne
const socket = io.connect("http://localhost:3001");

const App = () => {
// vitra nei halne
    const [editorValue, setEditorValue]
        = useState("")

        // hook banayera tesbata tanne
    useEffect(() => {
        socket.on("connection", () => {
            console.log("socket Connected");
        })
        socket.on("value",(data)=>{
            setEditorValue(data)
        })
    }, [socket])
// hook banayera vitra hala
    function onValueChange(val) {
        // console.log(val);
        setEditorValue(editorValue)
        socket.emit("value", val)
    }

    return (
        <div className="w-screen h-screen items-start justify-start overflow-hidden ">

            <Routes>

                <Route path="/NewProject/*" element={<NewProject value= {editorValue} onValueChange={onValueChange}/>} />

                <Route path="*" element={<Navigate to={"/NewProject"} />} />


            </Routes>



        </div>
    )
}

export default App;