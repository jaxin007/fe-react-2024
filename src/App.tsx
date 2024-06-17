import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';

import { AboutMe } from '@/components/AboutMe/AboutMe.component.tsx';
import { LayoutComponent } from '@/components/Layout/Layout.component.tsx';
import { ProductWrapper } from '@/components/ProductWrapper/ProductWrapper.component.tsx';
import { getCurrentTheme } from '@/helpers/get-current-theme.ts';
import { getProductsCartAmount } from '@/helpers/get-products-cart-amount.ts';
import { NotFoundPage } from '@/pages/NotFound/NotFound.page.tsx';
import type { Themes } from '@/types/themes.type.ts';

function App() {
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
                <Routes>
                    <Route
                        path={'/'}
                        element={<LayoutComponent totalProductsInCart={totalProductsInCart} theme={currentTheme} setTheme={handleTheme} />}
                    >
                        <Route index element={<AboutMe />} />
                        <Route path={'/products'} element={<ProductWrapper theme={currentTheme} updateTotalCart={updateTotalCart} />} />
                        <Route path={'*'} element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </HelmetProvider>
        </>
    );
}

export default App;
