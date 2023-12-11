import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

const PasswordReset = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { isAdmin, isLogin, isLoginHandler, isAdminHandler, apiBaseUrl } = useContext(GlobalContext);
    const navigate = useNavigate();

    const [isSucess, setIsSuccess] = useState(false);

    const { token, id } = useParams();

    // console.log(id);

    const handleLogin = (e) => {
        e.preventDefault();

        if (newPassword == '') {
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

        if (confirmPassword == '') {
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
            .post(`${apiBaseUrl}users/resetPassword`, {
                userId: id,
                password: newPassword,
                token,
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

                        console.log(res);

                        setIsSuccess(res.data.success)

                        // if (res.data.isAdmin) {
                        //     navigate('/adashboard');
                        // } else {
                        //     navigate('/udashboard');
                        // }
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

                    {isSucess ?? (
                        <Link to="/login">
                            {' '}
                            <p className="text-blue-500"> Click here to sign In</p>
                        </Link>
                    )}
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default PasswordReset;
