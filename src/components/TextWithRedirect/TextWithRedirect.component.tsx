import React from 'react';

interface IconWithRedirectProps {
    text: string;
    url: string;
    className?: string;
    alt?: string;
}

const TextWithRedirect: React.FC<IconWithRedirectProps> = ({ className = 'a', text, url, alt = 'text' }) => (
    <a className={className} href={url}>
        <p>{text}</p>
    </a>
);

export default TextWithRedirect;
