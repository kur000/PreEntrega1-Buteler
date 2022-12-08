import './App.css';
import Navbar from '../../../PreEntrega1-Buteler/preentrega-buteler/src/components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting='Bienvenido!'/>
    </div>
  );
}

export default App;
