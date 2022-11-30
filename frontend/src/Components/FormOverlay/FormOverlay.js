import './form-overlay.css';
import { useShopContext } from '../../shopContext';

function handleCreateNewProduct(e) {
    e.preventDefault();
    fetch();
}

export default function FormOverlay() {
    const { handleFormOverlayToggle, formOverlayToggle } = useShopContext();

    return (
        <section className={`form-overlay ${formOverlayToggle && 'form-open'}`}>
            <div className="form-container">
                <button onClick={ handleFormOverlayToggle }>X</button>
                <h3>Create a new product</h3>
                <form method="POST" action="http://localhost:5000/create">
                    <label>Product name
                        <input type="text" name="title" />
                    </label>
                    <label>Product price
                        <input type="number" name="price" />
                    </label>
                    <label>Product description
                        <input type="text" name="description" />
                    </label>
                    <label>Product category(ies)
                        <input type="text" name="category" />
                    </label>
                    <label>Product image
                        <input type="text" name="image" />
                    </label>
                    <button>Create product</button>
                </form>
            </div>
        </section>
    )
}