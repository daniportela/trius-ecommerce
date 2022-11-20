import { useCustomContext } from "../../../../cartContext";

export default function Item({ prodTitle, prodPrice, prodCategory, prodDescription, prodImgUrl, fullProduct }) {
    const { addToCart, removeFromCart } = useCustomContext();
    
    return (
        <article>
            <div className="product-image-container">
                <img src={prodImgUrl} alt={`Imagen de producto ${prodTitle}`} />
            </div>
            <div className="product-info-container">
                <div className="product-title-price-container">
                    <h2>{prodTitle}</h2>
                    <span>{prodPrice}</span>
                </div>
                <div className="product-actions-container">
                    <button onClick={() => { removeFromCart(fullProduct) }}>Ver más</button>
                    <button onClick={() => { addToCart(fullProduct) }}>Carrito</button>
                </div>
                <div className="product-categories-container">
                    {prodCategory}
                </div>
            </div>
        </article>
    )
}