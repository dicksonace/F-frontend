import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import 'react-toastify/dist/ReactToastify.css';

const BottomPage = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

        if (fullname == '') {
            toast.warning('Enter your fullname', {
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
            .post(`${apiBaseUrl}users/`, {
                name: fullname,
                email,
                password,
            })
            .then((res) => {
                console.log(res.status);

                if (res.status == 400) {
                    toast.error('Email Alreay Exist', {
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
                    if (res.status == 201) {
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

                        const intervalId = setInterval(navigate('/login'), 3000000); // Set interval to 1000 milliseconds (1 second)

                        // Clean up the interval when the component is unmounted or when the dependency array changes
                        return () => clearInterval(intervalId);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const styles = {
        backgroundImage: `url(https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpY3R1cmUlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div className="h-screen w-full flex items-center justify-between relative" style={styles}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* Left Section */}

            <div className="flex-1 left-0  transform -translate-y-1/2 text-white text-left p-8 z-10 ">
                {/* Your content for the left section goes here */}
                <h1 className="text-4xl  md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center mt-8 px-6">
                    Sign Up to Get Your Ideas
                </h1>
            </div>

            {/* Right Section */}
            <div className="flex-1  right-0 transform -translate-y-1/2 text-white text-right p-8 mt-52 z-10">
                {/* Your content for the right section goes here */}
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                    <div className="mb-4">
                        <h1 className="text-center p-5 text-3xl font-bold">Signup</h1>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
                            Full Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Enter your fullname"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
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
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            onClick={handleLogin}
                        >
                            Sign Up
                        </button>
                        <p>
                            Already have an account?{' '}
                            <Link to="/login" className="cursor-pointer text-blue-600">
                                Click here
                            </Link>{' '}
                        </p>
                    </div>
                    <p className="cursor-pointer text-blue-600 my-4">
                        <Link to="/">Back</Link>
                    </p>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default BottomPage;
