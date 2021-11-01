//import component's & external css & react external node pakage

import React from 'react';
import Product from '../Product/Product';
import image from '../../Images/01-home.jpg';
import img from '../../Images/img.PNG'
import './Home.css'
import useServices from '../../hooks/Services/useServices';

//home component arrow function
const Home = () => {
    //use coustom hook
    const { services, setServices } = useServices();

    return (
        //full home part of html (jsx) 
        <div>
            <div className="">
                <div className="mb-5 flex ">
                    <img className="home-img mx-5" src={image} alt="" />
                    <h1 className="font-bold text-4xl mt-7 ml-3">Every hour <span className="text-red-600"> First </span> 5 Coustomer get <span className="text-red-600" >50% </span> off  from all of our <span className="text-red-600"> services</span></h1>
                </div>

            </div>
            <div id="service">
                <h2 className="text-5xl font-bold text-center mb-3 text-red-600">Services</h2>
                <div className="grid lg:grid-cols-3 sm:grid-cols-1 mb-5 ">

                    {
                        services.map(service => <Product key={service.id} service={service}></Product>)
                    }
                </div>
            </div>

            <h2 className="text-5xl font-bold text-center mb-3 text-red-600 "> </h2>

            <div className="grid lg:grid-cols-2 sm:grid-cols-1 bg-black mt-10">
                <img className="map m-4 mt-6" src="https://redx.com.bd/images/revamp/bangladash-map.svg" alt="" />
                <div>
                    <h2 className="text-4xl font-bold ml-10 m-4 mt-44 text-white">Red X's logistics services cover 64 districts and 493 upazilas across the country.</h2>
                    <p className="ml-10 mt-7 text-xl text-white">We guarantee the fastest service nationwide for any of your logistics needs</p>
                </div>
            </div>


            <h2 className="text-5xl my-10 font-bold text-center mb-3 text-red-500">Choose REDX as your logistics partner</h2>
            <div>
                <img src={img} alt="" />
            </div>

        </div>
    );
};

//export home component
export default Home;