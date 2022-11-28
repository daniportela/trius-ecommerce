import './item-detail.css';
import { useParams } from "react-router-dom";
import { useShopContext } from "../../shopContext";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function ItemDetail() {
    const [productDetail, setProductDetail] = useState({});
    const [count, setCount] = useState(1);
    const { addToCart } = useShopContext();
    const { id } = useParams();

    function productTest(product, count) {
        console.log(product, count);
    }

    useEffect(() => { // Fetch data from db once, and set the product unit (detail)
        (async () => {
            const catalogoProductos = await fetch('http://localhost:5000/productos').then(data => data.json())
            const unit = catalogoProductos.find(p => p._id === id);
            setProductDetail(unit);
        })();
    }, [id])
     
    return (
        <section className="product-detail-container">
            <article className="product-detail">
                <img className="product-detail-img" src={productDetail.image} alt={`Imagen de producto ${productDetail.title}`}/>
                <div className="product-detail-info">
                    <h1>{productDetail.title}</h1>
                    <p className="product-detail-price">{productDetail.price}</p>
                    <p className="product-detail-description">{productDetail.description}</p>
                    <div className="add-to-cart-container">
                        <div className="amount-to-add">
                            <button disabled={count === 1 ? true : false} onClick={() => { setCount(prev => prev - 1) }}>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <div className="counter">{count}</div>
                            <button onClick={() => { setCount(prev => prev + 1) }}>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                        <button className="add-to-cart" onClick={() => { addToCart(productDetail, count) }}>Add to cart <FontAwesomeIcon icon={faCartShopping} /></button>
                    </div>
                </div>
            </article>
        </section>
    );
}