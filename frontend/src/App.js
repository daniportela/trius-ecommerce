import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemList from './Components/ItemList/ItemList';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import FormOverlay from './Components/FormOverlay/FormOverlay';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import CustomProvider from './shopContext';

function App() {
  const [listadoProductos, setListadoProductos] = useState([]);
  const [formOverlayToggle, setFormOverlayToggle] = useState(false);
  const [activeCategory, setActiveCategory] = useState([]); 

  function handleFormOverlayToggle() { // Toggles form overlay for writing new products to the database
    setFormOverlayToggle(prevValue => !prevValue);
  }

  function handleCategoryChange(category) { // Sets active category(ies) for filtering products
      if (!activeCategory.includes(category)) {
          setActiveCategory([...activeCategory, category]);
      } else {
          setActiveCategory(activeCategory.filter(c => c !== category));
      }
  }

  useEffect(() => { // Fetch data from db once, and set the product catalog
      (async () => {
          const catalogoProductos = await fetch('http://localhost:5000/products').then(data => data.json())
          setListadoProductos(catalogoProductos);
      })();
  }, [])

  return (
      <CustomProvider>
          <BrowserRouter>
            <Toaster />
            <FormOverlay isToggled={ formOverlayToggle } handleIsToggled={ handleFormOverlayToggle } />
            <NavBar isToggled={ formOverlayToggle } handleIsToggled={ handleFormOverlayToggle } />
            <Routes>
              <Route exact path="/" element={ <ItemList listaProductos={ listadoProductos } activeCategory={ activeCategory } handleActiveCategory={ handleCategoryChange } /> } />
              <Route exact path="/item/:id" element={ <ItemDetail />} />
            </Routes>
          </BrowserRouter>
      </CustomProvider>
  );
}

export default App;