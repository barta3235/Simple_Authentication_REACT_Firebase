import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import {Navigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

const PrivateRoute = ({children}) => {

    const authinfo= useContext(AuthContext);
    const {user}=authinfo;

    const location = useLocation();
    console.log(location);


    if(user){
        return children;
    }

        return <Navigate to='/login' state={location.pathname}></Navigate>
    
};

export default PrivateRoute;