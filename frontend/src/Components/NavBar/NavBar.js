import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPlus } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.svg';
import CartWidget from './CartWidget/CartWidget';
import { useShopContext } from '../../shopContext';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const { handleCartMenuToggle, totalAmount, handleFormOverlayToggle } = useShopContext();

    return (
        <header>
            <nav>
                <Link to="/"><img src={logo} className="logo" alt="Este es el logo del ecommerce" /></Link>
                <div className="header-buttons-container">
                    <div className="create-product" onClick={ handleFormOverlayToggle }>
                        <FontAwesomeIcon icon={faPlus} title="Click here to POST a new product to the database" />
                    </div>
                    <div className="cart-icon" onClick={ handleCartMenuToggle }>
                        <FontAwesomeIcon icon={faCartShopping} title="This is the cart icon" />
                        <span className={totalAmount < 1 ? "hidden" : "visible"}>{totalAmount}</span>
                    </div>
                </div>
            </nav>
            <CartWidget />
        </header>
    )
}