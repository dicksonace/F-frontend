import React, { useContext, useEffect, useState } from 'react';
import SideNav from '../components/SideNav';
import Header from '../components/Header';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import axios from 'axios';
import Cookies from 'js-cookie';
import { DesignFrame, useEditor } from '@lidojs/editor';
import { LayerSettings, useSelectedLayers } from '@lidojs/editor';
import EditorContent from '../../pages/EditorContent';

const MyCreation = () => {
    const [numberOfUsers, setNumberOfUsers] = useState(0);
    const [editordata, seteditoredata] = useState([]);

    const { apiBaseUrl, userInfo } = useContext(GlobalContext);

    console.log();

    const token = Cookies.get('token');
    let userId = userInfo._id;
    console.log(userId);

    useEffect(() => {
        axios
            .get(`${apiBaseUrl}users/dashboard/canvas/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                seteditoredata(res.data.canvases);
                return;
            })
            .catch((err) => {
                console.log(err);
            });
    }, [userId]);

    console.log(editordata);

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
                        <h2 className="text-2xl font-semibold mb-4">My Creation</h2>

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 p-4 h-[400px]">
                            {/* Card 1 */}

                            <p className="text-2xl font-extrabold">T40</p>
                            {editordata.map((d) => {
                                // return <DesignFrame data={d.content} />;
                            })}
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default MyCreation;
