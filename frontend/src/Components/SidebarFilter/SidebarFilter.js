import './sidebar-filter.css';
import { useShopContext } from '../../shopContext';

export default function SidebarFilter({ productCategories }) {
    const { handleCategoryChange } = useShopContext();

    return (
        <aside>
            <h3>Filter by category:</h3>
            <div>
                <ul>
                    {productCategories.map(cat => {
                        return (
                            <li key={cat}>
                                <input type="checkbox" value={cat} id={`${cat}-id`} onChange={() => { handleCategoryChange(cat)} } />
                                <label className="category-labels" htmlFor={`${cat}-id`}>{cat}</label>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </aside>
    )
}