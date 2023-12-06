import React, { FC } from 'react';
import Test from './Test'; // used to display editor
import Publish from './Publish'; //used to display output. this support SSR.

import { Routes, Route, Link, Redirect, useNavigate } from 'react-router-dom';
import Adashboard from './Dashboard/Adashboard';
import Udashboard from './Dashboard/Udashboard';
import MyCreation from './Dashboard/UserPages/MyCreation';
import MyUploads from './Dashboard/UserPages/MyUploads';
import Settings from './Dashboard/UserPages/Settings';
import { useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { GlobalContext } from './GlobalContext/GlobalContext';
import LoginForm from './AdminDash/AdminLogin';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import PasswordReset from './pages/PasswordReset';
const App: FC = () => {
    //const token = Cookies.get('token');
    const { isLogin, isLoginHandler, isAdmin, isAdminHandler, apiBaseUrl, userInfo, UserInfoHandler } =
        useContext(GlobalContext);

    const navigate = useNavigate();
    let token = Cookies.get('token');

    console.log(apiBaseUrl);

    useEffect(() => {
        if (token) {
            axios
                .get(`${apiBaseUrl}users/verify-token/${token}`)
                .then((res) => {
                    // console.log(res);
                    UserInfoHandler(res.data);

                    if (res.status == 200) {
                        isLoginHandler(true);

                        if (res.data.isAdmin) {
                            isAdminHandler(true);
                        }
                    } else {
                        isLoginHandler(false);
                        isAdminHandler(false);
                    }
                })
                .catch((err) => {
                    // console.log(err);
                });
        } else {
            isLoginHandler(false);
            isAdminHandler(false);
        }
    }, [isLogin]);

    // console.log(userInfo);

    return (
        <>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage />} />

                    {!isLogin ? (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/forgotpassword" element={<ForgotPassword />} />
                            <Route path="/passwordReset" element={<PasswordReset />} />
                        </>
                    ) : (
                        <> </>
                    )}

                    {isLogin && isAdmin ? (
                        <>
                            <Route path="/adashboard" element={<Adashboard />} />
                        </>
                    ) : (
                        <></>
                    )}

                    {isLogin && !isAdmin ? (
                        <>
                            <Route path="/create-new-design" element={<Test />} />
                            <Route path="/udashboard" element={<Udashboard />} />
                            <Route path="/mycreation" element={<MyCreation />} />
                            <Route path="/myuploads" element={<MyUploads />} />
                            <Route path="/ettings" element={<Settings />} />
                        </>
                    ) : (
                        <></>
                    )}

                    {/* <Route path="/*" element={<>{navigate('/')}</>} /> */}
                </Routes>
            </div>
        </>
    );
};

export default App;
