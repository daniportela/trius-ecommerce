import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import cartIcon from './cart-icon.svg';
import logo from './logo.svg';
import CartWidget from './CartWidget/CartWidget';
import { useCartContext } from '../../cartContext';

export default function NavBar() {
    const { handleCartMenuToggle } = useCartContext();

    return (
        <div className="header-navigation">
            <nav>
                <img src={logo} className="logo" alt="Este es el logo del ecommerce" />
                <button class="cart-icon" onClick={ handleCartMenuToggle }><FontAwesomeIcon icon={faCartShopping} title="Este es el ícono del carrito de compras" /></button>
                {/* <img src={cartIcon} className="cart-icon" alt="Este es el ícono del carrito de compras" onClick={ handleCartMenuToggle } /> */}
            </nav>
            <CartWidget />
        </div>
    )
}