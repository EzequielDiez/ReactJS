import React, {useState} from 'react';
import { useCartContext } from '../context/CartContext';
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import './styles/ItemDetail.css'

const ItemDetail = ({data}) => {
    const [goCart, setGoCart] = useState(false)
    const {addProduct} = useCartContext()

    const onAdd = (cantidad) => {
      setGoCart(true)
      addProduct(data, cantidad)
    };

  return(
    
    <div className="row mt-5">
      <div className="col-md-6">
        <img className='imgitemdetail' src={data.imagen} alt={data.nombre}/> 
      </div>

      <div className="col-md-6 itemdetail">
        <h2>{data.nombre}</h2>
        <p>{data.descripcion}</p>
        <ul className='listaitemdetail'>
          <li className='precioitemdetail'>${data.precio}</li>
          <li>{goCart? <Link to='/cart'>Finalizar compra</Link> : <ItemCount stock={data.stock} inicial={1} onAdd={onAdd} />}</li>
          <li>Stock:{data.stock}</li>
        </ul>
      </div>
    </div>


  

  
  )
}

export default ItemDetail

