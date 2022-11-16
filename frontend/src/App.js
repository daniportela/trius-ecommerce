import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

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
      <RouterProvider router={router} />
    </>
  );
}

export default App;