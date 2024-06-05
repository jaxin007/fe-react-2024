import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { AboutMe } from '@/components/AboutMe/AboutMe.component.tsx';
import { Footer } from '@/components/Footer/Footer.component.tsx';
import { Header } from '@/components/Header/Header.component.tsx';
import { ProductList } from '@/components/ProductsList/ProductsList.component.tsx';
import SearchBar from '@/components/SearchBar/SearchBar.component.tsx';
import { products } from '@/constants/products.constant.ts';
import { sortOptions } from '@/constants/sort-options.constant.ts';
import { getCurrentTheme } from '@/helpers/get-current-theme.ts';
import { getProductsCartAmount } from '@/helpers/get-products-cart-amount.ts';
import type { Product } from '@/models/product.model.ts';
import type { Pages } from '@/types/pages.type.ts';
import type { Themes } from '@/types/themes.type.ts';

function App() {
    const [activePage, setActivePage] = useState<Pages>('about');
    const [totalProductsInCart, setTotalProductsInCart] = useState(0);
    const [currentTheme, setCurrentTheme] = useState<Themes>('dark');
    const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
    const [sortOption, setSortOption] = useState<string>(sortOptions[0]);

    let productsList: Product[] = products;

    // - If there are selected categories, filter the products by them
    if (selectedCategories.size > 0) {
        productsList = productsList.filter((product) => selectedCategories.has(product.category.name));
    }

    // - Sort the products by the selected option
    switch (sortOption) {
        case 'Price (Low-High)': {
            productsList = productsList.sort((a, b) => a.price - b.price);

            break;
        }
        case 'Price (High-Low)': {
            productsList = productsList.sort((a, b) => b.price - a.price);

            break;
        }
        case 'Newest': {
            productsList.sort((a, b) => new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime());

            break;
        }
        case 'Oldest': {
            productsList.sort((a, b) => new Date(a.creationAt).getTime() - new Date(b.creationAt).getTime());

            break;
        }
        default: {
            break;
        }
    }

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

    const handleCategoryFilter = (category: string) => {
        setSelectedCategories((previousCategories) => {
            const newCategories = new Set(previousCategories);

            if (newCategories.has(category)) {
                newCategories.delete(category);
            } else {
                newCategories.add(category);
            }

            return newCategories;
        });
    };

    const handleSortOption = (option: string) => {
        setSortOption(option);
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
                    {activePage === 'products' && (
                        <SearchBar
                            theme={currentTheme}
                            handleCategoryFilter={handleCategoryFilter}
                            selectedCategories={selectedCategories}
                            sortOption={sortOption}
                            handleSortOption={handleSortOption}
                        />
                    )}
                    {activePage === 'about' ? (
                        <AboutMe />
                    ) : (
                        <ProductList products={productsList} updateTotalCart={updateTotalCart} theme={currentTheme} />
                    )}
                    <Footer />
                </div>
            </HelmetProvider>
        </>
    );
}

export default App;
