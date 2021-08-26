import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux"
import store from "./store"
import Jugadores from './components/jugadores'
import EquipoSeleccionado from './components/EquipoSeleccionado'

const App = () => (
  <Provider store = {store}>
  <main> 
    
    <h1>fulbo manager</h1>
    <Jugadores />
    <EquipoSeleccionado />
  
  </main>
  </Provider>
)
export default App;
