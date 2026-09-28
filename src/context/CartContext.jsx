import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        setCart((prev) => {
            const existe = prev.find((p) => p.id === item.id);
            if (existe) {
                return prev.map((p) =>
                    p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p
                );
            }
            return [...prev, { ...item, quantity }];
        });
    };

    const removeItem = (id) => setCart(cart.filter((p) => p.id !== id));

    const clear = () => setCart([]);

    const isInCart = (id) => cart.some((p) => p.id === id);

    const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);

    const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, totalItems, total }}>
            {children}
        </CartContext.Provider>
    );
};