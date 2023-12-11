import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import SideNav from './components/SideNav';
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const UserProfile = () => {
    const { apiBaseUrl } = useContext(GlobalContext);
    const token = Cookies.get('token');

    const headers = {
        'Content-Type': 'application/json', // Adjust the content type as needed
        Authorization: `Bearer ${token}`, // Add your authorization token if required
        // Add other headers as needed
    };

    const [userInfo, setUserInfo] = useState([]);

    const [profileImage, setProfileImage] = useState(false);

    const [profile, setProfile] = useState('');
    useEffect(() => {
        axios
            .get(`${apiBaseUrl}users/profile`, { headers })
            .then((res) => {
                console.log(res);
                setUserInfo(res.data);
                if (res.data.profilePicture == null) {
                    setProfileImage(false);
                } else {
                    setProfileImage(true);
                    setProfile(res.data.profilePictur);
                    // console.log(res.data.profilePicture);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [file, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleFileChanges = (e) => {
        setFile(e.target.files[0]);
    };

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = () => {
        // You can perform file upload logic here
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            const preset_key = 'm5miwp6h';
            const cloud_name = 'dy2b051y4';

            formData.append('upload_preset', preset_key);

            axios
                .post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
                .then((res) => {
                    console.log(userInfo);

                    let img = res.data.url;

                    let updateData = {
                        name: userInfo.name,
                        email: userInfo.email,
                        profilePicture: img,
                    };

                    axios
                        .put(`${apiBaseUrl}users/profile`, updateData, {
                            headers: {
                                'Content-Type': 'application/json',
                                authorization: `Bearer ${token}`,
                            },
                        })
                        .then((res) => {
                            console.log(res);
                            toast.success('Profile picture has been updated', {
                                position: 'top-right',
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: 'light',
                            });
                        })
                        .catch((err) => {
                            console.log(err);
                            toast.error('Something went wrong, please try again later', {
                                position: 'top-right',
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: 'light',
                            });
                        });
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            console.warn('No file selected for upload.');
        }
    };

    return (
        <>
            <div>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                        <div className="relative w-auto max-w-md mx-auto my-6">
                            {/* Modal content */}
                            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                    <h3 className="text-2xl font-semibold">Modal Header</h3>
                                    <button onClick={closeModal} className="font-bold absolute right-0 px-3">
                                        {' '}
                                        x
                                    </button>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={closeModal}
                                    >
                                        <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    {/* Your modal content */}
                                    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
                                        <h2 className="text-2xl font-semibold mb-4">File Upload</h2>

                                        <div>
                                            <input type="file" onChange={handleFileChange} accept="image/*" />
                                            {selectedFile && (
                                                <div>
                                                    <button
                                                        className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                                                        onClick={handleUpload}
                                                    >
                                                        Uploadl
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        {uploadProgress > 0 && (
                                            <div className="mt-4">
                                                <div className="relative pt-1">
                                                    <div className="flex mb-2 items-center justify-between">
                                                        <div>
                                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                                                {uploadProgress}%
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex mb-2 items-center justify-start">
                                                        <div className="text-xs">
                                                            <span className="relative inline-block rounded-full bg-blue-200">
                                                                <span
                                                                    className="block h-1 w-1 rounded-full bg-blue-500"
                                                                    style={{ width: `${uploadProgress}%` }}
                                                                />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* pop up ends */}

            <div class="p-16">
                <div class="p-8 bg-white shadow mt-24">
                    {' '}
                    <div class="grid grid-cols-1 md:grid-cols-3">
                        {' '}
                        <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                            {' '}
                            <div>
                                {' '}
                                <p class="font-bold text-gray-700 text-xl">22</p>{' '}
                                <p class="text-gray-400">Total Upload</p>{' '}
                            </div>{' '}
                        </div>{' '}
                        <div class="relative">
                            {' '}
                            <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                {profileImage ? (
                                    <>
                                        <img
                                            src={userInfo.profilePicture}
                                            alt=""
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </>
                                ) : (
                                    <>
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-24 w-24"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            {' '}
                                            <path
                                                fill-rule="evenodd"
                                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>{' '}
                                    </>
                                )}
                            </div>{' '}
                        </div>{' '}
                        <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                            <button
                                onClick={openModal}
                                class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                            >
                                {' '}
                                Update Profile
                            </button>{' '}
                        </div>{' '}
                    </div>{' '}
                    <div class="mt-20 text-center border-b pb-12">
                        {' '}
                        <h1 class="text-4xl font-medium text-gray-700">
                            {userInfo.name}
                            <span class="font-light text-gray-500"></span>
                        </h1>{' '}
                        <p class="font-light text-gray-600 mt-3">{userInfo.email}</p>{' '}
                    </div>{' '}
                    <div class="mt-12 flex flex-col justify-center"> </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default UserProfile;
