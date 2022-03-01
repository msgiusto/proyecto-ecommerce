import './itemDetail.css'
import { ItemCount } from '../itemCount/itemCount';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react'
import { cartContext } from '../context/cartContext';

export const ItemDetail = ({ title, price, pictureUrl, description, id, stock }) => 
{
    // Estado interno del ItemDetail para guardar el valor que viene de ItemCount
    const [qToAdd, setQToAdd] = useState(0);
    // Estado para hacer desaparecer el ItemCount
    const [showItemCount, setShowItemCount] = useState(true);

    // Traigo las propiedades que quiero usar del contexto
    const { cartProducts, addItem } = useContext(cartContext);

    const onAdd = (quantityToAdd) => 
    {
        // Cuando se hace click en agregar al carrito en ItemCount se entra acá 
        // se guarda la cantidad y se agrega a cartContex
        setQToAdd(quantityToAdd);

        addItem({ id, title, description, price, quantityToAdd, stock });

        setShowItemCount(false);
    };

    return (
        <div className="itemDetailBody">
            <div>
                <img alt={title} src={pictureUrl} className='itemDetailImage'></img>
                <h2>{title}</h2>
                <h3>{description}</h3>
                <h4>${price}</h4>
            </div>

            {showItemCount && <ItemCount stock={stock} initial={1} onAddIC={onAdd} />}
            <Link to='/cart'><button>Terminar mi compra</button></Link>
        </div>
    );
  };