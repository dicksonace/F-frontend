import React from 'react';
import { Link } from 'react-router-dom';
import { LuLayoutTemplate } from 'react-icons/lu';
import { VscGitPullRequestCreate } from 'react-icons/vsc';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { CiSettings } from 'react-icons/ci';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const SideNav = () => {
    const { isAdmin, isSidebarOpen, IsSidebarOpenHandler } = useContext(GlobalContext);

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
            { name: 'Create New', link: '/create-new-design', icon: <CiSettings /> },

            {
                name: 'My Creation',
                link: '/mycreation',
                icon: <VscGitPullRequestCreate />,
            },

            { name: 'Team', link: '/team', icon: <CiSettings /> },


            { name: 'Settings', link: '/settings', icon: <CiSettings /> },
        ];
    }

    const toggleSidebar = () => {
        IsSidebarOpenHandler(!isSidebarOpen);
    };
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

            <nav className=" h-full p-10 ">
                <ul>
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
