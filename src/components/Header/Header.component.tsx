import React from 'react';
import { NavLink } from 'react-router-dom';

import { SignUp } from '@/assets/icons/SignUp.tsx';
import { CartIcon } from '@/components/CartIcon/CartIcon.component.tsx';
import IconWithRedirect from '@/components/IconWithRedirect/IconWithRedirect.component.tsx';
import { ThemesSelector } from '@/components/ThemesSelector/ThemesSelector.component.tsx';
import { images } from '@/constants/images.constant.ts';
import { links } from '@/constants/links.constant.ts';
import type { Pages } from '@/types/pages.type.ts';
import type { Themes } from '@/types/themes.type.ts';

import styles from './Header.module.css';

interface HeaderProps {
    totalProductsInCart: number;
    handleActivePage: (page: Pages) => void;
    theme: Themes;
    setTheme: (theme: Themes) => void;
}

export const Header: React.FC<HeaderProps> = ({ totalProductsInCart, handleActivePage, theme, setTheme }) => (
    <div className={styles.headerWrapper}>
        <div className={styles.header}>
            <div className={styles.leftIcons}>
                <IconWithRedirect icon={images.maCrownIcon} url={links.home} alt={'masters academy icon'}></IconWithRedirect>
                <ThemesSelector setTheme={setTheme} />
            </div>
            <div className={styles.rightIcons}>
                <div className={styles.pageTabs}>
                    <NavLink to={'/'} className={({ isActive }) => (isActive ? styles.activeButton : styles.inactiveButton)}>
                        About
                    </NavLink>
                    <NavLink to={'/products'} className={({ isActive }) => (isActive ? styles.activeButton : styles.inactiveButton)}>
                        Products
                    </NavLink>
                </div>

                <CartIcon counter={totalProductsInCart} handleCartIcon={() => handleActivePage('products')}></CartIcon>
                <img className={styles.menuDuoIcon} src={images.menuDuoIcon} alt={'menu'} />
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
