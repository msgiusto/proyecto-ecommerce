import { Link } from 'react-router-dom';

export const Error = () => 
{
    return (
        <div>
            <h2>¡Error! Página no encontrada :(</h2>
            <Link to='/'><button>¡Ir al Inicio!</button></Link>
        </div>
    );
  };