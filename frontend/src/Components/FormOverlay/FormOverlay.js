import './form-overlay.css';
import { useCartContext } from '../../shopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

export default function FormOverlay({ isToggled, handleIsToggled }) {
    const { handleFormOverlayToggle, formOverlayToggle } = useCartContext();

    return (
        <section className={`form-overlay ${isToggled && 'form-open'}`}>
            <div className="form-container">
                <button className="form-overlay-close" onClick={ handleIsToggled }>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
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