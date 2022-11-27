import { useCartContext } from '../../../cartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function CartWidget() {
    const { handleCartMenuToggle, cartMenuToggle, cart, changeAmountInCart, removeFromCart } = useCartContext();

    return (
        <div className={`cart-panel ${cartMenuToggle ? 'open' : 'close'}`}>
            <div className="button-wrapper">
                <button onClick={ handleCartMenuToggle } className="cart-menu-close">
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
            <div className="cart-content">
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
                                    <th className="th-trash" />
                                    <th className="th-img">IMAGE</th>
                                    <th className="th-name">NAME</th>
                                    <th className="th-amount">AMOUNT</th>
                                    <th className="th-price">PRICE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(product => {
                                    return (
                                        <tr key={ product.title }>
                                            <td onClick={() => { removeFromCart(product) }}><FontAwesomeIcon icon={faTrash} /></td>
                                            <td className="td-img"><img src={ product.image } alt={`This is the ${product.title} cart thumbnail`}></img></td>
                                            <td className="td-title">{ product.title }</td>
                                            <td className="td-amount">
                                                <button disabled={product.count === 1 ? true : false} onClick={() => changeAmountInCart(product, "-")} className="cart-amount-changer"><FontAwesomeIcon icon={faMinus} size="xs" /></button>
                                                <span>{ product.count }</span>
                                                <button onClick={() => changeAmountInCart(product, "+")} className="cart-amount-changer"><FontAwesomeIcon icon={faPlus} size="xs" /></button>
                                            </td>
                                            <td className="td-price">{ product.price }</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                      </>
                }
            </div>
        </div>
    )
}