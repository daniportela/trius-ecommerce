import Item from './Item/Item';

export default function ItemList({ listaProductos }) {
    return (
        <section>
            {listaProductos.map(({_id, title, price, description, category, imgUrl }) => {
                return (
                    <Item key={_id} prodTitle={title} prodPrice={price} prodCategory={category} prodDescription={description} prodImgUrl={imgUrl} />
                )
            })}
        </section>
    )
}