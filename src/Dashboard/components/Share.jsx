import React, { useState } from 'react';
import Modal from './Modal';
const CopyToClipboardForm = ({ id, openModel, onClose }) => {
    const [inputValue, setInputValue] = useState(`http://localhost:5173/share/${id}`);
    const [isCopied, setIsCopied] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleCopyToClipboard = () => {
        // Create a text area element to temporarily hold the text
        const textArea = document.createElement('textarea');
        textArea.value = inputValue;

        // Append the text area to the document
        document.body.appendChild(textArea);

        // Select the text within the text area
        textArea.select();
        textArea.setSelectionRange(0, 99999); // For mobile devices

        // Execute the copy command
        document.execCommand('copy');

        // Remove the text area from the document
        document.body.removeChild(textArea);

        // Set the copied state to true
        setIsCopied(true);

        // Reset the copied state after a short delay
        setTimeout(() => {
            setIsCopied(false);
        }, 5500);
    };

    return (
        <>
            <Modal isOpen={openModel} title="Share " onClose={onClose}>
                <div className="p-4">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="w-full p-2 mb-4 border rounded"
                        placeholder="Type something..."
                    />
                    <button onClick={handleCopyToClipboard} className="bg-blue-500 text-white px-4 py-2 rounded">
                        {isCopied ? 'Copied!' : 'Copy to Clipboard'}
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default CopyToClipboardForm;
