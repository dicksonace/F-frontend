import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const EmailVerification = () => {
    const { apiBaseUrl } = useContext(GlobalContext);
    const { token } = useParams();

    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        axios
            .get(`${apiBaseUrl}users/verify-email/${token}`)
            .then((res) => {
                console.log(res);

                if (res.status == 201) {
                    setIsSuccess(true);
                } else {
                    setIsSuccess(false);
                }
            })
            .catch((err) => {
                console.log(err);
                if (res.status == 201) {
                    setIsSuccess(true);
                } else {
                    setIsSuccess(false);
                }
            });
    }, [token]);
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="text-center">
                {isSuccess ? (
                    <center>
                        <FaCheckCircle className="text-green-500 text-5xl mb-4 text-center" />
                    </center>
                ) : (
                    <center>
                        {' '}
                        <FaExclamationCircle className="text-red-500 text-5xl mb-4" />
                    </center>
                )}
                <h1 className="text-2xl font-bold">
                    {isSuccess ? 'Your Email Have been verified' : 'Something went wrong please try again later'}
                </h1>
                <p className="text-gray-600">
                    {isSuccess ? (
                        <Link to="/login">
                            <p className="text-blue-500">Click here to sign In</p>
                        </Link>
                    ) : (
                        'T'
                    )}
                </p>
            </div>
        </div>
    );
};

export default EmailVerification;
