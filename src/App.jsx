
import './App.css';
import RoutesNavbar from './routes/RoutesNavbar';
import ItemListContainer from './components/ItemListContainer/itemsListContainer';

function App() {
  return (
    <div className="App">
      <RoutesNavbar/>
      <ItemListContainer greeting={"En este sitio encontraras el mejor café de México"}/>
    </div>
  );
}

export default App;
