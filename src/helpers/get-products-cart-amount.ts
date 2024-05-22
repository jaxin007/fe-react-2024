export const getProductsCartAmount = (): number => {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');

    return Object.keys(cart).reduce((accumulator, key) => accumulator + cart[key].count, 0);
};
