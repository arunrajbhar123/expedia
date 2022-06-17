import React from "react";
import { Route, Routes } from "react-router-dom";
import Multipleinputs from "../forms/MultipleInputs";

function AllRoutes(){
    
    return(
        <div>
        <Multipleinputs/>
        <div>
            <Routes>
            <Route path="/" element={<div>Home</div>}></Route>
            <Route path="/login" element={<div>Login</div>}></Route>
            </Routes>
        </div>
        </div>

    )
}
export default AllRoutes;