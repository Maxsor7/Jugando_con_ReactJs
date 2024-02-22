import React from "react";
import { Routes, Route } from "react-router-dom";
import Personal from "./Mains/Personal";
import Experiencia from "./Mains/Experiencia";
import Estudios from "./Mains/Estudios";


function Main(){

    return(
        <>
        <h1>Hola Mundo</h1>
            <Routes>
                <Route path ="/" element={<Personal />}></Route>
                <Route path ="/Experiencia" element={<Experiencia />}></Route>
                <Route path ="/Estudios" element={<Estudios />}></Route>
            </Routes>
        </>
    )
}

export default Main