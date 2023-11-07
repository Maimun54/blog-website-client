
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvide";

 
const PrivateProvider = ({children}) => {
    const {user,loadedData} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
     if(loadedData){
     return <span className="loading loading-spinner loading-lg mx-auto text-center"></span>
     }
    if(user){
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateProvider;