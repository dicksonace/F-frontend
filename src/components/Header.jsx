import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext/GlobalContext';

const Header = () => {
    const { isLogin, isAdmin } = useContext(GlobalContext);

    if (isLogin) {
    } else {
    }
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div>
                    <h1 className="text-xl font-bold">Company Logo</h1>
                </div>

                {/* Navigation Links */}
                <nav className="flex space-x-4"></nav>

                {/* Call-to-Action */}
                <div>
                    {isLogin ? (
                        <>
                            <Link to={isAdmin ? `/adashboard` : `/udashboard`}>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                                    Dashboard
                                </button>
                            </Link>
                        </>
                    ) : (
                        <>
                            {' '}
                            <Link to="/login">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                                    Login
                                </button>
                            </Link>
                            <Link to="/signup">
                                {' '}
                                <button className="border border-blue-500 hover:bg-blue-600 text-white px-4 mx-2 py-2 rounded">
                                    Sign Up
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
