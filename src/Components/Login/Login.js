import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from "../../hooks/useAuth/useAuth";

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="">
            <div class="w-full max-w-xs mx-auto">
                <h1 className="text-center  text-2xl font-bold mt-10 text-red-500">Please Login</h1>

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">

                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">

                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Name" required />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter email" required />
                    </div>
                    <div class="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" required />
                        <p className="text-red-500 text-xs italic">Please choose a password. We'll never share your email with anyone else.</p>
                    </div>

                    <div className="text-danger mb-3"></div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Login
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " onClick={handleGoogleLogin}>Google Singin</button>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs my-4">
                    &copy;2021 Medication. All rights reserved.
                </p>
            </div>
            <div className="flex ">



                <NavLink className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto mb-7" to="/register">New User?</NavLink>
            </div>
        </div>
    );
};

export default Login;