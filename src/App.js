import './App.css';
import { NavBar } from './components/navBar/navBar'
import { ItemListContainer } from './components/itemListContainer/itemListContainer'
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Error } from './components/error/error'

function App() {
    return (
        <Router>
            <div className="App">
                {/*Queda afuera del Switch para que esté siempre visible*/} 
                <NavBar />
                    <Switch>
                        <Route exact path='/'>
                            <ItemListContainer greeting={"Bienvenidos a la No tienda :D"} />
                        </Route>
            
                        <Route path='/category/:categoryId'>
                            <ItemListContainer greeting={"Estos son todos los productos disponibles al momento"} />
                        </Route>

                        <Route path='/item/:itemId'>
                            <ItemDetailContainer idItem={2}/>
                        </Route>

                        <Route path='*'>
                            <Error />
                        </Route>
                    </Switch>
                <footer>
                    <p>La No tienda S.A. TM 2022</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
