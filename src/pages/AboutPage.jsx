import React from 'react';
import NavBar from '../components/NavBar';
import About from '../components/About';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <NavBar>
            <About>
                <TeamSection>
                    <Footer>
                        
                    </Footer>
                </TeamSection>

            </About>
            
            
        </NavBar>
    );
};

export default AboutPage;