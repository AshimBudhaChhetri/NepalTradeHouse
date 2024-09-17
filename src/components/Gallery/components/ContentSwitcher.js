import React, { useState } from 'react';
import './ContentSwitcher.css';
import NepalIce from './Nepalice';
import Khukri from './Khukuri';
import Spices from './Spices';
import TeaCoffee from './Teacoffee';

const ContentSwitcher = () => {
    const [activeSection, setActiveSection] = useState('nepal-ice');

    // Function to render the content based on the active section
    const renderContent = () => {
        switch (activeSection) {
            case 'nepal-ice':
                return <NepalIce />;
            case 'khukri':
                return <Khukri />;
            case 'spices':
                return <Spices />;
            case 'tea-coffee':
                return <TeaCoffee />;
            default:
                return <NepalIce />;
        }
    };

    return (
        <div className="content-switcher">
            <div className="content">
                {renderContent()}
            </div>
            <div className="navbar-gallery">
                <div className="navbar-box">
                    <button
                        className={activeSection === 'nepal-ice' ? 'active' : ''}
                        onClick={() => setActiveSection('nepal-ice')}
                    >
                        Nepal Ice
                    </button>
                    <button
                        className={activeSection === 'khukri' ? 'active' : ''}
                        onClick={() => setActiveSection('khukri')}
                    >
                        Khukri
                    </button>
                    <button
                        className={activeSection === 'spices' ? 'active' : ''}
                        onClick={() => setActiveSection('spices')}
                    >
                        Spices
                    </button>
                    <button
                        className={activeSection === 'tea-coffee' ? 'active' : ''}
                        onClick={() => setActiveSection('tea-coffee')}
                    >
                        Tea & Coffee
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContentSwitcher;
