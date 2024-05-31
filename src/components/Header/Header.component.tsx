import React from 'react';

import { Divider } from '@/assets/icons/Divider.tsx';
import { Moon } from '@/assets/icons/Moon.tsx';
import { SignUp } from '@/assets/icons/SignUp.tsx';
import { Sun } from '@/assets/icons/Sun.tsx';
import { CartIcon } from '@/components/CartIcon/CartIcon.component.tsx';
import IconWithRedirect from '@/components/IconWithRedirect/IconWithRedirect.component.tsx';
import { images } from '@/constants/images.constant.ts';
import { links } from '@/constants/links.constant.ts';
import type { Pages } from '@/types/pages.type.ts';
import type { Themes } from '@/types/themes.type.ts';

import styles from './Header.module.css';

interface HeaderProps {
    activePage: Pages;
    totalProductsInCart: number;
    handleActivePage: (page: Pages) => void;
    theme: Themes;
    setTheme: (theme: Themes) => void;
}

export const Header: React.FC<HeaderProps> = ({ totalProductsInCart, handleActivePage, activePage, theme, setTheme }) => (
    <div>
        <div className={styles.header}>
            <div className={styles.leftIcons}>
                <IconWithRedirect icon={images.maCrownIcon} url={links.google} alt={'masters academy icon'}></IconWithRedirect>
                <div className={styles.themes}>
                    <button className={styles.moonIcon} onClick={() => setTheme('dark')}>
                        <Moon theme={theme} />
                    </button>
                    <div className={styles.verticalDivider}>
                        <Divider theme={theme} />
                    </div>
                    <button className={styles.sunIcon} onClick={() => setTheme('light')}>
                        <Sun theme={theme} />
                    </button>
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
                    <SignUp theme={theme} />
                    <p>Sign Up</p>
                </button>
            </div>
        </div>
    </div>
);
