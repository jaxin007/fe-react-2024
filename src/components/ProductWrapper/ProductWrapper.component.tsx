import type { FC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { Pagination } from '@/components/Pagination/Pagination.component.tsx';
import { ProductList } from '@/components/ProductsList/ProductsList.component.tsx';
import SearchBar from '@/components/SearchBar/SearchBar.component.tsx';
import { getPaginatedItems } from '@/helpers/get-paginated-items.ts';
import type { Product } from '@/models/product.model.ts';
import type { Themes } from '@/types/themes.type.ts';
import { fetchProducts } from '@/utils/fetch-products.ts';

interface ProductWrapperProps {
    theme: Themes;
    updateTotalCart: () => void;
}

export const ProductWrapper: FC<ProductWrapperProps> = ({ theme, updateTotalCart }) => {
    const [totalPages, setTotalPages] = useState<number>(1);
    const [productsList, setProductsList] = useState<Product[]>([]);
    const [paginatedProductsList, setPaginatedProductsList] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const itemsPerPage = 8;

    useEffect(() => {
        const getProducts = async () => {
            const products = await fetchProducts();
            setProductsList(products);

            const paginatedProducts = getPaginatedItems(products, currentPage, itemsPerPage);
            setPaginatedProductsList(paginatedProducts);

            setTotalPages(Math.ceil(products.length / itemsPerPage) || 1);
        };

        getProducts();
    }, [currentPage]);

    // let productsList: Product[] = products;

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const handleProductsFilter = (filteredProducts: Product[]) => {
        const totalPagesFiltered = Math.ceil(filteredProducts.length / itemsPerPage) || 1;

        const paginatedProducts = getPaginatedItems(filteredProducts, 1, itemsPerPage);

        setPaginatedProductsList([...paginatedProducts]);

        setTotalPages(totalPagesFiltered);

        // Reset current page to 1 if the filtered products list is different from the original list
        setCurrentPage(1);
    };

    return (
        <>
            <SearchBar theme={theme} products={productsList} handleProductsFilter={handleProductsFilter} />
            <ProductList products={paginatedProductsList} updateTotalCart={updateTotalCart} theme={theme} />
            <Pagination
                theme={theme}
                totalItems={productsList.length}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                totalPages={totalPages}
            />
        </>
    );
};
