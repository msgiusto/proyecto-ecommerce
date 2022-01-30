import { clear } from "@testing-library/user-event/dist/clear"
import { createContext, useEffect } from "react"
import { useState } from "react/cjs/react.development"

const initialCartContext = []

export const cartContext = createContext(initialCartContext)

export const CartProvider = ({ children }) =>
{
    const [cartProducts, setCartProducts] = useState([]);

    const addItem = (item) =>
    {
        var isIn = false;

        // Controlo que el producto ya no esté en el carrito
        cartProducts.forEach( product => 
        {
            isIn = (isIn || product.id == item.id)    
        });
        
        // Por ahora aviso por console que algo ya está en el carrito
        (isIn ? console.log("el siguiente producto ya está en el carrito", item.desciption) : setCartProducts([...cartProducts, item]));

        // Muestro cómo quedó el carrito
        console.log("Así quedó el carrito", cartProducts);
    }

    const removeItem = (itemId) =>
    {
        // Verifico que el ítem esté en el carrito
        if(isInCart(itemId))
        {
            var iToRemove = 0;

            // Averiguo cuál es la posición del ítem
            for (let index = 0; index < cartProducts.length; index++) 
            {
                if(cartProducts[index].id == itemId)
                {
                    iToRemove = index;
                } 
            }

            // Hago el set de cartProduct con el elemento eliminado (asumo que está una única vez por construcción)
            setCartProducts(cartProducts.splice(iToRemove, 1));

            console.log("Fue eliminado correctamente el item con id", itemId)
        }
        else
        {
            console.log("El siguiente item no estaba en el carrito", itemId)
        }
    }

    const clear = () =>
    {
        setCartProducts([]);
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
        <cartContext.Provider value={{ cartProducts, addItem, removeItem, clear, isInCart }}>
            { children }
        </cartContext.Provider>
    )
} 

