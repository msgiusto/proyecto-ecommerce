import './cart.css'
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';

export const Cart = () => 
{
    // Traigo las propiedades que quiero usar del contexto
    const { cartProducts, precioTotal, removeItem, clear } = useContext(cartContext);

    return (
        <div >
            <h3>Carrito: </h3>
            {
                cartProducts.length == 0 ? 
                (
                    <div>
                        <p>Hola soy un carrito vacío :(</p>
                        <Link to='/'><button>Empezar a comprar</button></Link>
                    </div>
                )
                :
                (
                    cartProducts.map((product) => 
                    {
                        return(
                            <div className='cartBody'>
                                <p><b>Producto:</b> {product.title}</p>
                                <p><b>Precio:</b> ${product.price}</p>
                                <p><b>Cantidad:</b> {product.quantityToAdd}</p>
                                <button className='cartDeleteBottom' onClick={() => removeItem(product.id)}>Eliminar</button>
                            </div>
                        )
                    })
                )
            }

            {
                cartProducts.length != 0 &&    
                <div>
                    <p>Precio Total: {precioTotal} </p>  
                    <button onClick={() => clear()}> Vaciar carrito </button>
                </div>
            }

        </div>
    );
};
