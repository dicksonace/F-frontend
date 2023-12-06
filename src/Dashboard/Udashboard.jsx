import React, { useContext, useEffect, useState, Link } from 'react';
import SideNav from './components/SideNav';
import Header from './components/Header';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import axios from 'axios';
import Cookies from 'js-cookie';

const Udashboard = () => {
    const { apiBaseUrl } = useContext(GlobalContext);

    return (
        <>
            <div className="flex h-screen bg-gray-100">
                {/* Side Navigation */}
                <aside className="w-64 bg-[#313233] p-6 text-white">
                    <SideNav />
                </aside>

                {/* Main Content */}
                <main className="flex-1 flex flex-col overflow-hidden">
                    {/* Top Navigation */}
                    <Header />

                    {/* Main Content Area */}
                    <section className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                        <h2 className="text-2xl font-semibold mb-4">Templates</h2>

                        <div className="flex flex-col justify-center items-center h-[400px] bg-[#c2a2e8] ">
                            <h1 className="text-4xl text-black font-semibold p-7">
                                Discover new interests, make new creation
                            </h1>

                            <div className="">
                                <div className="flex items-center ">
                                    <div className="flex border border-purple-200 rounded">
                                        <div className="relative">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                />
                                            </svg>
                                            <input
                                                type="text"
                                                placeholder="Search"
                                                className="w-100 py-3 pl-12 pr-4 text-gray-500 border  outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                                            />
                                        </div>
                                        <button className="px-4 text-white bg-purple-600 border-l rounded  border-none">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-7">
                            <h1 className=" font-bold text-3xl">Explore our teplates</h1>

                            <ul className="p-4 flex ">
                                <li className="py-2 px-3 text-2xl border border-1 border-none m-1 rounded-md cursor-pointer bg-gray-400 text-black">
                                    Popular
                                </li>
                                <li className="py-2 px-3 text-2xl border border-1 border-none m-1 rounded-md cursor-pointer">
                                    Recent
                                </li>
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Udashboard;
