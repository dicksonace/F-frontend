import React from 'react';

const Search = () => {
    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="flex-1 p-8 bg-gray-200">
                {/* Your content for the left section goes here */}
                <h2 className="text-2xl font-bold">Left Section</h2>
            </div>

            {/* Right Section */}
            <div className="flex-1 p-8 bg-pink-400">
                {/* Your content for the right section goes here */}
                <h2 className="text-2xl font-bold">Right Section</h2>
            </div>
        </div>
    );
};

export default Search;
