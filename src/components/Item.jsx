import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Item.css'
import { Button } from 'react-bootstrap';

const Item = ({info}) => {
  
  return(
    <div className="col">
      <div className="card h-100">
        <img src={info.imagen} className="card-img-top" alt={info.nombre}/>
        <div className="card-body">
          <h5 className="card-title">{info.nombre}</h5>
          <p className="card-text">{info.descripcion}</p>
          <p className="card-text">$ {info.precio}</p>
          <Link to={`/detalle/${info.id}`}><Button variant='secondary'>Ver detalle</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default Item;