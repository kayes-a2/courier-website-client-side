//import component's & react external node pakage

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Product.css';

//product component arrow function
const Product = (props) => {
    //useing distuctering
    const { name, image, price, description, id } = props.service


    return (
        //full product part of html (jsx) 
        <div>
            <div className="cart max-w-sm overflow-hidden shadow-lg m-4 mx-auto rounded-lg pt-5 bg-gray-300 ">
                <div className="cart-image text-center">
                    <img className="mx-auto rounded-lg" src={image} alt="" />
                </div>

                <div className="px-6 py-4 text-center ">
                    <h2 className=" font-bold">Name :<span className=" text-xl font-bold mb-2"> {name} </span></h2>

                    <h2 className=" font-bold">Price : <span className="font-bold text-xl mb-2"> ${price} </span></h2>

                    <p><span className="font-bold text-xl mb-2"> Description : </span>{description}</p>

                    <NavLink to={`/buying/${id}`}>
                        <button className=" text-xl bg-black text-white rounded-lg p-1 my-4 ">Book Now</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

//export product component
export default Product;