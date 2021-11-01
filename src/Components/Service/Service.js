//import component's & react external node pakage

import React from 'react';

//srvice component arrow function
const Support = () => {
    return (
        //full service part of html (jsx) 
        <div>

            <h2 className="text-center font-bold text-3xl my-5 text-red-500">We provie Top Class All of facilities Support</h2>
            <div className="flex">
                <div className="max-w-sm overflow-hidden shadow-lg m-4 mx-auto rounded-lg pt-5 bg-gray-300 ">
                    <div className="cart-image text-center">
                        <img className="mx-auto h- w- rounded-lg" src="https://redx.com.bd/images/provide-services/logistics-service.webp" alt="" />
                    </div>

                    <div className="px-6 py-4 text-center ">
                        <h2 className=" font-bold">Name : <span className=" text-xl font-bold mb-2">Logistics services</span></h2>

                        <p><span className="font-bold text-xl mb-2"> Description : </span>The help of an experienced team to solve any problem related to logistics</p>

                    </div>
                </div>
                <div className="max-w-sm overflow-hidden shadow-lg m-4 mx-auto rounded-lg pt-5 bg-gray-300 ">
                    <div className="cart-image text-center">
                        <img className="mx-auto h- w- rounded-lg" src="https://redx.com.bd/images/provide-services/customised-solutions.webp" alt="" />
                    </div>

                    <div className="px-6 py-4 text-center ">
                        <h2 className=" font-bold">Name : <span className=" text-xl font-bold mb-2">Customizable solution</span></h2>

                        <p><span className="font-bold text-xl mb-2"> Description : </span>Customized solutions that understand your business type needs</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

//export service component
export default Support;