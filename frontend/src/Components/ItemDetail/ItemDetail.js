import './item-detail.css';
import { useParams } from "react-router-dom";
import { useCartContext } from "../../shopContext";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCartPlus } from '@fortawesome/free-solid-svg-icons';

export default function ItemDetail() {
    const [productDetail, setProductDetail] = useState({});
    const [count, setCount] = useState(1);
    const { addToCart } = useCartContext();
    const { id } = useParams();

    useEffect(() => { // Fetch data from db once, and set the product unit (detail)
        (async () => {
            const productCatalog = await fetch('http://localhost:5000/products').then(data => data.json())
            const unit = productCatalog.find(p => p._id === id);
            setProductDetail(unit);
        })();
    }, [id])
     
    return (
        <section className="product-detail-container">
            <article className="product-detail">
                <img className="product-detail-img" src={productDetail.image} alt={`${productDetail.title}`}/>
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
                        <button className="add-to-cart" onClick={() => { addToCart(productDetail, count) }}>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>
                    </div>
                </div>
            </article>
        </section>
    );
}