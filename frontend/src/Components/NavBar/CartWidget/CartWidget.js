import { useCartContext } from '../../../shopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function CartWidget({ isToggled, handleToggle }) {
    const { cart, changeAmountInCart, removeFromCart, emptyCart } = useCartContext();

    return (
        <div className={`cart-panel ${isToggled ? 'open' : 'close'}`}>
            <div className="cart-content">
                <button onClick={ handleToggle } className="cart-menu-close">
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
                {cart.length === 0 
                    ? <>
                        <h4>Your cart is empty</h4>
                        <p>Go add some products</p>
                      </>
                    : <>
                        <h4>Your shopping cart</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th className="th-img">IMAGE</th>
                                    <th className="th-name">NAME</th>
                                    <th className="th-amount">AMOUNT</th>
                                    <th className="th-price">PRICE</th>
                                    <th className="th-trash" />
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(product => {
                                    return (
                                        <tr key={ product.title }>
                                            <td className="td-img"><img src={ product.image } alt={`This is the ${product.title} cart thumbnail`}></img></td>
                                            <td className="td-title">{ product.title }</td>
                                            <td className="td-amount">
                                                <button disabled={product.count === 1 ? true : false} onClick={() => changeAmountInCart(product, "-")} className="cart-amount-changer"><FontAwesomeIcon icon={faMinus} size="xs" /></button>
                                                <span>{ product.count }</span>
                                                <button onClick={() => changeAmountInCart(product, "+")} className="cart-amount-changer"><FontAwesomeIcon icon={faPlus} size="xs" /></button>
                                            </td>
                                            <td className="td-price">{ `$${product.price}` }</td>
                                            <td className="td-trash"><FontAwesomeIcon icon={faTrash} onClick={() => { removeFromCart(product) }} /></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td className="td-empty" onClick={ emptyCart }>EMPTY</td>
                                    <td className="td-total" colSpan="3">TOTAL: ${cart.reduce((acc, currentVal) => acc + (currentVal.price * currentVal.count), 0)}</td>
                                </tr>
                            </tfoot>
                        </table>
                      </>
                }
            </div>
        </div>
    )
}