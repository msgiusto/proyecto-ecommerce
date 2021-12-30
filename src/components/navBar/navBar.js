import './navBar.css'

export const NavBar = () => 
{
    return (
        <nav className="navbar">
            <p>
                Nombre de una tienda aquí
            </p>
            <ul className="navbar_ul">
                <li className='navbar_li'><a href=''>Una categoría clickeable</a></li>
                <li className='navbar_li'><a href=''>Las no ofertas</a></li>
                <li><a href=''>Más para clickear</a></li>
            </ul>
        </nav>
    )
}