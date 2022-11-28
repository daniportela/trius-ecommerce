import { createContext, useContext, useState } from 'react';

const context = createContext();

export const { Provider } = context;

export function useShopContext() {
    return useContext(context);
}

export default function CustomProvider({ children }) {
    const [cart, setCart] = useState([]); // Used for most actions (add/remove product, increase/decrease amount in cart)
    const [cartMenuToggle, setCartMenuToggle] = useState(false); // Toggles cart menu
    const [totalAmount, setTotalAmount] = useState(0); // Number of total products, displayed in cart icon
    const [activeCategory, setActiveCategory] = useState([]); // Sets active category(ies) for filtering products

    function handleCartMenuToggle() { // Toggles cart menu
        setCartMenuToggle((prevValue) => !prevValue);
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
    }

    function removeFromCart(product) { // Remove products from cart
        setTotalAmount(prevValue => prevValue -= product.count);
        return setCart(cart.filter(p => p._id !== product._id));
    }

    function isInCart(id) { // Checks if a certain product is or isn't already in cart
        return cart.find(product => product._id === id);
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

    function handleCategoryChange(category) { // Handles filtering based on chosen category
        if (!activeCategory.includes(category)) {
            setActiveCategory([...activeCategory, category]);
        } else {
            setActiveCategory(activeCategory.filter(c => c !== category));
        }
    }

    const contextValue = {
        addToCart,
        removeFromCart,
        handleCartMenuToggle,
        changeAmountInCart,
        handleCategoryChange,
        activeCategory,
        totalAmount,
        cart,
        cartMenuToggle
    }

    return (
        <Provider value={contextValue}>
            { children }
        </Provider>
    )
}