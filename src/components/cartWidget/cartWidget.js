import cart from './iconCart_24.png'; // Como no me deja "ir a buscar" cosas más allá de src tengo que traer la imagen a la carpeta del cart
import { cartContext } from '../context/cartContext';
import { useContext } from 'react';

export const CartWidget = () => 
{
    // Traigo las propiedades que quiero usar del contexto
    const { cantidadTotal } = useContext(cartContext);

    return (
        <div>
            <img src={cart} alt="cartShopping" />
            { cantidadTotal !=0 && <span>{cantidadTotal}</span> }
        </div>
    )
}