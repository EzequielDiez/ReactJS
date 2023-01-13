import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

export const CartWidget = () => {
const {totalProducts} = useCartContext()

    return(
        <li className="nav-item">
            <NavLink className="nav-link" to="/cart"><FontAwesomeIcon icon={faCartShopping}/>
                <span>{totalProducts() || ''}</span>
            </NavLink> 
        </li>
    )
}

export default CartWidget