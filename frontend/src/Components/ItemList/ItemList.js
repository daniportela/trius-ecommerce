import './item-list.css';
import Item from './Item/Item';
import SidebarFilter from '../SidebarFilter/SidebarFilter';

export default function ItemList({ listaProductos }) {
    return (
        <main>
            <SidebarFilter />
            <section className="product-list-container">
                {listaProductos.map(product => {
                    return (
                        <Item key={product._id} prodId={product._id} prodTitle={product.title} prodPrice={product.price} prodCategory={product.category} prodDescription={product.description} prodImgUrl={product.image} fullProduct={product} />
                    )
                })}
            </section>
        </main>
    )
}