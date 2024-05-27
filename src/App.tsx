import { useEffect, useState } from 'react';

import { AboutMe } from '@/components/AboutMe/AboutMe.component.tsx';
import { Footer } from '@/components/Footer/Footer.component.tsx';
import { Header } from '@/components/Header/Header.component.tsx';
import { ProductList } from '@/components/ProductsList/ProductsList.component.tsx';
import { getCurrentTheme } from '@/helpers/get-current-theme.ts';
import { getProductsCartAmount } from '@/helpers/get-products-cart-amount.ts';
import type { Pages } from '@/types/pages.type.ts';
import type { Themes } from '@/types/themes.type.ts';

import styles from './App.module.css';

function App() {
    const [activePage, setActivePage] = useState<Pages>('about');
    const [totalProductsInCart, setTotalProductsInCart] = useState(0);
    const [currentTheme, setCurrentTheme] = useState<Themes>('dark');

    useEffect(() => {
        const productsCartAmount = getProductsCartAmount();
        setTotalProductsInCart(productsCartAmount);
    }, []);

    useEffect(() => {
        const theme = getCurrentTheme();

        // Initial theme change for body
        document.body.className = theme;
        setCurrentTheme(theme);
    }, []);

    const handleActivePage = (page: Pages) => {
        setActivePage(page);
    };

    const handleTheme = (theme: Themes) => {
        if (theme === currentTheme) {
            return;
        }

        // Dynamic theme change for body
        document.body.className = theme;

        localStorage.setItem('theme', theme);
        setCurrentTheme(theme);
    };

    const updateTotalCart = () => {
        const totalProducts = getProductsCartAmount();

        setTotalProductsInCart(totalProducts);
    };

    return (
        <>
            <div className={`${currentTheme === 'dark' ? styles.dark : styles.light}`}>
                <Header
                    activePage={activePage}
                    handleActivePage={handleActivePage}
                    totalProductsInCart={totalProductsInCart}
                    theme={currentTheme}
                    setTheme={handleTheme}
                />
                <div>
                    {activePage === 'about' ? <AboutMe /> : <ProductList updateTotalCart={updateTotalCart} theme={currentTheme} />}
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
