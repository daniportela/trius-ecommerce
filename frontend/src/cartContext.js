import { createContext, useContext, useState } from 'react';

const context = createContext();

export const { Provider } = context;

export function useCartContext() {
    return useContext(context);
}

export default function CustomProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [cartMenuToggle, setCartMenuToggle] = useState(false);

    function handleCartMenuToggle() {
        setCartMenuToggle((prevValue) => !prevValue);
    }

    function addToCart(product, count) {
        if (isInCart(product._id)) {
            let productInCart = cart.find(p => p._id === product._id);
            productInCart.count++;
            setCart([...cart]);
        } else {
            product.count = count;
            setCart([...cart, product]);
        }
    }

    function removeFromCart(product) {
        return setCart(cart.filter(p => p._id !== product._id));
    }

    function isInCart(id) {
        return cart.find(product => product._id === id);
    }

    // Se guardan todas las funciones / variables dentro de un objeto para luego exportarlo
    const contextValue = {
        addToCart,
        removeFromCart,
        handleCartMenuToggle,
        cart,
        cartMenuToggle
    }

    // Finalmente, el custom component devuelve el Provider con el value del objeto creado (que contiene todas nuestras funciones). Children es pasado como props, para envolver a toda nuestra app con este component (mirar App.js) 
    return (
        <Provider value={contextValue}>
            { children }
        </Provider>
    )
}