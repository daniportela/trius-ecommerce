import './item-list.css';
import Item from './Item/Item';
import SidebarFilter from '../SidebarFilter/SidebarFilter';
import { useState, useEffect } from 'react';

export default function ItemList({ listaProductos, activeCategory, handleActiveCategory }) {
    const [productCategories, setProductCategories] = useState([]);

    useEffect(() => {
        listaProductos.map(p => {
            if (!productCategories.includes(p.category)) {
                setProductCategories([...productCategories, p.category]);
            }
            return productCategories;
        })
    }, [listaProductos, productCategories]);

    return (
        <main>
            <SidebarFilter productCategories={productCategories} activeCategory={ activeCategory } handleActiveCategory={ handleActiveCategory } />
            <section className="product-list-container">
                {listaProductos
                    .filter(p => activeCategory.length === 0 ? p : activeCategory.includes(p.category))
                    .map(product => {
                        return (
                            <Item key={product._id} prodId={product._id} prodTitle={product.title} prodPrice={product.price} prodCategory={product.category} prodDescription={product.description} prodImgUrl={product.image} fullProduct={product} />
                        )
                    })
                }
            </section>
        </main>
    )
}