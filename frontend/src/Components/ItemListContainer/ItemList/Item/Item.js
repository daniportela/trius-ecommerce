export default function Item({ nombre, precio, categorias, descripcion }) {
    return (
        <article>
            <h2>{nombre}</h2>
            <code>{precio}</code>
            <div className="categorias-container">
                {categorias.map(cat => <button key={cat}>{cat}</button>)}
            </div>
            <p>{descripcion}</p>
        </article>
    )
}