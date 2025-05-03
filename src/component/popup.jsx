import React from 'react';
import './popup_style.scss';

const Popup = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="popup" onClick={onClose}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
                <span className="close-btn" onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>
    );
};

export default Popup;
