import React, { useContext, useState } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaUser, FaSignOutAlt } from 'react-icons/fa';
import Dropdown from "./Dropdown";

const Header = () => {
    const { apiBaseUrl, isAdminHandler, isLoginHandler, isSidebarOpen, IsSidebarOpenHandler } =
        useContext(GlobalContext);
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

    const toggleSidebar = () => {
        IsSidebarOpenHandler(!isSidebarOpen);
    };
    return (
        <div className="bg-gray-800 text-white p-4">
            <button className="text-xl mr-4 focus:outline-none sm:hidden" onClick={toggleSidebar}>
                <FaBars />
            </button>
           <div className='flex justify-between'>
           <span className="text-lg font-semibold">Fasti</span>
            <div className="flex items-center">
              
     
                <Dropdown />
            </div>
           </div>
        </div>
    );
};

export default Header;
