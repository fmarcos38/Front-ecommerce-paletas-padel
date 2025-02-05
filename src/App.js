import React from 'react';
import { AppProvider } from './context';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RegistrarsePage from './pages/Registrarse';
import Footbar from './components/Footbar';
import CreaProducto from './pages/CreaProducto/CreaProducto';
import EditaProd from './pages/EditaProd';
import ListaProdsAdminPage from './pages/ListaProdsAdminPage';
import DetalleProdPage from './pages/DetalleProdPage';
import PoliticasDeCambioPage from './pages/PoliticasCambio';
import LoginPage from './pages/Login';
import FavoritosPage from './pages/Favoritos';
import MiCarritoPage from './pages/MiCarritoPage';
import FormaEnvio from './pages/FormaEnvio';
import ComoPagarPage from './pages/ComoPagar';
import InformacionContactoPage from './pages/InformacionContactoPage';
import CheOutML from './components/CheckOutML';
import RecuperarDatosUsuario from './components/RecuperarDatosUsuario';
import ComoComprar from './pages/ComoComprar';
import ComoMeLlega from './pages/ComoMeLlega';
import MuestraProductosPage from './pages/MuestraProductosPage';
import ListaPaletasPage from './pages/ListaPaletasPage';
import ListaAccesoriosPage from './pages/ListaAccesoriosPage';
import ListaBolzosPage from './pages/ListaBolzosPage';
import ListaPelotasPage from './pages/ListaPelotasPage';
import ListaZapatillasPage from './pages/ListaZapatillasPage';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      
      <main>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/registrarse' element={<RegistrarsePage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/recuperarDatosUsuario' element={<RecuperarDatosUsuario />} />
            <Route path='/muestraPaletas' element={<ListaPaletasPage/>} />
            <Route path='/muestraPelotas' element={<ListaPelotasPage/>} />
            <Route path='/muestraBolzos' element={<ListaBolzosPage/>} />
            <Route path='/muestraAccesorios' element={<ListaAccesoriosPage/>} />
            <Route path='/muestraZapatillas' element={<ListaZapatillasPage/>} />
            <Route path='/busca/productos/:busqueda' element={<MuestraProductosPage/>} />
            <Route path='/detalleProd/:id' element={<DetalleProdPage />} />
            <Route path='/policasDeCambio' element={<PoliticasDeCambioPage />} />
            <Route path='/favoritos' element={<FavoritosPage/>} />
            <Route path='/miCarrito' element={<MiCarritoPage />} />
            <Route path='/formaEnvio' element={<FormaEnvio/>} />
            <Route path='/comoComprar' element={<ComoComprar/>} /> 
            <Route path='/comoPagar' element={<ComoPagarPage />} />
            <Route path='/comoMeLlega' element={<ComoMeLlega/>} />
            <Route path='/infoContacto' element={<InformacionContactoPage />} />
            <Route path='/checkout' element={<CheOutML />}/>
            <Route path='/admin/creaProd' element={<CreaProducto />} />
            <Route path='/admin/listaProdsAdmin' element={<ListaProdsAdminPage />} />
            <Route path='/admin/editaProd/:id' element={<EditaProd />} />            
            <Route path='*' element={<Home/>} />
        </Routes>
      </main>
      
      <footer>
        <Footbar />
      </footer>
    </div>
    </AppProvider>
  );
}

export default App;
