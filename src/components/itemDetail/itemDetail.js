import './itemDetail.css'
import { ItemCount } from '../itemCount/itemCount';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

export const ItemDetail = ({ title, price, pictureUrl, description }) => 
{
    // Estado interno del ItemDetail para guardar el valor que viene de ItemCount
    const [qToAdd, setQToAdd] = useState(0);
    // Estado para hacer desaparecer el ItemCount
    const [showItemCount, setShowItemCount] = useState(true);

    const onAdd = (quantityToAdd) => 
    {
        setQToAdd(quantityToAdd);
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

            {showItemCount && <ItemCount stock={5} initial={1} onAdd={onAdd} />}
            <Link to='/cart'><button>Terminar mi compra</button></Link>
        </div>
    );
  };