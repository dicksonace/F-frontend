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

const Team = () => {
    const [numberOfUsers, setNumberOfUsers] = useState(0);
    const [editordata, seteditoredata] = useState([]);

    const { apiBaseUrl, userInfo } = useContext(GlobalContext);

    console.log();

    const token = Cookies.get('token');
    let userId = userInfo._id;
    console.log(userId);

    const [mycollabs, setMyCollabs] = useState([]);
    const [collabsBeenAdded, setCollabsBeenAdded] = useState([]);

    useEffect(() => {
        axios
            .get(`${apiBaseUrl}users/dashboard/collaboration/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                // seteditoredata(res.data.canvases);
                console.log(res);
                const myCollasFilter = res.data.data.filter((pp) => pp.createdBy == userId);
                setMyCollabs(myCollasFilter);

                const collabsBeenAddedFilter = res.data.data.filter((data) => {
                    // console.log(data.collaborators.length);
                    for (let i = 0; i < data.collaborators.length; i++) {
                        if (data.collaborators[i]._id == userId) {
                            return data;
                        }
                    }
                });
                setCollabsBeenAdded(collabsBeenAddedFilter);

                return;
            })
            .catch((err) => {
                console.log(err);
            });
    }, [userId]);

    console.log(mycollabs);
    console.log(collabsBeenAdded);

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
                <main className="flex-1 flex flex-col overflow-hidden b">
                    {/* Top Navigation */}
                    <Header />

                    {/* Main Content Area */}
                    <section className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                        <h2 className="text-2xl font-bold mb-2">My Collaborations</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                            {mycollabs.map((card, index) => (
                                <Card key={index} link={`/design/${card.canvasId}`} title={card.title} />
                            ))}
                        </div>

                        <h2 className="text-2xl font-bold mb-2">Collaborations Been Added</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                            {collabsBeenAdded.map((card, index) => (
                                <Card key={index} link={`/design/${card.canvasId}`} title={card.title} />
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Team;
