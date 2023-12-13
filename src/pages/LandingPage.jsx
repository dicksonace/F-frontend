import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageLoader from '../components/PageLoader';
import BodyContent from '../components/BodyContent';
import BottomPage from '../components/BottomPage';
import Shop from '../components/Shop';
import Search from '../components/Search';
import SaveIdeas from '../components/SaveIdeas';

const LandingPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate asynchronous loading (replace with your actual loading logic)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div>
                {loading && <PageLoader />}
                <Header />
                <BodyContent />
                <Search />
                <SaveIdeas />
                <Shop />
                <BottomPage />
                <Footer />
            </div>
        </div>
    );
};

export default LandingPage;
