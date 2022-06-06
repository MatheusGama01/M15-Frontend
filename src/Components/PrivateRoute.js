import { Route } from 'react-router-dom';

import { isLogged } from '../utils/auth.js';
import Login from './Login/Login.js';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
    
        <Route {...rest} render={props => (
            isLogged() ?
                <Component {...props} />
            : <Route path='/Login' element={<Login />} />
        )} />
    );
    };

export default PrivateRoute;