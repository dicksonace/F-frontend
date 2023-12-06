import React, { useContext, useEffect, useState } from 'react';
import SideNav from './components/SideNav';
import Header from './components/Header';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import axios from 'axios';
import Cookies from 'js-cookie';  

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
                <aside className="w-64 bg-gray-800 p-6 text-white">
                    <SideNav />
                </aside>

                {/* Main Content */}
                <main className="flex-1 flex flex-col overflow-hidden">
                    {/* Top Navigation */}
                    <Header />

                    {/* Main Content Area */}
                    <section className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                            {/* Card 1 */}
                            <div className="bg-white p-4 rounded shadow-md">
                                <h5 className="text-[13px] font-semibold text-gray-400 mb-2">Total Users</h5>
                                <p className="text-2xl font-extrabold">{numberOfUsers}</p>
                            </div>

                            <div className="bg-white p-4 rounded shadow-md">
                                <h5 className="text-[13px] font-semibold text-gray-400 mb-2">Total Users</h5>
                                <p className="text-2xl font-extrabold">{numberOfUsers}</p>
                            </div>

                            <div className="bg-white p-4 rounded shadow-md">
                                <h5 className="text-[13px] font-semibold text-gray-400 mb-2">Total Users</h5>
                                <p className="text-2xl font-extrabold">{numberOfUsers}</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Adashboard;
