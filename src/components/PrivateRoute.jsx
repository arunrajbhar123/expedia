import { Children, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./Context/AppContext";

function PrivateRoute({Children}){
    const [isAuth]=useContext(AppContext);

    if(!isAuth){
        return <Navigate to="/login" />
    }

    return Children
}