import './navbar.css';
import cartIcon from './cart-icon.svg';
import logo from './logo.svg';
import CartWidget from './CartWidget/CartWidget';
import { useCustomContext } from '../../cartContext';

export default function NavBar() {
    const { handleCartMenuToggle } = useCustomContext();

    return (
        <div className="header-navigation">
            <nav>
                <img src={logo} className="logo" alt="Este es el logo del ecommerce" />
                <img src={cartIcon} className="cart-icon" alt="Este es el ícono del carrito de compras" onClick={ handleCartMenuToggle } />
            </nav>
            <CartWidget />
        </div>
    )
}