import React, { useEffect, useState } from 'react';
import { traerProductosPorId } from '../data/getData';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ id }) => {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    traerProductosPorId(id, setProducto);
  }, []);

  return (
    <section className="item-detail-container">
      {producto ? <ItemDetail item={producto} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;