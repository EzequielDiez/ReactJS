import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const onAdd = (cantidad) => {
    alert(`Has agregado ${cantidad} productos`);
  };

  console.log(item);
  return (
    <article className="product-detail">
      <img style={{height: 300, width: 300}} src={item.imagen} alt=""/>
      <div className="product-detail__info">
        <h2 className="name">{item.nombre}</h2>
        <p className="description">{item.descripcion}</p>
        <ul className="info-grid">
          <li>Price:</li>
          <li>${item.precio}</li>
        </ul>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      </div>
    </article>
  );
};

export default ItemDetail;