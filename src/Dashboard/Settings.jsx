import React, { useContext, useEffect, useState, Link } from 'react';
import SideNav from './components/SideNav';
import Header from './components/Header';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import axios from 'axios';
import Cookies from 'js-cookie';
import ChangePassword from './ChangePassword';
import UserProfile from './UserProfile';

const Settings = () => {
    const [selectedOption, setSelectedOption] = useState('profile');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const UserProfileContent = () => {
        return <div><UserProfile /></div>;
    };

    const UpdateProfileContent = () => {
        return <div>Update Profile Content</div>;
    };

    const ChangePasswordContent = () => {
        return (
            <div>
                <ChangePassword />
            </div>
        );
    };

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
                        <div>
                            {/* Main Settings Section */}
                            <div className="bg-gray-200 p-4">
                                <h2 className="text-xl font-semibold mb-4">Settings</h2>

                                {/* Subnavigation */}
                                <nav className="flex">
                                    <button
                                        className={`py-2 px-4 mr-4 ${
                                            selectedOption === 'profile'
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-300 text-gray-700'
                                        }`}
                                        onClick={() => handleOptionClick('profile')}
                                    >
                                        User Profile
                                    </button>

                                    {/* <button
                                        className={`py-2 px-4 mr-4 ${
                                            selectedOption === 'updateProfile'
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-300 text-gray-700'
                                        }`}
                                        onClick={() => handleOptionClick('updateProfile')}
                                    >
                                        Update Profile
                                    </button> */}

                                    <button
                                        className={`py-2 px-4 mr-4 ${
                                            selectedOption === 'changePassword'
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-300 text-gray-700'
                                        }`}
                                        onClick={() => handleOptionClick('changePassword')}
                                    >
                                        Change Password
                                    </button>
                                </nav>
                            </div>

                            {/* Content based on the selected option */}
                            <div className="p-4">
                                {selectedOption === 'profile' && <UserProfileContent />}
                                {selectedOption === 'updateProfile' && <UpdateProfileContent />}
                                {selectedOption === 'changePassword' && <ChangePasswordContent />}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Settings;
