import React, { useState } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { useContext } from 'react';
import { FaBars, FaUser, FaSignOutAlt } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAdmin, isSidebarOpen, IsSidebarOpenHandler, userInfo,  apiBaseUrl, isAdminHandler, isLoginHandler } = useContext(GlobalContext);

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

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const UserProfile = ({ name, profilePicture }) => {
        return (
            <div className="flex items-center p-5">
                <div className="flex-shrink-0 mr-4"></div>
                <div>
                    <p className="text-xl font-semibold text-white">{name}</p>
                    {/* Add additional user information if needed */}
                </div>
            </div>
        );
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md  shadow-sm px-4 py-2 bg-transparent text-sm font-medium text-gray-700  focus:outline-none outline-0"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                    onClick={toggleDropdown}
                >
                    <img src={userInfo.profilePicture} alt="Profile" className="h-12 w-12 rounded-full " />
                </button>
            </div>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="py-1 text-center" role="none">
                        {/* Dropdown items */}
                      
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                        >
                               <button className="text-xl focus:outline-none flex" onClick={logoutHandler}> <span className='mx-4'> Logout</span> <FaSignOutAlt /></button>
                        </a>
                   
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
