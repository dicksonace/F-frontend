import React, { useContext, useState } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaUser, FaSignOutAlt } from 'react-icons/fa';
import Dropdown from './Dropdown';
import { FaEnvelope, FaRegBell, FaSearch } from 'react-icons/fa';

const Header = () => {
    const { apiBaseUrl, isAdminHandler, isLoginHandler, isSidebarOpen, IsSidebarOpenHandler, userInfo } =
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
        <div className="flex items-center justify-between h-[70px] shadow-lg px-[25px]">
            <div className="flex items-center rounded-[5px]">
                <input
                    type="text"
                    className="bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder::text-[14px] leading-[20px] font-normal"
                    placeholder="Search for....."
                />
                <div className="bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
                    <FaSearch color="white" />
                </div>
            </div>

            <div className="flex items-center gap-[15px] relative">
                <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
                    <div className="flex  gap-3">
                        <FaRegBell />
                        <FaEnvelope />
                    </div>
                    <div className="flex items-center gap-[15px] relative">
                        <p>{userInfo.name}</p>

                        <Dropdown />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
