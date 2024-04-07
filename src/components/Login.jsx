import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { useState } from "react";
import {useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const location= useLocation();

    const authinfo = useContext(AuthContext);
    const { signInUser, user } = authinfo;
    const navigate =useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        setSuccess('')
        setError('')

        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess('You just logged in');
                e.target.reset();

                // important
                location.state='/about'
                navigate(location.state);
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            })
    }

    useEffect(()=>{
        if(user){
            navigate(location.state);
        }
    },[user])

    console.log(location.state);


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Log
                        In!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="text-center text-red-800 p-2 text-[14px] font-medium">
                        {
                            user && <div>
                                {
                                    success && <p>{success}</p>
                                }
                            </div>
                        }
                        {
                                error && <p>{error}</p>   
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;