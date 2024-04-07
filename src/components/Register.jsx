import { useContext, useEffect, useState } from "react";
import { AuthContext } from './AuthProvider'
import {useLocation, useNavigate} from 'react-router-dom'


const Register = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const authinfo = useContext(AuthContext);
    const { createUser } = authinfo;
    const location =useLocation();
    const navigate= useNavigate();

    useEffect(() => {

    }, [success, error]);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!/\b[A-Za-z0-9._%+-]+@gmail\.com\b/.test(email)) {
            setError('Invalid email, must contain @gmail.com');
            return;
        } else if (!/^(?=.*[A-Z])(?=.*\d).+$/.test(password)) {
            setError('Password must contain at least 1 uppercase letter and a number');
            return;
        }

        console.log(name, email, password);

        setSuccess('');
        setError('');

        //create user
        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess('User created Successfully');
                e.target.reset();
                location.state='/login'
                navigate(location.state);
                
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            })


    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />

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
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <div className="text-center text-red-800 p-2 text-[14px] font-medium">
                        {
                            success && <p>{success}</p>
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

export default Register;