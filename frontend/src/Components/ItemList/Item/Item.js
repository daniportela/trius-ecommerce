import { useCartContext } from "../../../shopContext";
import { Link } from "react-router-dom";

export default function Item({ prodId, prodTitle, prodPrice, prodCategories, prodImgUrl, fullProduct }) {
    const { addToCart } = useCartContext();
    
    return (
        <article className="product-card">
            <span>{`$${prodPrice}`}</span>
            <div className="product-image-container">
                <img src={prodImgUrl} alt={`Imagen de producto ${prodTitle}`} />
            </div>
            <div className="product-info-container">
                <div className="product-title-price-container">
                    <h2>{prodTitle}</h2>
                </div>
                <div className="product-actions-container">
                    <Link to={`/item/${prodId}`}>More info.</Link>
                    <button onClick={() => { addToCart(fullProduct, 1) }}>Add to cart</button>
                </div>
                <div className="product-categories-container">
                    {prodCategories.map(cat => <div key={cat} className={`category-tag cat-${cat.replace(/[\u0300-\u036f']/g, "").replace(/\s/g, "-").trim()}`}>{cat.trim()}</div>)}
                </div>
            </div>
        </article>
    )
}