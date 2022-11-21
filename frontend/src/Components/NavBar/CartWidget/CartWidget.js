import { useCustomContext } from '../../../cartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function CartWidget() {
    const { handleCartMenuToggle, cartMenuToggle, cart } = useCustomContext();

    return (
        <div className={`cart-panel ${cartMenuToggle ? 'open' : 'close'}`}>
            <button onClick={ handleCartMenuToggle } className="cart-menu-close">
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <div className="cart-content">
                {cart.length === 0 
                    ? <>
                        <h4>Your cart is empty</h4>
                        <p>Go add some products</p>
                      </>
                    : <>
                        <h4>Your shopping cart</h4>
                        <table>
                            <tr>
                                <th className="th-img">IMAGE</th>
                                <th className="th-name">NAME</th>
                                <th className="th-amount">AMOUNT</th>
                                <th className="th-price">PRICE</th>
                            </tr>
                            {cart.map(({ title, price, image }) => {
                                return (
                                    <tr key={title}>
                                        <td className="td-img"><img src={ image } alt={`This is the ${title} cart thumbnail`}></img></td>
                                        <td className="td-title">{ title }</td>
                                        <td className="td-amount">0</td>
                                        <td className="td-price">{ price }</td>
                                    </tr>
                                )
                            })}
                        </table>
                      </>
                }
            </div>
        </div>
    )
}