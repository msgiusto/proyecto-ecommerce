import './itemCount.css';
import { useState } from "react";


export const ItemCount = ({ stock, initial, onAddIC }) => 
{
    // Creo el state para el contador
    const [count, setCount] = useState(initial);
    // Creo el state para el stock ya que una vez que agregue al carrito debería bajar (por ahora no se usa)
    const [realStock, setRealStock] = useState(stock);

    // Creo las funciones que van a ser llamadas desde + y -
    const onIncrease = () =>
    {
        const i = count + 1;
        if (i <= realStock)
        {
            setCount(i);
        }
    }

    const onDecrease = () =>
    {
        const i = count - 1;
        if (i >= initial)
        {
            setCount(i);
        }
    }

    return (
        <div>
            <div>
                <button onClick={onDecrease}> - </button>
                <span> {count} </span>
                <button onClick={onIncrease}> + </button>
            </div>
            <button onClick={()=>onAddIC(count)}> Agregar al Carrito</button>
        </div>
    )
}