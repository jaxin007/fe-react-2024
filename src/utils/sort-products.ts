import type { Product } from '@/models/product.model.ts';
import type { SortOptions } from '@/types/sort-options.type.ts';

export const sortProducts = (productsList: Product[], sortOption: SortOptions): Product[] => {
    // - Sort the products by the selected option
    // - TODO: Implement the deep copy of the products list to avoid mutating the original list (see the sort method description in the MDN docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
    switch (sortOption) {
        case 'Price (Low-High)': {
            return productsList.sort((a, b) => a.price - b.price);
        }
        case 'Price (High-Low)': {
            return productsList.sort((a, b) => b.price - a.price);
        }
        case 'Newest': {
            return productsList.sort((a, b) => new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime());
        }
        case 'Oldest': {
            return productsList.sort((a, b) => new Date(a.creationAt).getTime() - new Date(b.creationAt).getTime());
        }
        default: {
            return productsList;
        }
    }
};
