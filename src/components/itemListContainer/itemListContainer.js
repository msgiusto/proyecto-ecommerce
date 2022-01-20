import './itemListContainer.css'
import { ItemCount } from '../itemCount/itemCount'
import { useState, useEffect } from 'react'
import { ItemList } from '../itemList/itemList'

export const ItemListContainer = ({ greeting }) => 
{
    // Creo un estado donde voy a guardar los productos que traiga el fetch
    const [products, setProducts] = useState([])

    const getProductsAsync = async () => 
    {
        // Uso la API que nos pasó el profe para el fetch
        const getProductsFetch = await fetch("https://franncode.vercel.app/api/products");
        const getProducts = await getProductsFetch.json();
        setProducts(getProducts);
    };

    useEffect( () =>
        {
            getProductsAsync();
        }
    )

    return (
        <div>
            <p>
                {greeting}
            </p>
            {
                /*Pongo el cartel de cargando el catálogo mientras esperamos el fetch*/
                products.length > 0 ? 
                (
                    <ItemList products = {products} />
                )
                :
                (
                    <p>Cargando el catálogo...</p>
                )
            }
        </div>
    )
}