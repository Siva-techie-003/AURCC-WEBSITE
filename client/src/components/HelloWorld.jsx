import React from 'react';
import './HelloWorld.css';

const HelloWorld = ({ msg }) => {
    return (
        <div className="greetings">
            <h1 className="green">{msg}</h1>
            <h3>
                You’ve successfully created a project with{' '}
                <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
                    Vite
                </a>{' '}
                +{' '}
                <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
                    React
                </a>
                .
            </h3>
        </div>
    );
};

export default HelloWorld;
