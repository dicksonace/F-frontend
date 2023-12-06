import React from 'react';

const Hero = () => {
    return (
        <div>
            <div name="home" className="w-full h-600 bg-zinc-200 flex flex-col justify-between">
                <div className="grid md:grid-cols-2 max-w-[1240px] m-auto p-10">
                    <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                        <p className="text-2xl">Innovative Innovative Innovative </p>
                        <h1 className="py-3 text-5xl md:text-7xl font-bold">Innovative Innovative v</h1>
                        <p className="text-2xl">Empowering Your Digital Future.</p>
                        <button
                            className="py-3 px-6 sm:w-[60%] my-4 text-white border bg-indigo-600 border-indigo-600
    hover:bg-transparent hover:text-indigo-600 rounded-md"
                        >
                            Explore Now
                        </button>
                    </div>
                    <div>
                        <img className="w-full" src={'https://i.imgur.com/DWPTxrz.png'} alt="/" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
