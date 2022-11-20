import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import CustomProvider from './cartContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ItemListContainer />
  }
])

function App() {
  return (
    <>
      <NavBar/>
      <CustomProvider>
        <RouterProvider router={router} />
      </CustomProvider>
    </>
  );
}

export default App;