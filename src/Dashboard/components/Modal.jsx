// Modal.js
import React from 'react';
import { IoClose } from 'react-icons/io5';

const Modal = ({ isOpen, onClose, title, children }) => {

    // isOpen = false;
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
                <div className="relative w-full max-w-md p-4 mx-auto my-6 bg-white border rounded-lg shadow-lg outline-none focus:outline-none">
                    <div className="relative flex flex-col w-full">
                        <div className="flex items-start justify-between p-5 border-b border-solid rounded-t">
                            <h3 className="text-3xl font-semibold">{title}</h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={onClose}
                            >
                                <span className="">
                                    <IoClose />
                                </span>
                            </button>
                        </div>
                        <div className="relative p-6 flex-auto">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
