import './App.css';
import Ficha from './components/Ficha';
import LetraA from './Imagenes/carta-a.png';
import Avion from './Imagenes/avion.png'
import LetraB from './Imagenes/letra-b.png'
import Ballena from './Imagenes/ballena.png'


function App() {

  return (
    <div className='container'>
      <Ficha icono={LetraA} icono2={Avion} nombreIcono="Avion" name="Letra A"/>
      <Ficha icono={LetraB} icono2={Ballena} nombreIcono="Ballena" name="Letra B"/>
    </div>
  );
}

export default App;
