import './cart.css'
import { useContext, useState } from 'react';
import { cartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
// imports para el uso de Firebase
import { collection, addDoc, updateDoc, getDocs, query, where, doc, Timestamp} from 'firebase/firestore'
import { db } from '../../firebase/firebase'


export const Cart = () => 
{
    // Traigo las propiedades que quiero usar del contexto
    const { cartProducts, precioTotal, removeItem, clear } = useContext(cartContext);
    // Estado para guardar los datos de la orden
    const [ newOrder, setNewOrder ] = useState({});
    // Estado para guardar los datos del comprador
    const [ buyer, setBuyer ] = useState({name:"", phone:"", email:""});
    // Estado para mostrar el id final
    const [ compraFinalizada, setCompraFinalizada ] = useState(false);

    // Función auxiliar para insertar la orden la colección "orders" de Firebase
    // CREATE
    const createOrder = async (order) => 
    {
        const createdOrder = await addDoc(collection(db, 'orders'), order);
        return createdOrder.id;
    };

    // Función auxiliar para actualizar los stock en Firebase
    // UPDATE
    const updateProducts = async (productId, newStock) => 
    {
        await updateDoc(doc(db, 'items', productId), {stock: newStock});
    };

    // Función que crea la nueva orden de compra en Firebase y actualiza los stock
    const finalizarCompra = () =>
    {
        var itemList = []
        cartProducts.forEach(product => 
        {
            itemList = [...itemList, { id: product.id, title: product.title, price: product.price }];
        });

        const date = Timestamp.fromDate(new Date()).toDate();

        setNewOrder({buyer: buyer, items: itemList, date, precioTotal});
        
        const idOrder = createOrder(newOrder);

        cartProducts.map( (product) =>
        {
            updateProducts(product.id, product.stock-product.quantityToAdd)
        })

        setCompraFinalizada(idOrder);
        clear();
    }

    return (
        <div >
            <h3>Carrito: </h3>
            {
                cartProducts.length == 0 ? 
                (
                    !compraFinalizada &&  <div>
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
                cartProducts.length != 0 && !compraFinalizada &&   
                <div>
                    <div>
                        <p>Precio Total: {precioTotal} </p>
                        <button onClick={() => clear()}> Vaciar carrito </button>
                    </div>
                    <div className='cartPIBody'>
                        <h4>Por favor ingrese sus datos para completar la compra</h4>
                        <label className='cartLabel' htmlFor="">
                            Nombre:
                            <input
                                type="text"
                                value={buyer.name}
                                onChange={(e) => setBuyer({...buyer, name: e.target.value,})}
                            />
                        </label>
                        <label className='cartLabel' htmlFor="">
                            Teléfono:
                            <input
                                type="number"
                                value={buyer.phone}
                                onChange={(e) => setBuyer({...buyer, phone: e.target.value,})}
                            />
                        </label>
                        <label className='cartLabel' htmlFor="">
                            Email:
                            <input
                                type="email"
                                value={buyer.email}
                                onChange={(e) => setBuyer({...buyer, email: e.target.value,})}
                            />
                        </label>
                        <button className='cartBuyBottom' onClick={finalizarCompra} >¡Finalizar Compra!</button>
                    </div>  
                </div>
            }

            {
                compraFinalizada &&
                <div>
                    <h3>¡Compra exitosa!</h3>
                    <p> El id de su operación es </p>
                    {console.log("id compra finalizada", compraFinalizada)}
                    <Link to='/'><button>Comprar más</button></Link>
                </div>
            }

        </div>
    );
};
