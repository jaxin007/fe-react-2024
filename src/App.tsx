import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { AboutMe } from '@/components/AboutMe/AboutMe.component.tsx';
import { Footer } from '@/components/Footer/Footer.component.tsx';
import { Header } from '@/components/Header/Header.component.tsx';
import { ProductWrapper } from '@/components/ProductWrapper/ProductWrapper.component.tsx';
import { getCurrentTheme } from '@/helpers/get-current-theme.ts';
import { getProductsCartAmount } from '@/helpers/get-products-cart-amount.ts';
import type { Pages } from '@/types/pages.type.ts';
import type { Themes } from '@/types/themes.type.ts';

function App() {
    const [activePage, setActivePage] = useState<Pages>('about');
    const [totalProductsInCart, setTotalProductsInCart] = useState(0);
    const [currentTheme, setCurrentTheme] = useState<Themes>('dark');

    const updateTotalCart = () => {
        const totalProducts = getProductsCartAmount();

        setTotalProductsInCart(totalProducts);
    };

    useEffect(() => {
        const productsCartAmount = getProductsCartAmount();
        setTotalProductsInCart(productsCartAmount);
    }, []);

    useEffect(() => {
        const theme = getCurrentTheme();

        setCurrentTheme(theme);
    }, []);

    const handleActivePage = (page: Pages) => {
        setActivePage(page);
    };

    const handleTheme = (theme: Themes) => {
        if (theme === currentTheme) {
            return;
        }

        localStorage.setItem('theme', theme);
        setCurrentTheme(theme);
    };

    return (
        <>
            <HelmetProvider>
                <Helmet htmlAttributes={{ theme: currentTheme }}></Helmet>
                <Header
                    activePage={activePage}
                    handleActivePage={handleActivePage}
                    totalProductsInCart={totalProductsInCart}
                    theme={currentTheme}
                    setTheme={handleTheme}
                />
                {activePage === 'about' && <AboutMe />}
                {activePage === 'products' && <ProductWrapper theme={currentTheme} updateTotalCart={updateTotalCart} />}
                <Footer />
            </HelmetProvider>
        </>
    );
}

export default App;
