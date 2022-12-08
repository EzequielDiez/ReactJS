import React, { useEffect, useState } from 'react';
import Item from './Item';
import { traerProductosBaseDatos } from '../data/getData';


const ItemList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    traerProductosBaseDatos(setProductos);
  }, []);

  return (
    <div className="productos-lista-contenedor">
      {productos.length ? (
        <>
          {productos.map((producto) => {
            return (
              <div key={producto.id}>
                <Item
                  nombre={producto.nombre}
                  imagen={producto.imagen}
                  descripcion={producto.descripcion}
                  precio={producto.precio}
                  stock={producto.stock}
                  id={producto.id}
                />
              </div>
            );
          })}
        </>
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};

export default ItemList;