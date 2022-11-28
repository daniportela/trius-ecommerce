import { useShopContext } from "../../../shopContext";
import { Link } from "react-router-dom";

export default function Item({ prodId, prodTitle, prodPrice, prodCategory, prodImgUrl, fullProduct }) {
    const { addToCart } = useShopContext();
    
    return (
        <article className="product-card">
            <div className="product-image-container">
                <img src={prodImgUrl} alt={`Imagen de producto ${prodTitle}`} />
            </div>
            <div className="product-info-container">
                <div className="product-title-price-container">
                    <h2>{prodTitle}</h2>
                    <span>{prodPrice}</span>
                </div>
                <div className="product-actions-container">
                    <Link to={`/item/${prodId}`}>Ver más</Link>
                    <button onClick={() => { addToCart(fullProduct, 1) }}>Carrito</button>
                </div>
                <div className="product-categories-container">
                    {prodCategory}
                </div>
            </div>
        </article>
    )
}