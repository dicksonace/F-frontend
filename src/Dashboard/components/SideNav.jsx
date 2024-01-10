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
import { FaTachometerAlt, FaRegSun, FaChevronRight, FaWrench } from 'react-icons/fa';
import { CiMenuBurger } from 'react-icons/ci';
import { RiTeamLine } from 'react-icons/ri';

const SideNav = () => {
    const { isAdmin, isSidebarOpen, IsSidebarOpenHandler, userInfo } = useContext(GlobalContext);

    let navItem = [];

    if (isAdmin) {
        navItem = [
            { name: 'Dashboard', link: '/adashboard', icon: <LuLayoutTemplate color="white" /> },

            { name: 'Settings', link: '/settings', icon: <CiSettings color="white" /> },
        ];
    } else {
        navItem = [
            { name: 'Create New', link: '/create-new-design', icon: <CiSettings color="white" /> },
            {
                name: 'My Creation',
                link: '/mycreation',
                icon: <VscGitPullRequestCreate color="white" />,
            },

            { name: 'Team', link: '/team', icon: <RiTeamLine color="white" /> },

            { name: 'Settings', link: '/settings', icon: <CiSettings color="white" /> },
        ];
    }

    const toggleSidebar = () => {
        IsSidebarOpenHandler(!isSidebarOpen);
    };

    return (
        <div className={`basis-[13%] h-[100vh] lg:block ${isSidebarOpen ? 'fixed z-40' : 'hidden'}`}>
            <div className="bg-[#4E73DF] h-screen px-[25px]">
                <div className="px-[15px] py-[30px] flex item justify-between border-b-[1px] border-[#EDEDED]/[0.3]">
                    <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">Fasti</h1>
                    <div className="lg:hidden" onClick={toggleSidebar}>
                        <FaTimes color="black" />
                    </div>
                </div>
                {userInfo.isAdmin ? (
                    <></>
                ) : (
                    <>
                        {' '}
                        <Link to="/udashboard">
                            <div className="flex items-center gap-[15px] py-[20px border-b-[1px] border-[#EDEDED]/[0.3]">
                                <FaTachometerAlt color="white" />
                                <p className="text-[14px] leading-[20px] font-bold text-white">Dashboard</p>
                            </div>
                        </Link>
                    </>
                )}
                <div className="pt-[15px] border-b-[1px]  border-[#EDEDED]/[0.3]">
                    <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]"></p>

                    {navItem.map((item) => {
                        return (
                            <Link to={item.link}>
                                <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
                                    <div className="flex items-center gap-[10px]">
                                        {item.icon}
                                        <p className="text-[14px] leading-[20px] font-normal text-white">{item.name}</p>
                                    </div>
                                    <FaChevronRight color="white" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SideNav;
