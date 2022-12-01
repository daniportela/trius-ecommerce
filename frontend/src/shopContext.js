import { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

const context = createContext();

export const { Provider } = context;

export function useCartContext() {
    return useContext(context);
}

export default function CustomProvider({ children }) {
    const [cart, setCart] = useState([]); // Used for most actions (add/remove product, increase/decrease amount in cart)
    const [totalAmount, setTotalAmount] = useState(0); // Number of total products, displayed in cart icon

    function isInCart(id) { // Checks if a certain product is or isn't already in cart
        return cart.find(product => product._id === id);
    }

    function addToCart(product, count) { // Add products to cart
        if (isInCart(product._id)) {
            let productInCart = cart.find(p => p._id === product._id);
            productInCart.count += count;
            setTotalAmount(prevValue => prevValue += count);
            setCart([...cart]);
        } else {
            setTotalAmount(prevValue => prevValue += count);
            product.count = count;
            setCart([...cart, product]);
        }
        
        toast.success(`${product.title} (${count}) succesfully added to cart`, { className: 'toast-success', containerClassName: 'toast-container' });
    }

    function removeFromCart(product) { // Remove products from cart
        setTotalAmount(prevValue => prevValue -= product.count);
        return setCart(cart.filter(p => p._id !== product._id));
    }

    function emptyCart() {
        setCart([]);
        setTotalAmount(0);
    }

    function changeAmountInCart(product, operator) { // Changes amount of chosen item in cart menu table (small "+" & "-" buttons)
        let productInCart = cart.find(p => p._id === product._id);
        
        if (operator === "+") {
            productInCart.count++;
            setCart([...cart]);
            setTotalAmount(prevValue => prevValue + 1);
        } else if (operator === "-") {
            productInCart.count--;
            setCart([...cart]);
            setTotalAmount(prevValue => prevValue - 1);
        }
    }

    const contextValue = {
        addToCart,
        removeFromCart,
        changeAmountInCart,
        emptyCart,
        totalAmount,
        cart
    }

    return (
        <Provider value={contextValue}>
            { children }
        </Provider>
    )
}