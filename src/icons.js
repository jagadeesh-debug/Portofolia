import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const MyComponent = () => {

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}><a href='https://github.com/jagadeesh-debug'>
                <FontAwesomeIcon icon={faGithub} size='2x'style={{
                    margin:'0.5em'
                }}
                /></a>
            <span><a href="https://www.linkedin.com/in/jagadeesh-kandepalli">
                <FontAwesomeIcon icon={faLinkedinIn} size='2x'
                style={{
                    margin:'0.2em'
                }} /></a> </span>
        </div>
    );
};

export default MyComponent;
