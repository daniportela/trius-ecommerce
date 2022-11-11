import './navbar.css';
import cartIcon from './cart-icon.svg';
import logo from './logo.svg';
import CartWidget from './CartWidget/CartWidget';

export default function NavBar() {
    const categorias = ['Pociones', 'Escudos', 'Armaduras'];

    return (
        <nav>
            <img src={logo} className="logo" alt="Este es el logo del ecommerce" />
            <ul>
                {categorias.map(link => {
                    return (
                        <li key={link}>{link}</li>
                    )
                })}
            </ul>
            <CartWidget cartIcon={cartIcon} />
        </nav>
    )
}