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
    const [totalCart, setTotalCart] = useState(0);

    useEffect(() => {
        const productsCartAmount = getProductsCartAmount();
        setTotalCart(productsCartAmount);
    }, []);

    const handleActivePage = (page: Pages) => {
        setActivePage(page);
    };

    const updateTotalCart = () => {
        const total = getProductsCartAmount();

        setTotalCart(total);
    };

    return (
        <>
            <Header activePage={activePage} handleActivePage={handleActivePage} totalCart={totalCart} />
            {activePage === 'about' ? <AboutMe></AboutMe> : <ProductList updateTotalCart={updateTotalCart}></ProductList>}
            <Footer></Footer>
        </>
    );
}

export default App;
