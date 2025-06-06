import React from 'react';
import NavBar from '../components/NavBar';
import ServiceSection from '../components/ServiceSection';
import Footer from '../components/Footer';

const ServicePage = () => {
    return (
        <NavBar>
            <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
                <h2 className="text-2xl font-bold text-center text-black mb-10">Our Services</h2>

            </div>
            <ServiceSection>

                <Footer>
                    
                </Footer>

            </ServiceSection>
        </NavBar>
    );
};

export default ServicePage;