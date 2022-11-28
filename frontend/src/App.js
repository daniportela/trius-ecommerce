import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemList from './Components/ItemList/ItemList';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CustomProvider from './shopContext';

function App() {
  const [listadoProductos, setListadoProductos] = useState([]);

  useEffect(() => { // Fetch data from db once, and set the product catalog
      (async () => {
          const catalogoProductos = await fetch('http://localhost:5000/productos').then(data => data.json())
          setListadoProductos(catalogoProductos);
      })();
  }, [])

  return (
      <CustomProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route exact path="/" element={ <ItemList listaProductos={listadoProductos} /> } />
              <Route exact path="/item/:id" element={ <ItemDetail />} />
            </Routes>
          </BrowserRouter>
      </CustomProvider>
  );
}

export default App;