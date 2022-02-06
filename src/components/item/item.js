import './item.css'
import { Link } from 'react-router-dom';

export const Item = ({ idItem, title, price, pictureUrl, description }) => 
{
    return (
        <div className="itemBody">
            <div>
                <h2>{title}</h2>
                <h3>{description}</h3>
                <h4>${price}</h4>
                <img alt={title} src={pictureUrl} className='itemImage'></img>
            </div>
            <button><Link to={`/item/${idItem}`}> Ver detalle del producto </Link></button>
        </div>
    );
  };