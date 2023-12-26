import React from 'react';
import { Link } from 'react-router-dom';
import { LuLayoutTemplate } from 'react-icons/lu';
import { VscGitPullRequestCreate } from 'react-icons/vsc';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { CiSettings } from 'react-icons/ci';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdCreateNewFolder } from 'react-icons/md';

const SideNav = () => {
    const { isAdmin, isSidebarOpen, IsSidebarOpenHandler, userInfo } = useContext(GlobalContext);

    let navItem = [];

    if (isAdmin) {
        navItem = [
            { name: 'Create New', link: '/create-new-design', icon: <CiSettings /> },
            { name: 'Template', link: '/udashboard', icon: <LuLayoutTemplate /> },
            {
                name: 'My Creation',
                link: '/mycreation',
                icon: <VscGitPullRequestCreate />,
            },

            { name: 'Profile', link: '/profile', icon: <IoCloudUploadOutline /> },
            { name: 'Change Password', link: '/changePassword', icon: <CiSettings /> },
        ];
    } else {
        navItem = [
            { name: 'Dashboard', link: '/udashboard', icon: <CiSettings /> },

            {
                name: 'My Creation',
                link: '/mycreation',
                icon: <VscGitPullRequestCreate />,
            },

            { name: 'Team', link: '/team', icon: <CiSettings /> },

            { name: 'Settings', link: '/settings', icon: <CiSettings /> },
        ];
    }

    const UserProfile = ({ name, profilePicture }) => {
        return (
            <div className="flex items-center p-5">
                <div className="flex-shrink-0 mr-4">
                    <img src={profilePicture} alt="Profile" className="h-12 w-12 rounded-full" />
                </div>
                <div>
                    <p className="text-xl font-semibold text-white">{name}</p>
                    {/* Add additional user information if needed */}
                </div>
            </div>
        );
    };

    const toggleSidebar = () => {
        IsSidebarOpenHandler(!isSidebarOpen);
    };

    const user = {
        name: 'John Doe',
        profilePicture: 'https://example.com/profile.jpg', // Replace with the actual URL of the user's profile picture
    };

    console.log(userInfo);
    return (
        <div
            className={`fixed inset-y-0 left-0 top-0 w-64 bg-gray-800 text-white p-4 transform transition-transform ease-in-out duration-300 z-10 ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } sm:translate-x-0 sm:static sm:bg-transparent sm:text-black sm:p-0 md:bg-gray-800`}
        >
            <div className="flex justify-end items-end p-4">
                {/* Your content goes here */}
                <button className="text-xl focus:outline-none sm:hidden  flex justify-end" onClick={toggleSidebar}>
                    <FaTimes />
                </button>
            </div>
            <UserProfile name={userInfo.name} profilePicture={userInfo.profilePicture} />
            <nav className=" h-full p-10 ">
                <ul>
                    <li className="mb-6 text-white bg-blue-400 py-2 text-center ">
                        <Link to={`/create-new-design`} className="hover:text-gray-300 flex ">
                            <span className="px-2">
                                <MdCreateNewFolder />
                            </span>
                            <span> Create New</span>
                        </Link>
                    </li>
                    {navItem.map((item) => {
                        return (
                            <>
                                {' '}
                                <li className="mb-2 text-white">
                                    <Link to={item.link} className="hover:text-gray-300 flex ">
                                        <span className="px-2">{item.icon}</span>
                                        <span> {item.name}</span>
                                    </Link>
                                </li>
                            </>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default SideNav;
