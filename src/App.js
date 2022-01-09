import './App.css';
import { NavBar } from './components/navBar/navBar'
import { ItemListContainer } from './components/itemListContainer/itemListContainer'

function App() {
    return (
    <div className="App">
        <NavBar />
        {/* <header className="App-header">

        </header> */}
        <ItemListContainer greeting={"La no lista de items"}/>
    </div>
    );
}

export default App;
