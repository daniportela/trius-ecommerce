import './item-list-container.css';
import ItemList from './ItemList/ItemList';
import listadoProductos from './listado-productos.json';

export default function ItemListContainer() {
    return (
        <main className="item-list-container">
            <ItemList listadoProductos={listadoProductos} />
        </main>
    )
}