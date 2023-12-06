import React from 'react';
import { Link } from 'react-router-dom';
import { LuLayoutTemplate } from 'react-icons/lu';
import { VscGitPullRequestCreate } from 'react-icons/vsc';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { CiSettings } from 'react-icons/ci';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { useContext } from 'react';

const SideNav = () => {
    const { isAdmin } = useContext(GlobalContext);
    const navItem = [
        { name: 'Create New', link: '/create-new-design', icon: <CiSettings /> },
        { name: 'Template', link: '/udashboard', icon: <LuLayoutTemplate /> },
        {
            name: 'My Creation',
            link: '/mycreation',
            icon: <VscGitPullRequestCreate />,
        },
        { name: 'My Uploads', link: '/myupload', icon: <IoCloudUploadOutline /> },
        { name: 'Settings', link: '/settings', icon: <CiSettings /> },
    ];
    return (
        <div>
            <div className="flex justify-center h-40 content-center items-center">
                <h1 className="text-4xl font-semibold mb-4 font-mono">Fasti</h1>
            </div>
            <nav>
                <ul>
                    {navItem.map((item) => {
                        return (
                            <>
                                {' '}
                                <li className="mb-2">
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
