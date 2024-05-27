import React from 'react';

import { CartIcon } from '@/components/CartIcon/CartIcon.component.tsx';
import IconWithRedirect from '@/components/IconWithRedirect/IconWithRedirect.component.tsx';
import { images } from '@/constants/images.constant.ts';
import { links } from '@/constants/links.constant.ts';
import DarkTheme from '@/icons/dark-theme.svg?react';
import type { Pages } from '@/types/pages.type.ts';

import styles from './Header.module.css';

interface HeaderProps {
    activePage: Pages;
    totalProductsInCart: number;
    handleActivePage: (page: Pages) => void;
}

export const Header: React.FC<HeaderProps> = ({ totalProductsInCart, handleActivePage, activePage }) => (
    <div>
        <div className={styles.header}>
            <div className={styles.leftIcons}>
                <IconWithRedirect icon={images.maCrownIcon} url={links.google} alt={'masters academy icon'}></IconWithRedirect>
                <div className={styles.themes}>
                    <DarkTheme height={'20'} width={'20'} />
                </div>
            </div>
            <div className={styles.rightIcons}>
                <div className={styles.pageTabs}>
                    <button
                        className={activePage === 'about' ? styles.activeButton : styles.inactiveButton}
                        onClick={() => handleActivePage('about')}
                    >
                        About
                    </button>
                    <button
                        className={activePage === 'products' ? styles.activeButton : styles.inactiveButton}
                        onClick={() => handleActivePage('products')}
                    >
                        Products
                    </button>
                </div>

                <CartIcon counter={totalProductsInCart} handleCartIcon={() => handleActivePage('products')}></CartIcon>
                <IconWithRedirect className={styles.menuDuoIcon} icon={images.menuDuoIcon} url="/#"></IconWithRedirect>
                <button className={styles.signInButton}>
                    <img src={images.signInIcon} alt="sign in button" />
                    <p>Login</p>
                </button>
                <button className={styles.signUpButton}>
                    <img src={images.signUpIcon} alt="sign up button" />
                    <p>Sign Up</p>
                </button>
            </div>
        </div>
    </div>
);
