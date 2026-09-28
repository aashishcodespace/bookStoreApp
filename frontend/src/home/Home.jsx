import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Freebook from '../components/Freebook';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Navbar />

            <div className="pt-16">
                <Banner />
                <Freebook />
                <Footer />
            </div>
        </>
    );
}

export default Home;

