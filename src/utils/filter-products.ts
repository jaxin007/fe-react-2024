import type { Product } from '@/models/product.model.ts';

export const filterProducts = (productsList: Product[], selectedCategories: Set<string>, searchQuery: string): Product[] => {
    let filteredProducts = productsList;

    // - If there are selected categories, filter the products by them
    if (selectedCategories.size > 0) {
        filteredProducts = productsList.filter((product) => selectedCategories.has(product.category.name));
    }

    // - If there is a search query, filter the products by it
    if (searchQuery) {
        const isSearchQueryValid = searchQuery.trim().length > 2;

        if (isSearchQueryValid) {
            filteredProducts = filteredProducts.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
        }
    }

    return filteredProducts;
};
