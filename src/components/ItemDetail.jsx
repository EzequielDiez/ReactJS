import React from 'react';
import ItemCount from "./ItemCount";

const ItemDetail = ({data}) => {
  
    const onAdd = (cantidad) => {
      alert(`Has agregado ${cantidad} productos`);
    };

  return(
    <article>
      <img style={{height: 300, width: 300}} src={data.imagen} alt={data.nombre}/> 
      <div>
        <h2>{data.nombre}</h2>
        <p>{data.descripcion}</p>
        <ul>
          <li>${data.precio}</li>
          <li>Stock:{data.stock}</li>
          <ItemCount stock={data.stock} inicial={1} onAdd={onAdd} />
        </ul>
      </div>
    </article>
  )
}

export default ItemDetail