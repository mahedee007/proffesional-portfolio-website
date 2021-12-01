import React from 'react';
import { Container,Button } from 'react-bootstrap';
import Typical from 'react-typical';

const Banner = () => {
    return (
        <Container>
            <h1 className='text-light'>Hi, I am Mahedee</h1>
            <p className='text-light text-center'>I am a{' '} 
                <Typical
                loop={Infinity}
                wrapper="b"
                steps={['Web Developer',2000,
                'Graphics Designer',2000,
                'Digital Marketer',2000

                ]}
                />
            </p>
            <Button>hello</Button>
            
        </Container>
    );
};

export default Banner;
