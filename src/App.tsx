import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { AboutMe } from '@/components/AboutMe/AboutMe.component.tsx';
import { Footer } from '@/components/Footer/Footer.component.tsx';
import { Header } from '@/components/Header/Header.component.tsx';
import { ProductList } from '@/components/ProductsList/ProductsList.component.tsx';
import SearchBar from '@/components/SearchBar/SearchBar.component.tsx';
import { getCurrentTheme } from '@/helpers/get-current-theme.ts';
import { getProductsCartAmount } from '@/helpers/get-products-cart-amount.ts';
import type { Pages } from '@/types/pages.type.ts';
import type { Themes } from '@/types/themes.type.ts';

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

    const updateTotalCart = () => {
        const totalProducts = getProductsCartAmount();

        setTotalProductsInCart(totalProducts);
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
                <div>
                    {activePage === 'products' && <SearchBar theme={currentTheme} />}
                    {activePage === 'about' ? <AboutMe /> : <ProductList updateTotalCart={updateTotalCart} theme={currentTheme} />}
                    <Footer />
                </div>
            </HelmetProvider>
        </>
    );
}

export default App;
