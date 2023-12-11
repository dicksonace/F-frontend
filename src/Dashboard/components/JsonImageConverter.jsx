import React, { useState } from 'react';

const JsonToImageConverter = () => {
    const [jsonFile, setJsonFile] = useState(null);
    const [imageData, setImageData] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                try {
                    const json = JSON.parse(e.target.result);
                    // Assuming the JSON structure includes an image URL
                    const imageUrl = json.imageUrl;

                    // Fetch the image data
                    fetch(imageUrl)
                        .then((response) => response.blob())
                        .then((blob) => {

                            
                            const objectURL = URL.createObjectURL(blob);
                            setImageData(objectURL);
                        })
                        .catch((error) => {
                            console.error('Error fetching image:', error);
                        });
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            };

            reader.readAsText(file);
        }
    };

    return (
        <div>
            <input type="file" accept=".json" onChange={handleFileChange} />
            {imageData && <img src={imageData} alt="Converted Image" />}
        </div>
    );
};

export default JsonToImageConverter;
