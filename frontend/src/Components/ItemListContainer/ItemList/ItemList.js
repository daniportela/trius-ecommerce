import Item from './Item/Item';

export default function ItemList({ listaProductos }) {
    return (
        <section>
            {listaProductos.map(product => {
                return (
                    <Item key={product._id} prodTitle={product.title} prodPrice={product.price} prodCategory={product.category} prodDescription={product.description} prodImgUrl={product.image} fullProduct={product} />
                )
            })}
        </section>
    )
}