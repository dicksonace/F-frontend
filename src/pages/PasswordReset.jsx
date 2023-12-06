import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

const PasswordReset = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { isAdmin, isLogin, isLoginHandler, isAdminHandler, apiBaseUrl } = useContext(GlobalContext);
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

        if (email == '') {
            toast.warning('Enter email address', {
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

        if (password == '') {
            toast.warning('Enter your password', {
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

        axios
            .post(`${apiBaseUrl}users/login`, {
                email,
                password,
            })
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
                        toast.success('Login Successfully', {
                            position: 'top-right',
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'light',
                        });
                        isLoginHandler(true);
                        isAdminHandler(res.data.isAdmin);
                        Cookies.set('token', res.data.token);

                        if (res.data.isAdmin) {
                            navigate('/adashboard');
                        } else {
                            navigate('/udashboard');
                        }
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="min-h-screen flex items-center justify-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
                <h1 className="text-center p-5 text-3xl font-bold">Password Reset</h1>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        New Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
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
                        placeholder="Enter your password"
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
                        Reset
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default PasswordReset;
