import React from 'react';
import { Container } from 'react-bootstrap';

import Banner from './Banner';
import Header from './Header';

const Home = () => {
    return (
        <Container>
                        

            <Header/>
            
            <Banner/>
        </Container>
    );
};

export default Home;