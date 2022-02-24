import './itemDetailContainer.css'
import { useState, useEffect } from 'react'
import { ItemDetail } from '../itemDetail/itemDetail'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
// imports para el uso de Firebase
import { collection, getDocs, query, where, doc } from 'firebase/firestore'
import { db } from '../../firebase/firebase'

export const ItemDetailContainer = () =>
{
    // Creo una variable donde guardo el param que viene con el id de producto a visualizar
    const { itemId } = useParams()
    // Creo un estado donde voy a guardar los productos que traiga el fetch
    const [item, setItem] = useState({})

    const getItem = async () =>
    {
        // // Uso la API que nos pasó el profe para el fetch
        // const getItemFetch = await fetch("https://franncode.vercel.app/api/products");
        // const getItemJson = await getItemFetch.json();
        // // Me quedo el item solicitado
        // setItem(getItemJson[itemId-1]);

        // Uso la base de Firebase
        // const itemWithID = doc(collection(db, 'items', itemId))
        // console.log("este es el itemID", itemId)
        // console.log("este es lo que tiene doc", itemWithID)
        // setItem({ id: itemWithID.id, ...itemWithID.data() })
        const { docs } = await getDocs(query(collection(db, 'items')))

        docs.forEach((element) => {
            if(element.id == itemId)
            {
                setItem({
                    id: element.id,
                    ...element.data(),
                })
            }
        });
    };

    useEffect( () =>
        {
            getItem();
        }
    );

    return (
        <div>
            {
                /*Pongo el cartel de cargando el producto mientras esperamos el fetch
                Uso para verificar que las key del objeto sean mayores que cero*/
                Object.keys(item).length > 0 ?
                (
                    <ItemDetail
                        title={item.title}
                        price={item.price}
                        pictureUrl={item.pictureUrl}
                        description={item.description}
                        //id={item.id}
                        id={itemId}
                    />
                )
                :
                (
                    <p>Cargando el producto...</p>
                )
            }
        </div>
    )
}