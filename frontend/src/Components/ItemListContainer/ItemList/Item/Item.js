export default function Item({ prodTitle, prodPrice, prodCategory, prodDescription, prodImgUrl  }) {
    return (
        <article>
            <h2>{prodTitle}</h2>
            <code>{prodPrice}</code>
            <div className="categorias-container">
                {prodCategory}
            </div>
            <p>{prodDescription}</p>
        </article>
    )
}