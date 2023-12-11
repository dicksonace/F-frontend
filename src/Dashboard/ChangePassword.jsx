import React, { useContext, useEffect, useState } from 'react';
import SideNav from './components/SideNav';
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';

const s = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { isAdmin, isLogin, isLoginHandler, isAdminHandler, apiBaseUrl, userInfo } = useContext(GlobalContext);
    const navigate = useNavigate();

    // useEffect(() => {
    //   if (isLogin) {
    //     // navigate("/adashboard/");
    //   }
    // }, [isLogin]);

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your authentication logic here
        // isLoginHandler(true);

        if (oldPassword == '') {
            toast.warning('Enter your old password', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            return;
        }

        if (newPassword == '') {
            toast.warning('Enter your new password', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            return;
        }

        if (confirmPassword == '') {
            toast.warning('Confirm your new password', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            return;
        }

        const token = Cookies.get('token');

        const headers = {
            'Content-Type': 'application/json', // Adjust the content type as needed
            Authorization: `Bearer ${token}`, // Add your authorization token if required
            // Add other headers as needed
        };

        let data = {
            currentPassword: oldPassword,
            newPassword,
            confirmPassword,
        };

        axios
            .put(`${apiBaseUrl}users/change-password`, data, { headers })
            .then((res) => {
                // console.log(res.status);
                if (res.status == 401) {
                    toast.error('Unauthorize Access', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                } else {
                    if (res.status == 200) {
                        toast.success('You have Successfully changed your password', {
                            position: 'top-right',
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'light',
                        });
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
       

                    <div className="h-auto flex justify-center">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
                            <div className="mb-4">
                                <h1 className="text-center p-5 text-3xl font-bold">Change Password</h1>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Old Password
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="text"
                                    placeholder="Enter Old Password"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    New Password
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Enter New password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Confirm Password
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Confirm New Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                    onClick={handleLogin}
                                >
                                    Change Password
                                </button>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
              
    );
};

export default s;
