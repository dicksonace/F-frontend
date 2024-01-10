import React, { useContext, useEffect, useState } from 'react';
import SideNav from './components/SideNav';
import Header from './components/Header';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import axios from 'axios';
import Cookies from 'js-cookie';
import { FaRegCalendarMinus } from 'react-icons/fa';
import { FcCollaboration } from 'react-icons/fc';
import { IoMdCreate } from 'react-icons/io';
import { FaUsers } from 'react-icons/fa';

const Adashboard = () => {
    const [numberOfUsers, setNumberOfUsers] = useState(0);

    const { apiBaseUrl } = useContext(GlobalContext);

    const token = Cookies.get('token');

    const customHeaders = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    };

    useEffect(() => {
        // let token = Cookies.get('token');
        axios
            .get(`${apiBaseUrl}admins/get-all-users`, {
                headers: customHeaders,
            })
            .then((res) => {
                console.log(res);
                setNumberOfUsers(res.data.length);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <div className="flex h-screen bg-gray-100">
                {/* Side Navigation */}

                <SideNav />

                {/* Main Content */}
                <main className="flex-1 flex flex-col overflow-hidden">
                    {/* Top Navigation */}
                    <Header />

                    {/* Main Content Area */}
                    <section className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                            {/* Card 1 */}

                            <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out">
                                <div className="">
                                    <h2 className="text-[#B5B9DF] text-[11px] leading-[17px] font--bold">
                                        Total Users
                                    </h2>
                                    <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
                                        {numberOfUsers}
                                    </h1>
                                </div>
                                <FaUsers fontSize={28} color="" />
                            </div>

                            <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out">
                                <div className="">
                                    <h2 className="text-[#B5B9DF] text-[11px] leading-[17px] font--bold">
                                        Total Users
                                    </h2>
                                    <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
                                        {numberOfUsers}
                                    </h1>
                                </div>
                                <FaUsers fontSize={28} color="" />
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Adashboard;
