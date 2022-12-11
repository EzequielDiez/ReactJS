import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const CartWidget = () => {

    return(
        <li className="nav-item">
        <NavLink className="nav-link" to="/cart"><FontAwesomeIcon icon={faCartShopping}/>5</NavLink>
        </li>
    )
}

export default CartWidget