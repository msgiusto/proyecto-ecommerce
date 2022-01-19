import './App.css';
import { NavBar } from './components/navBar/navBar'
import { ItemListContainer } from './components/itemListContainer/itemListContainer'
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer'

function App() {
    return (
    <div className="App">
        <NavBar />
        {/* <header className="App-header">

        </header> */}
        {
            /* Comento esta línea para que no meta ruido y poder ver bien los cambios de la entrega 6
            <ItemListContainer greeting={"La no lista de items"}/>
            */
        }
        <ItemDetailContainer idItem={2}/>

    </div>
    );
}

export default App;
