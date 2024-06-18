import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './IconWithRedirect.module.css';

interface IconWithRedirectProps {
    icon: string;
    url: string;
    alt?: string;
    className?: string;
}

const IconWithRedirect: FC<IconWithRedirectProps> = ({ icon, url, alt = 'icon', className }) => (
    <>
        <NavLink to={url}>
            <img className={className || styles.redirectImage} src={icon} alt={alt} />
        </NavLink>
    </>
);

export default IconWithRedirect;
