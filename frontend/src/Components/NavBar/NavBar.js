import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPlus } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.svg';
import CartWidget from './CartWidget/CartWidget';
import { useCartContext } from '../../shopContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function NavBar({ handleIsToggled }) {
    const [cartMenuToggle, setCartMenuToggle] = useState(false);
    const { totalAmount } = useCartContext();

    function handleCartMenuToggle() {
        setCartMenuToggle(prevValue => !prevValue);
    }

    return (
        <header>
            <nav>
                <Link to="/"><img src={logo} className="logo" alt="This is the e-commerce logo" /></Link>
                <div className="header-buttons-container">
                    <div className="create-product" onClick={ handleIsToggled }>
                        <FontAwesomeIcon icon={faPlus} title="Click here to POST a new product to the database" />
                    </div>
                    <div className="cart-icon" onClick={ handleCartMenuToggle }>
                        <FontAwesomeIcon icon={faCartShopping} title="This is the cart icon" />
                        <span className={totalAmount < 1 ? "hidden" : "visible"}>{totalAmount}</span>
                    </div>
                </div>
            </nav>
            <CartWidget handleToggle={ handleCartMenuToggle } isToggled={ cartMenuToggle } />
        </header>
    )
}