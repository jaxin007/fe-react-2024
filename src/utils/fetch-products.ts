import { products } from '@/constants/products.constant.ts';
import type { Product } from '@/models/product.model.ts';

export const fetchProducts = (): Promise<Product[]> => {
    // TODO: Replace this with a real API call
    const responsePromiseSimulation = async () => new Promise<Product[]>((resolve) => setTimeout(() => resolve(products), 100));

    return responsePromiseSimulation();
};
