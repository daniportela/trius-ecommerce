import Item from './Item/Item';

export default function ItemList({ listadoProductos }) {
    return (
        <section>
            {listadoProductos.map(({ _id, nombre, precio, categorias, descripcion }) => {
                return (
                    <Item key={_id} nombre={nombre} precio={precio} categorias={categorias} descripcion={descripcion} />
                )
            })}
        </section>
    )
}