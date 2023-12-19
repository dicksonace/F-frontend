import React, {
    ChangeEvent,
    forwardRef,
    ForwardRefRenderFunction,
    useRef,
    useContext,
    useEffect,
    useState,
} from 'react';
import PlayCircleIcon from '@duyank/icons/regular/PlayCircle';
import { downloadObjectAsJson } from '../utils/download';
import { useEditor } from '@lidojs/editor';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import Cookies from 'js-cookie';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaShareNodes } from 'react-icons/fa6';
import { IoPersonAddSharp } from 'react-icons/io5';
import Share from '../Dashboard/components/Share';
import SearchTeamAndAdd from '../Dashboard/components/SearchTeamAndAdd';

interface HeaderLayoutProps {
    openPreview: () => void;
}
const HeaderLayout: ForwardRefRenderFunction<HTMLDivElement, HeaderLayoutProps> = ({ openPreview }, ref) => {
    const uploadRef = useRef<HTMLInputElement>(null);
    const { actions, query } = useEditor();

    const handleExport = () => {
        downloadObjectAsJson('file', query.serialize());
    };

    const { apiBaseUrl, userInfo } = useContext(GlobalContext);
    const token = Cookies.get('token');

    const { id } = useParams();
    // console.log(id);

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${apiBaseUrl}canvases/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                console.log(res);
                console.log(res.data.content);
                actions.setData(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleImport = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                const fileContent = JSON.parse(reader.result as string);
                actions.setData(fileContent);
            };
            reader.readAsText(file);
            e.target.value = '';
        }
    };

    const saveHandler = () => {
        let jsonString = query.serialize();
        // console.log(apiBaseUrl);

        // const jsonString = JSON.stringify(md, null, 2);

        // // Create Ua Blob from the JSON string
        // const blob = new Blob([jsonString], { type: 'application/json' });
        // console.log(blob);

        if (id) {
            let jsonData = {
                createBy: userInfo._id,
                title: 'jj',
                description: 'jj',
                content: jsonString,
            };

            axios
                .put(`${apiBaseUrl}canvases/${id}`, jsonData, {
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    console.log(res);

                    if (res.status == 200) {
                        toast.success('Saved', {
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
                    }
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
        } else {
            let jsonData = {
                createBy: userInfo._id,
                title: 'jj',
                description: 'jj',
                content: jsonString,
            };

            axios
                .post(`${apiBaseUrl}canvases`, jsonData, {
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    console.log(res);
                    if (res.status == 201) {
                        toast.success('Saved', {
                            position: 'top-right',
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'light',
                        });

                        navigate(`/design/${res.data._id}`);
                    } else {
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
                    }
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
        }
    };

    // share and team
    const [coallabsModalIsOpen, setCollabsModalIsOpen] = useState(false);
    const [shareModalIsOpen, setShareModalIsOpen] = useState(false);

    const openCollabsModal = () => {
        setCollabsModalIsOpen(true);
    };

    const closeCollabsModal = () => {
        setCollabsModalIsOpen(false);
    };

    const openShareModal = () => {
        setShareModalIsOpen(true);
    };

    const closeShareModal = () => {
        setShareModalIsOpen(false);
    };

    //sharing canvas code
    const location = useLocation();

    // Access the route name from the location object
    const routeName = location.pathname.substring(1, 6);

    if (routeName == 'share') {
        console.log('sharing', id);

        axios
            .get(`${apiBaseUrl}canvases/verify/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data.content);
                actions.setData(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        console.log('not sharing');
    }

    return (
        <div
            ref={ref}
            css={{
                background: '#1E1E2D',
                padding: '12px 32px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '@media (max-width: 900px)': {
                    padding: 12,
                },
            }}
        >
            {id == null ? (
                <>null</>
            ) : (
                <>
                    <Share id={id} openModel={shareModalIsOpen} onClose={closeShareModal} />
                    <SearchTeamAndAdd
                        id={id}
                        openCollabsModel={coallabsModalIsOpen}
                        onCloseCollabs={closeCollabsModal}
                    />
                </>
            )}
            <div
                css={{
                    color: '#3d8eff',
                    fontSize: 36,
                }}
            >
                <div css={{ color: 'white', height: 46 }}>
                    <img src={'./assets/logo.png'} css={{ maxHeight: '100%' }} />
                </div>
            </div>
            <div css={{ display: 'flex', alignItems: 'center' }}>
                {id == null ? (
                    <></>
                ) : (
                    <>
                        <div className="text-3xl text-bold py-3 px-5 cursor-pointer hover:bg-gray-800 hover:text-white">
                            <FaShareNodes onClick={() => openShareModal()} />
                        </div>
                        <div className="text-3xl text-bold py-3 px-5 cursor-pointer hover:bg-gray-800 hover:text-white">
                            <IoPersonAddSharp onClick={() => openCollabsModal()} />
                        </div>
                    </>
                )}
            </div>
            <div css={{ display: 'flex', alignItems: 'center' }}>
                <div
                    css={{
                        margin: '0 16px',
                        cursor: 'pointer',
                        color: '#fff',
                        fontWeight: 700,
                        ':hover': {
                            textDecoration: 'underline',
                        },
                    }}
                >
                    <Link to="/udashboard"> Dashboard</Link>
                </div>
                <div
                    css={{
                        margin: '0 16px',
                        cursor: 'pointer',
                        color: '#fff',
                        fontWeight: 700,
                        ':hover': {
                            textDecoration: 'underline',
                        },
                    }}
                    onClick={() => uploadRef.current?.click()}
                >
                    <input
                        ref={uploadRef}
                        type="file"
                        accept="application/json"
                        onChange={handleImport}
                        css={{ display: 'none' }}
                    />
                    Import
                </div>
                <div
                    css={{
                        margin: '0 16px',
                        cursor: 'pointer',
                        color: '#fff',
                        fontWeight: 700,
                        ':hover': {
                            textDecoration: 'underline',
                        },
                    }}
                    onClick={() => handleExport()}
                >
                    Export
                </div>

                <div
                    css={{
                        margin: '0 16px',
                        cursor: 'pointer',
                        color: '#fff',
                        fontWeight: 700,
                        ':hover': {
                            textDecoration: 'underline',
                        },
                    }}
                    onClick={() => saveHandler()}
                >
                    Save
                </div>

                <div
                    css={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#fff',
                        lineHeight: 1,
                        background: '#3a3a4c',
                        padding: '8px 14px',
                        borderRadius: 8,
                        cursor: 'pointer',
                        ':hover': {
                            background: 'rgba(58,58,76,0.5)',
                        },
                    }}
                    onClick={openPreview}
                >
                    <div css={{ marginRight: 4, fontSize: 20 }}>
                        <PlayCircleIcon />
                    </div>{' '}
                    Preview
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default forwardRef(HeaderLayout);
