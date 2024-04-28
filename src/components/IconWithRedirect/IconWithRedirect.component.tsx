import React from 'react';

interface IconWithRedirectProps {
    icon: string;
    url: string;
    alt?: string;
}

const IconWithRedirect: React.FC<IconWithRedirectProps> = ({ icon, url, alt = 'icon' }) => {
    const handleClick = () => {
        window.location.href = url;
    };

    return <img src={icon} alt={alt} onClick={handleClick} style={{ cursor: 'pointer' }} />;
};

export default IconWithRedirect;
