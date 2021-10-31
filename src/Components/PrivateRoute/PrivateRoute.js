//import component's & react external node pakage

import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth/useAuth';

//private component arrow function redirect
const PrivateRoute = ({ children, ...rest }) => {
    //use auth context custom hook
    const { user, isloading } = useAuth();
    if (isloading) {
        return <Spinner animation="border" variant="dark" />
        //         <button type="button" class="bg-rose-600 ..." disabled>
        //   <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        //     <!-- ... -->
        //   </svg>
        //   Processing
        // </button>
    }
    return (
        //full privateroute redirect part of html (jsx) 
        <Route
            {...rest}
            render={({ location }) => user.email ?
                children :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                ></Redirect>}
        >

        </Route>
    );
};

//export privateroute component
export default PrivateRoute;