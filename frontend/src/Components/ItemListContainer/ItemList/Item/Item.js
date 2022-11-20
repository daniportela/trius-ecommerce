export default function Item({ prodTitle, prodPrice, prodCategory, prodDescription, prodImgUrl }) {
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
            <div className="categorias-container">
                {prodCategory}
            </div>
            </div>
        </article>
    )
}