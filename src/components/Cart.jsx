import {React, useState } from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import './styles/Cart.css'
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const Cart = () => {
    const {cart, totalPrice} = useCartContext()

    const [customerFirstName, setCustomerFirstName] = useState("")
    const [customerLastName, setCustomerLastName] = useState("") 
    const [customerEmail, setCustomerEmail] = useState("")
    const [customerEmail2, setCustomerEmail2] = useState("")
    const [customerPhone, setCustomerPhone] = useState("")
    const [customerBirthdate, setCustomerBirthdate] = useState("")

    

    const order = {
        buyer: {
            firstName: customerFirstName,
            lastName: customerLastName,
            email: customerEmail,
            email2: customerEmail2,
            phone: customerPhone,
            birthdate: customerBirthdate,
        },
        items: cart.map(producto => ({id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: producto.cantidad })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
        .then(({id}) =>Swal.fire({
                        title: '¿Deséas realizar la compra?',
                        text: "Si continúas no podrás cancelar la compra",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#bba79e',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Confirmar',
                        cancelButtonText: 'Cancelar'
                    }).then((result) => {
                        if (result.isConfirmed) {
                        Swal.fire(
                            'Su compra ha sido realizada',
                            `N° Orden de compra: ${id}`,
                            'success'
                        )
                        setTimeout(() => {
                            window.location.href = '/'; //Redirección al Inicio despues de 3".
                        }, 3000);
                        }
                    }))
    }

    if (cart.length === 0) {
        return (
            <>
                <p className="carritovacio">No hay elementos en el carrito</p>
                <Link to='/' className="botonGoShop"><Button variant="secondary">Ir a la tienda</Button></Link>
            </>
        )
    }

    return(
        
        <div className="row">
            <div className="col-md-6">
                <h2>Datos personales</h2>
                <div className="row mx-auto p-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre" value={customerFirstName} onChange={(e) => setCustomerFirstName(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Apellido" aria-label="Apellido" value={customerLastName} onChange={(e) => setCustomerLastName(e.target.value)}/>
                    </div>
                </div>
                <div className="row mx-auto p-3">
                    <div className="col-md-6">
                        <input type="number" className="form-control" placeholder="N° Celular" aria-label="Celular" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <input type="date" className="form-control" placeholder="Fecha Nacimiento" aria-label="Fecha Nacimiento" value={customerBirthdate} onChange={(e) => setCustomerBirthdate(e.target.value)}/>
                    </div>
                </div>
                <div className="row mx-auto p-3">
                    <div className="col-md-12">
                        <input type="email" className="form-control" placeholder="Email" aria-label="Email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} />
                    </div>
                </div>
                <div className="row mx-auto p-3">
                    <div className="col-md-12">
                        <input type="email" className="form-control" placeholder="Repita su email" aria-label="Email" value={customerEmail2} onChange={(e) => setCustomerEmail2(e.target.value)}/>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <h2>Carrito</h2>
                {cart.map(product => <ItemCart key={product.id} product={product}/>)}
                <div className="preciototal">
                    <p> Total: $ {totalPrice()}</p>
                    <button className="btn btn-secondary" onClick={handleClick}>Comprar</button>
                </div>
            </div>
        </div>
    )

}

export default Cart