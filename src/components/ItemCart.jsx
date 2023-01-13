import React from "react";
import { useCartContext } from "../context/CartContext";
import './styles/ItemCart.css'

const ItemCart = ({ product }) => {

    const {removeProduct} = useCartContext()

    return(
        <div className='itemCart'>
            <img src={product.imagen} alt={product.nombre} />
            <div>
                <p>Nombre: {product.nombre}</p>
                <p>Cantidad: {product.cantidad}</p>
                <p>Precio por unidad: $ {product.precio}</p>
                <p>Subtotal: $ {product.cantidad * product.precio}</p>
                <button className="btn btn-secondary" onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart