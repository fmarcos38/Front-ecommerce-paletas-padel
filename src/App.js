import React from 'react';
import { AppProvider } from './context';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footbar from './components/Footbar';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      
      <main>
        <Home />
      </main>
      
      <footer>
        <Footbar />
      </footer>
    </div>
    </AppProvider>
  );
}

export default App;
