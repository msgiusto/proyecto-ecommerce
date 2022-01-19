import './itemDetail.css'
import { ItemCount } from '../itemCount/itemCount';

export const ItemDetail = ({ title, price, pictureUrl, description }) => 
{
    return (
        <div className="itemDetailBody">
            <div>
                <img alt={title} src={pictureUrl} className='itemDetailImage'></img>
                <h2>{title}</h2>
                <h3>{description}</h3>
                <h4>${price}</h4>
            </div>
            {/* Agrego el botón aunque todavía no hace nada*/}
            <ItemCount stock={5} initial={1} />
        </div>
    );
  };