//useing custom hook

import { useEffect, useState } from "react";

//usemedicine custom hook component arrow function
const useServices = () => {

    //using state 
    const [services, setServices] = useState([]);

    //using sideeffect external hook of state
    useEffect(() => {

        //fetch for load data from public folder
        fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return { services, setServices };
};

//export usedetails custom hook component
export default useServices;