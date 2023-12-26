import React from 'react';

const SaveIdeas = () => {
    return (
        <div className="flex h-screen  bg-green-100">
            {/* Left Section */}
            <div className="flex-1 p-8 flex flex-col justify-start items-center h-full">
                {/* Your content for the left section goes here */}
                <h2 className="text-4xl lg:text-6xl font-bold text-green-800">Save ideas you like</h2>
                <p className="text-2xl text-green-600 space-y-7">
                    Collect your favorites so you can get back to them later.
                </p>
            </div>

            {/* Right Section */}
            <div className="flex-4 p-8">
                {/* Your content for the right section goes here */}
                {/* <h2 className="text-2xl font-bold">Right Section</h2> */}
                {/* <p className="text-2xl text-red-400 space-y-7">
                    Collect your favorites so you can get back to them later.
                </p> */}
            </div>
        </div>
    );
};

export default SaveIdeas;
