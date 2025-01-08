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
import './App.css';
import PoliticasDeCambioPage from './pages/PoliticasCambio';
import LoginPage from './pages/Login';

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
            <Route path='/detalleProd/:id' element={<DetalleProdPage />} />
            <Route path='/policasDeCambio' element={<PoliticasDeCambioPage />} />
            <Route path='/admin/creaProd' element={<CreaProducto />} />
            <Route path='/admin/listaProdsAdmin' element={<ListaProdsAdminPage />} />
            <Route path='/admin/editaProd/:id' element={<EditaProd />} />
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
