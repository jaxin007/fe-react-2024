import { useEffect, useState } from 'react';

import { AboutMe } from '@/components/AboutMe/AboutMe.component.tsx';
import { Footer } from '@/components/Footer/Footer.component.tsx';
import { Header } from '@/components/Header/Header.component.tsx';
import { ProductList } from '@/components/ProductsList/ProductsList.component.tsx';
import { getProductsCartAmount } from '@/helpers/get-products-cart-amount.ts';
import type { Pages } from '@/types/pages.type.ts';

import './App.module.css';

function App() {
    const [activePage, setActivePage] = useState<Pages>('about');
    const [totalProductsInCart, setTotalProductsInCart] = useState(0);

    useEffect(() => {
        const productsCartAmount = getProductsCartAmount();
        setTotalProductsInCart(productsCartAmount);
    }, []);

    const handleActivePage = (page: Pages) => {
        setActivePage(page);
    };

    const updateTotalCart = () => {
        const totalProducts = getProductsCartAmount();

        setTotalProductsInCart(totalProducts);
    };

    return (
        <>
            <Header activePage={activePage} handleActivePage={handleActivePage} totalProductsInCart={totalProductsInCart} />
            {activePage === 'about' ? <AboutMe /> : <ProductList updateTotalCart={updateTotalCart} />}
            <Footer />
        </>
    );
}

export default App;
