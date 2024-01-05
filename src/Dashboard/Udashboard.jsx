import React, { useContext, useEffect, useState, Link } from 'react';
import SideNav from './components/SideNav';
import Header from './components/Header';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import axios from 'axios';
import Cookies from 'js-cookie';
import { FaRegCalendarMinus } from 'react-icons/fa';
import { FcCollaboration } from 'react-icons/fc';
import { IoMdCreate } from "react-icons/io";

const Udashboard = () => {
    const { apiBaseUrl, isSidebarOpen } = useContext(GlobalContext);

    console.log(isSidebarOpen);

    return (
        <>
            <div className="flex ">
                <SideNav />

                <div className="basis-[87%] ">
                    <Header />

                    <div className="pt-[25px] px-[2px] bg-[#F8F9FC]">
                        <div className="flex items-center justify-between">
                            <h1 className="text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer px-5">
                                Dashboard
                            </h1>
                        </div>
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[30px] pb-[15px] px-5">
                            <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out">
                                <div className="">
                                    <h2 className="text-[#B5B9DF] text-[11px] leading-[17px] font--bold">
                                        My Total Creations
                                    </h2>
                                    <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">20</h1>
                                </div>
                                <IoMdCreate  fontSize={28} color="" />
                            </div>

                            <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out">
                                <div className="">
                                    <h2 className="text-[#B5B9DF] text-[11px] leading-[17px] font--bold">
                                        Total Collaborations
                                    </h2>
                                    <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">4</h1>
                                </div>
                                <FcCollaboration fontSize={28} color="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Udashboard;
