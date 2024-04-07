
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Header = () => {

    const authinfo= useContext(AuthContext);
    const {logOut,user}= authinfo;

    const handleLogOut=()=>{
        logOut()
        .then((result)=>{
            console.log(result.user);
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

    const linkup= <>
        <Link className="btn" to='/'>Home</Link>
        <Link className="btn" to='/login'>Login</Link>
        <Link className="btn" to='/register'>Register</Link>
        <Link className="btn" to='/about'>About</Link>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {linkup}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Simple Auth</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className="flex gap-[30px]">
                       {linkup}
                    </div>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? 
                    <div>{user.email} <button onClick={handleLogOut} className="btn">Logout</button> </div>
                    : <Link to='/login'><button className="btn">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;