import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {NewProject} from "./container";
import io from "socket.io-client"

const socket = io.connect("http://localhost:3001");


    const code_section =() =>{
        socket.emit("send", {message: "hello"})
    }



const App = () => {
    return (
        <div className="w-screen h-screen items-start justify-start overflow-hidden ">

            <Routes>

                <Route path="/NewProject/*" element={<NewProject />} />

                <Route path="*" element={<Navigate to ={"/NewProject"}/>}/>


            </Routes>



        </div>
    )
}

export default App;