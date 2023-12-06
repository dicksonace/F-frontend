import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

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

        axios
            .post(`${apiBaseUrl}users/requestPasswordReset`, {
                email,
            })
            .then((res) => {
                console.log(res);
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
                        toast.success(res.data.message, {
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
        <div className="min-h-screen flex items-center justify-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
                <div className="mb-4">
                    <h1 className="text-center p-5 text-3xl font-bold">Forgot Password</h1>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Enter your username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    <p className="text-blue-600">
                        <Link to="/login">Sign In</Link>
                    </p>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ForgotPassword;
