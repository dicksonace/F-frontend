import React from 'react';

const Shop = () => {
    const styles = {
        backgroundImage: `url(https://plus.unsplash.com/premium_photo-1692282102692-58f98d0a4ec4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlJTIwc2hvcCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="flex-1 p-8 bg-gray-200" style={styles}>
              {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
                {/* Your content for the left section goes here */}
                <h2 className="text-2xl font-bold">Left Section</h2>
            </div>

            {/* Right Section */}
            <div className="flex-1 p-8 bg-pink-200 flex flex-col justify-center items-center">
                {/* Your content for the right section goes here */}
                <h2 className="text-4xl lg:text-6xl font-bold text-red-900">See it, make it, try it, do it</h2>
                <p className="text-2xl text-red-400 space-y-7">
                    The best part of Pinterest is discovering new things and ideas from people around the world.
                </p>
            </div>
        </div>
    );
};

export default Shop;
