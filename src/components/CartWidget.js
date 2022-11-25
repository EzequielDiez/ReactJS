import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCartShopping} />

const CartWidget = () => {

    return(
        <li className="nav-item">
        <a className="nav-link" href="#"><FontAwesomeIcon icon={faCartShopping}/>5</a>
        </li>
    )
}

export default CartWidget