import './item.css'

export const Item = ({ title, price, pictureUrl, description }) => 
{
    return (
        <div className="itemBody">
            <div>
                <h2>Item</h2>
                <h3>{title}</h3>
                <h3>{description}</h3>
                <h4>${price}</h4>
                <img alt={title} src={pictureUrl} className='itemImage'></img>
            </div>
            {/* Agrego el botón aunque todavía no hace nada*/}
            <button>Ver detalle del producto</button>
        </div>
    );
  };