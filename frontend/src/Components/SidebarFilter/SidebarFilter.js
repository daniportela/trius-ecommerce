export default function SidebarFilter({ productCategories }) {
    return (
        <aside>
            <h3>Filtrar por:</h3>
            <div>
                <ul>
                    {productCategories.map(cat => {
                        return <li>{cat}</li>
                    })}
                </ul>
            </div>
        </aside>
    )
}