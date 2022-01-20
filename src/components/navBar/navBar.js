import './navBar.css'
import { CartWidget } from '../cartWidget/cartWidget.js'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => 
{
    return (
        <nav className="navbar">
            <h1>
                <Link to='/'>Nombre de una tienda aquí ;)</Link>
            </h1>
            <ul className="navbar_ul">
                <li className='navbar_li'><NavLink exact to='/' activeClassName="currentCategory">Home</NavLink></li>
                <li className='navbar_li'><NavLink to='/category/:idCategory' activeClassName="currentCategory">La única categoría</NavLink></li>
                <li><a href=''>Más para clickear</a></li>
            </ul>

            <CartWidget/>
        </nav>
    )
}