import React from 'react';

interface IconWithRedirectProps {
    icon: string;
    url: string;
    className?: string;
    alt?: string;
}

const IconWithRedirect: React.FC<IconWithRedirectProps> = ({ className = 'a', icon, url, alt = 'icon' }) => (
    <a className={className} href={url}>
        <img src={icon} alt={alt} />
    </a>
);

export default IconWithRedirect;
