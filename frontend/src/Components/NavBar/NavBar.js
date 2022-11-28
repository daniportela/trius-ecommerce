import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.svg';
import CartWidget from './CartWidget/CartWidget';
import { useShopContext } from '../../shopContext';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const { handleCartMenuToggle, totalAmount } = useShopContext();

    return (
        <div className="header-navigation">
            <nav>
                <Link to="/"><img src={logo} className="logo" alt="Este es el logo del ecommerce" /></Link>
                {/* <button className="cart-icon" onClick={ handleCartMenuToggle }><FontAwesomeIcon icon={faCartShopping} title="Este es el ícono del carrito de compras" /></button> */}
                <div className="cart-icon" onClick={ handleCartMenuToggle }>
                    <FontAwesomeIcon icon={faCartShopping} title="Este es el ícono del carrito de compras" />
                    <span className={totalAmount < 1 ? "hidden" : "visible"}>{totalAmount}</span>
                </div>
            </nav>
            <CartWidget />
        </div>
    )
}