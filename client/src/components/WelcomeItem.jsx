import React from 'react';
import './WelcomeItem.css';

const WelcomeItem = ({ icon, heading, children }) => {
    return (
        <div className="item">
            <i>
                {icon}
            </i>
            <div className="details">
                <h3>
                    {heading}
                </h3>
                {children}
            </div>
        </div>
    );
};

export default WelcomeItem;
