import './item-list.css';
import Item from './Item/Item';
import SidebarFilter from '../SidebarFilter/SidebarFilter';
import { useState, useEffect } from 'react';

export default function ItemList({ productList, activeCategory, handleActiveCategory }) {
    const [productCategories, setProductCategories] = useState([]);

    useEffect(() => {
        productList.map(p => {
            p.categories.forEach(cat => {
                if (!productCategories.includes(cat)) {
                    setProductCategories([...productCategories, cat]);
                }
            })
            
            return productCategories;
        })
    }, [productList, productCategories]);

    return (
        <main>
            <SidebarFilter productCategories={productCategories} activeCategory={ activeCategory } handleActiveCategory={ handleActiveCategory } />
            <section className="product-list-container">
                {productList
                    .filter(p => activeCategory.length === 0 ? p : activeCategory.some(r => p.categories.indexOf(r) >= 0))
                    .map(product => {
                        return (
                            <Item 
                                key={product._id} 
                                prodId={product._id} 
                                prodTitle={product.title} 
                                prodPrice={product.price} 
                                prodCategories={product.categories} 
                                prodDescription={product.description} 
                                prodImgUrl={product.image} 
                                fullProduct={product}
                            />
                        )
                    })
                }
            </section>
        </main>
    )
}