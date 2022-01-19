import './itemDetailContainer.css'
import { useState, useEffect } from 'react'
import { ItemDetail } from '../itemDetail/itemDetail'

export const ItemDetailContainer = ({ idItem }) => 
{
    // Creo un estado donde voy a guardar los productos que traiga el fetch
    const [item, setItem] = useState({})

    const getItem = async () => 
    {
        // Uso la API que nos pasó el profe para el fetch
        const getItemFetch = await fetch("https://franncode.vercel.app/api/products");
        const getItemJson = await getItemFetch.json();
        // Me quedo con uno sólo de los ítems como pide el enunciado
        setItem(getItemJson[idItem]);
    };

    useEffect( () =>
        {
            getItem();
        }
    )

    return (
        <div>
            <ItemDetail 
                title={item.title}
                price={item.price}
                pictureUrl={item.pictureUrl}
                description={item.description}
            />
        </div>
    )
}