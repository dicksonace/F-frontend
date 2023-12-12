import React, { ChangeEvent, forwardRef, ForwardRefRenderFunction, useRef, useContext, useEffect } from 'react';
import PlayCircleIcon from '@duyank/icons/regular/PlayCircle';
import { downloadObjectAsJson } from '../utils/download';
import { useEditor } from '@lidojs/editor';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import Cookies from 'js-cookie';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

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
