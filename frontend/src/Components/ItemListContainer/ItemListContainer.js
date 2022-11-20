import './item-list-container.css';
import ItemList from './ItemList/ItemList';
import SidebarFilter from './SidebarFilter/SidebarFilter';
import { useEffect, useState } from 'react';

export default function ItemListContainer() {
    const [listadoProductos, setListadoProductos] = useState([]);

    useEffect(() => {
        (async () => {
            const catalogoProductos = await fetch('http://localhost:5000/productos').then(data => data.json())
            setListadoProductos(catalogoProductos);
        })();
    }, [])

    return (
        <main className="item-list-container">
            <SidebarFilter />
            <ItemList listaProductos={listadoProductos} />
        </main>
    )
}