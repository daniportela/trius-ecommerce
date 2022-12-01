export default function SidebarFilter({ productCategories, handleActiveCategory }) {
    return (
        <aside>
            <h3>Filter by category:</h3>
            <div>
                <ul>
                    {productCategories.map(cat => {
                        return (
                            <li key={cat}>
                                <input type="checkbox" value={cat} id={`${cat}-id`} onChange={() => { handleActiveCategory(cat)} } />
                                <label className="category-labels" htmlFor={`${cat}-id`}>{cat}</label>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </aside>
    )
}