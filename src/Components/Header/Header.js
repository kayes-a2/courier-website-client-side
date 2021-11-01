//import component's & react external node pakage

import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth/useAuth';

//header component arrow function
const Header = () => {

    //use auth context coustom hook
    const { user, logout } = useAuth();

    return (
        //full header part of html (jsx) 
        <div className="font-bold pl-6 pb-3 pt-3 py-4 bg-gray-500 flex">
            <img className="h-16 w-16 flex items-center justify-center rounded-full" src="https://play-lh.googleusercontent.com/ge5slpBr9DmVDPk5yjIddZhCR5lYqRXJv5QAunyvRrOGv48VR1aaCyEfPix0xbKQ3w=s360-rw" alt="" />
            <h1 className="text-4xl ml-6 mt-2 text-white">RedX Delivery</h1>


            <div className=" ml-96 mt-3">
                <NavLink to="/home">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Home</button>
                </NavLink>

                <NavLink to="/support">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Support</button>
                </NavLink>

                <NavLink to="/contact">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Contact</button>
                </NavLink>

                <NavHashLink to="/home#service">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Services
                    </button>
                </NavHashLink>

                {/* < NavLink to="/register">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Register</button>
                </NavLink> */}

                <NavLink to="/login">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Login</button>
                </NavLink>
                <div className="flex mt-4 ml-4">
                    <img className="rounded-full w-10" src={user.photoURL} alt="" />
                    <p className="mt-2 ml-2">{user.displayName} </p>

                    {user?.email && <button className="mx-4 text-xl bg-black text-white rounded-lg p-1" onClick={logout}>log out</button>}
                </div>
            </div>
        </div >
    );
};

//export header components
export default Header;

