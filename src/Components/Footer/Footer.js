//import component's & react external node pakage

import React from 'react';

//footer component arrow function
const Footer = () => {
    return (
        //full footer part of html (jsx) 
        <div >
            <div className="bg-gray-400 p-20 footer ">

                <h2 className="text-2xl text-center mb-10 font-bold ">We are the perfect one for your neccessary !</h2>
                <div className="  grid grid-cols-4">


                    <div className="">
                        <h2 className="font-bold text-xl mb-3">Feadback</h2>
                        <h2 className="">We’ve been working together since the beginning of RedX’s journey, growing up. RedX's parcel tracking and fast payment facility has made running my business much easier than before.
                        </h2>
                    </div>

                    <div className="ml-36 ">
                        <h2 className="text-xl font-bold mb-3">Contact Us</h2>
                        <h2 className="">Call : 1-800-2690</h2>
                        <h2 className="">Plot : 3/B, 4th Floor, Rd 16/A, Dhanmondi</h2>
                        <h2 className="">Location : Dhaka,Bangladesh</h2>
                    </div>
                    <div className=" ml-32">
                        <h2 className="font-bold text-xl mb-3">Top Services</h2>
                        <h2>Parcel Delivery</h2>
                        <h2>Truck Rental</h2>
                        <h2>Bulk Shipment</h2>
                        <h2>Customizable-Solution</h2>
                        <h2>Logistic Services</h2>
                    </div>
                    <div className="text-xl ml-24 ">

                        <h2 className="font-bold mb-3">Social Media Link's</h2>

                        <div className="text-white mb-3">
                            <a className="text-blue-800 " href="https://www.facebook.com/k.kayesalazad/">facebook</a><br />
                            <a className="text-purple-800" href="https://www.instagram.com/kayes_a2/">instagram</a><br />
                            <a className=" text-blue-800" href="https://www.linkedin.com/in/kayes-al-azad-3b8579216/">linkedin</a><br />
                            <a className=" text-blue-600"
                                href="https://mobile.twitter.com/kayes_a2?fbclid=IwAR2E-w_qxej-o6_QWrbvZ_ADA4tJfnJYdB2IqA2GtzItJL9AEhqrvmKwKCw">twitter
                            </a>
                        </div>
                    </div>
                </div>
                <p className="mt-10 text-center ">Copyright © RedX Delivery
                    2021</p>
            </div>

        </div>
    );
};

//export footer component
export default Footer;