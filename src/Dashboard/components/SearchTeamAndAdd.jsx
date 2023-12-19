import React, { useContext, useEffect, useState } from 'react';
import Modal from './Modal';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SearchTeamAndAdd = ({ id, openCollabsModel, onCloseCollabs }) => {
    const { apiBaseUrl, UserInfo } = useContext(GlobalContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchedData, setSearchData] = useState([]);
    const token = Cookies.get('token');

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Add your search logic here
        console.log(`Search for: ${searchQuery}`);

        axios
            .get(`${apiBaseUrl}users/search?user=${searchQuery}`, {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                // console.log(res);

                if (res.status == 200) {
                    const isDuplicate = searchedData.some((item) => item.email === searchQuery);

                    if (isDuplicate) {
                        toast.warn('User have has search already', {
                            position: 'top-right',
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'light',
                        });
                        return;
                    }
                    setSearchData((prev) => {
                        return [...prev, res.data];
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const CreateCollabsHandler = () => {
        let collabData = {
            canvasId: id,
            collaborators: [],
            name: id,
        };
        axios
            .post(`${apiBaseUrl}collaborations/`, collabData, {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.status == 201) {
                    toast.success('Collaboration Created', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                } else {
                    toast.error('Something went wrong', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleAddItem = async (userId) => {
        let collabData = {
            memberId: userId,
        };

        let collabsId = createCollabs._id;

        await axios
            .put(`${apiBaseUrl}collaborations/${collabsId}/add-member`, collabData, {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                // console.log(res);

                if (res.status == 201) {
                    toast.success('User has been added', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                } else {
                    toast.error('Something went wrong', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleRemoveItem = async (memberId) => {
        console.log(id);
        let bodyData = {
            memberId,
        };

        let collabsId = createCollabs._id;
        await axios
            .put(`${apiBaseUrl}collaborations/${collabsId}/remove-member`, bodyData, {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                // console.log(res);

                if (res.status == 200) {
                    toast.success('User has been Removed', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                } else {
                    toast.error('Something went wrong', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const [collabsData, setCollabsData] = useState([]);
    // useEffect(() => {
    //     // console.log(id);
    //     axios
    //         .get(`${apiBaseUrl}collaborations/`, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 authorization: `Bearer ${token}`,
    //             },
    //         })
    //         .then((res) => {
    //             setCollabsData(res.data);
    //             console.log(res);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, [searchedData]);

    // console.log(collabsData);

    const [createCollabs, setCreateCollabs] = useState([]);
    useEffect(() => {
        axios
            .get(`${apiBaseUrl}collaborations/`, {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                let col = res.data.filter((data) => data.canvasId == id);
                setCreateCollabs(col[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [handleAddItem, handleRemoveItem]);

    return (
        <>
            <Modal isOpen={openCollabsModel} title="Search Team Memeber" onClose={onCloseCollabs}>
                {createCollabs.length == 0 ? (
                    <>
                        <div className="flex justify-center items-center">
                            <button
                                className="text-white bg-gray-800 py-5 px-8 cursor-pointer rounded-md hover:bg-gray-700"
                                onClick={CreateCollabsHandler}
                            >
                                Create Collaboration
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <form className="flex items-center justify-center mt-8" onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleInputChange}
                                placeholder="Search..."
                                className="w-64 p-2 border rounded-l"
                            />
                            <button type="submit" className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600">
                                Search
                            </button>
                        </form>
                        <ul className="list-disc py-4 text-white">
                            {searchedData.map((user) => {
                                return (
                                    <li
                                        key={user._id}
                                        className="flex items-center justify-between p-4 my-2 bg-gray-700 rounded-md shadow-sm "
                                    >
                                        <span className="text-white">#</span>
                                        <span className="text-white">{user.email}</span>
                                        <button className="" type="button" onClick={() => handleAddItem(user._id)}>
                                            {' '}
                                            Add
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>

                        <ul className="list-disc py-4 text-white">
                            {createCollabs.collaborators.map((user) => {
                                return (
                                    <li className="flex items-center justify-between p-4 my-2 bg-gray-700 rounded-md shadow-sm ">
                                        <span className="text-white">#</span>
                                        <span className="text-white">{user.name}</span>
                                        <button className="" type="button" onClick={() => handleRemoveItem(user._id)}>
                                            {' '}
                                            Remove
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                )}

                <ToastContainer />
            </Modal>
        </>
    );
};

export default SearchTeamAndAdd;
