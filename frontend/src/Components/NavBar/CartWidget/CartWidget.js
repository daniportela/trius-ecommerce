export default function CartWidget({ cartIcon }) {
    return (
        <>
            <img src={cartIcon} className="cart-icon" alt="Este es el ícono del carrito de compras" />
            <div className="cart-panel">
                <h4>Tu carrito de compras</h4>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>
            </div>
        </>
    )
}