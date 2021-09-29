import React from 'react';
import './navigation.css';

const Navigation = ({ onRouteChange }) => {
    return (
        <nav style={{ display: 'flex', justifyContent: "space-between" }}>
            <p className="f3 fw7 hightlight-header #006D77"> Weather</p>
            <p
                onClick={() => onRouteChange('signin')}
                className="f4 grow no-underline br-pill ph3 pv3 mb2 dib white pointer btn">Sign out</p>
        </nav>
    );
}

export default Navigation;