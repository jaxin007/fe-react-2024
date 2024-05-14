export const getProductsCartAmount = (): number => {
    const cartIds: string[] = JSON.parse(localStorage.getItem('cartIds') || '[]');

    return cartIds.length;
};
