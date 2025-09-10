import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(user && user.email){
        return children;
    }

    if(loading){
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-bars loading-xl text-orange-600"></span></div>
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;