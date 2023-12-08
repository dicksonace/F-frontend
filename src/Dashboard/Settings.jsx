import React, { useContext, useEffect, useState, Link } from 'react';
import SideNav from './components/SideNav';
import Header from './components/Header';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import axios from 'axios';
import Cookies from 'js-cookie';
import ChangePassword from './ChangePassword';

const Settings = () => {
    const [activeElement, setActiveElement] = useState('profile');

    let PageElement = () => {
        if (setActiveElement == 'profile') {
        } else if (setActiveElement == 'changePassword') {
            return <ChangePassword />;
        }
    };

    return (
        <>
            <div className="flex h-screen bg-gray-100">
                {/* Side Navigation */}
                <aside className="w-64 bg-[#313233] p-6 text-white">
                    <SideNav />
                </aside>

                {/* Main Content */}
                <main className="flex-1 flex flex-col overflow-hidden">
                    {/* Top Navigation */}
                    <Header />

                    {/* Main Content Area */}
                    <section className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                        <h2 className="text-2xl font-semibold mb-4">Templates</h2>

                        <nav className="flex items-center space-x-4 mx-10">
                            <button
                                onClick={() => setActiveElement('profile')}
                                className="text-gray-800 hover:text-gray-600 focus:outline-none py-2 px4 shadow-sm font-bold"
                            >
                                Profile
                            </button>
                            <button
                                onClick={() => setActiveElement('changePassword')}
                                className="text-gray-800 hover:text-gray-600 focus:outline-none py-2 px4 shadow-sm font-bold"
                            >
                                Change Password
                            </button>
                        </nav>

                        <ChangePassword />
                    </section>
                </main>
            </div>
        </>
    );
};

export default Settings;
