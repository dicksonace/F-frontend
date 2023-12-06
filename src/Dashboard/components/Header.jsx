import React, { useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { apiBaseUrl, isAdminHandler, isLoginHandler } = useContext(GlobalContext);
    const navigate = useNavigate();
    const logoutHandler = () => {
        axios
            .post(`${apiBaseUrl}users/logout`)
            .then((res) => {
                console.log(res);
                Cookies.remove('myCookie');
                Cookies.remove('jwt');
                Cookies.remove('token');
                isLoginHandler(false);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <header className="bg-white shadow-md p-4">
            {/* Add your top navigation content here */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">tOGGLER</h2>
                <h2 className="text-xl font-semibold" onClick={logoutHandler}>
                    Logout
                </h2>
                {/* Add user profile or other top navigation elements */}
            </div>
        </header>
    );
};

export default Header;
