import React, { FC, useContext, useEffect, useState } from 'react';
import SideNav from '../components/SideNav';
import Header from '../components/Header';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import axios from 'axios';
import Cookies from 'js-cookie';
import { DesignFrame, useEditor } from '@lidojs/editor';
import { LayerSettings, useSelectedLayers } from '@lidojs/editor';
import EditorContent from '../../pages/EditorContent';
import JsonToImageConverter from '../components/JsonImageConverter';
import { Link } from 'react-router-dom';

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

    const Card = ({ imageUrl, title, description, link }) => {
        return (
            <Link
                to={link}
                href={link}
                className="max-w-xs rounded overflow-hidden shadow-lg m-4 transition-transform transform hover:scale-105 block relative"
            >
                <img className="w-full h-40 object-cover" src={imageUrl} alt={title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white p-4 text-center">
                    <p className="text-sm">Click to Continue</p>
                </div>
            </Link>
        );
    };

    return (
        <>
            <div className="flex h-screen bg-gray-100">
                {/* Side Navigation */}
               
                    <SideNav />
              

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
                                return;
                            })}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                                {editordata.map((card, index) => (
                                    <Card key={index} link={`/design/${card._id}`} title={card.title} />
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default MyCreation;
