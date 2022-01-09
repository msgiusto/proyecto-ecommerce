 import cart from './iconCart_24.png'; // Como no me deja "ir a buscar" cosas más allá de src tengo que traer la imagen a la carpeta del cart

// const cart = './public/iconCart_24.png'

export const CartWidget = () => 
{
    return (
        <img src={cart} alt="cartShopping" />
    )
}