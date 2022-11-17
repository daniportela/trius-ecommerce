import './item-list-container.css';
import ItemList from './ItemList/ItemList';
import { useEffect, useState } from 'react';

export default function ItemListContainer() {
    const [listadoProductos, setListadoProductos] = useState([]);

    useEffect(() => {
        async function getProducts() {
            setListadoProductos(await fetch('http://localhost:5000/productos').then(data => data.json()));
        }

        getProducts();
    }, [])

    return (
        <main className="item-list-container">
            <div>Hey</div>
            <ItemList listaProductos={listadoProductos} />
        </main>
    )
}