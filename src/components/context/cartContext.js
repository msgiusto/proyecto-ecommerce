import { createContext, useState } from "react"

const initialCartContext = []

export const cartContext = createContext(initialCartContext)

export const CartProvider = ({ children }) =>
{
    const [cartProducts, setCartProducts] = useState([]);
    const [cantidadTotal, setCantidadTotal] = useState (0);
    const [precioTotal, setPrecioTotal] = useState (0);

    const addItem = (item) =>
    {
        // Controlo que el producto ya no esté en el carrito
        var isIn = isInCart(item.id);
        
        // Por ahora aviso por console que algo ya está en el carrito
        if(isIn)
        {
            let copiaCart = [...cartProducts];
            let itemToModify = copiaCart.find(product => product.id === item.id);
            let idx = copiaCart.indexOf(itemToModify);
            copiaCart[idx].quantityToAdd = copiaCart[idx].quantityToAdd + item.quantityToAdd;
            setCartProducts(copiaCart);
        }
        else
        {
            setCartProducts([...cartProducts, item]);
        }
        
        setPrecioTotal(precioTotal + (item.price * item.quantityToAdd));
        setCantidadTotal(cantidadTotal + item.quantityToAdd);
    }

    const removeItem = (itemId) =>
    {
        // Verifico que el ítem esté en el carrito. No haría falta ya que por construcción nunca voy a usar la }
        // función con un elemento que no esté en el carrito.
        if(isInCart(itemId))
        {
            const itemToRemove = cartProducts.find(item => item.id == itemId);
            const copiaCart = cartProducts.filter(item => item.id !== itemId);
            setCartProducts(copiaCart);
            setPrecioTotal(precioTotal - (itemToRemove.price * itemToRemove.quantityToAdd));
            setCantidadTotal(cantidadTotal - itemToRemove.quantityToAdd);
        }
        else
        {
            console.log("El siguiente item no estaba en el carrito", itemId)
        }
        
    }

    const clear = () =>
    {
        setCartProducts([]);
        setCantidadTotal(0);
        setPrecioTotal(0);
    }
    
    const isInCart = (id) =>
    {
        var isIn = false

        cartProducts.forEach( product => 
        {
            isIn = (isIn || product.id == id)    
        });

        return isIn;
    }

    return (
        <cartContext.Provider value={{ cartProducts, cantidadTotal, precioTotal, addItem, removeItem, clear, isInCart }}>
            { children }
        </cartContext.Provider>
    )
} 
